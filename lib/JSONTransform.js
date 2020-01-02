/*
** JSONTransform.js
**
** JSONTransform.js is a Transform stream that works on JSON.....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

const { Transform } = require('stream')
const log = require('./utils/loggers').log
const dir = require('./utils/loggers').dir




 class JSONTransform extends Transform {
// Ctor .....
  constructor(options) {
    super(options)

    this.jsonFileRE = /\.json/
    // this.useStrictRE = /\'use strict\'/
  }


// First transform........
// Wrap JSON modules in parenthesis......
  hugJSON(string) {
// Parse data....
    let modules = JSON.parse(string)
// Go through modules...... If we find a module with a .json ext.....
    for (const module of modules) {
      if (this.jsonFileRE.test(module.file)) {
// Wrap the source code (json) with parens.....
        module.source = `(${module.source})`
      }
    }
// Return altered json.....
    return modules
  }


// The transform method....
  _transform(data, encoding, callback) {
    // log('DATA', ['magenta', 'bold']);log(data)
// First transform, wrap .json module source in parens.....
    let modules = this.hugJSON(data)

// Return json to string...... Push to stream....
    this.push(
      JSON.stringify(modules)
    )
// Call callback.....
    callback()
  }
}


module.exports = JSONTransform
