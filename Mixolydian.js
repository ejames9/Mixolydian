'use strict'
/*
** Mixolydian.js
**
** Mixolydian.js is the entry file for the Node.js mixolydian front-end
** javascript module bundler...
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Core dependencies....
const minimist = require('minimist')
const moduleDependencies = require('module-deps')
const browserPack = require('browser-pack')
const through = require('through2')
const es = require('event-stream').wait
const JSONStream = require('JSONStream')
const jsonTransform = require('./lib/JSONTransform')
// Text aesthetics.....
const ora = require('ora')
const chalk = require('chalk')
//
const babel = require('@babel/core')
// express - for serving our app
var express = require('express')
var app = express()
// Communications modules.....
var http = require('http').Server(app)
var io = require('socket.io')(http)

// System modules...
const fs = require('fs')
const path = require('path')
// Local utilities....
const log = require('./lib/utils/loggers').log
const dir = require('./lib/utils/loggers').dir
const time = require('./lib/utils/loggers').time
const timeEnd = require('./lib/utils/loggers').timeEnd
const piper = require('./lib/utils/utils').piper

// Environmental constants.....
const DEV_MODE = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT = 8181



// The class for out bundler....
class Mixolydian {
// Ctor ..
  constructor(entry, output='dist/bundle.js', options={}) {
// // Store the entry file...
    this.entryFile = entry
// Store the output file...
    this.outputFile = output

// Prelude file path....
    this.preludePath = `${__dirname}/lib/hmr/mixolydian-prelude.js`
// Prelude file....
    this.prelude = fs.readFileSync(this.preludePath, 'utf8')

// Project root....
    this.projectRoot = process.env.PWD
    this.entryFileDir = options._utils.entryFileDir


/*
** <<<< OPTIONS >>>>
*/
    this.watchOpts = {
// watch mode....
      recursive: false,
      port: 8181,
// Add file types to watch, here.....
      fileExtensions: [
        '.js',
        '.jsx',
        '.ts',
        '.cs',
        '.css',
        '.html',
        '.hbs'
      ],
// Add files/ strings, to ignore in watched file name here.....
      fileExclusions: [
        this.outputFile,
        'node_modules',
        'package.json',
        'package-lock.json',
        '.npmignore',
        '.git',
        '.gitignore',
        '.imdone',
        '.imdoneignore',
        'gulpfile.js',
        '.babelrc',
        'babel.config.js',
        '.travis.yml',
        'Mixolydian.js',
        'lib'
      ],
      ...options.watchOpts
    }

// Store options obj...
    this.options = {
      babel: false,
      watch: false,
      hmr: false,
      valence: false,
      mode: DEV_MODE,
      strict: true,
      jc: false,
      ...options,
      watchOpts: this.watchOpts
    }
    // log(`${chalk.yellow.bold('OPTIONS')}`);dir(this.options)

// Watched filename extensions.....
    this.fileExtensions = this.options.watchOpts.fileExtensions

// Watched filename exclusions......
    this.fileExclusions = this.options.watchOpts.fileExclusions

// Additional members....
    this.moduleDepsJSON = null
    this.ms = 0
    this.firstBundle = true

// Instantiate the spinner....
    this.spinner = ora({
      text: `${chalk.hex('#4073ff').bold('Wrapping the Burrito....')}`,
      spinner: 'dots3'
    })
  }


// Public API method for starting up the bundler....
  start() {
    let start

// Print a new line...
    process.stdout.write('\n')
// Start the spinner....
    this.spinner.start()
    this.spinner.color = 'yellow'

// Get start time.....
    start = Date.now()

    try {
// Call the function to create the bundle ....
      this._bundleFiles(
        this.entryFile,
// Stop the spinner with success....
        ()=> this.spinner.succeed('🗞')
      )
      //📦
// Spinner fail....
    } catch (e) {
      this.spinner.fail(e)
    }
// Stop the timer and subtract start time to get elapsed bundle time....
    this.ms = Date.now() - start

// If the watch option is set....
    if (this.options.watch && this.options.mode !== 'production') {
      // log('PWD', ['yellow', 'bold']);log(process.env.PWD)
      this._watch(this.entryFileDir, this.options.watchOpts.recursive)
    }
  }


// Class method for watching a given directory/ directories.....
  _watch(dir, recurse) {
    let start

// Configure http and socket communications....
    this._configureHTTP()

// Start the server...
    this._igniteServer(
      process.env.PORT || this.options.watch.port || app.get('port')
    )

// watch the root directory for file changes....
    fs.watch(dir, {recursive: recurse}, (event, fileName)=> {
      // log('FILENAME', ['red', 'bold']);log(fileName);log(fileName.includes(this.outputFile));

// If the changed file is not the output bundle....
      if (this._validFileName(fileName)) {
// Get start time.....
        start = Date.now()

// Roll up a new bundle....
        this._bundleFiles(this.entryFile, ()=> {
// Send message via websocket to browser...
          io.emit('file-change', { id: path.join(__dirname, fileName) })
        })
// Stop the timer and subtract start time to get elapsed bundle time....
        this.ms = Date.now() - start
// Stop the spinner with success....
        this.spinner.succeed('🗞')

      }
    })
  }


