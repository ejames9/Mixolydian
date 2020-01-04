/*
** Mixolydian - index.js
**
** index.js is the entry/start point file for the Mixolydian JS Code bundler ....
** From here, we decifer user input and route the appropriate response....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get filesystem lib....
const fs = require('fs')
// Get command line argument parsing lib...
const minimist = require('minimist')
// Get logging convenience....
const { log, dir } = require('./lib/utils/loggers')
// Get some terminal aesthetics.....
const chalk = require('chalk')



module.exports =()=> {
// Function converts CLI arguments into watch options for Mixolydian.....
  function watchOptions(args) {
    let watch = true,
    recurse = false,
    entryFile = null,
    entryFileDir,
    watchTarget = null,
    outputFile = null,
    jsFileRE = /[\w_$-]+\.(js|jsx|ts)/,
    bundleRE = /(Bundle|bundle)/
    // log('FLAGS', 'yellow');dir(args)

// Go through arguments and set options accordingly.....
// If we have a -d, -a or -r flag....
    if (args.d || args.a || args.r) {

// If we have a 'd....'
/****************************/

      if (args.d) {
// If the entry file is given to the -d flag....
        if (jsFileRE.test(args.d)) {
// Store entry file path....
          entryFile = args.d
// Extract entry file directory.....
          entryFileDir = entryFile.replace(jsFileRE, '')
// In this case, the watch target is the entry file dir.....
          watchTarget = entryFileDir
// If the -d flag has no value....
        } else if (typeof args.d !== 'boolean') {
// We can get entry file dir from 'PWD'....
          entryFileDir = process.env.PWD

          watchTarget = args.d
// Otherwise, we are supplied no entry file, and are using the default....
        } else {
// We can get entry file dir from 'PWD'....
          entryFileDir = process.env.PWD
// We watch the dir Mixolydian is initiated in.....
          watchTarget = process.env.PWD
        }

// If the -r flag is added to the -d flag, making the watch recursive.....
/***************************************************************************/

        if (args.r) {
// If the -r is given the entry file.....
          if (jsFileRE.test(args.r)) {
// Store entry file path....
            entryFile = args.r
// Extract entry file directory.....
            entryFileDir = entryFile.replace(jsFileRE, '')
// In this case, the watch target is the entry file dir.....
            watchTarget = entryFileDir
          } else if (typeof args.d !== 'boolean') {
// We can get entry file dir from 'PWD'....
            entryFileDir = process.env.PWD

            watchTarget = args.d
// Otherwise, we are supplied no entry file, and are using the default....
          } else {
// We can get entry file dir from 'PWD'....
            entryFileDir = process.env.PWD
// We watch the dir Mixolydian is initiated in.....
            watchTarget = process.env.PWD
          }

// Set recursion option....
          recurse = true
        }
// If we have an -a flag......
/************************************/

      } else if (args.a) {
// if the entry file is given to the -a....
        if (jsFileRE.test(args.a)) {
// Store entry file path....
          entryFile = args.a
// Extract entry file directory.....
          entryFileDir = entryFile.replace(jsFileRE, '')
        } else {
// If we don't have an entry file.... We can take a dir from the process dir.....
          entryFileDir = process.env.PWD
        }
// The watch 'all' target is 'PWD'
        watchTarget = process.env.PWD
        // log('WATCH TARGET', 'yellow');log(watchTarget)
        recurse = true
// If we have an -r......
      }
// Else we have no -d, -a or -r flag....
// We can get the entry file from the first 'cmd' in the array, if available....
//NOTE: If the first cmd in the cmd array tests for the bundleRE, we will
// make it the output file. This allows us to designate the output file, even
// if we only enter 1 filename/path into the Mixolydian command.......
    } else {

// If we have a main cmd.....
      if (args._.length) {
// If the command tests for the bundleRE.......
        if (bundleRE.test(args._[0])) {
// We set the output.....
          outputFile = args._[0]
// Shift out the entry file to hone in on output file.....
          args._.shift()

// Set the watch target to default...............

// If no for bundleRE........
        } else {
/// It will be the entry file....
          entryFile = args._[0]
// Shift out the entry file to hone in on output file.....
          args._.shift()
// Set the watch target to default..........
          watchTarget = entryFile

// Extract the directory.....
          entryFileDir = entryFile.replace(jsFileRE, '')
        }
// If we have no entry file.....
      } else {
// Use the default....
        entryFile = `${process.env.PWD}/index.js`
/// Set the watch target....
        watchTarget = entryFile
      }
      recurse = false
    }

