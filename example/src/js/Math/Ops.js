/*
** Math.js
**
** Math.js is an example entry file for testing Mixolydian.js
**
** Eric James Foster, Fostware LLC, MIT License.
***/


import _add from './funcs/_add'
import _subtract from './funcs/_subtract'
import _divide from './funcs/_divide'
import _multiply from './funcs/_multiply'

import {log} from './utils/loggers'

// var _add = require('./src/js/funcs/_add')
// var _subtract = require('./src/js/funcs/_subtract')
// var _divide = require('./src/js/funcs/_divide')
// var _multiply = require('./src/js/funcs/_multiply')
//
// var log = require('./src/js/utils/loggers').log



class Ops {
  static add(param1, param2) {
    return _add(param1, param2)
  }

  static subtract(param1, param2) {
    return _subtract(param1, param2)
  }

  static divide(param1, param2) {
    return _divide(param1, param2)
  }

  static multiply(param1, param2) {
    return _multiply(param1, param2)
  }
}

export default Ops
