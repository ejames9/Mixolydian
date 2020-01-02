(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_add.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _add;

/*
** _add.js
**
** _add.js is a function from adding 2 numbers together....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _add(param1, param2) {
  return param1 + param2;
}"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _add;

/*
** _add.js
**
** _add.js is a function from adding 2 numbers together....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _add(param1, param2) {
  return param1 + param2;
}
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_subtract.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _subtract;

/*
** _subtract.js
**
** _subtract.js is a function for subtracting 1 number from anotherr....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _subtract(param1, param2) {
  return param1 - param2;
}"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _subtract;

/*
** _subtract.js
**
** _subtract.js is a function for subtracting 1 number from anotherr....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _subtract(param1, param2) {
  return param1 - param2;
}
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_divide.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _divide;

/*
** _divide.js
**
** _divide.js is a function for dividing 1 number into another....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _divide(param1, param2) {
  return param1 / param2;
}"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _divide;

/*
** _divide.js
**
** _divide.js is a function for dividing 1 number into another....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _divide(param1, param2) {
  return param1 / param2;
}
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_multiply.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _multiply;

/*
** _multiply.js
**
** _multiply.js is a function for multiplying 2 numbers....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _multiply(param1, param2) {
  return param1 * param2;
}"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _multiply;

/*
** _multiply.js
**
** _multiply.js is a function for multiplying 2 numbers....
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function _multiply(param1, param2) {
  return param1 * param2;
}
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/clivi/index.js":[function(require,module,exports){
"use strict";

var names = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
var namesBright = names.map(function(name) { return name + 'Bright'; });
var namesStyle = ['bold', 'dim', 'underline', 'blink', null, 'invert', 'hidden'];

var RESET = '\x1b[0m';

var Colors = {
	fg: {},
	bg: {},
	style: {},
};

// generate foreground normal colors
for (var i in names) {
	Colors.fg[names[i]] = +i + 30;
}
// generate foreground bright colors
for (var i in namesBright) {
	Colors.fg[namesBright[i]] = +i + 90;
}

// generate background normal colors
for (var i in names) {
	Colors.bg[names[i]] = +i + 40;
}
// generate background bright colors
for (var i in namesBright) {
	Colors.bg[namesBright[i]] = +i + 100;
}

// generate style attributes
for (var i in namesStyle) {
	if (!namesStyle[i])
		continue;
	Colors.style[namesStyle[i]] = +i + 1;
}

function formatColor(color) {
	color = color || {};
	var fg = Colors.fg[color.fg] || 39;
	var bg = Colors.bg[color.bg] || 49;
	var style = Colors.style[color.style] || 0;

//	var code = '\x1b';

	return '\x1b[' + style + ';' + fg + ';' + bg + 'm';
}

function colorize(str, colors) {
	if (!str || typeof colors !== 'object')
		return str;

	return formatColor(colors) + str + RESET;
}
module.exports = colorize;
module.exports.colors = Colors;
module.exports.names = names.concat(namesBright);
module.exports.styles = namesStyle.filter(function (name) { return !!name; });

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/utils/loggers.js":[function(require,module,exports){
"use strict";

/*
loggers.js

This file contains the code for the various logging functions
of the library.

Author: Eric James Foster
License: ISC
*/
var colors = require('clivi'); //Console.log alias function.


var log = function log(text, style, tyme) {
  var colr = Array.isArray(style) ? style[0] : style,
      styl = Array.isArray(style) ? style[1] : null,
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = styl,
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
}; //Console.error alias function.


var err = function err(text, tyme) {
  var colr = 'red',
      styl = 'bold',
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
}; //Console.error alias function.


var error = function error(text) {
  return console.error(text);
}; //Console.info alias function.


var info = function info(text, tyme) {
  var colr = '#008cff',
      styl = 'bold',
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'blueBright';
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
}; //Console.warn alias function.


var warn = function warn(text, tyme) {
  var colr = 'orange',
      styl = 'bold',
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'yellow';
    colr = 'blueBright';
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.warn('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};

var dir = function dir(obj) {
  return console.dir(obj);
};

module.exports = {
  log: log,
  info: info,
  warn: warn,
  error: error,
  err: err,
  dir: dir
};"use strict";

/*
loggers.js

This file contains the code for the various logging functions
of the library.

Author: Eric James Foster
License: ISC
*/
var colors = require('clivi'); //Console.log alias function.


var log = function log(text, style, tyme) {
  var colr = Array.isArray(style) ? style[0] : style,
      styl = Array.isArray(style) ? style[1] : null,
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = styl,
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
}; //Console.error alias function.


var err = function err(text, tyme) {
  var colr = 'red',
      styl = 'bold',
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
}; //Console.error alias function.


var error = function error(text) {
  return console.error(text);
}; //Console.info alias function.


var info = function info(text, tyme) {
  var colr = '#008cff',
      styl = 'bold',
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'blueBright';
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
}; //Console.warn alias function.


var warn = function warn(text, tyme) {
  var colr = 'orange',
      styl = 'bold',
      tym = tyme || false;
  var time = new Date(),
      hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();

  if (secs <= 9) {
    secs = '0' + String(secs);
  }

  if (mins <= 9) {
    mins = '0' + String(mins);
  }

  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;

  if (stan === 0) {
    hours = stan + 12;
  } else {
    hours = stan;
  }

  time = hours + ':' + mins + ':' + secs + abbr;
  var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'yellow';
    colr = 'blueBright';
    return console.log(colors(text, {
      fg: colr,
      style: styl
    }) + '   '.repeat(10) + t);
  } else {
    var color = colr,
        bgColor = '',
        css = 'background: ' + bgColor + '; color: ' + color;
    return console.warn('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};

var dir = function dir(obj) {
  return console.dir(obj);
};

module.exports = {
  log: log,
  info: info,
  warn: warn,
  error: error,
  err: err,
  dir: dir
};
},{"clivi":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/clivi/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/Math.js":[function(require,module,exports){
"use strict";

var _add2 = _interopRequireDefault(require("./src/js/funcs/_add"));

var _subtract2 = _interopRequireDefault(require("./src/js/funcs/_subtract"));

var _divide2 = _interopRequireDefault(require("./src/js/funcs/_divide"));

var _multiply2 = _interopRequireDefault(require("./src/js/funcs/_multiply"));

var _loggers = _interopRequireDefault(require("./src/js/utils/loggers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// var _add = require('./src/js/funcs/_add')
// var _subtract = require('./src/js/funcs/_subtract')
// var _divide = require('./src/js/funcs/_divide')
// var _multiply = require('./src/js/funcs/_multiply')
//
// var log = require('./src/js/utils/loggers').log
(function () {
  (0, _loggers["default"])('hello');
})();

var Math =
/*#__PURE__*/
function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, [{
    key: "add",
    value: function add(param1, param2) {
      return (0, _add2["default"])(param1, param2);
    }
  }, {
    key: "subtract",
    value: function subtract(param1, param2) {
      return (0, _subtract2["default"])(param1, param2);
    }
  }, {
    key: "divide",
    value: function divide(param1, param2) {
      return (0, _divide2["default"])(param1, param2);
    }
  }, {
    key: "multiply",
    value: function multiply(param1, param2) {
      return (0, _multiply2["default"])(param1, param2);
    }
  }]);

  return Math;
}();"use strict";

var _add2 = _interopRequireDefault(require("./src/js/funcs/_add"));

var _subtract2 = _interopRequireDefault(require("./src/js/funcs/_subtract"));

var _divide2 = _interopRequireDefault(require("./src/js/funcs/_divide"));

var _multiply2 = _interopRequireDefault(require("./src/js/funcs/_multiply"));

var _loggers = _interopRequireDefault(require("./src/js/utils/loggers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// var _add = require('./src/js/funcs/_add')
// var _subtract = require('./src/js/funcs/_subtract')
// var _divide = require('./src/js/funcs/_divide')
// var _multiply = require('./src/js/funcs/_multiply')
//
// var log = require('./src/js/utils/loggers').log
(function () {
  (0, _loggers["default"])('hello');
})();

var Math =
/*#__PURE__*/
function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, [{
    key: "add",
    value: function add(param1, param2) {
      return (0, _add2["default"])(param1, param2);
    }
  }, {
    key: "subtract",
    value: function subtract(param1, param2) {
      return (0, _subtract2["default"])(param1, param2);
    }
  }, {
    key: "divide",
    value: function divide(param1, param2) {
      return (0, _divide2["default"])(param1, param2);
    }
  }, {
    key: "multiply",
    value: function multiply(param1, param2) {
      return (0, _multiply2["default"])(param1, param2);
    }
  }]);

  return Math;
}();
},{"./src/js/funcs/_add":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_add.js","./src/js/funcs/_divide":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_divide.js","./src/js/funcs/_multiply":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_multiply.js","./src/js/funcs/_subtract":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/funcs/_subtract.js","./src/js/utils/loggers":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/utils/loggers.js"}]},{},["/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/Math.js"]);
