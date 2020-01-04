/*
** Mixolydian - bundle.js
**
** bundle.js is the bundling command for the Mixolydian JS Code bundler....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get Mixolydian class....
const Mixolydian = require('../lib/Mixolydian')


// Take in options, create a Mixo instance, and start it up....
module.exports =(opts)=> {
// Fire up a new Mixo instance, with given parameters....
  const mixolydian = new Mixolydian(opts.entryFile, opts.outputFile, {
    babel: true,
    valence: opts.valence,
    watch: opts.watch,
    watchOpts: {
      recursive: opts.recurse,
      serve: opts.serve || process.env.PWD,
      port: opts.port || 8181
    },
    reloading: opts.reloading,
    _utils: {
      watchTarget: opts.watchTarget || `${process.env.PWD}/index.js`,
      entryFileDir: opts.entryFileDir,
      outputFile: opts.outputFile
    },
    strict: false,
    jc: opts.jc
  })
// Start the bundler....
  mixolydian.start()
}















// This function, with the help of 'minimist', parses the given command-line
// arguments, and converts them to options for the Mixolydian bundler.....
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
/
}
