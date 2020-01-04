/*
** Mixolydian - watch.js
**
** watch.js is the bundling command for the Mixolydian JS Code bundler, that
** also watches the entry file, and perhaps beyond, for changes and
** re-bundles automatically ....
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