// Private method for validating a watched, changed file's filename. Some files may cause unwanted
// Side effects, such as infinite loops or unwanted re-bundles.....
  _validFileName(file) {
// Watch file name inclusions and exclusions......
    let ins = this.fileExtensions,
    nots = this.fileExclusions

    function includesOne(file) {
// Ensure that the filename includes at least one of the above file extensions (`ins`) in
// the file name....
      let res = ins.reduce((accumulator, val)=> {
        return accumulator || file.includes(val)
      }, false)

// Return the result of the reduce function.....
      return res
    }

    function excludesAll(file) {
// Ensure that none of the 'nots' strings are included in the changed file's name....
      let res = nots.reduce((accumulator, val)=> {
        return accumulator && !file.includes(val)
      }, true)

/// Return the result of the reduce function.....
      return res
    }

// return result of both funcs....
    return includesOne(file) && excludesAll(file)
  }


// Private method used by the start method for configuring http communication.....
 _configureHTTP() {
   let source

// Configuring express to serve from example directory...
   app.use('/', express.static('./example'))
// Setting the port...
   app.set('port', 8181)

// HMR endpoint...
   app.get('/hot-module', (req, res)=> {
// Get module id....
     let moduleId = req.query.id
// wrap the module code around JSONP callback function
     let hotModuleScript = `hotModule({ "${moduleId}": [function(require, module, exports) {`

// Isolate the updated module....
      // console.log('MODULEDEPSJSON');
      // console.log(this.moduleDepsJSON);
     let hotMod = this.moduleDepsJSON.filter(dep=> dep.id === moduleId )[0]
     // console.log('HOTMOD');console.log(hotMod);

// if User is using valence UI library, remove 'use strict'...
    if (this.options.valence || this.options.strict) {
// Remove code....
      source = this._loosyGoosy(hotMod.source)
    }

// Add the updated module's source to the hotModuleScript text....
     hotModuleScript += source
     // log('hotMod.source', ['yellow', 'bold']);log(source, ['yellow', 'bold'])
// Finish up the script....
     hotModuleScript += `},`
// Append dependencies....
     hotModuleScript += JSON.stringify(hotMod.deps)
// Add finishing touches, brackets and parens....
     hotModuleScript += `]});`

// Send the script...
     res.send(hotModuleScript)
   })
 }


// Private method for starting the server...
  _igniteServer(port) {
// Fire up the server...
     http.listen(port)
  }


// This private method is a module-deps transform stream........
  _processBabel(file) {
// Return a through Transform stream, in which we transform source code with babel......
    return through( function(chunk, enc, done) {
      let {code} = babel.transformSync(chunk.toString(), {
        babelrc: true,
        filename: file
      })

// Push result to stream....
      this.push(code)

// Call callback.....
      done()
    })
  }



// A private, utility method for causing the stream to wait, and congregate all chunks for logging or manipulation.....
  _esWait() {
  // Create through stream.....
    return es( function(err, data) {
      if (err) {
        log(err, 'red')
      }
    })
  }


// Private method for prepending and appending code to the bundle string.....
  _addHMRClientCode(data) {
// If we have it, grab supporting code...
    let prependage = fs.readFileSync('./lib/hmr/clientSocket.js'),
    appendage = fs.readFileSync('./lib/hmr/hmr.js')

// Prepend clientSocket.js to bundle.... Append hmr runtime to bundle
    return `${prependage}${data}${appendage}`
  }


// Remove 'use strict from bundle file.....
  _loosyGoosy(string) {
    // let useStrictRE = /["']use strict["']\;?/g
    return string.split('use strict').join('')
  }