// If we still have a cmd left, it will always be the output.....
    if (args._.length) {
// Set the output.....
      outputFile = args._[0]
// If no cmds are left, we check the '--output' and '-o' flags.....
    } else if (args.output || args.o) {
// If we have one of the above, set outputFile to appropriate value.....
      outputFile = args.output? args.output : args.o
// Else, the output will be the default......
    }
    // log('WATCH TARGET', 'cyan');log(watchTarget)
    // log('ENTRY FILE', 'yellow');log(entryFile)

// Return options object.....
    return {
      watch: watch,
      recurse: recurse,
      entryFile: entryFile,
      watchTarget: watchTarget,
      outputFile: outputFile
    }
  }


// Remaining general options converted from CLI flags....
  function generalOptions(args, entry) {
    let jc = false,
    reloading = false,
    valence = false,
    port = false,
    serve = false

// Set hmr option....
// Determine if hmr flag is set....
    if (args.R || args.hotmod)
// Set the variable for the options obj....
      reloading = true

// Set jc option....
/// Determine if jc flag is set....
    if (args.j && args.c || args.lord)
// Set the variable for the options obj....
      jc = true

// Set the 'valence' option
// Get a the file string from the entry file path....
    // log('ENTRY', 'magenta');log(entry)
    let entryCode = fs.readFileSync(entry)
// Check the entry file for Valence.js code.......
    if (
      /valencejs/.test(entryCode) &&
      /Valence/.test(entryCode)
// Set valence.....
    ) valence = true

// If we have either the --port or -p flags...
    if (args.port || args.p)
// Set the port option...
      port = args.port ? args.port : args.p


/// If we have either the --serve or -s flags...
    if (args.serve || args.s)
// Set the serve option...
      serve = args.serve ? args.serve : args.s


// Return all needed values in object....
    return {
      jc: jc,
      reloading: reloading,
      valence: valence,
      port: port,
      serve: serve
    }
  }


  /*
  ** **********************************
  ** <<<<< Run the Application >>>>> **
  ** **********************************
  */

/// parse arguments...
  let args = minimist(process.argv.slice(2)),
  cmd,
  watchOpts

// If no arguments are given, end program and ask for an entry point...
  if (args.length <= 0) {
    log('\nPlease provide an entry point file.\n', 'cyan')
//
    return process.exit(1)
  }

//
  cmd = args._[0] || 'help'

// Deal with 'version' cmd....
  if (args.version || args.v)  {
    cmd = 'version'
  }

/// Deal with 'help' cmd....
  if (args.help || args.h && !args.m)  {
    cmd = 'help'
  }

// A switch for routing to the appropriate command. It also allows for dynamic importing
// (code-splitting) of the respective commands for improved start time and easier
// testing....
  switch (cmd) {
// In case of 'version' cmd...
    case 'version':
// Call up 'version' code....
      require('./cmds/version')(args)
      break
// In case of 'help' cmd...
    case 'help':
// Call up 'help' code....
      require('./cmds/help')(args)
      break
// In case of 'bundle' cmd...
    case (cmd === 'bundle' ? 'bundle' : cmd === 'b' && 'b'):
// Shift out the 'cmd' from _ array, we don't need it.....
      args._.shift()
// Run args obj, though function to retrieve options for Mixolydian.....
      watchOpts = watchOptions(args)

       opts = {
         ...watchOpts,
         ...generalOptions(args, watchOpts.entryFile)
       }

// Call up 'bundle' code with options....
      require('./cmds/bundle')(opts)
      break
// In case of 'watch' cmd...
    case (cmd === 'watch' ? 'watch' : cmd === 'w' && 'w'):
// Shift out the 'cmd' from _ array, we don't need it.....
      args._.shift()
// Run args obj, though function to retrieve options for Mixolydian.....
      watchOpts = watchOptions(args)

       opts = {
         ...watchOpts,
         ...generalOptions(args, watchOpts.entryFile)
       }
// Call up 'watch' code....
      require('./cmds/watch')(opts)
      break
// In case of no matchd...
    default:
// Log out error message...
      log(chalk.hex('#94021e').bold(`${cmd} is not a valid command!`))
      break
  }
}
