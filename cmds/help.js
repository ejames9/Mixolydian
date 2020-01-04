/*
** Mixolydian - help.js
**
** help.js is a file executes a request for help concerning a command
** or perhaps more generally, and displays the corresponding data.....
**
** Eric James Foster, Fostware LLC, MIT License.
***/



// Get loggers...
const { log } = require('../lib/utils/loggers')


const menus = {
  main: `
    mixolydian [command] <options>

    bundle..................bundle the given entry file
    watch...................bundle file, watch it for changes, re-bundle
    watchdir................bundle given file, watch all files in directory
    watchall...............*bundle file, watch all files beyond project root

    *Note - When Hot Module Reloading (HMR) is in use, if an unpreprocessed
    .css file-change is detected, dynamic code-patching will default to
    live-reloading, so it may be useful to watch style directories as well
    as JavaScript. Files to ignore can be entered in the mixo.config.js file.
    Use the [config] command to see an example config file.
  `,
  bundle: `
    mixolydian bundle || b  *'entry-file' <options>

    --lord, -jc...............enter this option for Christian inspiration.
    --output, -o............**designates the output file/directory.

    Notes: *If no entry file is specified, Mixolydian will look for an index.js
    file in the directory it was executed in. If none is found, an error will
    be thrown. Also, quotes are not needed when specifying an entry file.
    **The --output and -o flags may be omitted entirely, and replaced with a
    file-name and/or path. Mixolydian will know what to do. Defaults to
    'dist/bundle.js'.
  `,
  watch: `
    mixolydian watch || w <watch-options> *'entry-file' <options>

    ex.: $ mixolydian wr ./index.js -o ./dist/bundle.js -hmr

     no flag.................watch entry file only.
    --dir, -d................watch all files in given directory, or directory of
                               entry file, or PWD if none given...
    --all, -a................watch all files and all subdirectory files from
                               project root...
    --recurse, -r............add recursion flag to a --dir flag to make it
                               recursive...
    --output, -o...........**designates the output file/directory
    --hotmod, -hmr...........enables hot module reloading (hmr)
    --lord, -jc..............enter this option for Christian inspiration

    Notes: *If no entry file is specified, Mixolydian will look for an index.js
    file in the directory it was executed in. If none is found, an error will
    be thrown. Also, quotes are not needed when specifying an entry file.
    **The --output and -o flags may be omitted entirely, and replaced with a
    file-name and/or path. Mixolydian will know what to do. Defaults to
    'dist/bundle.js'.

    **ex.: mixolydian wr ./index.js ./dist/bundle.js -hmr
  `
}


// If the user enters 'mixolydian help bundle' or 'mixolydian bundle -h', the
// bundle menu above, should appear. Due to the absence of a cmd other than 'help',
// if the user enters 'mixolydian -h' or simply, 'mixolydian', the main menu will
// appear.........
module.exports =(args)=> {
  const subCMD = args._[0] === 'help'?
    args._[1]
  :
    args._[0]

// Log the appropriate menu....
  log(menus[subCMD] || menus.main)
}