// Let's keep the bundle creation in a separate function
// which will come in handy when we invoke this whenever
// a file changes
  _bundleFiles(file, callback) {
// Instantiate the jsonTransform....
    const JSONTransform = new jsonTransform()

// Set up options with a transforms array....
    let transforms = [],
    opts = {
      transform: transforms
    }

    if (this.options.babel) {
      opts.transform.push(this._processBabel)
    }

// invoke module-deps by passing in the entry point file
    let mDeps = moduleDependencies(opts),
    parser = JSONStream.parse(['file'])

    mDeps
      .pipe(JSONStream.stringify())
      .pipe(this._esWait())
      .on('data', (data)=> {
// Store json data into memory....
        this.moduleDepsJSON = JSON.parse(data)
      })
      .pipe(JSONTransform)
      .pipe(browserPack( {
        prelude: this.prelude,
        preludePath: this.preludePath
      } ))
      .pipe(this._esWait())
      .on('data', (data)=> {
        let bundle
        // log('DATA', 'yellow');  log(data)
// Tack on/ remove any additional needed code....
        if (this.options.strict) {
          if (this.options.hmr) {
            bundle = this._addHMRClientCode(data)
          } else {
            bundle = data
          }
        } else {
          if (this.options.hmr) {
            bundle = this._loosyGoosy(
              this._addHMRClientCode(data)
            )
          } else {
            bundle = this._loosyGoosy(data)
          }
        }
        // log('BUNDLE', 'yellow');log(bundle)
// Write the data to bundle string file....
        fs.writeFile(this.outputFile, bundle, (err)=> {
          if (err) {
            log(err, ['red', 'bold'])
            return
          }

// Call the callBack....
          if (typeof callback === 'function') {
// Call the callback....
            callback()
// Bundle success message.....
            log(
              `🎶 ${chalk.hex('#161616').bgWhite.bold(` Mixolydian `)}${chalk.hex('#4073ff').bold(' bundle written in: ')}${chalk.hex('#fccd1b').bold(`${this.ms}ms.`)} 🎶\n`
            )

// If This is the first bundle from the initial command....
            if (this.firstBundle) {
/// If the watch option is set....
              if (this.options.watch && this.options.mode !== 'production') {
/// log out dev server started message....
                log(`${chalk.white.bold(`Development Server started on port ${app.get('port')}. Press Ctrl-C to terminate.`)}
                  ${this.options.jc? chalk.hex('#fccd1b').bold('\n⛪️ Jesus is King!! ⛪️') : ''}
                `)
                process.stdout.write(`\n`)
              }
            }

// Check for jc option, if present, praise Jesus Christ!
            if (this.options.jc && !this.firstBundle) {
              log(`${chalk.hex('#fccd1b').bold(`🙏 Praise the Lord! 🙏`)}`)
            }
            if (this.firstBundle) {
              this.firstBundle = false
            }
          }
        })
      })
// End the stream....
    mDeps.end({
      file: path.join(__dirname, file)
    })
  }

/// Run post bundling plug-ins....
  _postProcessing() {
    // None yet...
  }
}


function flagsToOptions(args) {
  let watch = false,
  recurse = false,
  hmr = false,
  jc = false,
  valence = false,
  entryFile,
  entryFileDir,
  outputFile

// Set watch and recursion options, as well as harvesting entry file and output file data.....
/// If we have the watch flag.....
  if (Reflect.has(args, 'w')) {
    let jsFileRE = /[\w_$-]+\.(js|jsx|ts)/

// Set watch to true for options...
    watch = true
// If we are given the entry file to watch
    if (jsFileRE.test(args.w) || jsFileRE.test(args.r)) {
// Set the output file accordingly....
      outputFile = args._[0]
// If we have the root flag.....
      if (Reflect.has(args, 'r')) {
/// the entry dir is at project root...
        entryFileDir = process.env.PWD

        if (typeof args.r[0] === 'string') {
/// Store the entry file, and extract the directory for the watcher....
          entryFile = args.r[0]
//  Set recursion flag...
          recurse = true
        }
      } else {
// Otherwise, it is in the dir of the entry file....
        entryFileDir = entryFile.replace(jsFileRE, '')
/// Store the entry file, and extract the directory for the watcher....
        entryFile = args.w[0]
      }
// If the watch flag is given a dir, store it.....
    } else {
      entryFileDir = args.w[0]
      outputFile = args._[1]
    }
// If we have no watch flag... the first arg is the entry file.....
  } else {
    entryFile = args._[0]
    outputFile = args._[1]
  }

// Set hmr option....
// Determine if hmr flag is set....
  if (Reflect.has(args, 'h') && Reflect.has(args, 'm') && Reflect.has(args, 'r'))
// Set the variable for the options obj....
    hmr = true

// Set jc option....
/// Determine if jc flag is set....
  if (Reflect.has(args, 'j') && Reflect.has(args, 'c'))
// Set the variable for the options obj....
    jc = true

// Set the 'valence' option
// Get a the file string from the entry file path....
  let entryCode = fs.readFileSync(entryFile)

  if (/valencejs/.test(entryCode) &&
      /Valence/.test(entryCode)
  ) {
    valence = true
  }

// Return all needed values in object....
  return {
    watch: watch,
    hmr: hmr,
    recurse: recurse,
    entryFile: entryFile,
    entryFileDir: entryFileDir,
    outputFile: outputFile,
    jc: jc,
    valence: valence
  }
}


// Determine whether the script was called from the CL, if so, run....
if (require.main === module) {
/// parse arguments...
  let args = minimist(process.argv.slice(2)),
// Run args obj, though function to retrieve options for Mixolydian.....
  opts = flagsToOptions(args)

// If no arguments are given, end program and ask for an entry point...
  if (args.length <= 0) {
    log('\nPlease provide an entry point file.\n', 'cyan')
//
    return process.exit(1)
  } else {
// Fire up a new Mixo instance, with given parameters....
    const mixolydian = new Mixolydian(opts.entryFile, opts.outputFile, {
      babel: true,
      valence: opts.valence,
      watch: opts.watch,
      watchOpts: {
        recursive: opts.recurse
      },
      hmr: opts.hmr,
      _utils: {
        entryFileDir: opts.entryFileDir,
        outputFile: opts.outputFile
      },
      strict: false,
      jc: opts.jc
    })
// Start the bundler....
    mixolydian.start()
  }
}
