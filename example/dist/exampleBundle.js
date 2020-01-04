/*
################################################################################
######################### BELOW ADDED BY MIXOLYDIAN ############################
################################################################################
*/

/*
** clientSocket.js
**
** clientSocket.js is code that is appended to the bundle (if HMR is opted), by Mixolydian,
** that will create the socket connection on the client-side...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


(()=> {
// This function begins a chain of promises that create, append and load scripts
// needed for socket.io to work....
  function loadClientSockets() {
    return new Promise((resolve, reject)=> {
// Create script tags....
      var scriptSrc = document.createElement('script')

// Configure tags....
      scriptSrc.src = 'node_modules/socket.io-client/dist/socket.io.js'
      scriptSrc.type = 'text/javascript'
      scriptSrc.onload = resolve

// Add tags to head of doc...
      document.head.append(scriptSrc)
    })
  }

  loadClientSockets()
  .then((result)=> {
// Create and dispatch a new event for 'clientSocketsLoaded'....
    document.dispatchEvent(
      new Event('clientSocketsLoaded')
    )

// Return a promise in which script tag is created, content added and loaded....
    return new Promise((resolve, reject)=> {
// Create script tags....
      var scriptVar = document.createElement('script')
/// Configure tags....
          scriptVar.onload = resolve
          scriptVar.textContent = 'var socket = io();'
/// Add tags to head of doc...
      document.head.append(scriptVar);
    })
    // Once loaded...
    .then((result)=> {
      console.log('SOCKETS LOADED');
      console.log(result)
      console.dir(result);
    })
  })
})();

/*
################################################################################
######################### ABOVE ADDED BY MIXOLYDIAN ############################
################################################################################
*/


// modules are defined as an array
// [ module function, map of requireuires ]
//
// map of requireuires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the requireuire for previous bundles

(function outer (modules, cache, entry) {
    this.hotModule = function(updatedModules) {
// Creat 'hot-update' event, so that Valence rootComponent may be unmounted.....
        let event = new Event('hot-module')
// Fire event....
        document.dispatchEvent(event)

//NOTE: Do not need this for now....
        // valenceGlobals.HMRemounting = true

//NOTE: Do not need the 'rootComponentUnmounting' flag, for now, so, adding
// '|| true' to acheive a perpetual 'true' result.....  Once removed, the flag will
// be necessary for running the subsequent code....
        if (valenceGlobals.rootComponentUnmounting || true) {
// Look through modules....
            for (let id in updatedModules) {
                if (Object.prototype.hasOwnProperty.call(updatedModules, id)) {
// clear module definition from cache
                    delete cache[id]
// replace existing module definition from module map
                    modules[id] = updatedModules[id]
// Update module - 'newRequire' is from browser-pack

//NOTE: Not running this newRequire here, may want to find out why it was causing
// problems at some point.... (Running multiple updates and adding unwanted DOM..)
                    // newRequire(id)
                    console.log('Update applied.')

// call entry point modules to bootstrap
                    for (let idx of entry) {
/// delete existing entry point module in cache
// so that it is reinitialized
                      delete cache[idx]
// call entry point module which will run
// with new updates in cache
                      newRequire(idx)

//NOTE: If 'rootComponentUnmounting' flag is re-enabled, it will need to be reset here....
// Reset the unmounting flag.....
                      // valenceGlobals.rootComponentUnmounting = false
                    }
                }
            }
        }
    }

// Save the require from previous bundle to this closure if any
    let previousRequire = typeof require == "function" && require

    function newRequire(name, jumped) {
        if(!cache[name]) {
            if(!modules[name]) {
// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
                let currentRequire = typeof require == "function" && require
                if (!jumped && currentRequire) return currentRequire(name, true)

// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
                if (previousRequire) return previousRequire(name, true)
                let err = new Error('Cannot find module \'' + name + '\'')
                err.code = 'MODULE_NOT_FOUND'
                throw err
            }
            let m = cache[name] = {exports: {}}

            modules[name][0].call(m.exports, function(x) {
                let id = modules[name][1][x]

                return newRequire(id ? id : x)
            }, m, m.exports, outer, modules, cache, entry)
        }
        return cache[name].exports
    }
    for (let idx of entry) {
//
      newRequire(idx)

    }
// Override the current require with this new one
    return newRequire
})
({"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/_rollupPluginBabelHelpers-82a4407b.js":[function(require,module,exports){
'';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

exports._assertThisInitialized = _assertThisInitialized;
exports._classCallCheck = _classCallCheck;
exports._createClass = _createClass;
exports._defineProperty = _defineProperty;
exports._getPrototypeOf = _getPrototypeOf;
exports._inherits = _inherits;
exports._objectSpread2 = _objectSpread2;
exports._possibleConstructorReturn = _possibleConstructorReturn;
exports._taggedTemplateLiteral = _taggedTemplateLiteral;
exports._typeof = _typeof;
exports._wrapNativeSuper = _wrapNativeSuper;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/classList-f68ba567.js":[function(require,module,exports){
'';

/*
** classList.js
**
** classList.js has a few helper funcs for interacting with an element's
** classList in a little bit more of a direct way.
**
** Eric James Foster, Fostware LLC, MIT License.
***/
// Add a class to an el's class list...
var addClass = function addClass(el, _class) {
  return el.classList.add(_class);
}; // Remove a class to an el's class list...


var removeClass = function removeClass(el, _class) {
  return el.classList.remove(_class);
}; // Confirm the existance of a class in an el's class list....


var listContains = function listContains(el, _class) {
  return el.classList.contains(_class);
}; // Replace a class with a new one in an el's class list...


var replaceClass = function replaceClass(el, oldie, newie) {
  // Remove old...
  el.classList.remove(oldie); // Add new...

  el.classList.add(newie); // Return the list...

  return el.classList;
};

exports.addClass = addClass;
exports.listContains = listContains;
exports.removeClass = removeClass;
exports.replaceClass = replaceClass;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_add.js":[function(require,module,exports){
"";

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
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_subtract.js":[function(require,module,exports){
"";

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
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_multiply.js":[function(require,module,exports){
"";

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
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_divide.js":[function(require,module,exports){
"";

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
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/clivi/index.js":[function(require,module,exports){
"";

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

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/dompurify/dist/purify.js":[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.DOMPurify = factory());
}(this, (function () { '';

var freeze$1 = Object.freeze || function (x) {
  return x;
};

var html = freeze$1(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

// SVG
var svg = freeze$1(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

var svgFilters = freeze$1(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

var mathMl = freeze$1(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

var text = freeze$1(['#text']);

var freeze$2 = Object.freeze || function (x) {
  return x;
};

var html$1 = freeze$2(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

var svg$1 = freeze$2(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

var mathMl$1 = freeze$2(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

var xml = freeze$2(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

var hasOwnProperty = Object.hasOwnProperty;
var setPrototypeOf = Object.setPrototypeOf;

var _ref$1 = typeof Reflect !== 'undefined' && Reflect;
var apply$1 = _ref$1.apply;

if (!apply$1) {
  apply$1 = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

/* Add properties to a lookup table */
function addToSet(set, array) {
  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }

  var l = array.length;
  while (l--) {
    var element = array[l];
    if (typeof element === 'string') {
      var lcElement = element.toLowerCase();
      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!Object.isFrozen(array)) {
          array[l] = lcElement;
        }

        element = lcElement;
      }
    }

    set[element] = true;
  }

  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = {};

  var property = void 0;
  for (property in object) {
    if (apply$1(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}

var seal = Object.seal || function (x) {
  return x;
};

var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _ref = typeof Reflect !== 'undefined' && Reflect;
var apply = _ref.apply;

var arraySlice = Array.prototype.slice;
var freeze = Object.freeze;

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {Document} document The document object (to determine policy name suffix)
 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported).
 */
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
  if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  }

  // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.
  var suffix = null;
  var ATTR_NAME = 'data-tt-policy-suffix';
  if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document.currentScript.getAttribute(ATTR_NAME);
  }

  var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html$$1) {
        return html$$1;
      }
    });
  } catch (error) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */
  DOMPurify.version = '2.0.7';

  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;
  var useDOMParser = false;
  var removeTitle = false;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      TrustedTypes = window.TrustedTypes;

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.

  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var trustedTypesPolicy = _createTrustedTypesPolicy(TrustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      getElementsByTagName = _document.getElementsByTagName,
      createDocumentFragment = _document.createDocumentFragment;
  var importNode = originalDocument.importNode;


  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
      ERB_EXPR$$1 = ERB_EXPR,
      DATA_ATTR$$1 = DATA_ATTR,
      ARIA_ATTR$$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for jQuery's $() factory? */
  var SAFE_FOR_JQUERY = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify. */
  var RETURN_DOM_IMPORT = false;

  /* Try to return a Trusted Type object instead of a string, retrun a string in
   * case Trusted Types are not supported  */
  var RETURN_TRUSTED_TYPE = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */
  var IN_PLACE = false;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }

    /* Shield configuration object from tampering */
    if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false

    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }

      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }

      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }

    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }

      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }

    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }

    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
      delete FORBID_TAGS.tbody;
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    DOMPurify.removed.push({ element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (error) {
      node.outerHTML = emptyHTML;
    }
  };

  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */
  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      DOMPurify.removed.push({
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (error) {
      DOMPurify.removed.push({
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name);
  };

  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var leadingWhitespace = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = dirty.match(/^[\s]+/);
      leadingWhitespace = matches && matches[0];
      if (leadingWhitespace) {
        dirty = dirty.slice(leadingWhitespace.length);
      }
    }

    /* Use DOMParser to workaround Firefox bug (see comment below) */
    if (useDOMParser) {
      try {
        doc = new DOMParser().parseFromString(dirty, 'text/html');
      } catch (error) {}
    }

    /* Remove title to fix a mXSS bug in older MS Edge */
    if (removeTitle) {
      addToSet(FORBID_TAGS, ['title']);
    }

    /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
    Safari (see comment below) */
    if (!doc || !doc.documentElement) {
      doc = implementation.createHTMLDocument('');
      var _doc = doc,
          body = _doc.body;

      body.parentNode.removeChild(body.parentNode.firstElementChild);
      body.outerHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    }

    if (dirty && leadingWhitespace) {
      doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
    }

    /* Work on whole document or just its body */
    return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
  };

  // Firefox uses a different parser for innerHTML rather than
  // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
  // which means that you *must* use DOMParser, otherwise the output may
  // not be safe if used in a document.write context later.
  //
  // So we feature detect the Firefox bug and use the DOMParser if necessary.
  //
  // Chrome 77 and other versions ship an mXSS bug that caused a bypass to
  // happen. We now check for the mXSS trigger and react accordingly.
  if (DOMPurify.isSupported) {
    (function () {
      try {
        var doc = _initDocument('<svg><p><textarea><img src="</textarea><img src=x abc=1//">');
        if (doc.querySelector('svg img')) {
          useDOMParser = true;
        }
      } catch (error) {}
    })();

    (function () {
      try {
        var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
        if (/<\/title/.test(doc.querySelector('title').innerHTML)) {
          removeTitle = true;
        }
      } catch (error) {}
    })();
  }

  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
      return NodeFilter.FILTER_ACCEPT;
    }, false);
  };

  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }

    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
      return true;
    }

    return false;
  };

  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */
  var _isNode = function _isNode(obj) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
  };

  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    hooks[entryPoint].forEach(function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */
  // eslint-disable-next-line complexity
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = currentNode.nodeName.toLowerCase();

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Take care of an mXSS pattern using p, br inside svg, math */
    if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br').length !== 0) {
      _forceRemove(currentNode);
      return true;
    }

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for black-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
        try {
          var htmlToInsert = currentNode.innerHTML;
          currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
        } catch (error) {}
      }

      _forceRemove(currentNode);
      return true;
    }

    /* Remove in case a noscript/noembed XSS is suspected */
    if (tagName === 'noscript' && /<\/noscript/i.test(currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }

    if (tagName === 'noembed' && /<\/noembed/i.test(currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Convert markup to cover jQuery behavior */
    if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
      DOMPurify.removed.push({ element: currentNode.cloneNode() });
      if (currentNode.innerHTML) {
        currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
      } else {
        currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
      }
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = content.replace(MUSTACHE_EXPR$$1, ' ');
      content = content.replace(ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        DOMPurify.removed.push({ element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity
  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }

    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */
    if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
      // This attribute is safe
    } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
      // This attribute is safe
      /* Otherwise, check the name is permitted */
    } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      return false;

      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) {
      // This attribute is safe
      /* Check no script, data or unknown possibly unsafe URI
        unless we know URI values are safe for that attribute */
    } else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Keep image data URIs alive if src/xlink:href is allowed */
      /* Further prevent gadget XSS for dynamically built script tags */
    } else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) {
      // This attribute is safe
      /* Allow unknown protocols: This provides support for links that
        are handled by protocol handlers which may be unknown ahead of
        time, e.g. fb:, spotify: */
    } else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) {
      // This attribute is safe
      /* Check for binary attributes */
      // eslint-disable-next-line no-negated-condition
    } else if (!value) {
      // Binary attributes are safe at this point
      /* Anything else, presume unsafe, do not add it back */
    } else {
      return false;
    }

    return true;
  };

  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */
  // eslint-disable-next-line complexity
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var value = void 0;
    var lcName = void 0;
    var idAttr = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;

      value = attr.value.trim();
      lcName = name.toLowerCase();

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;

      /* Remove attribute */
      // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
      // remove a "name" attribute from an <img> tag that has an "id"
      // attribute at the time.
      if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
        idAttr = attributes.id;
        attributes = apply(arraySlice, attributes, []);
        _removeAttribute('id', currentNode);
        _removeAttribute(name, currentNode);
        if (attributes.indexOf(idAttr) > l) {
          currentNode.setAttribute('id', idAttr.value);
        }
      } else if (
      // This works around a bug in Safari, where input[type=file]
      // cannot be dynamically set after type has been removed
      currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && hookEvent.keepAttr && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
        continue;
      } else {
        // This avoids a crash in Safari v9.0 with double-ids.
        // The trick is to first set the id to be empty and then to
        // remove the attribute
        if (name === 'id') {
          currentNode.setAttribute(name, '');
        }

        _removeAttribute(name, currentNode);
      }

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Take care of an mXSS pattern using namespace switches */
      if (/svg|math/i.test(currentNode.namespaceURI) && new RegExp('</(' + Object.keys(FORBID_CONTENTS).join('|') + ')', 'i').test(value)) {
        _removeAttribute(name, currentNode);
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = value.replace(MUSTACHE_EXPR$$1, ' ');
        value = value.replace(ERB_EXPR$$1, ' ');
      }

      /* Is `value` valid for this attribute? */
      var lcTag = currentNode.nodeName.toLowerCase();
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }

        DOMPurify.removed.pop();
      } catch (error) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    if (!dirty) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw new TypeError('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw new TypeError('dirty is not a string, aborting');
        }
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }

        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }

      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    if (IN_PLACE) {
      /* No special handling necessary for in-place sanitization */
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!-->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else if (importedNode.nodeName === 'HTML') {
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && RETURN_TRUSTED_TYPE && dirty.indexOf('<') === -1) {
        return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : emptyHTML;
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    oldNode = null;

    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /* AdoptNode() is not used because internal state is not reset
               (e.g. the past names map of a HTMLFormElement), this is safe
               in theory but we would rather not risk another attack vector.
               The state that is cloned by importNode() is explicitly defined
               by the specs. */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

    /* Sanitize final string template-safe */
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
      serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
    }

    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };

  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */
  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }

    var lcTag = tag.toLowerCase();
    var lcName = attr.toLowerCase();
    return _isValidAttribute(lcTag, lcName, value);
  };

  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }

    hooks[entryPoint] = hooks[entryPoint] || [];
    hooks[entryPoint].push(hookFunction);
  };

  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint].pop();
    }
  };

  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

return purify;

})));


},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/stylis/stylis.js":[function(require,module,exports){
/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	typeof exports === 'object' && typeof module !== 'undefined' ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	''

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shifted to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE:
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}
		if (out !== content) {
		  return out
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				if (typeof plugin === 'function') {
					plugins[plugged++] = plugin
				}	else if (typeof plugin === 'object') {
					for (var i = 0, length = plugin.length; i < length; ++i) {
						use(plugin[i])
					}
				} else {
					unkwn = !!plugin|0
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/Form-67d3128d.js":[function(require,module,exports){
'';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-82a4407b.js');
var colors = _interopDefault(require('clivi'));
var words = _interopDefault(require('lodash/words'));
var DOMPurify = _interopDefault(require('dompurify'));
var stylis = _interopDefault(require('stylis'));
var cssTree = _interopDefault(require('css-tree'));

/*
Logger.js

This file contains the code for the various logging functions
of the library.

Author: Eric James Foster
License: ISC
*/

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

var dir = function dir(obj) {
  return console.dir(obj);
};

/*
data.js

A file to hold information about HTML
Elements...

Eric James Foster, MIT License.
*/
var DATA = {
  DOMElementEvents: ['onabort', 'onauxclick', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onselectstart', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwheel'],
  HTMLAttributes: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'bgcolor', 'border', 'charset', 'checked', 'cite', 'class', 'classname', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'id', 'ismap', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'muted', 'name', 'novalidate', 'onabort', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onshow', 'onst', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'selected', 'shape', 'size', 'sizes', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style', 'tabindex', 'target', 'title', 'translate', 'type', 'usemap', 'value', 'width', 'wrap'],
  ComponentLifecycleEvents: ['componentWillMount', 'componentWillUnmount', 'componentDidMount', 'componentDidUnmount', 'componentWillUpdate', 'componentDidUpdate', 'componentWillReceiveProps'],
  flareComponentElements: [{
    UppercaseName: 'Area',
    name: 'area'
  }, {
    UppercaseName: 'Col',
    name: 'col'
  }, {
    UppercaseName: 'Aside',
    name: 'aside'
  }, {
    UppercaseName: 'Colgroup',
    name: 'colgroup'
  }, {
    UppercaseName: 'Footer',
    name: 'footer'
  }, {
    UppercaseName: 'Header',
    name: 'header'
  }, {
    UppercaseName: 'H2',
    name: 'h2'
  }, {
    UppercaseName: 'H3',
    name: 'h3'
  }, {
    UppercaseName: 'H4',
    name: 'h4'
  }, {
    UppercaseName: 'H5',
    name: 'h5'
  }, {
    UppercaseName: 'H6',
    name: 'h6'
  }, {
    UppercaseName: 'Section',
    name: 'section'
  }, {
    UppercaseName: 'Span',
    name: 'span'
  }, {
    UppercaseName: 'Table',
    name: 'table'
  }, {
    UppercaseName: 'Textarea',
    name: 'textarea'
  }]
};

var Is =
/*#__PURE__*/
function () {
  function Is() {
    _rollupPluginBabelHelpers._classCallCheck(this, Is);
  }

  _rollupPluginBabelHelpers._createClass(Is, null, [{
    key: "eventListener",
    // Determines whether or not a prop is an event listener...
    value: function eventListener(name) {
      return /on[A-Z]\w*/g.test(name) || DATA.DOMElementEvents.indexOf(name.toLowerCase()) !== -1;
    } // Determines whether or not an attribute name is custom or not...

  }, {
    key: "newPropName",
    value: function newPropName() {
      return DATA.HTMLAttributes.indexOf(name.toLowerCase()) === -1;
    } // NOT CURRENTLY IN USE...
    // A boolean function for determining if a func has called for the first time...

  }, {
    key: "newFunction",
    value: function newFunction(funcs, func) {
      return funcs.indexOf(func) == -1;
    } // Simple convenience function for determining if a value is
    // undefined or not...

  }, {
    key: "undefined",
    value: function undefined$1(val) {
      return typeof val === 'undefined';
    } // Simple convenience function for determining if a value is
    // an object or not...

  }, {
    key: "object",
    value: function object(val) {
      return _rollupPluginBabelHelpers._typeof(val) === 'object';
    } // Simple convenience function for determining if a value is
    // a number or not...

  }, {
    key: "number",
    value: function number(val) {
      return typeof val === 'number';
    } // Simple convenience function for determining if a value is
    // a string or not...

  }, {
    key: "string",
    value: function string(val) {
      return typeof val === 'string';
    } // Simple convenience function for determining if a value is
    // a function or not...

  }, {
    key: "function",
    value: function _function(val) {
      return typeof val === 'function';
    } // A copy of the above function with a different name... I have my reasons....

  }, {
    key: "func",
    value: function func(val) {
      return typeof val === 'function';
    } // Simple convenience function for determining if a value is
    // a symbol or not...

  }, {
    key: "symbol",
    value: function symbol(val) {
      return _rollupPluginBabelHelpers._typeof(val) === 'symbol';
    } // Simple convenience function for determining if a value is
    // a boolean or not...

  }, {
    key: "boolean",
    value: function boolean(val) {
      return typeof val === 'boolean';
    } // A simple convenience function for determining if a value is
    // a class or not...

  }, {
    key: "class",
    value: function _class(val) {
      return /_classCallCheck/.test(String(val)) || /\(this\, [A-Z]\w*\)/.test(String(val));
    } // A simple convenience function for determining if a value is
    // a component or not...

  }, {
    key: "component",
    value: function component(tagName) {
      return !tagName.indexOf('-') === -1 && true;
    } // A simple convenience function for determining if a value is
    // a function or not...

  }, {
    key: "array",
    value: function array(val) {
      return Array.isArray(val);
    } // A function for confirming same type...

  }, {
    key: "kin",
    value: function kin(val1, val2) {
      return _rollupPluginBabelHelpers._typeof(val1) === _rollupPluginBabelHelpers._typeof(val2);
    } // A function for determining whether or not a propType is Required...

  }, {
    key: "requiredProp",
    value: function requiredProp(types) {
      return types.length === 1;
    } // A function for determining if a tagged template literal has interpolations...

  }, {
    key: "interpolated",
    value: function interpolated(tagTempLit) {
      return tagTempLit.length > 1;
    }
    /* A function for determining whether or not a component is a
    valence component ... */

  }, {
    key: "valenceComponent",
    value: function valenceComponent(tag) {
      return window.valenceComponents.indexOf(tag) !== -1;
    }
    /* A function for determining whether or not a component is
    a flare component... */

  }, {
    key: "flareComponent",
    value: function flareComponent(tag) {
      return window.flareComponents.indexOf(tag) !== -1;
    }
    /* A function for determining whether or not a component is
    a flare component... */

  }, {
    key: "flare",
    value: function flare(node) {
      // Regular expression for determination...
      var flareFuncRE = /_templateObject/g,
          funcSourceCode; // Do your thing.....

      if (typeof node === 'undefined') {
        return false; // If we have a function....
      } else if (typeof node === 'function') {
        var res = node();

        if (res !== undefined && res.flare) {
          return true;
        } else {
          return false;
        } // If we have a node.type....

      } else if (node.type !== undefined) {
        funcSourceCode = node.type.toString(); // Test the regexp....

        if (flareFuncRE.test(funcSourceCode)) {
          return true;
        } else {
          return false;
        }
      } else {
        // If we already have a node.tag, go ahead and return true....
        if (node.tag) {
          return true;
        }

        return false;
      }
    } // A convenience function for quickly determining whether or not a function is a stateless component....

  }, {
    key: "fragment",
    value: function fragment(val) {
      // Go thru all checks, and return true if passing, false otherwise....
      if (Is.string(val) && val === '') {
        return true;
      } else if (Is.func(val) && val.name === 'Fragment') {
        return true;
      } //


      return false;
    } // A convenience function for quickly determining whether or not a function is a stateless component....

  }, {
    key: "statelessComponent",
    value: function statelessComponent(func) {
      // Go thru all checks, and return true if passing, false otherwise....
      return Is.func(func) && !Is["class"](func) && !Is.flare(func) && !Is.fragment(func) && true;
    } /// A convenience function for quickly determining whether or not a function is a stateful component....

  }, {
    key: "statefulComponent",
    value: function statefulComponent(func) {
      // Go thru all checks, and return true if passing, false otherwise....
      return Is.func(func) && Is["class"](func) && true;
    } // Method for determining whether or not a component is realized or not...

  }, {
    key: "realized",
    value: function realized(val) {
      // Go thru all checks, and return true if passing, false otherwise....
      return val._style === null && val.style === null && true;
    } /// Method for determining whether or not a component is registered or not...

  }, {
    key: "registered",
    value: function registered(val) {
      // Check to see if val is in componentRegister, and return true if so, false otherwise....
      return valenceGlobals.componentRegister.indexOf(val) !== -1 && true;
    } // Method for determining whether or not a component is defined or not...

  }, {
    key: "defined",
    value: function defined(val) {
      // Create an element from val, and store for below use....
      var el = document.createElement(val); // If el's ctor != HTMLElement or HTMLUnknownElement, return true. False otherwise.....

      return (el.constructor !== HTMLElement || el.constructor !== HTMLUnknownElement) && true;
    }
  }]);

  return Is;
}();
var isEventListener = Is.eventListener;
var isString = Is.string;
var isFunction = Is["function"];
var isBoolean = Is["boolean"];
var isClass = Is["class"];
var isArray = Is.array;
var isRequiredProp = Is.requiredProp;
var isInterpolated = Is.interpolated;
var isFlare = Is.flare;
var isRealized = Is.realized;
var isRegistered = Is.registered;
var isDefined = Is.defined;
var isFragment = Is.fragment;
var isStatelessComponent = Is.statelessComponent;
var isStatefulComponent = Is.statefulComponent;

/*
** el.js
**
** This function combines querySelector and querySelectorAll, and becomes a
** noop if 'el' is a letiable. There is an optional 2nd argument 'mod', that
** is a boolean. By default, 'mod' is false. If true is passed as the 2nd argument,
** the function will use querySelectorAll() instead of querySelector(), meaning an
** array will be returned if possible.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

/*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
function queryDOM(el) {
  //
  var lm,
      lms = [];

  if (typeof el === 'string') {
    if (el.charAt(0) === '.') {
      el = el.substring(1, el.length);
      lm = document.getElementsByClassName(el);

      if (lm.length !== 0) {
        if (lm.length === 1) {
          lms = lm[0];
        } else {
          for (var i = 0; i < lm.length; i++) {
            lms.push(lm[i]);
          }
        }
      } else {
        return null;
      }
    } else if (el.charAt(0) !== '#' && el.indexOf('[') === -1 && el.indexOf(':') === -1 && el.indexOf(' ') === -1) {
      lm = document.getElementsByTagName(el);

      if (lm.length !== 0) {
        if (lm.length === 1) {
          lms = lm[0];
        } else {
          for (var j = 0; j < lm.length; j++) {
            lms.push(lm.item(j));
          }
        }
      } else {
        return null;
      }
    } else {
      lm = document.querySelectorAll(el);

      if (lm.length <= 1) {
        lm = undefined;
        lm = document.querySelector(el);
        return lm;
      } else {
        return lm;
      }
    }

    return lms;
  } else {
    return el;
  }
}

var piper = function piper() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (arg) {
    return fns.reduce(function (value, fn) {
      return fn(value);
    }, arg);
  };
}; // Returns an array of prop names...

var propNames = function propNames(props) {
  return Object.keys(props);
}; // Get an array of key value pairs from the attributes object...

var propsArray = function propsArray(attribs) {
  return Object.entries(attribs);
}; // Create a new array with all event listeners lower-cased...

var lowerCaseListeners3 = function lowerCaseListeners3(arr) {
  return arr.map(function (entry) {
    return [entry[0].toLowerCase(), entry[0], entry[1]];
  });
}; // Create a new array with all event listeners lower-cased...

var lowerCaseListeners2 = function lowerCaseListeners2(arr) {
  return arr.map(function (entry) {
    return [entry[0].toLowerCase(), entry[1]];
  });
}; // Create a new array with all event listeners lower-cased...

var lowerCaseListeners1 = function lowerCaseListeners1(arr) {
  return arr.map(function (entry) {
    return entry.toLowerCase();
  });
}; // Create a new array with event listeners and their callback functions...

var isolateEventListeners = function isolateEventListeners(arr) {
  return arr.filter(function (entry) {
    return DATA.DOMElementEvents.indexOf(entry[0]) != -1;
  });
}; // A function for removing the `on` from event listeners...

var sansON = function sansON(name) {
  return name.slice(2).toLowerCase();
}; // Create a new array with the `on` removed from the event listener names...

var removePrefixFromListeners = function removePrefixFromListeners(arr) {
  return arr.map(function (entry) {
    return [sansON(entry[0]), entry[1], entry[2]];
  });
}; // Create a new array without the  event listeners and their callback functions...

var removeEventListeners = function removeEventListeners(arr) {
  return arr.filter(function (entry) {
    return DATA.DOMElementEvents.indexOf(isArray(entry) ? entry[0] : entry) == -1;
  });
}; // Remove non-custom attributes...

var removeExistingAttributes = function removeExistingAttributes(arr) {
  return arr.filter(function (entry) {
    return DATA.HTMLAttributes.indexOf(isArray(entry) ? entry[0] : entry) == -1;
  });
}; // Process event listener attributes...

var processEventListeners = function processEventListeners(arr) {
  return piper(lowerCaseListeners3, isolateEventListeners, removePrefixFromListeners)(arr);
}; // Process attribute data...

var extractCustomProps = function extractCustomProps(arr) {
  return piper(lowerCaseListeners2, removeEventListeners, removeExistingAttributes)(arr);
}; // Process attribute data...

var extractCustomPropNames = function extractCustomPropNames(arr) {
  return piper(lowerCaseListeners1, removeEventListeners, removeExistingAttributes)(arr);
}; // NOT CURRENTLY IN USE...
// the listeners removed...

var processData = function processData(arr) {
  return {
    // The following object contains 2 arrays, 1 of the event listener attributes, appendChild
    // one of the remaining attributes...
    'eventListeners': processEventListeners(arr),
    'props': extractCustomProps(arr)
  };
}; // A function for converting a unicode string into a kebabCase string...

var _shishKebab = function _shishKebab(string) {
  return words(string).reduce(function (result, word, ix) {
    return result + (ix ? '-' : '') + word.toLowerCase();
  }, '');
}; // A function for converting the func name to a custom tag name...

var convertFuncNameToTagName = function convertFuncNameToTagName(func) {
  var cornDog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return _shishKebab(func).indexOf('-') !== -1 && cornDog ? _shishKebab(func) : "".concat(func.toLowerCase(), "-");
}; // NO LONGER USED: Use Function.name instead... duh..

var mergeData = function mergeData(obj1, obj2) {
  return _rollupPluginBabelHelpers._objectSpread2({}, obj1, {}, obj2);
}; // Removes the hyphen at the end of the component tag name...

var capitalizeAndRemoveHyphen = function capitalizeAndRemoveHyphen(name) {
  return name[0].toUpperCase() + name.slice(1, name.length - 1);
}; // Creates a unique custom event string for individual flare element instantiation
// notification...

var uniqueCustomEventString = function uniqueCustomEventString(tagName) {
  return "flare".concat(capitalizeAndRemoveHyphen(tagName), "ElementInstantiated");
}; // A small helper function for determining if a given string is in a given array..

var included = function included(string, array) {
  if (array.indexOf(string) > 0) {
    return true;
  } else {
    return false;
  }
}; // A node.js code templating function. The function takes a string of code, and
/* An array filter function, which splits the array into 2 new arrays.. Those that
agree with the given boolean, and those that do not...*/

var splitFilter = function splitFilter(array, bool) {
  var t = [],
      f = []; // Iterate over the array...

  array.forEach(function (i) {
    if (bool(i)) {
      t.push(i);
    } else {
      f.push(i);
    }
  }); // Return an object containing both arrays...

  return {
    "true": t,
    "false": f
  };
};
//NOTE: This will now work on an object with methods....

var deeplicateObj = function deeplicateObj(obj) {
  // Get a shallow copy of given obj. 2nd level, and beyond, objects will be copied later..
  var newObj = JSON.parse(JSON.stringify(obj)); // Recursive deeper level object copier...

  var reCopier = function reCopier(newie, oldie) {
    // Iterate over the object to be copied...
    for (key in oldie) {
      // Manually copy in all functions, regexp's...
      if (typeof oldie[key] === 'function' || oldie[key] instanceof RegExp) {
        newie[key] = oldie[key];
      } // Deal with arrays...


      if (Array.isArray(oldie[key])) {
        newie[key] = Array.from(oldie[key]);
      } // Recursively copy in all objects, save nulls, regexp's and arrays...


      if (_rollupPluginBabelHelpers._typeof(oldie[key]) === 'object' && !(oldie[key] instanceof RegExp) && oldie[key] !== null && !isArray(oldie[key])) {
        // Copy away...
        newie[key] = Object.assign({}, oldie[key]);
        reCopier(newie[key], oldie[key]);
      }
    }

    return newie;
  };

  return reCopier(newObj, obj);
};

var Events =
/*#__PURE__*/
function () {
  function Events() {
    _rollupPluginBabelHelpers._classCallCheck(this, Events);
  }

  _rollupPluginBabelHelpers._createClass(Events, null, [{
    key: "fire",
    // Using emerging js reflection to create a single method for dispatching
    // lifecycle event callbacks...
    value: function fire(event, target) {
      var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var lifecycleEvent = Reflect.construct(CustomEvent, [event, {
        'detail': detail
      }]);
      return target.dispatchEvent(lifecycleEvent);
    } // Creating a second Event dispatching method for dispatching non-lifecycle events, and
    // custom events with dynamic event strings...

  }, {
    key: "emit",
    value: function emit(eventOrTag) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Determine whether first arg is an event string or a tagname...
      if (included('-', eventOrTag)) {
        // If tagname, create a listener for a custom flare event.
        var customEventString = uniqueCustomEventString(eventOrTag); // Instantiate custom event...

        var ev = new CustomEvent(customEventString, {
          'detail': detail
        }); // Dispatch the event...

        document.dispatchEvent(ev);
      } else {
        // Instantiate custom event...
        var _ev = new CustomEvent(eventOrTag, {
          'detail': detail
        }); // Dispatch the event...


        document.dispatchEvent(_ev);
      }
    } // A static helper method for developing event listener functions...

  }, {
    key: "listen",
    value: function listen(eventOrTag, cb) {
      // Determine whether first arg is an event string or a tagname...
      if (included('-', eventOrTag)) {
        // If tagname, create a listener for a custom flare event.
        var customEventString = uniqueCustomEventString(eventOrTag); // Add listener...

        document.addEventListener(customEventString, function (e) {
          cb(e);
        });
      } else {
        // Add listener with given event string...
        document.addEventListener(eventOrTag, function (e) {
          cb(e);
        });
      }
    } // Static class method for registering event listener callback methods on
    // a given HTMLElement...

  }, {
    key: "registerCallbacks",
    value: function registerCallbacks(ctor, eListeners) {
      if (eListeners.length < 1) {
        return;
      } else {
        eListeners.forEach(function (eListener) {
          ctor.prototype[eListener[1]] = eListener[2];
        }, ctor);
      }

      return ctor;
    }
  }]);

  return Events;
}();

/*
PropTypes.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles property type-checking
functionality...

Eric James Foster, MIT License.
*/
var PropTypes = function PropTypes() {
  _rollupPluginBabelHelpers._classCallCheck(this, PropTypes);
};

_rollupPluginBabelHelpers._defineProperty(PropTypes, "boolean", {
  types: ['boolean', 'undefined'],
  isRequired: {
    types: ['boolean']
  }
});

_rollupPluginBabelHelpers._defineProperty(PropTypes, "number", {
  types: ['number', 'undefined'],
  isRequired: {
    types: ['number']
  }
});

_rollupPluginBabelHelpers._defineProperty(PropTypes, "string", {
  types: ['string', 'undefined'],
  isRequired: {
    types: ['string']
  }
});

_rollupPluginBabelHelpers._defineProperty(PropTypes, "symbol", {
  types: ['symbol', 'undefined'],
  isRequired: {
    types: ['symbol']
  }
});

_rollupPluginBabelHelpers._defineProperty(PropTypes, "object", {
  types: ['object', 'undefined'],
  isRequired: {
    types: ['number']
  }
});

_rollupPluginBabelHelpers._defineProperty(PropTypes, "array", {
  types: ['array', 'undefined'],
  isRequired: {
    types: ['array']
  }
});

var Props =
/*#__PURE__*/
function () {
  function Props(props) {
    _rollupPluginBabelHelpers._classCallCheck(this, Props);

    var propPairs = Object.entries(props);
    var ppLength = propPairs.length;
    var i = 0;

    while (ppLength > 0) {
      this[propPairs[i][0]] = propPairs[i][1];
      ppLength--;
      i++;
    }
  } // An internal method for applying the default props when none are supplied...


  _rollupPluginBabelHelpers._createClass(Props, null, [{
    key: "_applyDefault",
    value: function _applyDefault(defaultProps, propName) {
      return defaultProps[propName];
    } // An object to hold prop types for type checking purposes...

  }, {
    key: "validate",
    value: function validate(props, propNames, component) {
      var _this = this;

      // Cycle through props, comparing it's value type with it's expected propType...
      var validatedProps = propNames.reduce(function (propsObj, propName) {
        // Store types, default props, prop value and value type...
        var types = null,
            defProps = null,
            propValue = props[propName],
            valueType = _rollupPluginBabelHelpers._typeof(propValue); // Don't want to attempt to access propTypes or defaultProps if they don't exist.
        // but if they do, store them...


        if (component.propTypes[propName]) {
          types = component.propTypes[propName].types;
        }

        if (component.defaultProps) {
          defProps = component.defaultProps;
        } // If prop is undefined...


        if (propValue === undefined) {
          // but propType specifies `required`...
          if (isRequiredProp(types)) {
            // If we have defaultProp...
            if (defProps) {
              // Apply it to props object...
              propValue = _this._applyDefault(defProps, propName);
              return _rollupPluginBabelHelpers._objectSpread2({}, propsObj, _rollupPluginBabelHelpers._defineProperty({}, propName, propValue)); // Else, output warning to the console, and pass undefined prop to props object...
            } else {
              console.warn("Warning: Failed PropType: Required prop `".concat(propName, "` is undefined."));
              return _rollupPluginBabelHelpers._objectSpread2({}, propsObj, _rollupPluginBabelHelpers._defineProperty({}, propName, propValue));
            }
          }
          /*else (who cares) {}*/
          // Or, if value type is not among propTypes' specified types...

        } else if (types.indexOf(valueType) === -1) {
          // output warning to console, and add our value to the props object....
          console.warn("Warning: Failed PropType: Prop `".concat(propName, "` was given a value of type `").concat(valueType, "`, expected `").concat(types[0], "`."));
          return _rollupPluginBabelHelpers._objectSpread2({}, propsObj, _rollupPluginBabelHelpers._defineProperty({}, propName, propValue)); // Else, everything is just as it should be. Add value to props object...
        } else {
          return _rollupPluginBabelHelpers._objectSpread2({}, propsObj, _rollupPluginBabelHelpers._defineProperty({}, propName, propValue));
        }
      }, {}); // Return the props object...

      return _rollupPluginBabelHelpers._objectSpread2({}, props, {}, validatedProps);
    } // A simple boolean for determining if prop is custom or not...

  }, {
    key: "_isPrivateProp",
    value: function _isPrivateProp(name) {
      return isEventListener(name) || name === 'forceUpdate' || name === 'isStatefulComponent' || name === 'isStatelessComponent' || name === 'ref' || name === 'noChild' || name === 'rootNode' || name === 'Flare' || name === 'flare' || name === 'label' || name === 'content' || name === 'cleanHTML' || name === 'kebabCase';
    } // Method for updating props...

  }, {
    key: "update",
    value: function update(elem, newProps) {
      var _this2 = this;

      var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var updateProp; // Check if the given prop on the given element needs updated or not,
      // and update, add or remove it...

      updateProp = function updateProp(elem, name, newVal, oldVal) {
        if (!newVal) {
          _this2.remove(elem, name, oldVal);
        } else if (!oldVal || newVal !== oldVal) {
          _this2.set(elem, name, newVal);
        }
      }; // Combine old and new props into 1 new object...


      var props = mergeData(newProps, oldProps); // Get an array of unique props keys and use it to iterate through
      // both objects comparing for differences and update requirements...

      Object.keys(props).forEach(function (name) {
        updateProp(elem, name, newProps[name], oldProps[name]);
      });
    } // Set given attributes on the created element....

  }, {
    key: "set",
    value: function set(elem, props) {
      var _this3 = this;

      var setProp, setBooleanProp; // A function for setting boolean properties on elements...

      setBooleanProp = function setBooleanProp(elem, name, value) {
        if (value) {
          elem.setAttribute(name, value);
          elem[name] = true;
        } else {
          elem[name] = false;
        }
      }; // A function for setting props...


      setProp = function setProp(elem, name, value) {
        if (_this3._isPrivateProp(name)) {
          return;
        } else if (name === 'className') {
          elem.setAttribute('class', value);
        } else if (isBoolean(value)) {
          setBooleanProp(elem, name, value);
        } else {
          elem.setAttribute(name, value);
        }
      }; // Remove event listeners from attributes...


      var _propsArray = propsArray(props); // Determine if elem is a string or a Component...


      if (_propsArray.length > 0) {
        // dir(filteredProps)
        // Add attributes to element...
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _propsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var prop = _step.value;
            setProp(elem, prop[0], prop[1]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } // Return element...


      return elem;
    } // Method for setting up a list of observed attributes. These attributes
    // will trigger the attributesChangedCallback method on the custom
    // element when changed in any way...

  }, {
    key: "registerObserved",
    value: function registerObserved(ctor, propNames) {
      Object.defineProperties(ctor.prototype, {
        observedAttributes: {
          get: function get() {
            return propNames;
          },
          enumerable: true,
          configurable: true
        }
      });
    } // Method for setting custom attributes of custom elements...

  }, {
    key: "registerCustom",
    value: function registerCustom(ctor, propNames) {
      propNames.forEach(function (prop) {
        if (!Boolean(ctor.prototype.observedAttributes) || !prop in ctor.prototype.observedAttributes) {
          Object.defineProperties(ctor.prototype, _rollupPluginBabelHelpers._defineProperty({}, prop, {
            get: function get() {
              return this.getAttribute(prop);
            },
            set: function set(val) {
              if (val) {
                this.setAttribute(prop, val);
              } else {
                this.removeAttribute(prop);
              }
            },
            enumerable: true,
            configurable: true
          }));
        }
      }, ctor);
      return ctor;
    } // A method for removing Properties...

  }, {
    key: "remove",
    value: function remove(elem, name, value) {
      // A function for removing boolean properties...
      var removeBooleanProp = function removeBooleanProp(elem, name) {
        elem.removeAttribute(name);
        elem[name] = false;
      }; // Remove Properties...


      if (this._isPrivateProp(name)) {
        return;
      } else if (name === 'classname') {
        elem.removeAttribute('class');
      } else if (isBoolean(value)) {
        removeBooleanProp(elem, name);
      } else {
        elem.removeAttribute(name);
      }
    }
  }]);

  return Props;
}();

var Element =
/*#__PURE__*/
function () {
  function Element() {
    _rollupPluginBabelHelpers._classCallCheck(this, Element);
  }

  _rollupPluginBabelHelpers._createClass(Element, null, [{
    key: "createElement",
    // Create a Valence element...
    value: function createElement(_ref) {
      var type = _ref.type,
          _ref$props = _ref.props,
          props = _ref$props === void 0 ? {} : _ref$props,
          children = _ref.children;
      // Pre-declare inner functions...
      var makeDOMElement, setProps, addEventListeners, appendChildren, elem; // Create a new DOM element...

      makeDOMElement = function makeDOMElement(tagName) {
        if (Reflect.has(valenceGlobals.flareComponents, tagName)) {
          // log('FLIPPING SWITCHES0', 'red', true)
          // Flip the required switches...
          window.useNativeShim = false;
          window.HTMLElement = window._HTMLElement;
        } // Create a new element given the tag name, and
        // store for sending through the pipe......


        elem = document.createElement(tagName); // If we just created a Flare Component element...

        if (Reflect.has(valenceGlobals.flareComponents, tagName)) {
          // Emit an event that cues Flare to set props on the newly created element...
          Events.emit(tagName, {
            element: elem
          });
        } //log('new Element', ['orange', 'bold']);log(tagName)

        /* If `Reflect` programmatic library constructed component, reset native-shim flag,
        and also reset window.HTMLElement to the nativeShim.js patched version...
        */


        if (props.isStatelessComponent) {
          // log('FLIPPING SWITCHES1', 'green', true)
          window.useNativeShim = true;
          window.HTMLElement = window.HTMLElement_; // Push tagname to global collection..

          window.valenceGlobals.statelessComponents.push(tagName);
        } // Send the created element through the pipe...


        return elem;
      }; // Set given attributes on the created element....


      setProps = function setProps(elem) {
        if (props) {
          /* If setting props on user defined (stateful) component, fire willRecieveProps
          event..*/
          if (props.isStatefulComponent) {
            Events.fire('componentWillReceiveProps', elem, props);
          }
          /* The ref function is defined in jsx markup as a prop in curlies, and When
           * we get to this point in the definition of the ref'd element, we access the
           * function via props and execute it, injecting the brand new element instance
           * that we just created in the function above. This will complete the purpose
           * of the ref function, which is to pass the reference into a variable, but in
           * the context in which it was defined, the component definition...
           */


          if (props.ref) {
            props.ref(elem);
          } // Set props and return the element to the pipe...


          return Props.set(elem, props);
        }
      }; // Add event listener(s) to element...


      addEventListeners = function addEventListeners(elem) {
        propNames(props).forEach(function (name) {
          if (isEventListener(name)) {
            elem.addEventListener(sansON(name), props[name]);
          }
        }, elem);
        return elem;
      }; // Add elements children to the DOM.....


      appendChildren = function appendChildren(elem) {
        // Determine if elem is a string or a Component...
        if (children) {
          // Append children...
          children.map(Node.createNode, Node).forEach(function (node) {
            if (isArray(node)) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = node[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var n = _step.value;
                  elem.appendChild(n);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else {
              elem.appendChild(node);
            }
          }, elem);
        } // Return the element...


        return elem;
      }; // Connected to each other with the higher-order function piper, the following will
      // return the requested element...


      return piper(makeDOMElement, setProps, addEventListeners, appendChildren)(type);
    }
  }]);

  return Element;
}();

/*
** Keyframes.js
**
** Keyframes.js holds the Keyframes class, and implements @keyframe functionality
** in the component styling branch of Valence, Flare...
**
** Eric James Foster, Fostware LLC, MIT License.
***/
var Keyframes =
/*#__PURE__*/
function () {
  // The name of the animation...
  // CSS Rules...
  // Instance id...
  // Instance constructor...
  function Keyframes(name, css) {
    _rollupPluginBabelHelpers._classCallCheck(this, Keyframes);

    _rollupPluginBabelHelpers._defineProperty(this, "animationName", '');

    _rollupPluginBabelHelpers._defineProperty(this, "rules", '');

    _rollupPluginBabelHelpers._defineProperty(this, "id", '');

    this.rules = css;
    this.animationName = name;
    this.id = "flare-keyframes-".concat(name);
  } // Getter for 'name'..


  _rollupPluginBabelHelpers._createClass(Keyframes, [{
    key: "name",
    get: function get() {
      return this.animationName;
    }
  }]);

  return Keyframes;
}();

var stringWeaver, interpolationFilter;
/* A helper function for processing tagged template literal interpolation functions,
and inserting their values back into the template.... The function takes an array
of strings and an array of interpolation, and props as arguments, and returns the completed
css string....*/

stringWeaver = function stringWeaver(strings, interpolations) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (// We need to execute them with the props object, and add the value into the template...
    strings.map(function (string, i) {
      var val;
      /*
      Since the interpolation functions (refs) array will always be 1 shorter in length than
      the strings array, The last index will be undefined if we are iterating based on 'string's'
      indeces. So, we make sure that  we don't try to execute an undefined function by skipping
      the last index.....
      */

      if (i < strings.length - 1) {
        // Utilizing a switch for the different types of interpolations we may encounter...
        switch (true) {
          // If we find a function, execute it with props passed in...
          case typeof interpolations[i] === 'function':
            val = interpolations[i](props);
            break;
          // If we have a string, It is the return value of a variable, just take it as it is...

          case typeof interpolations[i] === 'string':
            val = interpolations[i];
            break;
          // If we find a keyframes instance, we need it's name....

          case interpolations[i] instanceof Keyframes:
            val = interpolations[i].name;
            break;

          case typeof interpolations[i] === 'number':
            val = interpolations[i];
            break;

          /* Otherwise, I don't know what the hell we're dealing with..... Better off
          throwing an error!*/

          default:
            throw TypeError("Expecting a 'Keyframe', 'string', 'number' or 'function' here. A value of type: ".concat(_rollupPluginBabelHelpers._typeof(interpolations[i]), ", was given."));
        }
        /* The last index will end up here. Since there will never be an interpolation here,
        we'll just give the value an empty string....*/

      } else {
        val = '';
      } // Add interpolation values to array strings, join them...


      return string.concat('', val);
    }).join('')
  );
};
/*
This function serves to activate prop function interpolations in css styling...
The function simply takes a tagged template literal as an argument, and spits out
completed styles, ready for appending to a style tag...   */


var _interpolationStation = interpolationFilter = function interpolationFilter(ttlArray) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // First let's check if we have interpolations to deal with...
  if (isInterpolated(ttlArray)) {
    // Declare var for splitting strings and functions into respective arrays...
    var arrays = splitFilter(ttlArray, function (index) {
      return isArray(index);
    }); // Reassemble the css literals...

    var s = stringWeaver(arrays["true"][0], arrays["false"], props);
    return s; // Otherwise, rejoin the css fragments and return...
  } else {
    return ttlArray.join('');
  }
};

/*
** alphaStringFromHash.js
**
** alphaStringFromHash.js is a very particular algorithm for converting a numeric hash
** into a string of alphabetical characters. Very nearly a copy/paste of the styled-
** components algorithm to do the very same thing. https://github.com/styled-components/
** styled-components/blob/master/packages/styled-components/src/utils/generateAlphabeticName.js
** It is used in conjuction with the murmurhash algorithm to convert a string first
** into a 10 digit hash, then into a unique string of alphabetical characters to be used
** as a name for a css keyframes instance...
**
** Eric James Foster, Fostware LLC, MIT License.
***/
// The number of letters (cap and lower case) in the alphabet..
var alphaRange = 52;
/* Once the modulo function gets x within a 2 digit range, we can get into ascii
alphabet range by adding either 39 or 97, depending on whether or not the value
is > than 25.*/

var getACharacter = function getACharacter(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

function alphaStringFromHash(hash) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var name = '',
      x = hash,
      // This number determines the length of the returned string. '52' = 6, '26' = 7 chars...
  divisor = chars =  52 ;

  do {
    // Diminish the hash by dividing by 26...
    x = Math.floor(x / divisor); //  Add a character to 'name'...

    name = "".concat(getACharacter(x % alphaRange)).concat(name); // Continue looping until x is dwindled to below 52...
  } while (x > alphaRange); // The remainder should be a number in the 0 - 52 range, so we can grab one last char...


  return "".concat(getACharacter(x % alphaRange)).concat(name);
}
/**********************************************************
***********************************************************
***********************************************************
***********************************************************
***********************************************************
***********************************************************
**********************************************************/
// Minimal es6 version, for executing in Mancy REPL ...
// var alphaRange = 52
// var divisor = 26
//
// var getACharacter =(code)=>
//   String.fromCharCode(code + (code > 25 ? 39 : 97))
//
// function alphaStringFromHash(code) {
//   var name = '',
//   x = code
//
//   do {
// // Diminish the has by dividing by 52...
//     x = Math.floor(x / divisor)
// //  Add a character to 'name'...
//     name = `${getACharacter(x % alphaRange)}${name}`
// // Continue looping until x is dwindled to below 52...
//   } while (x > alphaRange)
//
// // The remainder should be a number in the 0 - 52 range, so we can grab one last char...
//   return `${getACharacter(x % alphaRange)}${name}`
// }

/*
** murmurHash.js
**
** murmurHash.js is a copy/pasting of garycourt's JavaScript implementation of
** the murmurhash algorithm. https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
** It is claimed to be sub-millisecond fast... Using this upon seeing how styled-components
** name's their keyframe animations... I am implementing a very similar system in flare.
**
** Eric James Foster, Fostware LLC, MIT License.
***/
function murmurHash(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

/*
** _stylisDirectChild.js
**
** _stylisDirectChild.js is essentially a stylis plugin that alters the selectors of the
** css rules that stylis creates. A ">" is added between parent and child to establish
** a direct relationship so that styles may be overridden down the DOM tree.
**
** Eric James Foster, Fostware LLC, MIT License.
***/
// Regular Expressions...
var fullSelectorRE = /\[flareid\=\"?[\w\.]+\"?\]\s?\w+\s?\{/g;
var fullSelectorSplitRE = /\[flareid\=\"?[\w\.]+\"?\]|[a-z0-9\-]+\s?\{/g;
function addRightArrowToSelector(rule) {
  var selectorArr; // 

  if (fullSelectorSplitRE.test(rule)) {
    selectorArr = rule.match(fullSelectorSplitRE);

    if (selectorArr.length > 1 && rule.indexOf('@keyframes') === -1) {
      return rule.replace(fullSelectorRE, selectorArr.join(' > '));
    } else {
      return rule;
    }
  } else {
    return rule;
  }
}

window.dir = console.dir; // Stylis configuration options...

stylis.set({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false
});

var CSS =
/*#__PURE__*/
function () {
  function CSS() {
    _rollupPluginBabelHelpers._classCallCheck(this, CSS);
  }

  _rollupPluginBabelHelpers._createClass(CSS, null, [{
    key: "set",
    // A set of configuration options or assumptions. This object will be combined with the
    // assumptions of other classes when options are set...
    // A public helper method for setting Flare assumptions, config options...
    value: function set(userAssumptions) {
      this._assumptions = Form.set(Node.set(mergeData(this._assumptions, userAssumptions)));
      return this._assumptions;
    } // A static class property for holding an extended element's parent props....

  }, {
    key: "_createNewStyleSheet",
    // Class method for creating, appending and returning a new style sheet...
    value: function _createNewStyleSheet() {
      // Create style tag..
      var style = document.createElement('style'); // Give the style sheet an id so it may be accessed by other classes...

      style.id = 'valence-stylesheet'; // style.localName = 'valence-stylesheet.css'
      // Append a textNode to it. Apparently, this is a webkit hack? More research needed...

      style.appendChild(document.createTextNode("")); // Append style tag to the head of the current doc's dom...

      document.head.appendChild(style); //

      return style.sheet;
    } //DEPRECATED: Not needed for now....
    // Internal Class method for dynamically inserting css rules into a given sheet

  }, {
    key: "_insertCSS",
    value: function _insertCSS(sheet, selector, rules) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if ('insertRule' in sheet) {
        if (index) {
          // Use the sheet object method insertRule if available, otherwise, use addRule....
          sheet.insertRule("".concat(selector, " { ").concat(rules, " }"), index);
        } else {
          sheet.insertRule("".concat(selector, " { ").concat(rules, " }"));
        }
      } else if ('addRule' in sheet) {
        sheet.addRule(selector, rules, 1);
      }
    }
    /* A public static method for parsing a css literal, and splitting it into an
    array of separate rules, for inserting using the sheet.inserRule() method. Using
    the `css-tree` css parser/generator here....*/

  }, {
    key: "separateStyleRules",
    value: function separateStyleRules(cssLiteral) {
      /* Declare an array for our separated rules, an @rule flag, and also,
      generate our ast css tree...*/
      var rules = [],
          atRule = false,
          // AST tree...
      ast = cssTree.parse(cssLiteral, {
        // Log parsing errors...
        onParseError: function onParseError(e) {
          log(e.formattedMessage, ['white', 'red']);
        }
      }); // Walk the css ast tree, stopping at rule nodes to regenerate and add to an array...

      cssTree.walk(ast, {
        enter: function enter(node) {
          // log('#####################################-CSS AST NODE-########################################', ['yellow', 'red']);// log(node.type, 'orange')
          // If the node type is of Rule or @rule, meaning @media etc., ......
          if (node.type === 'Rule' || node.type === 'Atrule') {
            // Regenerate valid css from the rule...
            var rule = cssTree.generate(node);
            /* If the atRule flag is still false and if the regen'd rule doesn't equal a
            possibly set atRule css string, ......*/

            if (!!!atRule && rule !== atRule) {
              // And if the node type is `Atrule`....
              if (node.type === 'Atrule') {
                // Set the `atRule` flag to the regen'd @Rule block, including selectors....
                atRule = cssTree.generate(node.block.children.head.data); // log(cssTree.generate(node.block.children.head.data))
              } // Push the regen'd rule to the rules array....


              rules.push(rule);
            }
          }
        }
      }); // Return the array of rules...

      return rules;
    } // An internal static class method for creating usable css from a tagged template literal....

  }, {
    key: "_createCSS",
    value: function _createCSS(ttlObj, selector) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var css;
      /* If we are working on an extended component, execute interpolation functions,
      bring in the parent's styles, and finally, process the resulting css with 'stylis'...
      */
      // Is this an extended component? ....

      css = ttlObj.extended ?
      /* If so, go ahead and execute the interpolation functions with superProps, ...
      Also check if we have interpolations in the child component, and if so, execute them and
      combine the resulting css blocks, and process with Stylis.
       */
      stylis(selector, "".concat(_interpolationStation(ttlObj["super"], CSS._superProps[ttlObj.superId][1]), "\n         ").concat(_interpolationStation(ttlObj.array, props)))
      /* If not.......*/
      :
      /* If not, combine the resulting
      parent code block and with the untouched child block, and process with Stylis...
      */
      stylis(selector, // Execute interpolations, with props, process with Stylis ....*/
      _interpolationStation(ttlObj.array, props)); // if (ttlObj.extended) {
      //   log('X Styles', 'tomato')
      //   log(css, 'tomato')
      // }
      // Return css....

      return css;
    } // A static method for processing css with stylis...

  }, {
    key: "processStyles",
    value: function processStyles(tempLit, selector) {
      // Weave in interpolations, process with stylis....
      return stylis(selector, _interpolationStation(tempLit));
    }
    /* A private method for appending a CSS rule or an array of CSS rules to the default stylesheet,
    one by one.*/

  }, {
    key: "_insertRules",
    value: function _insertRules(rules) {
      var _this = this;

      var css; //

      if (Is.array(rules)) {
        rules.forEach(function (rule) {
          if (_this._assumptions.directChildNesting) {
            css = addRightArrowToSelector(rule);
          } else {
            css = rule;
          }
          /* Adding a right arrow ">", between parent and child selectors so that styles
          may be overridden down the DOM tree... */


          CSS._styleSheet = css;
          /* The _styleSheet setter will create a new sheet and append to a new style tag
          if necessary, then insert the given css..*/
        });
      } else {
        if (this._assumptions.directChildNesting) {
          css = addRightArrowToSelector(rules);
        } else {
          css = rules;
        } // Insert rule..


        CSS._styleSheet = css;
      }
    } // A Public method for inserting global styles into the stylesheet...

  }, {
    key: "insertGlobal",
    value: function insertGlobal(obj) {
      var css = CSS._createCSS(obj, ' '); // Separate and insert rules...


      CSS._insertRules(this.separateStyleRules(css));
    } // An internal static method for first, creating a 10 digit hash from a string of
    // css, then a 7 digit alphabetical string from the hash....

  }, {
    key: "_createKeyframesName",
    value: function _createKeyframesName(array) {
      // Create string from template array...
      var string = array[0].join('').replace(/\s|\n/g, ''); // Create and return unique id...

      return alphaStringFromHash(murmurHash(string));
    }
    /* an instance constructor for the keyframes class.... Returns the instance and
    inserts the rules into the stylesheet...*/

  }, {
    key: "keyframes",
    value: function keyframes(obj) {
      // Create a css string from the objects array... and remove whitespace...
      var css,
          // Create hash from string, and then a name from the hash....
      name = CSS._createKeyframesName(obj.array),
          // Create some usable css ...
      object = {};

      object.selector = "@keyframes ".concat(name);
      object.code = obj.array.join(''); // Use the computed keyframes property to generate our animation code...

      CSS._keyframesCSS = object; // Insert the rules...

      css = CSS._keyframesCSS;

      CSS._insertRules(css); // Return a keframes instance....


      return new Keyframes(name, css);
    }
    /* Class method dealing with adding styles to the component. If a tag
     is present in the arguments, the style is appended to the head of the doc,
    otherwise, it is appended to the shadow root...down the line....*/

  }, {
    key: "addStyles",
    value: function addStyles(appendStyle, cTag, eTag, props, tagTempLit) {
      // Declare vars...
      var selector = "[flareid=".concat(props.flareId, "]"),
          styleTag = eTag === 'div' ? selector : "".concat(selector, " ").concat(eTag),
          css; // If we are not appending style to a shadow root...

      if (appendStyle) {
        // Process the css...
        css = CSS._createCSS(tagTempLit, styleTag, props); // Split rules into an array. Insert into style sheet...

        CSS._insertRules(this.separateStyleRules(css));
      } else {
        css = eTag === 'div' ? CSS._createCSS(tagTempLit, ':host', props) : CSS._createCSS(tagTempLit, ":host > ".concat(eTag), props); // Return function that returns style related html...

        return function () {
          return x("style", null, css);
        };
      }
    }
  }, {
    key: "_keyframesCSS",
    // A getter for the keyframes template...
    get: function get() {
      return CSS._template;
    } // A setter for the keyframes template...
    ,
    set: function set(obj) {
      CSS._template = "".concat(obj.selector, " {\n      ").concat(obj.code, "\n    }");
    } // A property to hold the default stylesheet of the app...
    // static _sheet = document.getElementById('valence-stylesheet')

  }, {
    key: "_styleSheet",
    // A getter for _sheet...
    get: function get() {
      // return the sheet!
      return CSS._sheet;
    } // A setter for _sheet... Setting sheet appends a CSS rule to it....
    ,
    set: function set(rule) {
      // If there is no sheet, create one...
      if (!CSS._sheet || valenceGlobals.resetStyleSheet) {
        CSS._sheet = CSS._createNewStyleSheet();

        if (valenceGlobals.resetStyleSheet) {
          // Set a flag to signal a valence stylesheet reset...
          valenceGlobals.resetStyleSheet = false;
        }
      } // Insert given rule into stylesheet...


      CSS._sheet.insertRule(rule);
    }
  }]);

  return CSS;
}();

_rollupPluginBabelHelpers._defineProperty(CSS, "_assumptions", {
  directChildNesting: false
});

_rollupPluginBabelHelpers._defineProperty(CSS, "_superProps", {});

_rollupPluginBabelHelpers._defineProperty(CSS, "_template", "");

_rollupPluginBabelHelpers._defineProperty(CSS, "_sheet", false);

stylis.set({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false
});

var Component =
/*#__PURE__*/
function (_HTMLElement) {
  _rollupPluginBabelHelpers._inherits(Component, _HTMLElement);

  // Instance vars....
  // Internal instance vars...
  // Ctor...
  function Component() {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, Component);

    _this = _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(Component).call(this)); // Internal state...

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "state", null);

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "props", null);

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "shadowRoot", null);

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "_state", null);

    _rollupPluginBabelHelpers._defineProperty(_rollupPluginBabelHelpers._assertThisInitialized(_this), "_style", null);

    _this._state = {
      mounted: false
    }; // Public state...

    _this.state = {}; // // Properties...

    _this.props = _this.observedAttributes; // Set lifecycle listeners...

    DATA.ComponentLifecycleEvents.forEach(function (ev) {
      _this.addEventListener(ev, function (e) {
        _this[e.type](e.detail);
      });
    }, _rollupPluginBabelHelpers._assertThisInitialized(_this)); // Dispatch componentWillMount event...
    // Events.fire('componentWillMount', this)
    // this.componentWillMount()

    return _this;
  }
  /*
   * Public API...
   * * * * * * * *
   */
  // Class method for immutably setting component state...


  _rollupPluginBabelHelpers._createClass(Component, [{
    key: "setState",
    value: function setState(obj) {
      // Convert incoming object to array of entries to be manipulated by array.reduce...
      var newStateArray = Object.entries(obj); // Combine old/new state and set on state object...

      this.state = newStateArray.reduce(function (newState, stateEntry) {
        return _rollupPluginBabelHelpers._objectSpread2({}, newState, _rollupPluginBabelHelpers._defineProperty({}, stateEntry[0], stateEntry[1]));
      }, this.state);
      /* Now that state is reset, trigger a render cycle... IF the component is a stand-alone,
      do not trigger an update cycle...*/

      if (isRealized(this)) {
        this._update();
      } // Return state object...


      return this.state;
    }
    /*
     * The following methods are callbacks for various component
     * lifecycle events, and are intended to be overridden when
     * components are defined by the user...
     */
    // This method is for doing any necessary setting up just before the component
    // mounts. The event is fired just before it's constructor returns, see above...

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      log('componentWillMount', ['white', 'blue']);
      return;
    } // This method is for doing any component work just after mounting occurs. It is
    // called by this.connectedCallback() (see below)...

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      log('componentDidMount', ['white', 'blue']);
      return;
    } // This event is fired just before an imminent unmounting of a
    // component occurs. The event is fired in Valence.js at Valence.unMount()
    // line 140 & also in Form.js at Form.updateElement(), line 107...

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      log('componentWillUnmount', ['white', 'red']);
      return;
    } // This method is called by this.disconnectedCallback() (see below), just after unmounting...

  }, {
    key: "componentDidUnmount",
    value: function componentDidUnmount() {
      log('componentDidUnmount', ['white', 'red']);
      return;
    } // This callback is called just before the component recieves props. The event
    // is fired in Element.js at Element.createElement(), line 60, when the
    // component is created, and also in Form.js at Form.updateElement(), line 127,
    // when the component is updating...

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      log('componentDidRecieveProps', ['white', 'orange']);
      return;
    } // This callback is called just after the component confirms an update should
    // take place with `shouldComponentUpdate`, and just before the update occurs. It's
    // corresponding event is fired in this._update(), line 62...

  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      log('componentWillUpdate', ['white', 'green']);
      return;
    } // This callback is called just after the component completes the update process.
    // It's corresponding event is fired in this._update(), line 70...

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props) {
      log('componentWillUpdate', ['white', 'green']);
      return;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, name, oldVal, newVal) {
      log('componentShouldUpdate', ['white', 'yellow']);
      return true;
    }
    /* This method is called by connectedCallback, and can be used to do any work
    once the element is connected...*/
    //   propsCallback() {
    // // To be overridden......
    //     return
    //   }

    /* This method is called by attributesChangedCallback, and can be used to do any work
    once attributes change...*/

  }, {
    key: "onChange",
    value: function onChange() {
      // To be overridden......
      return;
    } // Component render method...

  }, {
    key: "render",
    value: function render(props) {
      // Must be overridden with returned markup...
      return; // ...Markup Here....
    }
    /*
    ***    Semi Internal/Public Component Authoring Methods.....
    ***************************************************************>>>>>
    */
    // An Instance method for setting attributes of custom elements...

  }, {
    key: "registerProps",
    value: function registerProps(props) {
      var _this2 = this;

      // Convert props object to array....
      Object.entries(props).forEach(function (prop) {
        // Set the default prop value on it's instance variable...
        _this2["_".concat(prop[0])] = prop[1]["default"]; // If we don't already have a value for the prop on the props object, set the default...

        if (!!!_this2.props["".concat(prop[0])]) {
          _this2.props["".concat(prop[0])] = prop[1]["default"];
        } // Define the props as HTML attributes...


        Object.defineProperties(_this2, _rollupPluginBabelHelpers._defineProperty({}, prop[0], {
          get: function get() {
            return this["_".concat(prop[0])];
          },
          set: function set(val) {
            if (val) {
              this.setAttribute(prop[0], val);
              this["_".concat(prop[0])] = val;
            } else {
              this.removeAttribute(prop[0]);
            }
          },
          enumerable: true,
          configurable: true
        }));
      });
    } // An instance method for updating element props with user defined props....

  }, {
    key: "applyUserProps",
    value: function applyUserProps(observed) {
      for (var _i = 0, _Object$keys = Object.keys(observed); _i < _Object$keys.length; _i++) {
        var prop = _Object$keys[_i];

        if (prop in this) {
          /* Seem to be having an issue here with the this.gutters props/attribute. It
          seems that we are unable to change the property from the default value to anything
          falsey. I was not able to figure out exactly why, but I did find a workaround,
          Below we are going directly to the backing variable, an instance var that all
          the props need in order to set a default value. The getter for the prop returns
          this value, whose name is in the format `_ + propName`. */
          this["_".concat(prop)] = observed[prop];
          this.props["".concat(prop)] = observed[prop];
        }
      }
    } // Instance method for Component authors that aids in ShadowDOM creation....

  }, {
    key: "shadowCaster",
    value: function shadowCaster(userOptions) {
      var options = {
        mode: 'open',
        slot: true
      },
          _mergeData = mergeData(options, userOptions),
          mode = _mergeData.mode,
          slot = _mergeData.slot,
          shadowRoot = this.attachShadow({
        mode: mode
      }); // If a slot is truthy


      if (slot) {
        // Create a slot element...
        var slotEl = document.createElement('slot'); // If slot is an object, and has a name... pass it on to the element...

        if (slot.name) {
          slotEl.name = slot.name;
        } // Append the slot to this element...


        shadowRoot.appendChild(slotEl);
      }

      return shadowRoot;
    } // Instance method for Component authors that aids in attaching ShadowDOM tree to root....

  }, {
    key: "buildShadowTree",
    value: function buildShadowTree(shadowRoot, dom) {
      // Create usable elements from vDOM, append to shadow root...
      return dom.children.map(Node.createNode, Node).forEach(shadowRoot.appendChild, this);
    } // Instance method for Component authors that aids in slot element creation....

  }, {
    key: "addSlots",
    value: function addSlots(root) {
      var slots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // If an object is passed in....
      if (slots) {
        Object.values(slots).forEach(function (val) {
          // Get a slot...
          var slot = document.createElement('slot'); // Give it a name...

          slot.name = val; // Attach slot to root....

          root.appendChild(slot);
        });
      } else {
        root.appendChild(document.createElement('slot'));
      } // Return the root....


      return root;
    } // Instance method for Component authors that aids in adding styles to componentsn....

  }, {
    key: "addStyles",
    value: function addStyles(root, styles) {
      // Create style el....
      var style = document.createElement('style'); // Process styles and append to style el...

      style.innerHTML = stylis('', styles); // Append style el to shadow root...

      root.appendChild(style); // Return the root...

      return style;
    }
    /* Instance method for accessing the default valence library stylesheet, or
    creating a new one if none exists...*/

  }, {
    key: "getValenceStyleSheet",
    value: function getValenceStyleSheet() {
      // Attempt to get the default stylesheet...
      var sheet = queryDOM('#valence-stylesheet'); // If it exists, ....

      if (!!sheet) {
        // Return it...
        return sheet; // Otherwise...
      } else {
        // Create a new one with the above id...
        return CSS._createNewStyleSheet();
      }
    }
    /* A private method for appending a CSS rule or an array of CSS rules to the default stylesheet,
    one by one.*/

  }, {
    key: "insertRules",
    value: function insertRules(ttl, style) {
      var atBeginning = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Separate the ttl into individual rules....
      var rules = CSS.separateStyleRules(ttl),
          sheet = style.sheet,
          end = sheet.rules.length; // log('RULES');dir(rules)

      if (isArray(rules)) {
        // Insert rules...
        rules.forEach(function (rule) {
          if (atBeginning) {
            style.sheet.insertRule(rule);
          } else {
            style.sheet.insertRule(rule, end);
          }
        });
      } else {
        // Insert rule..
        if (atBeginning) {
          style.sheet.insertRule(rule);
        } else {
          style.sheet.insertRule(rule, end);
        }
      }
    }
    /* An instance method for deleting a CSS rule from the component style sheet at
    a specific index..... */

  }, {
    key: "deleteRule",
    value: function deleteRule(index, style) {
      return style.sheet.deleteRule(index);
    } // Instance method for processing css with stylis...

  }, {
    key: "processStyles",
    value: function processStyles(css) {
      return stylis(':host', css);
    } // Helper method for adding classes to the component's classList....

  }, {
    key: "addClass",
    value: function addClass(class_) {
      return this.classList.add(class_);
    } // Helper method for removing classes from the component's classList....

  }, {
    key: "removeClass",
    value: function removeClass(class_) {
      return this.classList.remove(class_);
    } // Helper method for removing classes from the component's classList....

  }, {
    key: "replaceClass",
    value: function replaceClass(oldie, newie) {
      // Remove old...
      this.classList.remove(oldie); // Add new...

      this.classList.add(newie); // Return the list...

      return this.classList;
    } /// Class method for immutably setting internal component state...

  }, {
    key: "_setState",
    value: function _setState(obj) {
      // Convert incoming object to array of entries to be manipulated by array.reduce...
      var newStateArray = Object.entries(obj); // Combine old/new state and set on state object...

      this._state = newStateArray.reduce(function (newState, stateEntry) {
        return _rollupPluginBabelHelpers._objectSpread2({}, newState, _rollupPluginBabelHelpers._defineProperty({}, stateEntry[0], stateEntry[1]));
      }, this._state); // Return state object...

      return this._state;
    }
    /*
     * Private Methods....
     * * * * * * * * * * *
     */
    //FIXME: Figure out how to add nextProps here.....VVVV **DONE?**
    // Private class method for diffing and patching the dom...

  }, {
    key: "_update",
    value: function _update() {
      if (this.shouldComponentUpdate(this.props, this.state)) {
        // Fire componentWillUpdate event...
        Events.fire('componentWillUpdate', this, {
          'nextProps': this.props,
          'state': this.state
        }); // Update the component tree...

        this.form.updateDOM(this.render(this.props)); // Fire componentDidUpdate event...

        Events.fire('componentDidUpdate', this, {
          'props': this.props,
          'state': this.state
        });
      }
    } // A private method for appending the child nodes of a component...

  }, {
    key: "_appendChildren",
    value: function _appendChildren(props) {
      /* Declare regexp that will help is determine whether or not the render() method
      has been overridden or not.... We also need the method's source code to inspect....*/
      var renderRE = /...Markup Here..../g,
          renderFuncSource = this.render.toString(); // Set props on a class variable...
      // this.props = props

      /* If we don't get a match with the regexp, then the method has been overridden
      with markup that needs appended ....*/

      if (!renderRE.test(renderFuncSource) && !Component._assumptions.developmentMode) {
        // Render component children....
        var offSpring = this.render(this.props); //log('#####################################-offSpring-########################################', ['', '']);dir(offSpring)
        // If offSpring is a fragment...

        if (offSpring.type.name === 'Fragment') {
          // Confirm that shadow root is not null....
          if (this.shadowRoot !== null) {
            // log('ShadowRoot!', ['green', 'yellow'])
            // Create usable dom elements from the vDOM fragment data...
            var array = offSpring.children.map(Node.createNode, Node); // Append all fragment elements to the shadow root...

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _el = _step.value;

                if (_el !== undefined) {
                  this.shadowRoot.appendChild(_el);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            // log('No shadowRoot!', ['green', 'yellow'])
            // Append children to component....
            return offSpring.children.map(Node.createNode, Node).forEach(this.appendChild, this);
          }
        } else {
          return this.appendChild(Node.createNode(offSpring));
        }
      }
    } // Used as an internal cue for updating, this method is built into the custom
    // elements v1 API...

  }, {
    key: "attributesChangedCallback",
    value: function attributesChangedCallback(name, oldVal, newVal) {
      console.info("the attribute \"".concat(name, "\" changed from \"").concat(olVal, "\" to \"").concat(newVal, "\".")); // Call propsChangedCallback.....

      onChange(name, oldVal, newVal); // Confirm an update with sCU(), then trigger a diff and patch cycle...

      if (this.shouldComponentUpdate(null, null, name, oldVal, newVal)) {
        this._update(this.render(this.props));
      }
    } // Used internally for post-mount operations, this method is built into the custom
    // elements v1 API...

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // Set internal state variable `mounted`....
      this._setState({
        mounted: true
      });
      /* Technically the component is already mounted here, but it's DOM tree has yet
       * to be added. This is the closest point in the component lifecycle that I can
       * get thus far to a component will mount event.. As you can see below, once
       * the component's children are added, we consider it to be fully `mounted`
       * and fire it's `didMount` event....
       */
      // Call willMount callback...


      this.componentWillMount(); // Append the component's children...

      this._appendChildren(); // Initialize event listeners...
      // this._initializeEvents()
      // Do any prop related work here...
      // this.propsCallback()
      // Call didMount callback...


      this.componentDidMount();
    } // Used internally for post-unmount operations, this method is built into the custom
    // elements v1 API...

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.componentDidUnmount();
    } /// Config options...

  }], [{
    key: "set",
    // An internal method that returns the combination of the CSS and Flare class's assumptions
    // this class's assumptions... It's ultimately the end of a line of merged config objects...
    value: function set(userAssumptions) {
      this._assumptions = mergeData(this._assumptions, userAssumptions);
      return this._assumptions;
    } // A static public method used internally to create a Valence component...

  }, {
    key: "createComponent",
    value: function createComponent(component, props, children) {
      // Pre-declare inner functions, mainly for style considerations...
      var appendChildren,
          shadowBool,
          tagName = component[2]; // Create the DOM tree for the component....

      appendChildren = function appendChildren(parent) {
        var shadow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        //FIXME: This is where the old code is being use instead of the new, during an HMR reload....
        // If elem is a shadowRoot, give it a slot...
        if (shadow) {
          var slot = document.createElement('slot');
          parent.appendChild(slot);
        } // Append component children...
        // Create child node(s) from the component...


        var offSpring = Node.createNode(component[1](props)); // If the child is a fragment, we may have an array, so check for that....

        if (isArray(offSpring)) {
          // If array, Append nodes...
          offSpring.forEach(function (child) {
            parent.appendChild(child);
          }); // Otherwise, Append node...
        } else {
          return parent.appendChild(offSpring);
        }
      }; // NO LONGER IN USE... CURRENTLY USING BUILT IN JS REFLECT CLASS....
      // Using a metaprogramming technique called reflection via javascript's evaluation
      // function to create dynamic element registration.... Will check out es6's new
      // metaprogramming features (Reflect, Symbols and Proxy) to see If this can be
      // accomplished without using eval... *** DONE ***
      //     reflect =(code)=> {
      // // But for now...
      //       return eval(code)
      //     }
      // Return boolean value for shadow...


      shadowBool = function shadowBool(arr) {
        return arr.reduce(function (shadow, keyVal, index) {
          return keyVal.indexOf('shadow') == -1 ? shadow : index;
        }, false);
      };
      /*
      ==== Define custom element/web component...
      ====================================================================>>>
      * Doing a bit of finagling with the native-shim to make things work
      * here.. When a web component is defined in a manner as below,
      * the shim cannot be used, and we must be using a native implementation
      * of HTMLElement. The following 2 lines accomplish both. Both must
      * be reset (the shim and patched HTMLElement used) in order for es6
      * class definition of custom elements to work.. and they are
      * just after every custom element's call to HTMLElement from
      * document.createElement() for element instantiation.........
      */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // log('FLIPPING SWITCHES2', 'blue', true)

      var _HTMLComponent,
          eListeners = [],
          customProps = [],
          shadow,
          obj; // Get attribute names and Listeners...


      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners; // Determine if shadow option is set or not...

        shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : // This is the default setting for Valence component shadow dom....
        false;
      } // Declare self here so that it may be used in this scope, below
      // the ctor definition...


      var self; // Define constructor of the custom element....

      _HTMLComponent = function HTMLComponent() {
        //Self will function as `this` for this constructor... Determine the type of element
        //to construct and go...
        self = Reflect.construct(HTMLElement, [], _HTMLComponent); // Use `self` as this to add props to the constructor...

        if (shadow && !props.noChild) {
          // Create shadow root and pass it in to append children function...
          var shadowRoot = self.attachShadow({
            mode: 'open'
          });
          appendChildren(shadowRoot, true);
        } // Add event listeners...


        if (eListeners.length > 0) {
          eListeners.forEach(function (entry) {
            return self.addEventListener(entry[0], self[entry[1]]);
          }, self);
        }

        return self;
      }; // Add superclass prototype...


      _HTMLComponent.prototype = Object.create(HTMLElement.prototype); // Add constructor...

      _HTMLComponent.prototype.constructor = _HTMLComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      _HTMLComponent.prototype.connectedCallback = function () {
        if (!Component._assumptions.developmentMode) {
          // If we are in production mode, log out to console that it is so......
          log('PRODUCTION MODE', 'orange'); // Append component DOM.....

          if (!shadow && !props.noChild) {
            appendChildren(self);
          }
        } // Check for cleanHTML prop....


        if (props.cleanHTML) {
          //log('DOMPURIFY', 'yellow')// log(DOMPurify.sanitize('<img src=x onerror=alert(1)//>'))
          self.insertAdjacentHTML('afterbegin', DOMPurify.sanitize(props.cleanHTML));
        }
      }; // Return the component constructor...


      return _HTMLComponent;
    } // End of Class....

  }]);

  return Component;
}(_rollupPluginBabelHelpers._wrapNativeSuper(HTMLElement));

_rollupPluginBabelHelpers._defineProperty(Component, "_assumptions", {} //
);

var Area =
/*#__PURE__*/
function () {
  function Area() {
    _rollupPluginBabelHelpers._classCallCheck(this, Area);
  }

  _rollupPluginBabelHelpers._createClass(Area, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an area...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare area element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLAreaComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          area,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLAreaElement...


      area = document.createElement('area'); // Some default settings for area elements...
      // Set flare identifier flag..

      area.flare = true; // Pass props from flare component declaration on to the inner area el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in area el object...
        if (key in area) {
          // Pass on the ones that match...
          // log(`${key} in area`, ['yellow', 'bold'])
          area["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in area.style) {
          // log(`${key} in area`, ['pink', 'bold'])
          // Put them here...
          area.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       area.textContent = props.-----
      //       // area.style.margin = '5'
      //     }
      // The area component element's constructor definition...


      _HTMLAreaComponent = function HTMLAreaComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLAreaComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(area); // Create a node from the template function, and append to shadowRoot....

          Area._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLAreaComponent.prototype = Object.create(HTMLAreaElement.prototype); // Add constructor...

      _HTMLAreaComponent.prototype.constructor = _HTMLAreaComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLAreaComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLAreaComponent.prototype.connectedCallback = function () {
          self.appendChild(area);
        };
      } // Return component to the caller...


      return _HTMLAreaComponent;
    }
  }]);

  return Area;
}();

_rollupPluginBabelHelpers._defineProperty(Area, "_tempLiteral", ":host {\n\n                        }");

var Aside =
/*#__PURE__*/
function () {
  function Aside() {
    _rollupPluginBabelHelpers._classCallCheck(this, Aside);
  }

  _rollupPluginBabelHelpers._createClass(Aside, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an aside...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare aside element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLAsideComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          aside,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLAsideElement...


      aside = document.createElement('aside'); // Some default settings for aside elements...
      // Set flare identifier flag..

      aside.flare = true; // Pass props from flare component declaration on to the inner aside el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in aside el object...
        if (key in aside) {
          // Pass on the ones that match...
          // log(`${key} in aside`, ['yellow', 'bold'])
          aside["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in aside.style) {
          // log(`${key} in aside`, ['pink', 'bold'])
          // Put them here...
          aside.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       aside.textContent = props.-----
      //       // aside.style.margin = '5'
      //     }
      // The aside component element's constructor definition...


      _HTMLAsideComponent = function HTMLAsideComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLAsideComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(aside); // Create a node from the template function, and append to shadowRoot....

          Aside._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLAsideComponent.prototype = Object.create(HTMLAsideElement.prototype); // Add constructor...

      _HTMLAsideComponent.prototype.constructor = _HTMLAsideComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLAsideComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLAsideComponent.prototype.connectedCallback = function () {
          self.appendChild(aside);
        };
      } // Return component to the caller...


      return _HTMLAsideComponent;
    }
  }]);

  return Aside;
}();

_rollupPluginBabelHelpers._defineProperty(Aside, "_tempLiteral", ":host {\n\n                        }");

var dir$1 = console.dir;

var Button =
/*#__PURE__*/
function () {
  function Button() {
    _rollupPluginBabelHelpers._classCallCheck(this, Button);
  }

  _rollupPluginBabelHelpers._createClass(Button, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for a button...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare button element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      log('props', ['orange', 'bold']);
      dir$1(props); // Declarations..

      var _HTMLButtonComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          button,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLButtonElement...


      button = document.createElement('button'); // Some default settings for button elements...
      // Set flare identifier flag..
      // button.flare = true
      // if (props.type == 'text') {
      //
      // }
      // Pass props from flare component declaration on to the inner button el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in button el object...
        if (key in button) {
          // Pass on the ones that match...
          log("".concat(key, " in button"), ['yellow', 'bold']);
          button["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in button.style) {
          log("".concat(key, " in button"), ['pink', 'bold']); // Put them here...

          button.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'label' attribute,


      if ('label' in props) {
        button.textContent = props.label;
        button.style.fontSize = '24px'; // button.style.margin = '5'
      } // The button component element's constructor definition...


      _HTMLButtonComponent = function HTMLButtonComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLButtonComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(button); // Create a node from the template function, and append to shadowRoot....

          Button._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLButtonComponent.prototype = Object.create(HTMLButtonElement.prototype); // Add constructor...

      _HTMLButtonComponent.prototype.constructor = _HTMLButtonComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLButtonComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLButtonComponent.prototype.connectedCallback = function () {
          log('ConnectedCallback', ['red', 'bold']);
          dir$1(self);

          if (self) {
            log('self', ['yellow', 'bold']);
            self.appendChild(button); // Add a few default styles for the outer root element....

            self.style.width = '100%';
            self.style.paddingLeft = '10px';
            self.style.paddingRight = '10px';
            self.style.marginLeft = 'auto';
            self.style.marginRight = 'auto';
          } else if (this) {
            log('this', ['yellow', 'bold']);
            dir$1(this);
            this.appendChild(button); // Add a few default styles for the outer root element....

            this.style.width = '100%';
            this.style.paddingLeft = '10px';
            this.style.paddingRight = '10px';
            this.style.marginLeft = 'auto';
            this.style.marginRight = 'auto';
          } else {
            throw Error('ConnectedCallbackError: A problem has occured while appending component children.');
          }
        };
      } // Return component to the caller...


      return _HTMLButtonComponent;
    }
  }]);

  return Button;
}();

_rollupPluginBabelHelpers._defineProperty(Button, "_tempLiteral", ":host {\n                          background-color: black;\n                          border-radius: 5%;\n                        }");

var Col =
/*#__PURE__*/
function () {
  function Col() {
    _rollupPluginBabelHelpers._classCallCheck(this, Col);
  }

  _rollupPluginBabelHelpers._createClass(Col, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an col...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare col element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLColComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          col,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLColElement...


      col = document.createElement('col'); // Some default settings for col elements...
      // Set flare identifier flag..

      col.flare = true; // Pass props from flare component declaration on to the inner col el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in col el object...
        if (key in col) {
          // Pass on the ones that match...
          // log(`${key} in col`, ['yellow', 'bold'])
          col["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in col.style) {
          // log(`${key} in col`, ['pink', 'bold'])
          // Put them here...
          col.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       col.textContent = props.-----
      //       // col.style.margin = '5'
      //     }
      // The col component element's constructor definition...


      _HTMLColComponent = function HTMLColComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLColComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(col); // Create a node from the template function, and append to shadowRoot....

          Col._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLColComponent.prototype = Object.create(HTMLColElement.prototype); // Add constructor...

      _HTMLColComponent.prototype.constructor = _HTMLColComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLColComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLColComponent.prototype.connectedCallback = function () {
          self.appendChild(col);
        };
      } // Return component to the caller...


      return _HTMLColComponent;
    }
  }]);

  return Col;
}();

_rollupPluginBabelHelpers._defineProperty(Col, "_tempLiteral", ":host {\n\n                        }");

var Colgroup =
/*#__PURE__*/
function () {
  function Colgroup() {
    _rollupPluginBabelHelpers._classCallCheck(this, Colgroup);
  }

  _rollupPluginBabelHelpers._createClass(Colgroup, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an colgroup...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare colgroup element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLColgroupComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          colgroup,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLColgroupElement...


      colgroup = document.createElement('colgroup'); // Some default settings for colgroup elements...
      // Set flare identifier flag..

      colgroup.flare = true; // Pass props from flare component declaration on to the inner colgroup el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in colgroup el object...
        if (key in colgroup) {
          // Pass on the ones that match...
          // log(`${key} in colgroup`, ['yellow', 'bold'])
          colgroup["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in colgroup.style) {
          // log(`${key} in colgroup`, ['pink', 'bold'])
          // Put them here...
          colgroup.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       colgroup.textContent = props.-----
      //       // colgroup.style.margin = '5'
      //     }
      // The colgroup component element's constructor definition...


      _HTMLColgroupComponent = function HTMLColgroupComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLColgroupComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(colgroup); // Create a node from the template function, and append to shadowRoot....

          Colgroup._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLColgroupComponent.prototype = Object.create(HTMLColgroupElement.prototype); // Add constructor...

      _HTMLColgroupComponent.prototype.constructor = _HTMLColgroupComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLColgroupComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLColgroupComponent.prototype.connectedCallback = function () {
          self.appendChild(colgroup);
        };
      } // Return component to the caller...


      return _HTMLColgroupComponent;
    }
  }]);

  return Colgroup;
}();

_rollupPluginBabelHelpers._defineProperty(Colgroup, "_tempLiteral", ":host {\n\n                        }");

var Footer =
/*#__PURE__*/
function () {
  function Footer() {
    _rollupPluginBabelHelpers._classCallCheck(this, Footer);
  }

  _rollupPluginBabelHelpers._createClass(Footer, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an footer...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare footer element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLFooterComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          footer,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLFooterElement...


      footer = document.createElement('footer'); // Some default settings for footer elements...
      // Set flare identifier flag..

      footer.flare = true; // Pass props from flare component declaration on to the inner footer el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in footer el object...
        if (key in footer) {
          // Pass on the ones that match...
          // log(`${key} in footer`, ['yellow', 'bold'])
          footer["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in footer.style) {
          // log(`${key} in footer`, ['pink', 'bold'])
          // Put them here...
          footer.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       footer.textContent = props.-----
      //       // footer.style.margin = '5'
      //     }
      // The footer component element's constructor definition...


      _HTMLFooterComponent = function HTMLFooterComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLFooterComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(footer); // Create a node from the template function, and append to shadowRoot....

          Footer._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLFooterComponent.prototype = Object.create(HTMLFooterElement.prototype); // Add constructor...

      _HTMLFooterComponent.prototype.constructor = _HTMLFooterComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLFooterComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLFooterComponent.prototype.connectedCallback = function () {
          self.appendChild(footer);
        };
      } // Return component to the caller...


      return _HTMLFooterComponent;
    }
  }]);

  return Footer;
}();

_rollupPluginBabelHelpers._defineProperty(Footer, "_tempLiteral", ":host {\n\n                        }");

var dir$2 = console.dir;

var H1 =
/*#__PURE__*/
function () {
  function H1() {
    _rollupPluginBabelHelpers._classCallCheck(this, H1);
  }

  _rollupPluginBabelHelpers._createClass(H1, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an h1...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare h1 element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      log('props', ['orange', 'bold']);
      dir$2(props); // Declarations..

      var _HTMLH1Component,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          h1,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLH1Element...


      h1 = document.createElement('h1'); // Some default settings for h1 elements...
      // Set flare identifier flag..

      h1.flare = true; // if (props.type == 'text') {
      //
      // }
      // Pass props from flare component declaration on to the inner h1 el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in h1 el object...
        if (key in h1) {
          // Pass on the ones that match...
          log("".concat(key, " in h1"), ['yellow', 'bold']);
          h1["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in h1.style) {
          log("".concat(key, " in h1"), ['pink', 'bold']); // Put them here...

          h1.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        h6.textContent = props.content; // h6.style.margin = '5'
      } // The h1 component element's constructor definition...


      _HTMLH1Component = function HTMLH1Component() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLH1Component);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(h1); // Create a node from the template function, and append to shadowRoot....

          H1._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLH1Component.prototype = Object.create(HTMLHeaderElement.prototype); // Add constructor...

      _HTMLH1Component.prototype.constructor = _HTMLH1Component; // Register event listener methods..

      Events.registerCallbacks(_HTMLH1Component, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLH1Component.prototype.connectedCallback = function () {
          self.appendChild(h1);
        };
      } // Return component to the caller...


      return _HTMLH1Component;
    }
  }]);

  return H1;
}();

_rollupPluginBabelHelpers._defineProperty(H1, "_tempLiteral", ":host {\n                          background-color: black;\n                          border-radius: 5%;\n                        }");

var H2 =
/*#__PURE__*/
function () {
  function H2() {
    _rollupPluginBabelHelpers._classCallCheck(this, H2);
  }

  _rollupPluginBabelHelpers._createClass(H2, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an h2...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare h2 element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLH2Component,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          h2,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLH2Element...


      h2 = document.createElement('h2'); // Some default settings for h2 elements...
      // Set flare identifier flag..

      h2.flare = true; // Pass props from flare component declaration on to the inner h2 el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in h2 el object...
        if (key in h2) {
          // Pass on the ones that match...
          // log(`${key} in h2`, ['yellow', 'bold'])
          h2["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in h2.style) {
          // log(`${key} in h2`, ['pink', 'bold'])
          // Put them here...
          h2.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        h2.textContent = props.content; // h2.style.margin = '5'
      } // The h2 component element's constructor definition...


      _HTMLH2Component = function HTMLH2Component() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLH2Component);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(h2); // Create a node from the template function, and append to shadowRoot....

          H2._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLH2Component.prototype = Object.create(HTMLH2Element.prototype); // Add constructor...

      _HTMLH2Component.prototype.constructor = _HTMLH2Component; // Register event listener methods..

      Events.registerCallbacks(_HTMLH2Component, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLH2Component.prototype.connectedCallback = function () {
          self.appendChild(h2);
        };
      } // Return component to the caller...


      return _HTMLH2Component;
    }
  }]);

  return H2;
}();

_rollupPluginBabelHelpers._defineProperty(H2, "_tempLiteral", ":host {\n\n                        }");

var H3 =
/*#__PURE__*/
function () {
  function H3() {
    _rollupPluginBabelHelpers._classCallCheck(this, H3);
  }

  _rollupPluginBabelHelpers._createClass(H3, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an h3...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare h3 element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLH3Component,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          h3,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLH3Element...


      h3 = document.createElement('h3'); // Some default settings for h3 elements...
      // Set flare identifier flag..

      h3.flare = true; // Pass props from flare component declaration on to the inner h3 el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in h3 el object...
        if (key in h3) {
          // Pass on the ones that match...
          // log(`${key} in h3`, ['yellow', 'bold'])
          h3["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in h3.style) {
          // log(`${key} in h3`, ['pink', 'bold'])
          // Put them here...
          h3.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        h3.textContent = props.content; // h3.style.margin = '5'
      } // The h3 component element's constructor definition...


      _HTMLH3Component = function HTMLH3Component() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLH3Component);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(h3); // Create a node from the template function, and append to shadowRoot....

          H3._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLH3Component.prototype = Object.create(HTMLH3Element.prototype); // Add constructor...

      _HTMLH3Component.prototype.constructor = _HTMLH3Component; // Register event listener methods..

      Events.registerCallbacks(_HTMLH3Component, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLH3Component.prototype.connectedCallback = function () {
          self.appendChild(h3);
        };
      } // Return component to the caller...


      return _HTMLH3Component;
    }
  }]);

  return H3;
}();

_rollupPluginBabelHelpers._defineProperty(H3, "_tempLiteral", ":host {\n\n                        }");

var H4 =
/*#__PURE__*/
function () {
  function H4() {
    _rollupPluginBabelHelpers._classCallCheck(this, H4);
  }

  _rollupPluginBabelHelpers._createClass(H4, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an h4...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare h4 element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLH4Component,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          h4,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLH4Element...


      h4 = document.createElement('h4'); // Some default settings for h4 elements...
      // Set flare identifier flag..

      h4.flare = true; // Pass props from flare component declaration on to the inner h4 el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in h4 el object...
        if (key in h4) {
          // Pass on the ones that match...
          // log(`${key} in h4`, ['yellow', 'bold'])
          h4["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in h4.style) {
          // log(`${key} in h4`, ['pink', 'bold'])
          // Put them here...
          h4.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        h4.textContent = props.content; // h4.style.margin = '5'
      } // The h4 component element's constructor definition...


      _HTMLH4Component = function HTMLH4Component() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLH4Component);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(h4); // Create a node from the template function, and append to shadowRoot....

          H4._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLH4Component.prototype = Object.create(HTMLH4Element.prototype); // Add constructor...

      _HTMLH4Component.prototype.constructor = _HTMLH4Component; // Register event listener methods..

      Events.registerCallbacks(_HTMLH4Component, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLH4Component.prototype.connectedCallback = function () {
          self.appendChild(h4);
        };
      } // Return component to the caller...


      return _HTMLH4Component;
    }
  }]);

  return H4;
}();

_rollupPluginBabelHelpers._defineProperty(H4, "_tempLiteral", ":host {\n\n                        }");

var H5 =
/*#__PURE__*/
function () {
  function H5() {
    _rollupPluginBabelHelpers._classCallCheck(this, H5);
  }

  _rollupPluginBabelHelpers._createClass(H5, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an h5...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare h5 element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLH5Component,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          h5,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLH5Element...


      h5 = document.createElement('h5'); // Some default settings for h5 elements...
      // Set flare identifier flag..

      h5.flare = true; // Pass props from flare component declaration on to the inner h5 el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in h5 el object...
        if (key in h5) {
          // Pass on the ones that match...
          // log(`${key} in h5`, ['yellow', 'bold'])
          h5["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in h5.style) {
          // log(`${key} in h5`, ['pink', 'bold'])
          // Put them here...
          h5.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        h5.textContent = props.content; // h5.style.margin = '5'
      } // The h5 component element's constructor definition...


      _HTMLH5Component = function HTMLH5Component() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLH5Component);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(h5); // Create a node from the template function, and append to shadowRoot....

          H5._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLH5Component.prototype = Object.create(HTMLH5Element.prototype); // Add constructor...

      _HTMLH5Component.prototype.constructor = _HTMLH5Component; // Register event listener methods..

      Events.registerCallbacks(_HTMLH5Component, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLH5Component.prototype.connectedCallback = function () {
          self.appendChild(h5);
        };
      } // Return component to the caller...


      return _HTMLH5Component;
    }
  }]);

  return H5;
}();

_rollupPluginBabelHelpers._defineProperty(H5, "_tempLiteral", ":host {\n\n                        }");

var H6 =
/*#__PURE__*/
function () {
  function H6() {
    _rollupPluginBabelHelpers._classCallCheck(this, H6);
  }

  _rollupPluginBabelHelpers._createClass(H6, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an h6...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare h6 element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLH6Component,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          h6,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLH6Element...


      h6 = document.createElement('h6'); // Some default settings for h6 elements...
      // Set flare identifier flag..

      h6.flare = true; // Pass props from flare component declaration on to the inner h6 el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in h6 el object...
        if (key in h6) {
          // Pass on the ones that match...
          // log(`${key} in h6`, ['yellow', 'bold'])
          h6["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in h6.style) {
          // log(`${key} in h6`, ['pink', 'bold'])
          // Put them here...
          h6.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        h6.textContent = props.content; // h6.style.margin = '5'
      } // The h6 component element's constructor definition...


      _HTMLH6Component = function HTMLH6Component() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLH6Component);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(h6); // Create a node from the template function, and append to shadowRoot....

          H6._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLH6Component.prototype = Object.create(HTMLElement.prototype); // Add constructor...

      _HTMLH6Component.prototype.constructor = _HTMLH6Component; // Register event listener methods..

      Events.registerCallbacks(_HTMLH6Component, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLH6Component.prototype.connectedCallback = function () {
          self.appendChild(h6);
        };
      } // Return component to the caller...


      return _HTMLH6Component;
    }
  }]);

  return H6;
}();

_rollupPluginBabelHelpers._defineProperty(H6, "_tempLiteral", ":host {\n\n                        }");

var Header =
/*#__PURE__*/
function () {
  function Header() {
    _rollupPluginBabelHelpers._classCallCheck(this, Header);
  }

  _rollupPluginBabelHelpers._createClass(Header, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an header...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare header element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLHeaderComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          header,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLHeaderElement...


      header = document.createElement('header'); // Some default settings for header elements...
      // Set flare identifier flag..

      header.flare = true; // Pass props from flare component declaration on to the inner header el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in header el object...
        if (key in header) {
          // Pass on the ones that match...
          // log(`${key} in header`, ['yellow', 'bold'])
          header["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in header.style) {
          // log(`${key} in header`, ['pink', 'bold'])
          // Put them here...
          header.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       header.textContent = props.-----
      //       // header.style.margin = '5'
      //     }
      // The header component element's constructor definition...


      _HTMLHeaderComponent = function HTMLHeaderComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLHeaderComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(header); // Create a node from the template function, and append to shadowRoot....

          Header._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLHeaderComponent.prototype = Object.create(HTMLHeaderElement.prototype); // Add constructor...

      _HTMLHeaderComponent.prototype.constructor = _HTMLHeaderComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLHeaderComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLHeaderComponent.prototype.connectedCallback = function () {
          self.appendChild(header);
        };
      } // Return component to the caller...


      return _HTMLHeaderComponent;
    }
  }]);

  return Header;
}();

_rollupPluginBabelHelpers._defineProperty(Header, "_tempLiteral", ":host {\n\n                        }");

var dir$3 = console.dir;

var Input =
/*#__PURE__*/
function () {
  function Input() {
    _rollupPluginBabelHelpers._classCallCheck(this, Input);
  }

  _rollupPluginBabelHelpers._createClass(Input, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an input...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare input element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      log('props', ['orange', 'bold']);
      dir$3(props); // Declarations..

      var _HTMLInputComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          input,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLInputElement...


      input = document.createElement('input'); // Some default settings for input elements...
      // Set flare identifier flag..
      // input.flare = true
      // if (props.type == 'text') {
      //
      // }
      // Pass props from flare component declaration on to the inner input el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in input el object...
        if (key in input) {
          // Pass on the ones that match...
          log("".concat(key, " in input"), ['yellow', 'bold']);
          input["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in input.style) {
          log("".concat(key, " in input"), ['pink', 'bold']); // Put them here...

          input.style["".concat(key)] = props["".concat(key)];
        }
      } // The input component element's constructor definition...


      _HTMLInputComponent = function HTMLInputComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLInputComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(input); // Create a node from the template function, and append to shadowRoot....

          Input._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLInputComponent.prototype = Object.create(HTMLInputElement.prototype); // Add constructor...

      _HTMLInputComponent.prototype.constructor = _HTMLInputComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLInputComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLInputComponent.prototype.connectedCallback = function () {
          log('Im Here', ['red', 'bold']);
          dir$3(self);

          if (self) {
            log('self', ['yellow', 'bold']);
            self.appendChild(input); // Add a few default styles for the outer root element....

            self.style.width = '100%';
            self.style.paddingLeft = '10px';
            self.style.paddingRight = '10px';
            self.style.marginLeft = 'auto';
            self.style.marginRight = 'auto';
          } else if (this) {
            log('this', ['yellow', 'bold']);
            dir$3(this);
            dir$3(input);
            this.appendChild(input); // Add a few default styles for the outer root element....

            this.style.width = '100%';
            this.style.paddingLeft = '10px';
            this.style.paddingRight = '10px';
            this.style.marginLeft = 'auto';
            this.style.marginRight = 'auto';
          } else {
            throw Error('ConnectedCallbackError: A problem has occured while appending component children.');
          }
        };
      } // Return component to the caller...


      return _HTMLInputComponent;
    }
  }]);

  return Input;
}();

_rollupPluginBabelHelpers._defineProperty(Input, "_textLiteral", ":host {\n                          background-color: black;\n                          border-radius: 5%;\n                        }");

var Paragraph =
/*#__PURE__*/
function () {
  function Paragraph() {
    _rollupPluginBabelHelpers._classCallCheck(this, Paragraph);
  }

  _rollupPluginBabelHelpers._createClass(Paragraph, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for a p...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare p element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Declarations..
      var _HTMLPGraphComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          p,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLPElement...


      p = document.createElement('p'); // Some default settings for p elements...
      // Set flare identifier flag..
      // p.flare = true
      // if (props.type == 'text') {
      //
      // }
      // Pass props from flare component declaration on to the inner p el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in p el object...
        if (key in p) {
          // Pass on the ones that match...
          log("".concat(key, " in p"), ['yellow', 'bold']);
          p["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in p.style) {
          log("".concat(key, " in p"), ['pink', 'bold']); // Put them here...

          p.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for 'content' attribute,
      //     if ('content' in props) {
      //       p.textContent = props.content
      //     }
      // The p component element's constructor definition...


      _HTMLPGraphComponent = function HTMLPGraphComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLPGraphComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(p); // Create a node from the template function, and append to shadowRoot....

          Paragraph._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLPGraphComponent.prototype = Object.create(HTMLParagraphElement.prototype); // Add constructor...

      _HTMLPGraphComponent.prototype.constructor = _HTMLPGraphComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLPGraphComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLPGraphComponent.prototype.connectedCallback = function () {
          self.appendChild(p);
        };
      } // Return component to the caller...


      return _HTMLPGraphComponent;
    }
  }]);

  return Paragraph;
}();

_rollupPluginBabelHelpers._defineProperty(Paragraph, "_textLiteral", ":host {\n\n                        }");

var Section =
/*#__PURE__*/
function () {
  function Section() {
    _rollupPluginBabelHelpers._classCallCheck(this, Section);
  }

  _rollupPluginBabelHelpers._createClass(Section, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an section...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare section element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLSectionComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          section,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLSectionElement...


      section = document.createElement('section'); // Some default settings for section elements...
      // Set flare identifier flag..

      section.flare = true; // Pass props from flare component declaration on to the inner section el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in section el object...
        if (key in section) {
          // Pass on the ones that match...
          // log(`${key} in section`, ['yellow', 'bold'])
          section["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in section.style) {
          // log(`${key} in section`, ['pink', 'bold'])
          // Put them here...
          section.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        section.textContent = props.content; // section.style.margin = '5'
      } // The section component element's constructor definition...


      _HTMLSectionComponent = function HTMLSectionComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLSectionComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(section); // Create a node from the template function, and append to shadowRoot....

          Section._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLSectionComponent.prototype = Object.create(HTMLSectionElement.prototype); // Add constructor...

      _HTMLSectionComponent.prototype.constructor = _HTMLSectionComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLSectionComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLSectionComponent.prototype.connectedCallback = function () {
          self.appendChild(section);
        };
      } // Return component to the caller...


      return _HTMLSectionComponent;
    }
  }]);

  return Section;
}();

_rollupPluginBabelHelpers._defineProperty(Section, "_tempLiteral", ":host {\n\n                        }");

var Span =
/*#__PURE__*/
function () {
  function Span() {
    _rollupPluginBabelHelpers._classCallCheck(this, Span);
  }

  _rollupPluginBabelHelpers._createClass(Span, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an span...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare span element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLSpanComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          span,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLSpanElement...


      span = document.createElement('span'); // Some default settings for span elements...
      // Set flare identifier flag..

      span.flare = true; // Pass props from flare component declaration on to the inner span el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in span el object...
        if (key in span) {
          // Pass on the ones that match...
          // log(`${key} in span`, ['yellow', 'bold'])
          span["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in span.style) {
          // log(`${key} in span`, ['pink', 'bold'])
          // Put them here...
          span.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        span.textContent = props.content; // span.style.margin = '5'
      } // The span component element's constructor definition...


      _HTMLSpanComponent = function HTMLSpanComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLSpanComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(span); // Create a node from the template function, and append to shadowRoot....

          Span._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLSpanComponent.prototype = Object.create(HTMLSpanElement.prototype); // Add constructor...

      _HTMLSpanComponent.prototype.constructor = _HTMLSpanComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLSpanComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLSpanComponent.prototype.connectedCallback = function () {
          self.appendChild(span);
        };
      } // Return component to the caller...


      return _HTMLSpanComponent;
    }
  }]);

  return Span;
}();

_rollupPluginBabelHelpers._defineProperty(Span, "_tempLiteral", ":host {\n\n                        }");

var Table =
/*#__PURE__*/
function () {
  function Table() {
    _rollupPluginBabelHelpers._classCallCheck(this, Table);
  }

  _rollupPluginBabelHelpers._createClass(Table, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an table...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare table element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLTableComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          table,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLTableElement...


      table = document.createElement('table'); // Some default settings for table elements...
      // Set flare identifier flag..

      table.flare = true; // Pass props from flare component declaration on to the inner table el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in table el object...
        if (key in table) {
          // Pass on the ones that match...
          // log(`${key} in table`, ['yellow', 'bold'])
          table["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in table.style) {
          // log(`${key} in table`, ['pink', 'bold'])
          // Put them here...
          table.style["".concat(key)] = props["".concat(key)];
        }
      } // // Check for '-----' attribute,
      //     if ('-----' in props) {
      //       table.textContent = props.-----
      //       // table.style.margin = '5'
      //     }
      // The table component element's constructor definition...


      _HTMLTableComponent = function HTMLTableComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLTableComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(table); // Create a node from the template function, and append to shadowRoot....

          Table._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLTableComponent.prototype = Object.create(HTMLTableElement.prototype); // Add constructor...

      _HTMLTableComponent.prototype.constructor = _HTMLTableComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLTableComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLTableComponent.prototype.connectedCallback = function () {
          self.appendChild(table);
        };
      } // Return component to the caller...


      return _HTMLTableComponent;
    }
  }]);

  return Table;
}();

_rollupPluginBabelHelpers._defineProperty(Table, "_tempLiteral", ":host {\n\n                        }");

var Textarea =
/*#__PURE__*/
function () {
  function Textarea() {
    _rollupPluginBabelHelpers._classCallCheck(this, Textarea);
  }

  _rollupPluginBabelHelpers._createClass(Textarea, null, [{
    key: "_appendStyleNode",
    // A CSS template literal, holding default styles for an textarea...
    // Static method for appending child nodes to parent elements...
    value: function _appendStyleNode(root, child) {
      return root.appendChild(Node.createNode(child()));
    } // Static method for defining a flare textarea element...

  }, {
    key: "createComponent",
    value: function createComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // log('props', ['orange', 'bold'])
      // dir(props)
      // Declarations..
      var _HTMLTextareaComponent,
          eListeners = [],
          customProps = [],
          shadow = props.shadow,
          textarea,
          self,
          obj;
      /* Doing some finaglery with the native-shim and HTMLElement object.  This will
      be necessary until web components are fully supported in all browsers... */


      window.useNativeShim = false;
      window.HTMLElement = window._HTMLElement; // Get attribute names and Listeners...

      if (props) {
        obj = processData(propsArray(props)); // Store attribute and Listener pairs...

        customProps = obj.props;
        eListeners = obj.eventListeners;
      } // Create an HTMLTextareaElement...


      textarea = document.createElement('textarea'); // Some default settings for textarea elements...
      // Set flare identifier flag..

      textarea.flare = true; // Pass props from flare component declaration on to the inner textarea el...

      for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        // Check all keys in textarea el object...
        if (key in textarea) {
          // Pass on the ones that match...
          // log(`${key} in textarea`, ['yellow', 'bold'])
          textarea["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
        } else if (key in textarea.style) {
          // log(`${key} in textarea`, ['pink', 'bold'])
          // Put them here...
          textarea.style["".concat(key)] = props["".concat(key)];
        }
      } // Check for 'content' attribute,


      if ('content' in props) {
        textarea.textContent = props.content; // textarea.style.margin = '5'
      } // The textarea component element's constructor definition...


      _HTMLTextareaComponent = function HTMLTextareaComponent() {
        var shadowRoot; // Construct an element, store as self...

        self = Reflect.construct(HTMLElement, [], _HTMLTextareaComponent);

        if (shadow) {
          // Create shadow root...
          shadowRoot = self.attachShadow({
            mode: 'open'
          }); // Append to shadow root...

          shadowRoot.appendChild(textarea); // Create a node from the template function, and append to shadowRoot....

          Textarea._appendStyleNode(shadowRoot, template);
        } // Return constructor...


        return self;
      }; // Add superclass prototype...


      _HTMLTextareaComponent.prototype = Object.create(HTMLTextareaElement.prototype); // Add constructor...

      _HTMLTextareaComponent.prototype.constructor = _HTMLTextareaComponent; // Register event listener methods..

      Events.registerCallbacks(_HTMLTextareaComponent, eListeners); // console.dir(HTMLComponent)
      // Add connectedCallback method appending children if shadow is false...

      if (!shadow) {
        _HTMLTextareaComponent.prototype.connectedCallback = function () {
          self.appendChild(textarea);
        };
      } // Return component to the caller...


      return _HTMLTextareaComponent;
    }
  }]);

  return Textarea;
}();

_rollupPluginBabelHelpers._defineProperty(Textarea, "_tempLiteral", ":host {\n\n                        }");

var log$1 = log; // Valence class dealing with JS context, css styling of components...

var Flare =
/*#__PURE__*/
function () {
  function Flare() {
    _rollupPluginBabelHelpers._classCallCheck(this, Flare);
  }

  _rollupPluginBabelHelpers._createClass(Flare, null, [{
    key: "set",
    // A public helper method for setting Flare assumptions, config options...
    value: function set(userAssumptions) {
      this._assumptions = Component.set(CSS.set(mergeData(this._assumptions, userAssumptions)));
      return this._assumptions;
    } // Static member to hold element tag name to be created...

  }, {
    key: "_createFlareId",
    // An internal static method for first, creating a 10 digit hash from a string of
    // css, then a 7 digit alphabetical string from the hash....
    value: function _createFlareId(array) {
      // Create string from template array...
      var string = array[0].join('').replace(/\s|\n/g, ''); // Create and return unique id...

      return alphaStringFromHash(murmurHash(string));
    } // A publick method for processing a tagged template literal with stylis...

  }, {
    key: "css",
    value: function css() {
      for (var _len = arguments.length, tempLit = new Array(_len), _key = 0; _key < _len; _key++) {
        tempLit[_key] = arguments[_key];
      }

      if (tempLit[0][0].indexOf('{') < 5) {
        return CSS.processStyles(tempLit, ':host');
      }

      return CSS.processStyles(tempLit, '');
    } // A helper method for accessing the Flare class and defining it's components...

  }, {
    key: "createComponent",
    value: function createComponent(comTag, elTag, tagTempLit) {
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // log(`Tag name is: ${comTag}`, ['orange', 'white']);dir(props)
      // Determine whether or not the component will utilize shadow dom by default...
      if (!Reflect.has(props, 'shadow')) {
        // If 'shadow' is not set in props, and if 'shadow' is 'on' by default...
        if (this.options.shadowByDefault) {
          // Set the 'shadow' prop to true...
          props.shadow = true;
        } else {
          // Otherwise, set it to false..
          props.shadow = false;
        }
      }

      CSS._superProps[props.flareId] = [comTag, props]; // If a flare component does not use shadow dom...

      if (!props.shadow) {
        // it will not need to append anything to it's shadow root later on...
        props.noChild = true; // Define component and add Styles..

        this._define(comTag, props, elTag);

        CSS.addStyles(true, comTag, elTag, props, tagTempLit);
      } else {
        // Define component and add Styles..
        this._define(comTag, props, elTag, CSS.addStyles(false, comTag, elTag, props, tagTempLit));
      }
    } // DEPRECATED: NOT CURRENTLY IN USE

  }, {
    key: "_resetFlags",
    value: function _resetFlags() {
      // Reset these, they were flipped for Component definition, and would typically
      // be reset in the flow of component creation just after the call to doc.createEl(),
      // but when creating components with Flare, element instantiation is delayed...
      window.useNativeShim = true;
      window.HTMLElement = window.HTMLElement_;
    } // Static method used for defining Flare components...

  }, {
    key: "_define",
    value: function _define(name) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var el = arguments.length > 2 ? arguments[2] : undefined;
      var template = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      //log('Looka Here', ['white', 'red']);log(`name is: ${name}`);log(`el is: ${el}`);dir(props)
      // Declare element constructior var..
      var elemCtor,
          // Create function will create the component element definition..
      create = function create() {
        // Pulling a switch here, so that we can choose what type of constructor we'd
        // like to use for our component...
        switch (el) {
          case 'area':
            // Grab the extensible area element constructor..
            elemCtor = Area.createComponent(props, template);
            break;

          case 'aside':
            // Grab the extensible aside element constructor..
            elemCtor = Aside.createComponent(props, template);
            break;

          case 'button':
            // Grab the extensible input element constructor..
            elemCtor = Button.createComponent(props, template);
            break;

          case 'col':
            // Grab the extensible col element constructor..
            elemCtor = Col.createComponent(props, template);
            break;

          case 'colgroup':
            // Grab the extensible colgroup element constructor..
            elemCtor = Colgroup.createComponent(props, template);
            break;

          case 'div':
            // Do CreateComponent..
            elemCtor = Component.createComponent([name, template, el], props);
            break;

          case 'flyer-':
            elemCtor = Flyer;

          case 'footer':
            // Grab the extensible footer element constructor..
            elemCtor = Footer.createComponent(props, template);
            break;

          case 'h1':
            // Grab the extensible h1 element constructor..
            elemCtor = H1.createComponent(props, template);
            break;

          case 'h2':
            // Grab the extensible h2 element constructor..
            elemCtor = H2.createComponent(props, template);
            break;

          case 'h3':
            // Grab the extensible h3 element constructor..
            elemCtor = H3.createComponent(props, template);
            break;

          case 'h4':
            // Grab the extensible h4 element constructor..
            elemCtor = H4.createComponent(props, template);
            break;

          case 'h5':
            // Grab the extensible h5 element constructor..
            elemCtor = H5.createComponent(props, template);
            break;

          case 'h6':
            // Grab the extensible h6 element constructor..
            elemCtor = H6.createComponent(props, template);
            break;

          case 'header':
            // Grab the extensible header element constructor..
            elemCtor = Header.createComponent(props, template);
            break;

          case 'input':
            // Grab the extensible input element constructor..
            elemCtor = Input.createComponent(props, template);
            break;

          case 'p':
            // Grab the extensible p element constructor..
            elemCtor = Paragraph.createComponent(props, template);
            break;

          case 'section':
            // Grab the extensible section element constructor..
            elemCtor = Section.createComponent(props, template);
            break;

          case 'span':
            // Grab the extensible span element constructor..
            elemCtor = Span.createComponent(props, template);
            break;

          case 'table':
            // Grab the extensible table element constructor..
            elemCtor = Table.createComponent(props, template);
            break;

          case 'textarea':
            // Grab the extensible textarea element constructor..
            elemCtor = Textarea.createComponent(props, template);
            break;
        } // Process props...


        var processed = Node.processNodeProps(props, elemCtor); // Add flareComponent property to flare component constructor...

        processed.ctor.prototype.flareComponent = true; // Making sure we are not trying to define a component that is already defined
        // and registered......

        if (!isRegistered(name)) {
          // Define component...
          try {
            // Define component...
            window.customElements.define(name, processed.ctor); // if there's an error, intercept it, and log it......
          } catch (e) {
            log$1(e, ['white', 'red']);
          } // Make sure that the definition was successful, then add it to our registry....


          if (isDefined(name)) {
            valenceGlobals.componentRegister.push(name);
            log$1("Component <".concat(name, " /> was added to the component register."), ['blue', 'white']);
          }
        } else {
          log$1("Component <".concat(name, " /> is already  defined"), ['blue', 'white']);
        } // Reset nativeShim flags..
        // Flare._resetFlags()
        // Listen for element instantiation, grab element...


        Events.listen(name, function (e) {
          // Set props on new element..
          Props.set(e.detail.element, props); // props = {}
        });
      }; // Add isStatelessComponent flag to props for Component...


      props.isStatelessComponent = true; // Do CreateComponent..

      create();
    } // A static public method for instantiating a keyframes instance for css animation...

  }, {
    key: "keyframes",
    value: function keyframes() {
      var obj = {};

      for (var _len2 = arguments.length, tempLit = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        tempLit[_key2] = arguments[_key2];
      }

      obj.array = [].concat(tempLit);
      obj.extended = false; // Send the ttLiteral object over to CSS for processing and inserting into the stylesheet...

      return CSS.keyframes(obj);
    } //A static public method for inserting global rules into the styleSheet...

  }, {
    key: "global",
    value: function global() {
      var obj = {};

      for (var _len3 = arguments.length, tempLit = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        tempLit[_key3] = arguments[_key3];
      }

      obj.array = [].concat(tempLit);
      obj.extended = false; // Send the ttLiteral object over to CSS for processing and inserting into the stylesheet...

      CSS.insertGlobal(obj);
    } // An internal method used for retrieving a css template literal..

  }, {
    key: "_getTemplateLiteral",
    value: function _getTemplateLiteral() {
      for (var _len4 = arguments.length, tempLit = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        tempLit[_key4] = arguments[_key4];
      }

      var tmpl,
          // Store ref functions with tempLit in an array
      array = [].concat(tempLit),
          props = Flare._propObj; // Set a unique id on the component's props...

      props.flareId = "".concat(Flare._createFlareId(array)); //

      if (Flare._extend) {
        /* An object holding the styles of the extended component, and also,
        an array holding the broken up tempLit and ref functions... Once the Props
        from component instantiation are merged with the existing prop object, the
        resulting object will be injected into each ref function as they are called  so that
        the css can be completed...*/
        tmpl = {
          extended: true,
          "super": Flare._superTempLit,
          superEl: Flare._superTag,
          superId: Flare._superId,
          array: array
        };
      } else {
        tmpl = {
          extended: false,
          array: array
        };
      }

      return {
        flare: true,
        taggedTempLit: tmpl,
        props: props,
        el: tmpl.extended ? Flare._superTag : Flare._elementTag,
        tag: Flare._componentTag
      };
    } // Component extend Static API Method
    // A public method for extending user-defined flare components...

  }, {
    key: "extend",
    value: function (_extend) {
      function extend(_x) {
        return _extend.apply(this, arguments);
      }

      extend.toString = function () {
        return _extend.toString();
      };

      return extend;
    }(function (component) {
      var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Get tagName...
      var tagName = convertFuncNameToTagName(extend.caller.name); // Get a copy of the component so that we don't delete any of the extended component's attrs...


      var superComponent = deeplicateObj(component(valenceGlobals.flareComponents[component({}).tag])); // Filter component arg's props for id and classname properties, which can
      // not, obviously, be shared with other elements/components...


      if ('id' in superComponent.props) {
        delete superComponent.props.id;
      }

      if ('className' in superComponent.props) {
        delete superComponent.props.className;
      } // If arg is an object...


      if (attrs) {
        // Let's first combine prop objects so as to override any common props...
        var props = mergeData(superComponent.props, attrs); // Set the Flare component indicator...


        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
      } // Set a unique id on the component's props...


      Flare._elementTag = "X".concat(superComponent.el);
      Flare._componentTag = tagName;
      Flare._superId = superComponent.props.flareId;
      Flare._superTag = superComponent.el;
      Flare._superTempLit = superComponent.taggedTempLit.array;
      Flare._extend = true; // Get css..

      return Flare._getTemplateLiteral;
    }) // Div Static API Method

  }, {
    key: "div",
    value: function (_div) {
      function div() {
        return _div.apply(this, arguments);
      }

      div.toString = function () {
        return _div.toString();
      };

      return div;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(div.caller.name); //log('TAGNAME', ['green', 'bold']);log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len5 = arguments.length, arg = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        arg[_key5] = arguments[_key5];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'div';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; //

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array));
        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'div',
          tag: tagName
        };
      }
    }) /// Flyer Static API Method

  }, {
    key: "Flyer",
    value: function (_Flyer) {
      function Flyer() {
        return _Flyer.apply(this, arguments);
      }

      Flyer.toString = function () {
        return _Flyer.toString();
      };

      return Flyer;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(Flyer.caller.name); //log('TAGNAME', ['green', 'bold']);log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len6 = arguments.length, arg = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        arg[_key6] = arguments[_key6];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'flyer-';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; //

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array));
        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'flyer-',
          tag: tagName
        };
      }
    })
    /**********************************************************
    ***********************************************************
    ************* Flare Component Elements ********************
    ***********************************************************
    **********************************************************/
    // Input Static API Method

  }, {
    key: "input",
    value: function (_input) {
      function input() {
        return _input.apply(this, arguments);
      }

      input.toString = function () {
        return _input.toString();
      };

      return input;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(input.caller.name); //log('TAGNAME', ['green', 'bold']);log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len7 = arguments.length, arg = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        arg[_key7] = arguments[_key7];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'input';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'input',
          tag: tagName
        };
      }
    }) // Button Static API Method

  }, {
    key: "button",
    value: function (_button) {
      function button() {
        return _button.apply(this, arguments);
      }

      button.toString = function () {
        return _button.toString();
      };

      return button;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(button.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)


      for (var _len8 = arguments.length, arg = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        arg[_key8] = arguments[_key8];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'button';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'button',
          tag: tagName
        };
      }
    }) // P API Method

  }, {
    key: "p",
    value: function (_p) {
      function p() {
        return _p.apply(this, arguments);
      }

      p.toString = function () {
        return _p.toString();
      };

      return p;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(p.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len9 = arguments.length, arg = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        arg[_key9] = arguments[_key9];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'p';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'p',
          tag: tagName
        };
      }
    }) // H1 API Method

  }, {
    key: "h1",
    value: function (_h) {
      function h1() {
        return _h.apply(this, arguments);
      }

      h1.toString = function () {
        return _h.toString();
      };

      return h1;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(h1.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len10 = arguments.length, arg = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        arg[_key10] = arguments[_key10];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'h1';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'h1',
          tag: tagName
        };
      }
    }) // H2 API Method

  }, {
    key: "h2",
    value: function (_h2) {
      function h2() {
        return _h2.apply(this, arguments);
      }

      h2.toString = function () {
        return _h2.toString();
      };

      return h2;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(h2.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len11 = arguments.length, arg = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        arg[_key11] = arguments[_key11];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'h2';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'h2',
          tag: tagName
        };
      }
    }) // H3 API Method

  }, {
    key: "h3",
    value: function (_h3) {
      function h3() {
        return _h3.apply(this, arguments);
      }

      h3.toString = function () {
        return _h3.toString();
      };

      return h3;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(h3.caller.name); // log('TAGNAME', ['green', 'bold']); log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len12 = arguments.length, arg = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        arg[_key12] = arguments[_key12];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'h3';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'h3',
          tag: tagName
        };
      }
    }) // H4 API Method

  }, {
    key: "h4",
    value: function (_h4) {
      function h4() {
        return _h4.apply(this, arguments);
      }

      h4.toString = function () {
        return _h4.toString();
      };

      return h4;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(h4.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len13 = arguments.length, arg = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        arg[_key13] = arguments[_key13];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'h4';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'h4',
          tag: tagName
        };
      }
    }) // H5 API Method

  }, {
    key: "h5",
    value: function (_h5) {
      function h5() {
        return _h5.apply(this, arguments);
      }

      h5.toString = function () {
        return _h5.toString();
      };

      return h5;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(h5.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len14 = arguments.length, arg = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        arg[_key14] = arguments[_key14];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'h5';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'h5',
          tag: tagName
        };
      }
    }) // H6 API Function

  }, {
    key: "h6",
    value: function (_h6) {
      function h6() {
        return _h6.apply(this, arguments);
      }

      h6.toString = function () {
        return _h6.toString();
      };

      return h6;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(h6.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len15 = arguments.length, arg = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        arg[_key15] = arguments[_key15];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'h6';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'h6',
          tag: tagName
        };
      }
    }) // HEADER API Method

  }, {
    key: "header",
    value: function (_header) {
      function header() {
        return _header.apply(this, arguments);
      }

      header.toString = function () {
        return _header.toString();
      };

      return header;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(header.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len16 = arguments.length, arg = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        arg[_key16] = arguments[_key16];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'header';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'header',
          tag: tagName
        };
      }
    }) // AREA API Method

  }, {
    key: "area",
    value: function (_area) {
      function area() {
        return _area.apply(this, arguments);
      }

      area.toString = function () {
        return _area.toString();
      };

      return area;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(area.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len17 = arguments.length, arg = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        arg[_key17] = arguments[_key17];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'area';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'area',
          tag: tagName
        };
      }
    }) // ASIDE API Method

  }, {
    key: "aside",
    value: function (_aside) {
      function aside() {
        return _aside.apply(this, arguments);
      }

      aside.toString = function () {
        return _aside.toString();
      };

      return aside;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(aside.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len18 = arguments.length, arg = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        arg[_key18] = arguments[_key18];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'aside';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'aside',
          tag: tagName
        };
      }
    }) // COL API Method

  }, {
    key: "col",
    value: function (_col) {
      function col() {
        return _col.apply(this, arguments);
      }

      col.toString = function () {
        return _col.toString();
      };

      return col;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(col.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len19 = arguments.length, arg = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        arg[_key19] = arguments[_key19];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'col';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'col',
          tag: tagName
        };
      }
    }) // COLGROUP API Method

  }, {
    key: "colgroup",
    value: function (_colgroup) {
      function colgroup() {
        return _colgroup.apply(this, arguments);
      }

      colgroup.toString = function () {
        return _colgroup.toString();
      };

      return colgroup;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(colgroup.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len20 = arguments.length, arg = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        arg[_key20] = arguments[_key20];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'colgroup';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'colgroup',
          tag: tagName
        };
      }
    }) // SPAN API Method

  }, {
    key: "span",
    value: function (_span) {
      function span() {
        return _span.apply(this, arguments);
      }

      span.toString = function () {
        return _span.toString();
      };

      return span;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(span.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len21 = arguments.length, arg = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        arg[_key21] = arguments[_key21];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'span';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'span',
          tag: tagName
        };
      }
    }) // SECTION API Method

  }, {
    key: "section",
    value: function (_section) {
      function section() {
        return _section.apply(this, arguments);
      }

      section.toString = function () {
        return _section.toString();
      };

      return section;
    }(function () {
      /// Get tagName...
      var tagName = convertFuncNameToTagName(section.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len22 = arguments.length, arg = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        arg[_key22] = arguments[_key22];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'section';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'section',
          tag: tagName
        };
      }
    }) // TABLE API Function

  }, {
    key: "table",
    value: function (_table) {
      function table() {
        return _table.apply(this, arguments);
      }

      table.toString = function () {
        return _table.toString();
      };

      return table;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(table.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len23 = arguments.length, arg = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        arg[_key23] = arguments[_key23];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'table';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'table',
          tag: tagName
        };
      }
    }) // TEXTAREA API Function

  }, {
    key: "textarea",
    value: function (_textarea) {
      function textarea() {
        return _textarea.apply(this, arguments);
      }

      textarea.toString = function () {
        return _textarea.toString();
      };

      return textarea;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(textarea.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len24 = arguments.length, arg = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        arg[_key24] = arguments[_key24];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'textarea';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'textarea',
          tag: tagName
        };
      }
    }) // FOOTER API Function

  }, {
    key: "footer",
    value: function (_footer) {
      function footer() {
        return _footer.apply(this, arguments);
      }

      footer.toString = function () {
        return _footer.toString();
      };

      return footer;
    }(function () {
      // Get tagName...
      var tagName = convertFuncNameToTagName(footer.caller.name); // log('TAGNAME', ['green', 'bold'])
      //  log(tagName)
      // If the argument is not an array, it's probably our props object...


      for (var _len25 = arguments.length, arg = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        arg[_key25] = arguments[_key25];
      }

      if (!isArray(arg[0])) {
        var props = arg[0]; // Set the Flare component indicator...

        props.Flare = true; // Set stateless-component flag for the component..

        props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

        Flare._propObj = props;
        Flare._elementTag = 'footer';
        Flare._componentTag = tagName; // Define component..

        return Flare._getTemplateLiteral;
      } else {
        var array = [].concat(arg),
            _privateProps = {}; // Add some properties to the private props object....

        _privateProps.Flare = true;
        _privateProps.isStatelessComponent = true;
        _privateProps.flareId = "".concat(Flare._createFlareId(array)); // Add private props to return object and... return..

        return {
          flare: true,
          taggedTempLit: {
            extended: false,
            array: array
          },
          props: _privateProps,
          el: 'footer',
          tag: tagName
        };
      }
    })
  }, {
    key: "options",
    // The config options object.. with default assumptions...
    get: function get() {
      return Flare._assumptions;
    }
  }, {
    key: "_tagQueue",
    // Getter for the component tagName queue...
    get: function get() {
      // If we have an array in the queue, return it, otherwise return the main array....
      if (Flare._tagNameArrayQueue.length > 0) {
        if (Flare._tagNameArrayQueue[0].length < 1) {
          Flare._tagNameArrayQueue.shift();

          return Flare._flareComponentNames.shift();
        } else {
          return Flare._tagNameArrayQueue.shift();
        }
      } else {
        return Flare._flareComponentNames.shift();
      }
    } // Setter for the tag queue...
    ,
    set: function set(array) {
      /* If the main array is empty, pass the argument to it, otherwise, shift the argument
       in to the beginning of the queue array...*/
      if (Flare._flareComponentNames.length === 0) {
        Flare._flareComponentNames.unshift(array);
      } else {
        Flare._tagNameArrayQueue.unshift(array);
      }
    } // Number places for _numeral

  }, {
    key: "_incrementor",
    // A simple getter for static _numeral
    get: function get() {
      // Increment ones place first, then rest accordingly...
      if (Flare._ones_ < 9) {
        ++Flare._ones_;
      } else {
        Flare._ones_ = 0;

        if (Flare._tens_ < 9) {
          ++Flare._tens_;
        } else {
          Flare._tens_ = 0;

          if (Flare._huns_ < 9) {
            ++Flare._huns_;
          } else {
            Flare._huns_ = 0;
          }
        }
      } // Assemble the numeral string...


      Flare._numeral = "".concat(Flare._huns_).concat(Flare._tens_).concat(Flare._ones_); // Return..

      return Flare._numeral;
    }
  }]);

  return Flare;
}();

_rollupPluginBabelHelpers._defineProperty(Flare, "_assumptions", {
  shadowByDefault: true,
  kebabCase: true,
  globalFunctions: true,
  underscoreGlobal: false
});

_rollupPluginBabelHelpers._defineProperty(Flare, "_elementTag", '');

_rollupPluginBabelHelpers._defineProperty(Flare, "_superTag", '');

_rollupPluginBabelHelpers._defineProperty(Flare, "_superId", '');

_rollupPluginBabelHelpers._defineProperty(Flare, "_id", '');

_rollupPluginBabelHelpers._defineProperty(Flare, "_propObj", {});

_rollupPluginBabelHelpers._defineProperty(Flare, "_superTempLit", "");

_rollupPluginBabelHelpers._defineProperty(Flare, "_superProps", {});

_rollupPluginBabelHelpers._defineProperty(Flare, "_extend", false);

_rollupPluginBabelHelpers._defineProperty(Flare, "_tagNameArrayQueue", []);

_rollupPluginBabelHelpers._defineProperty(Flare, "_flareComponentNames", [[]]);

_rollupPluginBabelHelpers._defineProperty(Flare, "_ones_", 0);

_rollupPluginBabelHelpers._defineProperty(Flare, "_tens_", 0);

_rollupPluginBabelHelpers._defineProperty(Flare, "_huns_", 0);

_rollupPluginBabelHelpers._defineProperty(Flare, "_numeral", -1);
var css = Flare.css;

var Node =
/*#__PURE__*/
function () {
  // Node type instance constructor...
  function Node(_ref) {
    var type = _ref.type,
        props = _ref.props,
        children = _ref.children;

    _rollupPluginBabelHelpers._classCallCheck(this, Node);

    this.type = type; // If no props, make sure an empty object is created...

    var _props = props || {};

    this.props = new Props(_props);
    this.children = children;
  } // Config options...


  _rollupPluginBabelHelpers._createClass(Node, null, [{
    key: "set",
    // An internal method that returns the combination of the CSS and Flare class's assumptions
    // this class's assumptions... It's ultimately the end of a line of merged config objects...
    value: function set(userAssumptions) {
      this._assumptions = mergeData(this._assumptions, userAssumptions);
      return this._assumptions;
    } // An internal class method for processing component props...

  }, {
    key: "processNodeProps",
    value: function processNodeProps(props, ctor) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // Get customPropNames for custom prop registration, and propNames for validation...
      var customPropNames = extractCustomPropNames(propNames(props)); // If user registered proptypes on the component, proceed with prop validation...

      if (type.propTypes) {
        var _propNames = _propNames(type.propTypes); // Validate that all supplied prop value types match that of registered propTypes...


        props = Props.validate(props, _propNames, type);
      } // Register custom element attributes...


      Props.registerCustom(ctor, customPropNames); // Register all element attributes as observedAttributes...

      Props.registerObserved(ctor, props); // Need to return both props and the constructor to the Caller's context

      return {
        props: props,
        ctor: ctor
      };
    } // Either create the given element, or if it's a component, define the element then
    // create it...

  }, {
    key: "createNode",
    value: function createNode(node) {
      if (node === null || node === undefined) {
        return;
      } //


      if (isString(node)) {
        // Create and return the given text node...
        return document.createTextNode(node);
      } else {
        // Declare necessary vars..
        var tagName, shadow, flareComponent, elementConstructor, props; // Determine if elem is an element or a Component...
        // If it's a function....

        if (isFunction(node.type)) {
          if (isFragment(node.type)) {
            return node.children.map(Node.createNode, Node);
          }

          props = node.props, elementConstructor = node.type; // Convert the given function name to it's corresponding component tagname...

          tagName = convertFuncNameToTagName(node.type.name, props.kebabCase !== undefined || props.kebab !== undefined ? props.kebabCase : this._assumptions.kebabCase); // Determine if it's a class...

          if (!isClass(node.type)) {
            // Add `isStatelessComponent` property so that the shim flags can be
            // reset after element creation...
            node.props.isStatelessComponent = true;

            if (isFlare(node)) {
              // Unpack flare component props... combine props...
              // Unpack component....
              flareComponent = node.type(props); // Set type to tag...

              node.type = tagName; // Push to global collection...

              valenceGlobals.flareComponents[node.type] = props; /// Combine the two props objects, merging them into one......

              props = mergeData(props, flareComponent.props); // Use the above to define Flare Component.. and also 'type' for the node...

              Flare.createComponent(tagName, flareComponent.el, flareComponent.taggedTempLit, props);
              node.props.isStatelessComponent = true;
            } else {
              /// Set up component creation, first arg..
              var component = [tagName, node.type]; // Extract shadow setting from Props if available...

              if (node.props.shadow) {
                shadow = node.props.shadow;
              } // Return completed component...


              elementConstructor = Component.createComponent(component, node.props, node.children, shadow);
            }
          } else {
            // Add `isStatefulComponent` privateProp for update purposes...
            node.props.isStatefulComponent = true;
          } // Non-Flare component custom element definition....


          if (!isFlare(flareComponent)) {
            /* If we're dealing with a class, we need to be sure we're not using the shim when
            defining the component...*/
            if (isClass(node.type)) {
              window.useNativeShim = false;
              window.HTMLElement = window._HTMLElement;
            } // Process props......


            var processed = Node.processNodeProps(node.props, elementConstructor, node.type);
            /*
            **
            ** Define Component with Custom Element registry, and register tagName with
            ** our own local registry..... Exclude Fragments......
            **
            */

            if (!isFragment(tagName)) {
              ////  Making sure we are not trying to define WebComponents twice...
              if (!isRegistered(tagName)) {
                // Using a try-catch here, in case of an error....
                try {
                  // Use Custom elements API to define a custom tag/component...
                  window.customElements.define(tagName, // The component ctor.....
                  processed.ctor); // Confirming that the component was indeed defined, then adding it to our registry......

                  if (isDefined(tagName)) {
                    valenceGlobals.componentRegister.push(tagName);
                    log("Component <".concat(tagName, " /> was added to the component register."), ['blue', 'white']);
                  }
                } catch (e) {
                  log(e, ['white', 'red']);
                }
              } else {
                log("Component <".concat(tagName, " /> is already  defined"), ['blue', 'white']);
              }
            } // If the component is a class, we need to reset the shim flags.....


            if (isClass(node.type)) {
              window.useNativeShim = true;
              window.HTMLElement = window.HTMLElement_;
            } //FIXME: May not be using this at all....
            //         if (processed.props.rootNode) {
            // // Create and dispatch event confirming definition of the root node.
            //           Events.emit('rootNodeDefined')
            // // Set root node definition flag...
            //           window.rootNodeDefined = true
            //         }
            // Set node.type to tagName of the component, and props to the amended props
            // object...


            node.props = processed.props;
            node.type = tagName;
          }
        } // Use DOM API (via Valence Element class) to create element and return it...


        return Element.createElement(node);
      }
    }
  }]);

  return Node;
}();

_rollupPluginBabelHelpers._defineProperty(Node, "_assumptions", {
  kebabCase: true
});

var Form =
/*#__PURE__*/
function () {
  function Form(node, root) {
    _rollupPluginBabelHelpers._classCallCheck(this, Form);

    // The old DOM for diffing purposes...
    this.DOM = node;
    this.DOMString = String(this.DOM);
    this.propString = String(this.DOM.props); // The new DOM for diffing...

    this.newDOM = null; // If newDOM is set, set the following...

    if (this.newDOM) {
      this.newDOMString = String(this.newDOM);
      this.newPropString = String(this.newDOM.props);
    } // Get a reference to Valence's mount node...


    this.rootNode = root;
  } // Variable holds an array of flareComponent names..


  _rollupPluginBabelHelpers._createClass(Form, [{
    key: "_isStatefulComponent",
    // Computed property that resolves whether or not the given node is a component or not...
    value: function _isStatefulComponent(node) {
      return node.props.isStatefulComponent ? true : false;
    } // Method for updating an element and all of it's children recursively...

  }, {
    key: "updateDOM",
    value: function (_updateDOM) {
      function updateDOM(_x, _x2) {
        return _updateDOM.apply(this, arguments);
      }

      updateDOM.toString = function () {
        return _updateDOM.toString();
      };

      return updateDOM;
    }(function (parent, newNode) {
      var oldNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      // Get a reference to the current node and incoming props...
      var thisNode = parent.childNodes[index];
      var nextProps = newNode.props; // If this node is a component, check it's `shouldComponentUpdate` method to
      // confirm whether or not an update is necessary...
      // if (this._isStatefulComponent(thisNode)) {
      //   if (!thisNode.type.shouldComponentUpdate(
      //     thisNode.props/*, this.state?*/
      //   )) {
      //     return
      //   }
      // }
      // Set newDOM...

      if (this.newDOM = null) {
        this.newDOM = newNode;
      } // If first pass, oldNode will need to be set...


      if (oldNode === null) {
        oldNode = this.DOM;
      } // Get diff length...


      var diff = function diff() {
        return Math.abs(newNode.children.length - oldNode.children.length);
      }; // newNode exist where there is no oldNode...


      if (!oldNode) {
        // Create a new node and append it to DOM...
        parent.appendChild(Node.createNode(newNode)); // OldNode exists where there is no newNode...
      } else if (!newNode) {
        // If current node is a component, fire willUnmount event...
        if (this._isStatefulComponent(thisNode)) {
          Events.fire('componentWillUnmount', thisNode, thisNode.props);
        } // Then remove the node...


        parent.removeChild(thisNode); // The node has changed, 'tag' or 'props', for example...
      } else if (this._changed) {
        parent.replaceChild(Node.createNode(newNode), thisNode); // None of the above apply, and the node is not a textNode...
      } else if (!isString(newNode)) {
        // If newNode is  component, fire componentWillReceiveProps event with new props,
        // then update props...
        if (this._isStatefulComponent(thisNode)) {
          Events.fire('componentWillReceiveProps', thisNode, thisNode.props);
        }

        Props.update(thisNode, newNode.props, oldNode.props); // Then children and their props...

        for (var i = 0; i < diff(); i++) {
          updateDOM(thisNode, newNode.children[i], oldNode.children[i], i);
        }
      }

      this.DOM = newNode;
    }) // A helper method representing the API of the virtual DOM...

  }, {
    key: "realize",
    // Method for rendering the virtual dom to real dom...
    value: function realize() {
      return Node.createNode(this.DOM);
    }
  }, {
    key: "_changed",
    // Computed property that determines whether or not 2 nodes
    // have changed...
    get: function get() {
      // Compare DOMStrings...
      return this.newDOMString !== this.DOMString || this.newDOM.props.forceUpdate;
    }
  }, {
    key: "_propsChanged",
    get: function get() {
      // Compare PropStrings...
      return this.newPropString !== this.propString;
    } /// Config options...

  }], [{
    key: "set",
    // An internal method that returns the combination of the CSS, Flare, and Node class's assumptions and
    // this class's assumptions... It's ultimately the end of a line of merged config objects...
    value: function set(userAssumptions) {
      this._assumptions = mergeData(this._assumptions, userAssumptions);
      return this._assumptions;
    }
  }, {
    key: "x",
    value: function x(type, props) {
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }

      // If we are in dev mode........
      if (Form._assumptions.developmentMode) {
        // Check for a stateless component....
        if (isStatelessComponent(type)) {
          // If stateless, take children from the executed type........
          children = [type()]; // Otherwise, check for a stateful (class) component.....
        } else if (isStatefulComponent(type)) {
          //NOTE: Keeping this incase I want to find out why classes are passing here twice....
          // log('STATEFUL CHILDREN', 'red');dir(type.prototype.render())
          // If stateful take children from render method.....
          children = [type.prototype.render()];
        }
      } // Return a new Node...


      return new Node({
        type: type,
        props: props,
        children: children
      });
    }
  }]);

  return Form;
}();

_rollupPluginBabelHelpers._defineProperty(Form, "_flareComponentNames", []);

_rollupPluginBabelHelpers._defineProperty(Form, "_assumptions", {
  developmentMode: false
});

exports.Events = Events;
exports.Flare = Flare;
exports.Form = Form;
exports.Is = Is;
exports.PropTypes = PropTypes;
exports.ValenceComponent = Component;
exports.css = css;
exports.dir = dir;
exports.log = log;
exports.mergeData = mergeData;
exports.queryDOM = queryDOM;

},{"./_rollupPluginBabelHelpers-82a4407b.js":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/_rollupPluginBabelHelpers-82a4407b.js","clivi":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/clivi/index.js","css-tree":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/index.js","dompurify":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/dompurify/dist/purify.js","lodash/words":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/words.js","stylis":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/stylis/stylis.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_hasUnicodeWord.js":[function(require,module,exports){
/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_asciiWords.js":[function(require,module,exports){
/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_unicodeWords.js":[function(require,module,exports){
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/utils/loggers.js":[function(require,module,exports){
"";

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
},{"clivi":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/clivi/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/Ops.js":[function(require,module,exports){
"";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _add2 = _interopRequireDefault(require("./funcs/_add"));

var _subtract2 = _interopRequireDefault(require("./funcs/_subtract"));

var _divide2 = _interopRequireDefault(require("./funcs/_divide"));

var _multiply2 = _interopRequireDefault(require("./funcs/_multiply"));

var _loggers = require("./utils/loggers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ops =
/*#__PURE__*/
function () {
  function Ops() {
    _classCallCheck(this, Ops);
  }

  _createClass(Ops, null, [{
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

  return Ops;
}();

var _default = Ops;
exports["default"] = _default;
},{"./funcs/_add":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_add.js","./funcs/_divide":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_divide.js","./funcs/_multiply":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_multiply.js","./funcs/_subtract":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/funcs/_subtract.js","./utils/loggers":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/utils/loggers.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_arrayMap.js":[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/isArray.js":[function(require,module,exports){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js":[function(require,module,exports){
//
//                              list
//                            ┌──────┐
//             ┌──────────────┼─head │
//             │              │ tail─┼──────────────┐
//             │              └──────┘              │
//             ▼                                    ▼
//            item        item        item        item
//          ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐
//  null ◀──┼─prev │◀───┼─prev │◀───┼─prev │◀───┼─prev │
//          │ next─┼───▶│ next─┼───▶│ next─┼───▶│ next─┼──▶ null
//          ├──────┤    ├──────┤    ├──────┤    ├──────┤
//          │ data │    │ data │    │ data │    │ data │
//          └──────┘    └──────┘    └──────┘    └──────┘
//

function createItem(data) {
    return {
        prev: null,
        next: null,
        data: data
    };
}

function allocateCursor(node, prev, next) {
    var cursor;

    if (cursors !== null) {
        cursor = cursors;
        cursors = cursors.cursor;
        cursor.prev = prev;
        cursor.next = next;
        cursor.cursor = node.cursor;
    } else {
        cursor = {
            prev: prev,
            next: next,
            cursor: node.cursor
        };
    }

    node.cursor = cursor;

    return cursor;
}

function releaseCursor(node) {
    var cursor = node.cursor;

    node.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = cursors;
    cursors = cursor;
}

var cursors = null;
var List = function() {
    this.cursor = null;
    this.head = null;
    this.tail = null;
};

List.createItem = createItem;
List.prototype.createItem = createItem;

List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
    var cursor = this.cursor;

    while (cursor !== null) {
        if (cursor.prev === prevOld) {
            cursor.prev = prevNew;
        }

        if (cursor.next === nextOld) {
            cursor.next = nextNew;
        }

        cursor = cursor.cursor;
    }
};

List.prototype.getSize = function() {
    var size = 0;
    var cursor = this.head;

    while (cursor) {
        size++;
        cursor = cursor.next;
    }

    return size;
};

List.prototype.fromArray = function(array) {
    var cursor = null;

    this.head = null;

    for (var i = 0; i < array.length; i++) {
        var item = createItem(array[i]);

        if (cursor !== null) {
            cursor.next = item;
        } else {
            this.head = item;
        }

        item.prev = cursor;
        cursor = item;
    }

    this.tail = cursor;

    return this;
};

List.prototype.toArray = function() {
    var cursor = this.head;
    var result = [];

    while (cursor) {
        result.push(cursor.data);
        cursor = cursor.next;
    }

    return result;
};

List.prototype.toJSON = List.prototype.toArray;

List.prototype.isEmpty = function() {
    return this.head === null;
};

List.prototype.first = function() {
    return this.head && this.head.data;
};

List.prototype.last = function() {
    return this.tail && this.tail.data;
};

List.prototype.each = function(fn, context) {
    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, null, this.head);

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.forEach = List.prototype.each;

List.prototype.eachRight = function(fn, context) {
    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, this.tail, null);

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.forEachRight = List.prototype.eachRight;

List.prototype.nextUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, null, start);

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.prevUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;

    if (context === undefined) {
        context = this;
    }

    // push cursor
    var cursor = allocateCursor(this, start, null);

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    releaseCursor(this);
};

List.prototype.some = function(fn, context) {
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        if (fn.call(context, cursor.data, cursor, this)) {
            return true;
        }

        cursor = cursor.next;
    }

    return false;
};

List.prototype.map = function(fn, context) {
    var result = new List();
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        result.appendData(fn.call(context, cursor.data, cursor, this));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.filter = function(fn, context) {
    var result = new List();
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        if (fn.call(context, cursor.data, cursor, this)) {
            result.appendData(cursor.data);
        }
        cursor = cursor.next;
    }

    return result;
};

List.prototype.clear = function() {
    this.head = null;
    this.tail = null;
};

List.prototype.copy = function() {
    var result = new List();
    var cursor = this.head;

    while (cursor !== null) {
        result.insert(createItem(cursor.data));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.prepend = function(item) {
    //      head
    //    ^
    // item
    this.updateCursors(null, item, this.head, item);

    // insert to the beginning of the list
    if (this.head !== null) {
        // new item <- first item
        this.head.prev = item;

        // new item -> first item
        item.next = this.head;
    } else {
        // if list has no head, then it also has no tail
        // in this case tail points to the new item
        this.tail = item;
    }

    // head always points to new item
    this.head = item;

    return this;
};

List.prototype.prependData = function(data) {
    return this.prepend(createItem(data));
};

List.prototype.append = function(item) {
    return this.insert(item);
};

List.prototype.appendData = function(data) {
    return this.insert(createItem(data));
};

List.prototype.insert = function(item, before) {
    if (before !== undefined && before !== null) {
        // prev   before
        //      ^
        //     item
        this.updateCursors(before.prev, item, before, item);

        if (before.prev === null) {
            // insert to the beginning of list
            if (this.head !== before) {
                throw new Error('before doesn\'t belong to list');
            }

            // since head points to before therefore list doesn't empty
            // no need to check tail
            this.head = item;
            before.prev = item;
            item.next = before;

            this.updateCursors(null, item);
        } else {

            // insert between two items
            before.prev.next = item;
            item.prev = before.prev;

            before.prev = item;
            item.next = before;
        }
    } else {
        // tail
        //      ^
        //      item
        this.updateCursors(this.tail, item, null, item);

        // insert to the ending of the list
        if (this.tail !== null) {
            // last item -> new item
            this.tail.next = item;

            // last item <- new item
            item.prev = this.tail;
        } else {
            // if list has no tail, then it also has no head
            // in this case head points to new item
            this.head = item;
        }

        // tail always points to new item
        this.tail = item;
    }

    return this;
};

List.prototype.insertData = function(data, before) {
    return this.insert(createItem(data), before);
};

List.prototype.remove = function(item) {
    //      item
    //       ^
    // prev     next
    this.updateCursors(item, item.prev, item, item.next);

    if (item.prev !== null) {
        item.prev.next = item.next;
    } else {
        if (this.head !== item) {
            throw new Error('item doesn\'t belong to list');
        }

        this.head = item.next;
    }

    if (item.next !== null) {
        item.next.prev = item.prev;
    } else {
        if (this.tail !== item) {
            throw new Error('item doesn\'t belong to list');
        }

        this.tail = item.prev;
    }

    item.prev = null;
    item.next = null;

    return item;
};

List.prototype.push = function(data) {
    this.insert(createItem(data));
};

List.prototype.pop = function() {
    if (this.tail !== null) {
        return this.remove(this.tail);
    }
};

List.prototype.unshift = function(data) {
    this.prepend(createItem(data));
};

List.prototype.shift = function() {
    if (this.head !== null) {
        return this.remove(this.head);
    }
};

List.prototype.prependList = function(list) {
    return this.insertList(list, this.head);
};

List.prototype.appendList = function(list) {
    return this.insertList(list);
};

List.prototype.insertList = function(list, before) {
    // ignore empty lists
    if (list.head === null) {
        return this;
    }

    if (before !== undefined && before !== null) {
        this.updateCursors(before.prev, list.tail, before, list.head);

        // insert in the middle of dist list
        if (before.prev !== null) {
            // before.prev <-> list.head
            before.prev.next = list.head;
            list.head.prev = before.prev;
        } else {
            this.head = list.head;
        }

        before.prev = list.tail;
        list.tail.next = before;
    } else {
        this.updateCursors(this.tail, list.tail, null, list.head);

        // insert to end of the list
        if (this.tail !== null) {
            // if destination list has a tail, then it also has a head,
            // but head doesn't change

            // dest tail -> source head
            this.tail.next = list.head;

            // dest tail <- source head
            list.head.prev = this.tail;
        } else {
            // if list has no a tail, then it also has no a head
            // in this case points head to new item
            this.head = list.head;
        }

        // tail always start point to new item
        this.tail = list.tail;
    }

    list.head = null;
    list.tail = null;

    return this;
};

List.prototype.replace = function(oldItem, newItemOrList) {
    if ('head' in newItemOrList) {
        this.insertList(newItemOrList, oldItem);
    } else {
        this.insert(newItemOrList, oldItem);
    }

    this.remove(oldItem);
};

module.exports = List;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/walker/create.js":[function(require,module,exports){
var hasOwnProperty = Object.prototype.hasOwnProperty;
var noop = function() {};

function ensureFunction(value) {
    return typeof value === 'function' ? value : noop;
}

function invokeForType(fn, type) {
    return function(node, item, list) {
        if (node.type === type) {
            fn.call(this, node, item, list);
        }
    };
}

function getWalkersFromStructure(name, nodeType) {
    var structure = nodeType.structure;
    var walkers = [];

    for (var key in structure) {
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }

        var fieldTypes = structure[key];
        var walker = {
            name: key,
            type: false,
            nullable: false
        };

        if (!Array.isArray(structure[key])) {
            fieldTypes = [structure[key]];
        }

        for (var i = 0; i < fieldTypes.length; i++) {
            var fieldType = fieldTypes[i];
            if (fieldType === null) {
                walker.nullable = true;
            } else if (typeof fieldType === 'string') {
                walker.type = 'node';
            } else if (Array.isArray(fieldType)) {
                walker.type = 'list';
            }
        }

        if (walker.type) {
            walkers.push(walker);
        }
    }

    if (walkers.length) {
        return {
            context: nodeType.walkContext,
            fields: walkers
        };
    }

    return null;
}

function getTypesFromConfig(config) {
    var types = {};

    for (var name in config.node) {
        if (hasOwnProperty.call(config.node, name)) {
            var nodeType = config.node[name];

            if (!nodeType.structure) {
                throw new Error('Missed `structure` field in `' + name + '` node type definition');
            }

            types[name] = getWalkersFromStructure(name, nodeType);
        }
    }

    return types;
}

function createTypeIterator(config, reverse) {
    var fields = config.fields.slice();
    var contextName = config.context;
    var useContext = typeof contextName === 'string';

    if (reverse) {
        fields.reverse();
    }

    return function(node, context, walk) {
        var prevContextValue;

        if (useContext) {
            prevContextValue = context[contextName];
            context[contextName] = node;
        }

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            var ref = node[field.name];

            if (!field.nullable || ref) {
                if (field.type === 'list') {
                    if (reverse) {
                        ref.forEachRight(walk);
                    } else {
                        ref.forEach(walk);
                    }
                } else {
                    walk(ref);
                }
            }
        }

        if (useContext) {
            context[contextName] = prevContextValue;
        }
    };
}

function createFastTraveralMap(iterators) {
    return {
        Atrule: {
            StyleSheet: iterators.StyleSheet,
            Atrule: iterators.Atrule,
            Rule: iterators.Rule,
            Block: iterators.Block
        },
        Rule: {
            StyleSheet: iterators.StyleSheet,
            Atrule: iterators.Atrule,
            Rule: iterators.Rule,
            Block: iterators.Block
        },
        Declaration: {
            StyleSheet: iterators.StyleSheet,
            Atrule: iterators.Atrule,
            Rule: iterators.Rule,
            Block: iterators.Block,
            DeclarationList: iterators.DeclarationList
        }
    };
}

module.exports = function createWalker(config) {
    var types = getTypesFromConfig(config);
    var iteratorsNatural = {};
    var iteratorsReverse = {};

    for (var name in types) {
        if (hasOwnProperty.call(types, name) && types[name] !== null) {
            iteratorsNatural[name] = createTypeIterator(types[name], false);
            iteratorsReverse[name] = createTypeIterator(types[name], true);
        }
    }

    var fastTraversalIteratorsNatural = createFastTraveralMap(iteratorsNatural);
    var fastTraversalIteratorsReverse = createFastTraveralMap(iteratorsReverse);

    var walk = function(root, options) {
        function walkNode(node, item, list) {
            enter.call(context, node, item, list);

            if (iterators.hasOwnProperty(node.type)) {
                iterators[node.type](node, context, walkNode);
            }

            leave.call(context, node, item, list);
        }

        var enter = noop;
        var leave = noop;
        var iterators = iteratorsNatural;
        var context = {
            root: root,
            stylesheet: null,
            atrule: null,
            atrulePrelude: null,
            rule: null,
            selector: null,
            block: null,
            declaration: null,
            function: null
        };

        if (typeof options === 'function') {
            enter = options;
        } else if (options) {
            enter = ensureFunction(options.enter);
            leave = ensureFunction(options.leave);

            if (options.reverse) {
                iterators = iteratorsReverse;
            }

            if (options.visit) {
                if (fastTraversalIteratorsNatural.hasOwnProperty(options.visit)) {
                    iterators = options.reverse
                        ? fastTraversalIteratorsReverse[options.visit]
                        : fastTraversalIteratorsNatural[options.visit];
                } else if (!types.hasOwnProperty(options.visit)) {
                    throw new Error('Bad value `' + options.visit + '` for `visit` option (should be: ' + Object.keys(types).join(', ') + ')');
                }

                enter = invokeForType(enter, options.visit);
                leave = invokeForType(leave, options.visit);
            }
        }

        if (enter === noop && leave === noop) {
            throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
        }

        // swap handlers in reverse mode to invert visit order
        if (options.reverse) {
            var tmp = enter;
            enter = leave;
            leave = tmp;
        }

        walkNode(root);
    };

    walk.find = function(ast, fn) {
        var found = null;

        walk(ast, function(node, item, list) {
            if (found === null && fn.call(this, node, item, list)) {
                found = node;
            }
        });

        return found;
    };

    walk.findLast = function(ast, fn) {
        var found = null;

        walk(ast, {
            reverse: true,
            enter: function(node, item, list) {
                if (found === null && fn.call(this, node, item, list)) {
                    found = node;
                }
            }
        });

        return found;
    };

    walk.findAll = function(ast, fn) {
        var found = [];

        walk(ast, function(node, item, list) {
            if (fn.call(this, node, item, list)) {
                found.push(node);
            }
        });

        return found;
    };

    return walk;
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/names.js":[function(require,module,exports){
var hasOwnProperty = Object.prototype.hasOwnProperty;
var keywords = Object.create(null);
var properties = Object.create(null);
var HYPHENMINUS = 45; // '-'.charCodeAt()

function isCustomProperty(str, offset) {
    offset = offset || 0;

    return str.length - offset >= 2 &&
           str.charCodeAt(offset) === HYPHENMINUS &&
           str.charCodeAt(offset + 1) === HYPHENMINUS;
}

function getVendorPrefix(str, offset) {
    offset = offset || 0;

    // verdor prefix should be at least 3 chars length
    if (str.length - offset >= 3) {
        // vendor prefix starts with hyper minus following non-hyper minus
        if (str.charCodeAt(offset) === HYPHENMINUS &&
            str.charCodeAt(offset + 1) !== HYPHENMINUS) {
            // vendor prefix should contain a hyper minus at the ending
            var secondDashIndex = str.indexOf('-', offset + 2);

            if (secondDashIndex !== -1) {
                return str.substring(offset, secondDashIndex + 1);
            }
        }
    }

    return '';
}

function getKeywordDescriptor(keyword) {
    if (hasOwnProperty.call(keywords, keyword)) {
        return keywords[keyword];
    }

    var name = keyword.toLowerCase();

    if (hasOwnProperty.call(keywords, name)) {
        return keywords[keyword] = keywords[name];
    }

    var custom = isCustomProperty(name, 0);
    var vendor = !custom ? getVendorPrefix(name, 0) : '';

    return keywords[keyword] = Object.freeze({
        basename: name.substr(vendor.length),
        name: name,
        vendor: vendor,
        prefix: vendor,
        custom: custom
    });
}

function getPropertyDescriptor(property) {
    if (hasOwnProperty.call(properties, property)) {
        return properties[property];
    }

    var name = property;
    var hack = property[0];

    if (hack === '/') {
        hack = property[1] === '/' ? '//' : '/';
    } else if (hack !== '_' &&
               hack !== '*' &&
               hack !== '$' &&
               hack !== '#' &&
               hack !== '+' &&
               hack !== '&') {
        hack = '';
    }

    var custom = isCustomProperty(name, hack.length);

    // re-use result when possible (the same as for lower case)
    if (!custom) {
        name = name.toLowerCase();
        if (hasOwnProperty.call(properties, name)) {
            return properties[property] = properties[name];
        }
    }

    var vendor = !custom ? getVendorPrefix(name, hack.length) : '';
    var prefix = name.substr(0, hack.length + vendor.length);

    return properties[property] = Object.freeze({
        basename: name.substr(prefix.length),
        name: name.substr(hack.length),
        hack: hack,
        vendor: vendor,
        prefix: prefix,
        custom: custom
    });
}

module.exports = {
    keyword: getKeywordDescriptor,
    property: getPropertyDescriptor,
    isCustomProperty: isCustomProperty,
    vendorPrefix: getVendorPrefix
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/mix.js":[function(require,module,exports){
var hasOwnProperty = Object.prototype.hasOwnProperty;
var shape = {
    generic: true,
    types: {},
    atrules: {},
    properties: {},
    parseContext: {},
    scope: {},
    atrule: ['parse'],
    pseudo: ['parse'],
    node: ['name', 'structure', 'parse', 'generate', 'walkContext']
};

function isObject(value) {
    return value && value.constructor === Object;
}

function copy(value) {
    if (isObject(value)) {
        return Object.assign({}, value);
    } else {
        return value;
    }
}
function extend(dest, src) {
    for (var key in src) {
        if (hasOwnProperty.call(src, key)) {
            if (isObject(dest[key])) {
                extend(dest[key], copy(src[key]));
            } else {
                dest[key] = copy(src[key]);
            }
        }
    }
}

function mix(dest, src, shape) {
    for (var key in shape) {
        if (hasOwnProperty.call(shape, key) === false) {
            continue;
        }

        if (shape[key] === true) {
            if (key in src) {
                if (hasOwnProperty.call(src, key)) {
                    dest[key] = copy(src[key]);
                }
            }
        } else if (shape[key]) {
            if (isObject(shape[key])) {
                var res = {};
                extend(res, dest[key]);
                extend(res, src[key]);
                dest[key] = res;
            } else if (Array.isArray(shape[key])) {
                var res = {};
                var innerShape = shape[key].reduce(function(s, k) {
                    s[k] = true;
                    return s;
                }, {});
                for (var name in dest[key]) {
                    if (hasOwnProperty.call(dest[key], name)) {
                        res[name] = {};
                        if (dest[key] && dest[key][name]) {
                            mix(res[name], dest[key][name], innerShape);
                        }
                    }
                }
                for (var name in src[key]) {
                    if (hasOwnProperty.call(src[key], name)) {
                        if (!res[name]) {
                            res[name] = {};
                        }
                        if (src[key] && src[key][name]) {
                            mix(res[name], src[key][name], innerShape);
                        }
                    }
                }
                dest[key] = res;
            }
        }
    }
    return dest;
}

module.exports = function(dest, src) {
    return mix(dest, src, shape);
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/dist/default-syntax.json":[function(require,module,exports){
({"generic":true,"types":{"absolute-size":"xx-small|x-small|small|medium|large|x-large|xx-large","alpha-value":"<number>|<percentage>","angle-percentage":"<angle>|<percentage>","angular-color-hint":"<angle-percentage>","angular-color-stop":"<color>&&<color-stop-angle>?","angular-color-stop-list":"[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>","animateable-feature":"scroll-position|contents|<custom-ident>","attachment":"scroll|fixed|local","attr()":"attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )","attr-matcher":"['~'|'|'|'^'|'$'|'*']? '='","attr-modifier":"i|s","attribute-selector":"'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'","auto-repeat":"repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )","auto-track-list":"[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?","baseline-position":"[first|last]? baseline","basic-shape":"<inset()>|<circle()>|<ellipse()>|<polygon()>","bg-image":"none|<image>","bg-layer":"<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","bg-position":"[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]","bg-size":"[<length-percentage>|auto]{1,2}|cover|contain","blur()":"blur( <length> )","blend-mode":"normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity","box":"border-box|padding-box|content-box","brightness()":"brightness( <number-percentage> )","calc()":"calc( <calc-sum> )","calc-sum":"<calc-product> [['+'|'-'] <calc-product>]*","calc-product":"<calc-value> ['*' <calc-value>|'/' <number>]*","calc-value":"<number>|<dimension>|<percentage>|( <calc-sum> )","cf-final-image":"<image>|<color>","cf-mixing-image":"<percentage>?&&<image>","circle()":"circle( [<shape-radius>]? [at <position>]? )","clamp()":"clamp( <calc-sum>#{3} )","class-selector":"'.' <ident-token>","clip-source":"<url>","color":"<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>","color-stop":"<color-stop-length>|<color-stop-angle>","color-stop-angle":"<angle-percentage>{1,2}","color-stop-length":"<length-percentage>{1,2}","color-stop-list":"[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>","combinator":"'>'|'+'|'~'|['||']","common-lig-values":"[common-ligatures|no-common-ligatures]","compat":"searchfield|textarea|push-button|button-bevel|slider-horizontal|checkbox|radio|square-button|menulist|menulist-button|listbox|meter|progress-bar","composite-style":"clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor","compositing-operator":"add|subtract|intersect|exclude","compound-selector":"[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!","compound-selector-list":"<compound-selector>#","complex-selector":"<compound-selector> [<combinator>? <compound-selector>]*","complex-selector-list":"<complex-selector>#","conic-gradient()":"conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )","contextual-alt-values":"[contextual|no-contextual]","content-distribution":"space-between|space-around|space-evenly|stretch","content-list":"[<string>|contents|<url>|<quote>|<attr()>|counter( <ident> , <'list-style-type'>? )]+","content-position":"center|start|end|flex-start|flex-end","content-replacement":"<image>","contrast()":"contrast( [<number-percentage>] )","counter()":"counter( <custom-ident> , [<counter-style>|none]? )","counter-style":"<counter-style-name>|symbols( )","counter-style-name":"<custom-ident>","counters()":"counters( <custom-ident> , <string> , [<counter-style>|none]? )","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","cubic-bezier-timing-function":"ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number> , <number> , <number> , <number> )","deprecated-system-color":"ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText","discretionary-lig-values":"[discretionary-ligatures|no-discretionary-ligatures]","display-box":"contents|none","display-inside":"flow|flow-root|table|flex|grid|ruby","display-internal":"table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container","display-legacy":"inline-block|inline-list-item|inline-table|inline-flex|inline-grid","display-listitem":"<display-outside>?&&[flow|flow-root]?&&list-item","display-outside":"block|inline|run-in","drop-shadow()":"drop-shadow( <length>{2,3} <color>? )","east-asian-variant-values":"[jis78|jis83|jis90|jis04|simplified|traditional]","east-asian-width-values":"[full-width|proportional-width]","element()":"element( <id-selector> )","ellipse()":"ellipse( [<shape-radius>{2}]? [at <position>]? )","ending-shape":"circle|ellipse","env()":"env( <custom-ident> , <declaration-value>? )","explicit-track-list":"[<line-names>? <track-size>]+ <line-names>?","family-name":"<string>|<custom-ident>+","feature-tag-value":"<string> [<integer>|on|off]?","feature-type":"@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation","feature-value-block":"<feature-type> '{' <feature-value-declaration-list> '}'","feature-value-block-list":"<feature-value-block>+","feature-value-declaration":"<custom-ident> : <integer>+ ;","feature-value-declaration-list":"<feature-value-declaration>","feature-value-name":"<custom-ident>","fill-rule":"nonzero|evenodd","filter-function":"<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>","filter-function-list":"[<filter-function>|<url>]+","final-bg-layer":"<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","fit-content()":"fit-content( [<length>|<percentage>] )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [<positive-integer>] , [<line-names>? <fixed-size>]+ <line-names>? )","fixed-size":"<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )","font-stretch-absolute":"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>","font-variant-css21":"[normal|small-caps]","font-weight-absolute":"normal|bold|<number>","frequency-percentage":"<frequency>|<percentage>","general-enclosed":"[<function-token> <any-value> )]|( <ident> <any-value> )","generic-family":"serif|sans-serif|cursive|fantasy|monospace|-apple-system","generic-name":"serif|sans-serif|cursive|fantasy|monospace","geometry-box":"<shape-box>|fill-box|stroke-box|view-box","gradient":"<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>","grayscale()":"grayscale( <number-percentage> )","grid-line":"auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]","historical-lig-values":"[historical-ligatures|no-historical-ligatures]","hsl()":"hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )","hsla()":"hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )","hue":"<number>|<angle>","hue-rotate()":"hue-rotate( <angle> )","image":"<url>|<image()>|<image-set()>|<element()>|<cross-fade()>|<gradient>","image()":"image( <image-tags>? [<image-src>? , <color>?]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[<image>|<string>] <resolution>","image-src":"<url>|<string>","image-tags":"ltr|rtl","inflexible-breadth":"<length>|<percentage>|min-content|max-content|auto","inset()":"inset( <length-percentage>{1,4} [round <'border-radius'>]? )","invert()":"invert( <number-percentage> )","keyframes-name":"<custom-ident>|<string>","keyframe-block":"<keyframe-selector># { <declaration-list> }","keyframe-block-list":"<keyframe-block>+","keyframe-selector":"from|to|<percentage>","leader()":"leader( <leader-type> )","leader-type":"dotted|solid|space|<string>","length-percentage":"<length>|<percentage>","line-names":"'[' <custom-ident>* ']'","line-name-list":"[<line-names>|<name-repeat>]+","line-style":"none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset","line-width":"<length>|thin|medium|thick","linear-color-hint":"<length-percentage>","linear-color-stop":"<color> <color-stop-length>?","linear-gradient()":"linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","mask-layer":"<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>","mask-position":"[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?","mask-reference":"none|<image>|<mask-source>","mask-source":"<url>","masking-mode":"alpha|luminance|match-source","matrix()":"matrix( <number>#{6} )","matrix3d()":"matrix3d( <number>#{16} )","max()":"max( <calc-sum># )","media-and":"<media-in-parens> [and <media-in-parens>]+","media-condition":"<media-not>|<media-and>|<media-or>|<media-in-parens>","media-condition-without-or":"<media-not>|<media-and>|<media-in-parens>","media-feature":"( [<mf-plain>|<mf-boolean>|<mf-range>] )","media-in-parens":"( <media-condition> )|<media-feature>|<general-enclosed>","media-not":"not <media-in-parens>","media-or":"<media-in-parens> [or <media-in-parens>]+","media-query":"<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?","media-query-list":"<media-query>#","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","mf-plain":"<mf-name> : <mf-value>","mf-range":"<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>","mf-value":"<number>|<dimension>|<ident>|<ratio>","min()":"min( <calc-sum># )","minmax()":"minmax( [<length>|<percentage>|<flex>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )","named-color":"transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>","namespace-prefix":"<ident>","ns-prefix":"[<ident-token>|'*']? '|'","number-percentage":"<number>|<percentage>","numeric-figure-values":"[lining-nums|oldstyle-nums]","numeric-fraction-values":"[diagonal-fractions|stacked-fractions]","numeric-spacing-values":"[proportional-nums|tabular-nums]","nth":"<an-plus-b>|even|odd","opacity()":"opacity( [<number-percentage>] )","overflow-position":"unsafe|safe","outline-radius":"<length>|<percentage>","page-body":"<declaration>? [; <page-body>]?|<page-margin-box> <page-body>","page-margin-box":"<page-margin-box-type> '{' <declaration-list> '}'","page-margin-box-type":"@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom","page-selector-list":"[<page-selector>#]?","page-selector":"<pseudo-page>+|<ident> <pseudo-page>*","perspective()":"perspective( <length> )","polygon()":"polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )","position":"[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]","pseudo-class-selector":"':' <ident-token>|':' <function-token> <any-value> ')'","pseudo-element-selector":"':' <pseudo-class-selector>","pseudo-page":": [left|right|first|blank]","quote":"open-quote|close-quote|no-open-quote|no-close-quote","radial-gradient()":"radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","relative-selector":"<combinator>? <complex-selector>","relative-selector-list":"<relative-selector>#","relative-size":"larger|smaller","repeat-style":"repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}","repeating-linear-gradient()":"repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","repeating-radial-gradient()":"repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","rgb()":"rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )","rgba()":"rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )","rotate()":"rotate( [<angle>|<zero>] )","rotate3d()":"rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )","rotateX()":"rotateX( [<angle>|<zero>] )","rotateY()":"rotateY( [<angle>|<zero>] )","rotateZ()":"rotateZ( [<angle>|<zero>] )","saturate()":"saturate( <number-percentage> )","scale()":"scale( <number> , <number>? )","scale3d()":"scale3d( <number> , <number> , <number> )","scaleX()":"scaleX( <number> )","scaleY()":"scaleY( <number> )","scaleZ()":"scaleZ( <number> )","self-position":"center|start|end|self-start|self-end|flex-start|flex-end","shape-radius":"<length-percentage>|closest-side|farthest-side","skew()":"skew( [<angle>|<zero>] , [<angle>|<zero>]? )","skewX()":"skewX( [<angle>|<zero>] )","skewY()":"skewY( [<angle>|<zero>] )","sepia()":"sepia( <number-percentage> )","shadow":"inset?&&<length>{2,4}&&<color>?","shadow-t":"[<length>{2,3}&&<color>?]","shape":"rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )","shape-box":"<box>|margin-box","side-or-corner":"[left|right]||[top|bottom]","single-animation":"<time>||<timing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]","single-animation-direction":"normal|reverse|alternate|alternate-reverse","single-animation-fill-mode":"none|forwards|backwards|both","single-animation-iteration-count":"infinite|<number>","single-animation-play-state":"running|paused","single-transition":"[none|<single-transition-property>]||<time>||<timing-function>||<time>","single-transition-property":"all|<custom-ident>","size":"closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}","step-position":"jump-start|jump-end|jump-none|jump-both|start|end","step-timing-function":"step-start|step-end|steps( <integer> [, <step-position>]? )","subclass-selector":"<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>","supports-condition":"not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*","supports-in-parens":"( <supports-condition> )|<supports-feature>|<general-enclosed>","supports-feature":"<supports-decl>|<supports-selector-fn>","supports-decl":"( <declaration> )","supports-selector-fn":"selector( <complex-selector> )","symbol":"<string>|<image>|<custom-ident>","target":"<target-counter()>|<target-counters()>|<target-text()>","target-counter()":"target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )","target-counters()":"target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )","target-text()":"target-text( [<string>|<url>] , [content|before|after|first-letter]? )","time-percentage":"<time>|<percentage>","timing-function":"linear|<cubic-bezier-timing-function>|<step-timing-function>","track-breadth":"<length-percentage>|<flex>|min-content|max-content|auto","track-list":"[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?","track-repeat":"repeat( [<positive-integer>] , [<line-names>? <track-size>]+ <line-names>? )","track-size":"<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )","transform-function":"<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>","transform-list":"<transform-function>+","translate()":"translate( <length-percentage> , <length-percentage>? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","type-or-unit":"string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%","type-selector":"<wq-name>|<ns-prefix>? '*'","var()":"var( <custom-property-name> , <declaration-value>? )","viewport-length":"auto|<length-percentage>","wq-name":"<ns-prefix>? <ident-token>","-legacy-gradient":"<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>","-legacy-linear-gradient":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[<angle>|<side-or-corner>]? , <color-stop-list>","-legacy-radial-gradient":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side|closest-corner|farthest-side|farthest-corner|contain|cover","-legacy-radial-gradient-shape":"circle|ellipse","-non-standard-font":"-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body","-non-standard-color":"-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text","-non-standard-image-rendering":"optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast","-non-standard-overflow":"-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable","-non-standard-width":"min-intrinsic|intrinsic|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )","-webkit-gradient-color-stop":"from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )","-webkit-gradient-point":"[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]","-webkit-gradient-radius":"<length>|<percentage>","-webkit-gradient-type":"linear|radial","-webkit-mask-box-repeat":"repeat|stretch|round","-webkit-mask-clip-style":"border|border-box|padding|padding-box|content|content-box|text","-ms-filter-function-list":"<-ms-filter-function>+","-ms-filter-function":"<-ms-filter-function-progid>|<-ms-filter-function-legacy>","-ms-filter-function-progid":"'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]","-ms-filter-function-legacy":"<ident-token>|<function-token> <any-value>? )","-ms-filter":"<string>","age":"child|young|old","attr-name":"<wq-name>","attr-fallback":"<any-value>","border-radius":"<length-percentage>{1,2}","bottom":"<length>|auto","generic-voice":"[<age>? <gender> <integer>?]","gender":"male|female|neutral","left":"<length>|auto","mask-image":"<mask-reference>#","name-repeat":"repeat( [<positive-integer>|auto-fill] , <line-names>+ )","paint":"none|<color>|<url> [none|<color>]?|context-fill|context-stroke","path()":"path( <string> )","ratio":"<integer> / <integer>","right":"<length>|auto","svg-length":"<percentage>|<length>|<number>","svg-writing-mode":"lr-tb|rl-tb|tb-rl|lr|rl|tb","top":"<length>|auto","track-group":"'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>","track-list-v0":"[<string>* <track-group> <string>*]+|none","track-minmax":"minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content","x":"<number>","y":"<number>","declaration":"<ident-token> : <declaration-value>? ['!' important]?","declaration-list":"[<declaration>? ';']* <declaration>?","url":"url( <string> <url-modifier>* )|<url-token>","url-modifier":"<ident>|<function-token> <any-value> )","number-zero-one":"<number [0,1]>","number-one-or-greater":"<number [1,∞]>","positive-integer":"<integer [0,∞]>"},"properties":{"--*":"<declaration-value>","-ms-accelerator":"false|true","-ms-block-progression":"tb|rl|bt|lr","-ms-content-zoom-chaining":"none|chained","-ms-content-zooming":"none|zoom","-ms-content-zoom-limit":"<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>","-ms-content-zoom-limit-max":"<percentage>","-ms-content-zoom-limit-min":"<percentage>","-ms-content-zoom-snap":"<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>","-ms-content-zoom-snap-points":"snapInterval( <percentage> , <percentage> )|snapList( <percentage># )","-ms-content-zoom-snap-type":"none|proximity|mandatory","-ms-filter":"<string>","-ms-flow-from":"[none|<custom-ident>]#","-ms-flow-into":"[none|<custom-ident>]#","-ms-high-contrast-adjust":"auto|none","-ms-hyphenate-limit-chars":"auto|<integer>{1,3}","-ms-hyphenate-limit-lines":"no-limit|<integer>","-ms-hyphenate-limit-zone":"<percentage>|<length>","-ms-ime-align":"auto|after","-ms-overflow-style":"auto|none|scrollbar|-ms-autohiding-scrollbar","-ms-scrollbar-3dlight-color":"<color>","-ms-scrollbar-arrow-color":"<color>","-ms-scrollbar-base-color":"<color>","-ms-scrollbar-darkshadow-color":"<color>","-ms-scrollbar-face-color":"<color>","-ms-scrollbar-highlight-color":"<color>","-ms-scrollbar-shadow-color":"<color>","-ms-scrollbar-track-color":"<color>","-ms-scroll-chaining":"chained|none","-ms-scroll-limit":"<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>","-ms-scroll-limit-x-max":"auto|<length>","-ms-scroll-limit-x-min":"<length>","-ms-scroll-limit-y-max":"auto|<length>","-ms-scroll-limit-y-min":"<length>","-ms-scroll-rails":"none|railed","-ms-scroll-snap-points-x":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-points-y":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-type":"none|proximity|mandatory","-ms-scroll-snap-x":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>","-ms-scroll-snap-y":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>","-ms-scroll-translation":"none|vertical-to-horizontal","-ms-text-autospace":"none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space","-ms-touch-select":"grippers|none","-ms-user-select":"none|element|text","-ms-wrap-flow":"auto|both|start|end|maximum|clear","-ms-wrap-margin":"<length>","-ms-wrap-through":"wrap|none","-moz-appearance":"none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized","-moz-binding":"<url>|none","-moz-border-bottom-colors":"<color>+|none","-moz-border-left-colors":"<color>+|none","-moz-border-right-colors":"<color>+|none","-moz-border-top-colors":"<color>+|none","-moz-context-properties":"none|[fill|fill-opacity|stroke|stroke-opacity]#","-moz-float-edge":"border-box|content-box|margin-box|padding-box","-moz-force-broken-image-icon":"<integer>","-moz-image-region":"<shape>|auto","-moz-orient":"inline|block|horizontal|vertical","-moz-outline-radius":"<outline-radius>{1,4} [/ <outline-radius>{1,4}]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore|stretch-to-fit","-moz-text-blink":"none|blink","-moz-user-focus":"ignore|normal|select-after|select-before|select-menu|select-same|select-all|none","-moz-user-input":"auto|none|enabled|disabled","-moz-user-modify":"read-only|read-write|write-only","-moz-window-dragging":"drag|no-drag","-moz-window-shadow":"default|menu|tooltip|sheet|none","-webkit-appearance":"none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|listbox|listitem|media-fullscreen-button|media-mute-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield","-webkit-border-before":"<'border-width'>||<'border-style'>||<'color'>","-webkit-border-before-color":"<'color'>","-webkit-border-before-style":"<'border-style'>","-webkit-border-before-width":"<'border-width'>","-webkit-box-reflect":"[above|below|right|left]? <length>? <image>?","-webkit-line-clamp":"none|<integer>","-webkit-mask":"[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#","-webkit-mask-attachment":"<attachment>#","-webkit-mask-clip":"[<box>|border|padding|content|text]#","-webkit-mask-composite":"<composite-style>#","-webkit-mask-image":"<mask-reference>#","-webkit-mask-origin":"[<box>|border|padding|content]#","-webkit-mask-position":"<position>#","-webkit-mask-position-x":"[<length-percentage>|left|center|right]#","-webkit-mask-position-y":"[<length-percentage>|top|center|bottom]#","-webkit-mask-repeat":"<repeat-style>#","-webkit-mask-repeat-x":"repeat|no-repeat|space|round","-webkit-mask-repeat-y":"repeat|no-repeat|space|round","-webkit-mask-size":"<bg-size>#","-webkit-overflow-scrolling":"auto|touch","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length>||<color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default|none","-webkit-user-modify":"read-only|read-write|read-write-plaintext-only","align-content":"normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>","align-items":"normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]","align-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>","all":"initial|inherit|unset|revert","animation":"<single-animation>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[none|<keyframes-name>]#","animation-play-state":"<single-animation-play-state>#","animation-timing-function":"<timing-function>#","appearance":"none|auto|button|textfield|<compat>","azimuth":"<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards","backdrop-filter":"none|<filter-function-list>","backface-visibility":"visible|hidden","background":"[<bg-layer> ,]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<box>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<box>#","background-position":"<bg-position>#","background-position-x":"[center|[left|right|x-start|x-end]? <length-percentage>?]#","background-position-y":"[center|[top|bottom|y-start|y-end]? <length-percentage>?]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","block-overflow":"clip|ellipsis|<string>","block-size":"<'width'>","border":"<line-width>||<line-style>||<color>","border-block":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-color":"<'border-top-color'>{1,2}","border-block-style":"<'border-top-style'>","border-block-width":"<'border-top-width'>","border-block-end":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-end-color":"<'border-top-color'>","border-block-end-style":"<'border-top-style'>","border-block-end-width":"<'border-top-width'>","border-block-start":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-start-color":"<'border-top-color'>","border-block-start-style":"<'border-top-style'>","border-block-start-width":"<'border-top-width'>","border-bottom":"<line-width>||<line-style>||<color>","border-bottom-color":"<'border-top-color'>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<line-style>","border-bottom-width":"<line-width>","border-collapse":"collapse|separate","border-color":"<color>{1,4}","border-end-end-radius":"<length-percentage>{1,2}","border-end-start-radius":"<length-percentage>{1,2}","border-image":"<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>","border-image-outset":"[<length>|<number>]{1,4}","border-image-repeat":"[stretch|repeat|round|space]{1,2}","border-image-slice":"<number-percentage>{1,4}&&fill?","border-image-source":"none|<image>","border-image-width":"[<length-percentage>|<number>|auto]{1,4}","border-inline":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-end":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-color":"<'border-top-color'>{1,2}","border-inline-style":"<'border-top-style'>","border-inline-width":"<'border-top-width'>","border-inline-end-color":"<'border-top-color'>","border-inline-end-style":"<'border-top-style'>","border-inline-end-width":"<'border-top-width'>","border-inline-start":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-start-color":"<'border-top-color'>","border-inline-start-style":"<'border-top-style'>","border-inline-start-width":"<'border-top-width'>","border-left":"<line-width>||<line-style>||<color>","border-left-color":"<color>","border-left-style":"<line-style>","border-left-width":"<line-width>","border-radius":"<length-percentage>{1,4} [/ <length-percentage>{1,4}]?","border-right":"<line-width>||<line-style>||<color>","border-right-color":"<color>","border-right-style":"<line-style>","border-right-width":"<line-width>","border-spacing":"<length> <length>?","border-start-end-radius":"<length-percentage>{1,2}","border-start-start-radius":"<length-percentage>{1,2}","border-style":"<line-style>{1,4}","border-top":"<line-width>||<line-style>||<color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<line-style>","border-top-width":"<line-width>","border-width":"<line-width>{1,4}","bottom":"<length>|<percentage>|auto","box-align":"start|center|end|baseline|stretch","box-decoration-break":"slice|clone","box-direction":"normal|reverse|inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single|multiple","box-ordinal-group":"<integer>","box-orient":"horizontal|vertical|inline-axis|block-axis|inherit","box-pack":"start|center|end|justify","box-shadow":"none|<shadow>#","box-sizing":"content-box|border-box","break-after":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-before":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-inside":"auto|avoid|avoid-page|avoid-column|avoid-region","caption-side":"top|bottom|block-start|block-end|inline-start|inline-end","caret-color":"auto|<color>","clear":"none|left|right|both|inline-start|inline-end","clip":"<shape>|auto","clip-path":"<clip-source>|[<basic-shape>||<geometry-box>]|none","color":"<color>","color-adjust":"economy|exact","column-count":"<integer>|auto","column-fill":"auto|balance|balance-all","column-gap":"normal|<length-percentage>","column-rule":"<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>","column-rule-color":"<color>","column-rule-style":"<'border-style'>","column-rule-width":"<'border-width'>","column-span":"none|all","column-width":"<length>|auto","columns":"<'column-width'>||<'column-count'>","contain":"none|strict|content|[size||layout||style||paint]","content":"normal|none|[<content-replacement>|<content-list>] [/ <string>]?","counter-increment":"[<custom-ident> <integer>?]+|none","counter-reset":"[<custom-ident> <integer>?]+|none","counter-set":"[<custom-ident> <integer>?]+|none","cursor":"[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]","direction":"ltr|rtl","display":"block|contents|flex|flow|flow-root|grid|inline|inline-block|inline-flex|inline-grid|inline-list-item|inline-table|list-item|none|ruby|ruby-base|ruby-base-container|ruby-text|ruby-text-container|run-in|table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|-ms-flexbox|-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box","empty-cells":"show|hide","filter":"none|<filter-function-list>|<-ms-filter-function-list>","flex":"none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]","flex-basis":"content|<'width'>","flex-direction":"row|row-reverse|column|column-reverse","flex-flow":"<'flex-direction'>||<'flex-wrap'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap|wrap|wrap-reverse","float":"left|right|none|inline-start|inline-end","font":"[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar","font-family":"[<family-name>|<generic-family>]#","font-feature-settings":"normal|<feature-tag-value>#","font-kerning":"auto|normal|none","font-language-override":"normal|<string>","font-optical-sizing":"auto|none","font-variation-settings":"normal|[<string> <number>]#","font-size":"<absolute-size>|<relative-size>|<length-percentage>","font-size-adjust":"none|<number>","font-stretch":"<font-stretch-absolute>","font-style":"normal|italic|oblique <angle>?","font-synthesis":"none|[weight||style]","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-alternates":"normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]","font-variant-caps":"normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps","font-variant-east-asian":"normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-ligatures":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]","font-variant-numeric":"normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]","font-variant-position":"normal|sub|super","font-weight":"<font-weight-absolute>|bolder|lighter","gap":"<'row-gap'> <'column-gap'>?","grid":"<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>","grid-area":"<grid-line> [/ <grid-line>]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[row|column]||dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [/ <grid-line>]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<'grid-row-gap'> <'grid-column-gap'>?","grid-row":"<grid-line> [/ <grid-line>]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?","grid-template-areas":"none|<string>+","grid-template-columns":"none|<track-list>|<auto-track-list>","grid-template-rows":"none|<track-list>|<auto-track-list>","hanging-punctuation":"none|[first||[force-end|allow-end]||last]","height":"[<length>|<percentage>]&&[border-box|content-box]?|available|min-content|max-content|fit-content|auto","hyphens":"none|manual|auto","image-orientation":"from-image|<angle>|[<angle>? flip]","image-rendering":"auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>","image-resolution":"[from-image||<resolution>]&&snap?","ime-mode":"auto|normal|active|inactive|disabled","initial-letter":"normal|[<number> <integer>?]","initial-letter-align":"[auto|alphabetic|hanging|ideographic]","inline-size":"<'width'>","inset":"<'top'>{1,4}","inset-block":"<'top'>{1,2}","inset-block-end":"<'top'>","inset-block-start":"<'top'>","inset-inline":"<'top'>{1,2}","inset-inline-end":"<'top'>","inset-inline-start":"<'top'>","isolation":"auto|isolate","justify-content":"normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]","justify-items":"normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]","justify-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]","left":"<length>|<percentage>|auto","letter-spacing":"normal|<length-percentage>","line-break":"auto|loose|normal|strict","line-clamp":"none|<integer>","line-height":"normal|<number>|<length>|<percentage>","line-height-step":"<length>","list-style":"<'list-style-type'>||<'list-style-position'>||<'list-style-image'>","list-style-image":"<url>|none","list-style-position":"inside|outside","list-style-type":"<counter-style>|<string>|none","margin":"[<length>|<percentage>|auto]{1,4}","margin-block":"<'margin-left'>{1,2}","margin-block-end":"<'margin-left'>","margin-block-start":"<'margin-left'>","margin-bottom":"<length>|<percentage>|auto","margin-inline":"<'margin-left'>{1,2}","margin-inline-end":"<'margin-left'>","margin-inline-start":"<'margin-left'>","margin-left":"<length>|<percentage>|auto","margin-right":"<length>|<percentage>|auto","margin-top":"<length>|<percentage>|auto","mask":"<mask-layer>#","mask-border":"<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>","mask-border-mode":"luminance|alpha","mask-border-outset":"[<length>|<number>]{1,4}","mask-border-repeat":"[stretch|repeat|round|space]{1,2}","mask-border-slice":"<number-percentage>{1,4} fill?","mask-border-source":"none|<image>","mask-border-width":"[<length-percentage>|<number>|auto]{1,4}","mask-clip":"[<geometry-box>|no-clip]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<geometry-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance|alpha","max-block-size":"<'max-width'>","max-height":"<length>|<percentage>|none|max-content|min-content|fit-content|fill-available","max-inline-size":"<'max-width'>","max-lines":"none|<integer>","max-width":"<length>|<percentage>|none|max-content|min-content|fit-content|fill-available|<-non-standard-width>","min-block-size":"<'min-width'>","min-height":"<length>|<percentage>|auto|max-content|min-content|fit-content|fill-available","min-inline-size":"<'min-width'>","min-width":"<length>|<percentage>|auto|max-content|min-content|fit-content|fill-available|<-non-standard-width>","mix-blend-mode":"<blend-mode>","object-fit":"fill|contain|cover|none|scale-down","object-position":"<position>","offset":"[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?","offset-anchor":"auto|<position>","offset-distance":"<length-percentage>","offset-path":"none|ray( [<angle>&&<size>?&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]","offset-position":"auto|<position>","offset-rotate":"[auto|reverse]||<angle>","opacity":"<number-zero-one>","order":"<integer>","orphans":"<integer>","outline":"[<'outline-color'>||<'outline-style'>||<'outline-width'>]","outline-color":"<color>|invert","outline-offset":"<length>","outline-style":"auto|<'border-style'>","outline-width":"<line-width>","overflow":"[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>","overflow-anchor":"auto|none","overflow-block":"visible|hidden|clip|scroll|auto","overflow-clip-box":"padding-box|content-box","overflow-inline":"visible|hidden|clip|scroll|auto","overflow-wrap":"normal|break-word|anywhere","overflow-x":"visible|hidden|clip|scroll|auto","overflow-y":"visible|hidden|clip|scroll|auto","overscroll-behavior":"[contain|none|auto]{1,2}","overscroll-behavior-x":"contain|none|auto","overscroll-behavior-y":"contain|none|auto","padding":"[<length>|<percentage>]{1,4}","padding-block":"<'padding-left'>{1,2}","padding-block-end":"<'padding-left'>","padding-block-start":"<'padding-left'>","padding-bottom":"<length>|<percentage>","padding-inline":"<'padding-left'>{1,2}","padding-inline-end":"<'padding-left'>","padding-inline-start":"<'padding-left'>","padding-left":"<length>|<percentage>","padding-right":"<length>|<percentage>","padding-top":"<length>|<percentage>","page-break-after":"auto|always|avoid|left|right|recto|verso","page-break-before":"auto|always|avoid|left|right|recto|verso","page-break-inside":"auto|avoid","paint-order":"normal|[fill||stroke||markers]","perspective":"none|<length>","perspective-origin":"<position>","place-content":"<'align-content'> <'justify-content'>?","place-items":"<'align-items'> <'justify-items'>?","place-self":"<'align-self'> <'justify-self'>?","pointer-events":"auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit","position":"static|relative|absolute|sticky|fixed|-webkit-sticky","quotes":"none|[<string> <string>]+","resize":"none|both|horizontal|vertical|block|inline","right":"<length>|<percentage>|auto","rotate":"none|<angle>|[x|y|z|<number>{3}]&&<angle>","row-gap":"normal|<length-percentage>","ruby-align":"start|center|space-between|space-around","ruby-merge":"separate|collapse|auto","ruby-position":"over|under|inter-character","scale":"none|<number>{1,3}","scrollbar-color":"auto|dark|light|<color>{2}","scrollbar-width":"auto|thin|none","scroll-behavior":"auto|smooth","scroll-margin":"<length>{1,4}","scroll-margin-block":"<length>{1,2}","scroll-margin-block-start":"<length>","scroll-margin-block-end":"<length>","scroll-margin-bottom":"<length>","scroll-margin-inline":"<length>{1,2}","scroll-margin-inline-start":"<length>","scroll-margin-inline-end":"<length>","scroll-margin-left":"<length>","scroll-margin-right":"<length>","scroll-margin-top":"<length>","scroll-padding":"[auto|<length-percentage>]{1,4}","scroll-padding-block":"[auto|<length-percentage>]{1,2}","scroll-padding-block-start":"auto|<length-percentage>","scroll-padding-block-end":"auto|<length-percentage>","scroll-padding-bottom":"auto|<length-percentage>","scroll-padding-inline":"[auto|<length-percentage>]{1,2}","scroll-padding-inline-start":"auto|<length-percentage>","scroll-padding-inline-end":"auto|<length-percentage>","scroll-padding-left":"auto|<length-percentage>","scroll-padding-right":"auto|<length-percentage>","scroll-padding-top":"auto|<length-percentage>","scroll-snap-align":"[none|start|end|center]{1,2}","scroll-snap-coordinate":"none|<position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none|repeat( <length-percentage> )","scroll-snap-points-y":"none|repeat( <length-percentage> )","scroll-snap-stop":"normal|always","scroll-snap-type":"none|[x|y|block|inline|both] [mandatory|proximity]?","scroll-snap-type-x":"none|mandatory|proximity","scroll-snap-type-y":"none|mandatory|proximity","shape-image-threshold":"<number>","shape-margin":"<length-percentage>","shape-outside":"none|<shape-box>||<basic-shape>|<image>","tab-size":"<integer>|<length>","table-layout":"auto|fixed","text-align":"start|end|left|right|center|justify|match-parent","text-align-last":"auto|start|end|left|right|center|justify","text-combine-upright":"none|all|[digits <integer>?]","text-decoration":"<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>","text-decoration-color":"<color>","text-decoration-line":"none|[underline||overline||line-through||blink]","text-decoration-skip":"none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]","text-decoration-skip-ink":"auto|none","text-decoration-style":"solid|double|dotted|dashed|wavy","text-emphasis":"<'text-emphasis-style'>||<'text-emphasis-color'>","text-emphasis-color":"<color>","text-emphasis-position":"[over|under]&&[right|left]","text-emphasis-style":"none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>","text-indent":"<length-percentage>&&hanging?&&each-line?","text-justify":"auto|inter-character|inter-word|none","text-orientation":"mixed|upright|sideways","text-overflow":"[clip|ellipsis|<string>]{1,2}","text-rendering":"auto|optimizeSpeed|optimizeLegibility|geometricPrecision","text-shadow":"none|<shadow-t>#","text-size-adjust":"none|auto|<percentage>","text-transform":"none|capitalize|uppercase|lowercase|full-width|full-size-kana","text-underline-position":"auto|[under||[left|right]]","top":"<length>|<percentage>|auto","touch-action":"auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation","transform":"none|<transform-list>","transform-box":"border-box|fill-box|view-box","transform-origin":"[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?","transform-style":"flat|preserve-3d","transition":"<single-transition>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none|<single-transition-property>#","transition-timing-function":"<timing-function>#","translate":"none|<length-percentage> [<length-percentage> <length>?]?","unicode-bidi":"normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate","user-select":"auto|text|none|contain|all","vertical-align":"baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>","visibility":"visible|hidden|collapse","white-space":"normal|pre|nowrap|pre-wrap|pre-line","widows":"<integer>","width":"[<length>|<percentage>]&&[border-box|content-box]?|available|min-content|max-content|fit-content|auto","will-change":"auto|<animateable-feature>#","word-break":"normal|break-all|keep-all|break-word","word-spacing":"normal|<length-percentage>","word-wrap":"normal|break-word","writing-mode":"horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>","z-index":"auto|<integer>","zoom":"normal|reset|<number>|<percentage>","-moz-background-clip":"padding|border","-moz-border-radius-bottomleft":"<'border-bottom-left-radius'>","-moz-border-radius-bottomright":"<'border-bottom-right-radius'>","-moz-border-radius-topleft":"<'border-top-left-radius'>","-moz-border-radius-topright":"<'border-bottom-right-radius'>","-moz-control-character-visibility":"visible|hidden","-moz-osx-font-smoothing":"auto|grayscale","-moz-user-select":"none|text|all|-moz-none","-ms-flex-align":"start|end|center|baseline|stretch","-ms-flex-item-align":"auto|start|end|center|baseline|stretch","-ms-flex-line-pack":"start|end|center|justify|distribute|stretch","-ms-flex-negative":"<'flex-shrink'>","-ms-flex-pack":"start|end|center|justify|distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<'flex-grow'>","-ms-flex-preferred-size":"<'flex-basis'>","-ms-interpolation-mode":"nearest-neighbor|bicubic","-ms-grid-column-align":"start|end|center|stretch","-ms-grid-columns":"<track-list-v0>","-ms-grid-row-align":"start|end|center|stretch","-ms-grid-rows":"<track-list-v0>","-ms-hyphenate-limit-last":"none|always|column|page|spread","-webkit-background-clip":"[<box>|border|padding|content|text]#","-webkit-column-break-after":"always|auto|avoid","-webkit-column-break-before":"always|auto|avoid","-webkit-column-break-inside":"always|auto|avoid","-webkit-font-smoothing":"auto|none|antialiased|subpixel-antialiased","-webkit-mask-box-image":"[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?","-webkit-print-color-adjust":"economy|exact","-webkit-text-security":"none|circle|disc|square","-webkit-user-drag":"none|element|auto","-webkit-user-select":"auto|none|text|all","alignment-baseline":"auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical","baseline-shift":"baseline|sub|super|<svg-length>","behavior":"<url>+","clip-rule":"nonzero|evenodd","cue":"<'cue-before'> <'cue-after'>?","cue-after":"<url> <decibel>?|none","cue-before":"<url> <decibel>?|none","dominant-baseline":"auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge","fill":"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero|evenodd","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>","kerning":"auto|<svg-length>","marker":"none|<url>","marker-end":"none|<url>","marker-mid":"none|<url>","marker-start":"none|<url>","pause":"<'pause-before'> <'pause-after'>?","pause-after":"<time>|none|x-weak|weak|medium|strong|x-strong","pause-before":"<time>|none|x-weak|weak|medium|strong|x-strong","rest":"<'rest-before'> <'rest-after'>?","rest-after":"<time>|none|x-weak|weak|medium|strong|x-strong","rest-before":"<time>|none|x-weak|weak|medium|strong|x-strong","shape-rendering":"auto|optimizeSpeed|crispEdges|geometricPrecision","src":"[<url> [format( <string># )]?|local( <family-name> )]#","speak":"auto|none|normal","speak-as":"normal|spell-out||digits||[literal-punctuation|no-punctuation]","stroke":"<paint>","stroke-dasharray":"none|[<svg-length>+]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt|round|square","stroke-linejoin":"miter|round|bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<number-zero-one>","stroke-width":"<svg-length>","text-anchor":"start|middle|end","unicode-range":"<urange>#","voice-balance":"<number>|left|center|right|leftwards|rightwards","voice-duration":"auto|<time>","voice-family":"[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve","voice-pitch":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-range":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-rate":"[normal|x-slow|slow|medium|fast|x-fast]||<percentage>","voice-stress":"normal|strong|moderate|none|reduced","voice-volume":"silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"}})
},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/walker.js":[function(require,module,exports){
module.exports = {
    node: require('../node')
};

},{"../node":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/isObjectLike.js":[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/convertor/create.js":[function(require,module,exports){
var List = require('../common/List');

module.exports = function createConvertors(walk) {
    return {
        fromPlainObject: function(ast) {
            walk(ast, {
                enter: function(node) {
                    if (node.children && node.children instanceof List === false) {
                        node.children = new List().fromArray(node.children);
                    }
                }
            });

            return ast;
        },
        toPlainObject: function(ast) {
            walk(ast, {
                leave: function(node) {
                    if (node.children && node.children instanceof List) {
                        node.children = node.children.toArray();
                    }
                }
            });

            return ast;
        }
    };
};

},{"../common/List":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/clone.js":[function(require,module,exports){
var List = require('../common/List');

module.exports = function clone(node) {
    var result = {};

    for (var key in node) {
        var value = node[key];

        if (value) {
            if (Array.isArray(value) || value instanceof List) {
                value = value.map(clone);
            } else if (value.constructor === Object) {
                value = clone(value);
            }
        }

        result[key] = value;
    }

    return result;
};

},{"../common/List":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/createCustomError.js":[function(require,module,exports){
module.exports = function createCustomError(name, message) {
    // use Object.create(), because some VMs prevent setting line/column otherwise
    // (iOS Safari 10 even throws an exception)
    var error = Object.create(SyntaxError.prototype);
    var errorStack = new Error();

    error.name = name;
    error.message = message;

    Object.defineProperty(error, 'stack', {
        get: function() {
            return (errorStack.stack || '').replace(/^(.+\n){1,3}/, name + ': ' + message + '\n');
        }
    });

    return error;
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/SyntaxError.js":[function(require,module,exports){
var createCustomError = require('../utils/createCustomError');
var MAX_LINE_LENGTH = 100;
var OFFSET_CORRECTION = 60;
var TAB_REPLACEMENT = '    ';

function sourceFragment(error, extraLines) {
    function processLines(start, end) {
        return lines.slice(start, end).map(function(line, idx) {
            var num = String(start + idx + 1);

            while (num.length < maxNumLength) {
                num = ' ' + num;
            }

            return num + ' |' + line;
        }).join('\n');
    }

    var lines = error.source.split(/\r\n?|\n|\f/);
    var line = error.line;
    var column = error.column;
    var startLine = Math.max(1, line - extraLines) - 1;
    var endLine = Math.min(line + extraLines, lines.length + 1);
    var maxNumLength = Math.max(4, String(endLine).length) + 1;
    var cutLeft = 0;

    // column correction according to replaced tab before column
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;

    if (column > MAX_LINE_LENGTH) {
        cutLeft = column - OFFSET_CORRECTION + 3;
        column = OFFSET_CORRECTION - 2;
    }

    for (var i = startLine; i <= endLine; i++) {
        if (i >= 0 && i < lines.length) {
            lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
            lines[i] =
                (cutLeft > 0 && lines[i].length > cutLeft ? '\u2026' : '') +
                lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) +
                (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? '\u2026' : '');
        }
    }

    return [
        processLines(startLine, line),
        new Array(column + maxNumLength + 2).join('-') + '^',
        processLines(line, endLine)
    ].filter(Boolean).join('\n');
}

var SyntaxError = function(message, source, offset, line, column) {
    var error = createCustomError('SyntaxError', message);

    error.source = source;
    error.offset = offset;
    error.line = line;
    error.column = column;

    error.sourceFragment = function(extraLines) {
        return sourceFragment(error, isNaN(extraLines) ? 0 : extraLines);
    };
    Object.defineProperty(error, 'formattedMessage', {
        get: function() {
            return (
                'Parse error: ' + error.message + '\n' +
                sourceFragment(error, 2)
            );
        }
    });

    // for backward capability
    error.parseError = {
        offset: offset,
        line: line,
        column: column
    };

    return error;
};

module.exports = SyntaxError;

},{"../utils/createCustomError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/createCustomError.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/const.js":[function(require,module,exports){
// CSS Syntax Module Level 3
// https://www.w3.org/TR/css-syntax-3/
var TYPE = {
    EOF: 0,                 // <EOF-token>
    Ident: 1,               // <ident-token>
    Function: 2,            // <function-token>
    AtKeyword: 3,           // <at-keyword-token>
    Hash: 4,                // <hash-token>
    String: 5,              // <string-token>
    BadString: 6,           // <bad-string-token>
    Url: 7,                 // <url-token>
    BadUrl: 8,              // <bad-url-token>
    Delim: 9,               // <delim-token>
    Number: 10,             // <number-token>
    Percentage: 11,         // <percentage-token>
    Dimension: 12,          // <dimension-token>
    WhiteSpace: 13,         // <whitespace-token>
    CDO: 14,                // <CDO-token>
    CDC: 15,                // <CDC-token>
    Colon: 16,              // <colon-token>     :
    Semicolon: 17,          // <semicolon-token> ;
    Comma: 18,              // <comma-token>     ,
    LeftSquareBracket: 19,  // <[-token>
    RightSquareBracket: 20, // <]-token>
    LeftParenthesis: 21,    // <(-token>
    RightParenthesis: 22,   // <)-token>
    LeftCurlyBracket: 23,   // <{-token>
    RightCurlyBracket: 24,  // <}-token>
    Comment: 25
};

var NAME = Object.keys(TYPE).reduce(function(result, key) {
    result[TYPE[key]] = key;
    return result;
}, {});

module.exports = {
    TYPE: TYPE,
    NAME: NAME
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/generate.js":[function(require,module,exports){
function noop(value) {
    return value;
}

function generateMultiplier(multiplier) {
    if (multiplier.min === 0 && multiplier.max === 0) {
        return '*';
    }

    if (multiplier.min === 0 && multiplier.max === 1) {
        return '?';
    }

    if (multiplier.min === 1 && multiplier.max === 0) {
        return multiplier.comma ? '#' : '+';
    }

    if (multiplier.min === 1 && multiplier.max === 1) {
        return '';
    }

    return (
        (multiplier.comma ? '#' : '') +
        (multiplier.min === multiplier.max
            ? '{' + multiplier.min + '}'
            : '{' + multiplier.min + ',' + (multiplier.max !== 0 ? multiplier.max : '') + '}'
        )
    );
}

function generateTypeOpts(node) {
    switch (node.type) {
        case 'Range':
            return (
                ' [' +
                (node.min === null ? '-∞' : node.min) +
                ',' +
                (node.max === null ? '∞' : node.max) +
                ']'
            );

        default:
            throw new Error('Unknown node type `' + node.type + '`');
    }
}

function generateSequence(node, decorate, forceBraces, compact) {
    var combinator = node.combinator === ' ' || compact ? node.combinator : ' ' + node.combinator + ' ';
    var result = node.terms.map(function(term) {
        return generate(term, decorate, forceBraces, compact);
    }).join(combinator);

    if (node.explicit || forceBraces) {
        result = (compact || result[0] === ',' ? '[' : '[ ') + result + (compact ? ']' : ' ]');
    }

    return result;
}

function generate(node, decorate, forceBraces, compact) {
    var result;

    switch (node.type) {
        case 'Group':
            result =
                generateSequence(node, decorate, forceBraces, compact) +
                (node.disallowEmpty ? '!' : '');
            break;

        case 'Multiplier':
            // return since node is a composition
            return (
                generate(node.term, decorate, forceBraces, compact) +
                decorate(generateMultiplier(node), node)
            );

        case 'Type':
            result = '<' + node.name + (node.opts ? decorate(generateTypeOpts(node.opts), node.opts) : '') + '>';
            break;

        case 'Property':
            result = '<\'' + node.name + '\'>';
            break;

        case 'Keyword':
            result = node.name;
            break;

        case 'AtKeyword':
            result = '@' + node.name;
            break;

        case 'Function':
            result = node.name + '(';
            break;

        case 'String':
        case 'Token':
            result = node.value;
            break;

        case 'Comma':
            result = ',';
            break;

        default:
            throw new Error('Unknown node type `' + node.type + '`');
    }

    return decorate(result, node);
}

module.exports = function(node, options) {
    var decorate = noop;
    var forceBraces = false;
    var compact = false;

    if (typeof options === 'function') {
        decorate = options;
    } else if (options) {
        forceBraces = Boolean(options.forceBraces);
        compact = Boolean(options.compact);
        if (typeof options.decorate === 'function') {
            decorate = options.decorate;
        }
    }

    return generate(node, decorate, forceBraces, compact);
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/walk.js":[function(require,module,exports){
var noop = function() {};

function ensureFunction(value) {
    return typeof value === 'function' ? value : noop;
}

module.exports = function(node, options, context) {
    function walk(node) {
        enter.call(context, node);

        switch (node.type) {
            case 'Group':
                node.terms.forEach(walk);
                break;

            case 'Multiplier':
                walk(node.term);
                break;

            case 'Type':
            case 'Property':
            case 'Keyword':
            case 'AtKeyword':
            case 'Function':
            case 'String':
            case 'Token':
            case 'Comma':
                break;

            default:
                throw new Error('Unknown type: ' + node.type);
        }

        leave.call(context, node);
    }

    var enter = noop;
    var leave = noop;

    if (typeof options === 'function') {
        enter = options;
    } else if (options) {
        enter = ensureFunction(options.enter);
        leave = ensureFunction(options.leave);
    }

    if (enter === noop && leave === noop) {
        throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
    }

    walk(node, context);
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/trace.js":[function(require,module,exports){
function getTrace(node) {
    function shouldPutToTrace(syntax) {
        if (syntax === null) {
            return false;
        }

        return (
            syntax.type === 'Type' ||
            syntax.type === 'Property' ||
            syntax.type === 'Keyword'
        );
    }

    function hasMatch(matchNode) {
        if (Array.isArray(matchNode.match)) {
            // use for-loop for better perfomance
            for (var i = 0; i < matchNode.match.length; i++) {
                if (hasMatch(matchNode.match[i])) {
                    if (shouldPutToTrace(matchNode.syntax)) {
                        result.unshift(matchNode.syntax);
                    }

                    return true;
                }
            }
        } else if (matchNode.node === node) {
            result = shouldPutToTrace(matchNode.syntax)
                ? [matchNode.syntax]
                : [];

            return true;
        }

        return false;
    }

    var result = null;

    if (this.matched !== null) {
        hasMatch(this.matched);
    }

    return result;
}

function testNode(match, node, fn) {
    var trace = getTrace.call(match, node);

    if (trace === null) {
        return false;
    }

    return trace.some(fn);
}

function isType(node, type) {
    return testNode(this, node, function(matchNode) {
        return matchNode.type === 'Type' && matchNode.name === type;
    });
}

function isProperty(node, property) {
    return testNode(this, node, function(matchNode) {
        return matchNode.type === 'Property' && matchNode.name === property;
    });
}

function isKeyword(node) {
    return testNode(this, node, function(matchNode) {
        return matchNode.type === 'Keyword';
    });
}

module.exports = {
    getTrace: getTrace,
    isType: isType,
    isProperty: isProperty,
    isKeyword: isKeyword
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/adopt-buffer.js":[function(require,module,exports){
var MIN_SIZE = 16 * 1024;
var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported

module.exports = function adoptBuffer(buffer, size) {
    if (buffer === null || buffer.length < size) {
        return new SafeUint32Array(Math.max(size + 1024, MIN_SIZE));
    }

    return buffer;
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/char-code-definitions.js":[function(require,module,exports){
var EOF = 0;

// https://drafts.csswg.org/css-syntax-3/
// § 4.2. Definitions

// digit
// A code point between U+0030 DIGIT ZERO (0) and U+0039 DIGIT NINE (9).
function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}

// hex digit
// A digit, or a code point between U+0041 LATIN CAPITAL LETTER A (A) and U+0046 LATIN CAPITAL LETTER F (F),
// or a code point between U+0061 LATIN SMALL LETTER A (a) and U+0066 LATIN SMALL LETTER F (f).
function isHexDigit(code) {
    return (
        isDigit(code) || // 0 .. 9
        (code >= 0x0041 && code <= 0x0046) || // A .. F
        (code >= 0x0061 && code <= 0x0066)    // a .. f
    );
}

// uppercase letter
// A code point between U+0041 LATIN CAPITAL LETTER A (A) and U+005A LATIN CAPITAL LETTER Z (Z).
function isUppercaseLetter(code) {
    return code >= 0x0041 && code <= 0x005A;
}

// lowercase letter
// A code point between U+0061 LATIN SMALL LETTER A (a) and U+007A LATIN SMALL LETTER Z (z).
function isLowercaseLetter(code) {
    return code >= 0x0061 && code <= 0x007A;
}

// letter
// An uppercase letter or a lowercase letter.
function isLetter(code) {
    return isUppercaseLetter(code) || isLowercaseLetter(code);
}

// non-ASCII code point
// A code point with a value equal to or greater than U+0080 <control>.
function isNonAscii(code) {
    return code >= 0x0080;
}

// name-start code point
// A letter, a non-ASCII code point, or U+005F LOW LINE (_).
function isNameStart(code) {
    return isLetter(code) || isNonAscii(code) || code === 0x005F;
}

// name code point
// A name-start code point, a digit, or U+002D HYPHEN-MINUS (-).
function isName(code) {
    return isNameStart(code) || isDigit(code) || code === 0x002D;
}

// non-printable code point
// A code point between U+0000 NULL and U+0008 BACKSPACE, or U+000B LINE TABULATION,
// or a code point between U+000E SHIFT OUT and U+001F INFORMATION SEPARATOR ONE, or U+007F DELETE.
function isNonPrintable(code) {
    return (
        (code >= 0x0000 && code <= 0x0008) ||
        (code === 0x000B) ||
        (code >= 0x000E && code <= 0x001F) ||
        (code === 0x007F)
    );
}

// newline
// U+000A LINE FEED. Note that U+000D CARRIAGE RETURN and U+000C FORM FEED are not included in this definition,
// as they are converted to U+000A LINE FEED during preprocessing.
// TODO: we doesn't do a preprocessing, so check a code point for U+000D CARRIAGE RETURN and U+000C FORM FEED
function isNewline(code) {
    return code === 0x000A || code === 0x000D || code === 0x000C;
}

// whitespace
// A newline, U+0009 CHARACTER TABULATION, or U+0020 SPACE.
function isWhiteSpace(code) {
    return isNewline(code) || code === 0x0020 || code === 0x0009;
}

// § 4.3.8. Check if two code points are a valid escape
function isValidEscape(first, second) {
    // If the first code point is not U+005C REVERSE SOLIDUS (\), return false.
    if (first !== 0x005C) {
        return false;
    }

    // Otherwise, if the second code point is a newline or EOF, return false.
    if (isNewline(second) || second === EOF) {
        return false;
    }

    // Otherwise, return true.
    return true;
}

// § 4.3.9. Check if three code points would start an identifier
function isIdentifierStart(first, second, third) {
    // Look at the first code point:

    // U+002D HYPHEN-MINUS
    if (first === 0x002D) {
        // If the second code point is a name-start code point or a U+002D HYPHEN-MINUS,
        // or the second and third code points are a valid escape, return true. Otherwise, return false.
        return (
            isNameStart(second) ||
            second === 0x002D ||
            isValidEscape(second, third)
        );
    }

    // name-start code point
    if (isNameStart(first)) {
        // Return true.
        return true;
    }

    // U+005C REVERSE SOLIDUS (\)
    if (first === 0x005C) {
        // If the first and second code points are a valid escape, return true. Otherwise, return false.
        return isValidEscape(first, second);
    }

    // anything else
    // Return false.
    return false;
}

// § 4.3.10. Check if three code points would start a number
function isNumberStart(first, second, third) {
    // Look at the first code point:

    // U+002B PLUS SIGN (+)
    // U+002D HYPHEN-MINUS (-)
    if (first === 0x002B || first === 0x002D) {
        // If the second code point is a digit, return true.
        if (isDigit(second)) {
            return 2;
        }

        // Otherwise, if the second code point is a U+002E FULL STOP (.)
        // and the third code point is a digit, return true.
        // Otherwise, return false.
        return second === 0x002E && isDigit(third) ? 3 : 0;
    }

    // U+002E FULL STOP (.)
    if (first === 0x002E) {
        // If the second code point is a digit, return true. Otherwise, return false.
        return isDigit(second) ? 2 : 0;
    }

    // digit
    if (isDigit(first)) {
        // Return true.
        return 1;
    }

    // anything else
    // Return false.
    return 0;
}

//
// Misc
//

// detect BOM (https://en.wikipedia.org/wiki/Byte_order_mark)
function isBOM(code) {
    // UTF-16BE
    if (code === 0xFEFF) {
        return 1;
    }

    // UTF-16LE
    if (code === 0xFFFE) {
        return 1;
    }

    return 0;
}

// Fast code category
//
// https://drafts.csswg.org/css-syntax/#tokenizer-definitions
// > non-ASCII code point
// >   A code point with a value equal to or greater than U+0080 <control>
// > name-start code point
// >   A letter, a non-ASCII code point, or U+005F LOW LINE (_).
// > name code point
// >   A name-start code point, a digit, or U+002D HYPHEN-MINUS (-)
// That means only ASCII code points has a special meaning and we define a maps for 0..127 codes only
var CATEGORY = new Array(0x80);
charCodeCategory.Eof = 0x80;
charCodeCategory.WhiteSpace = 0x82;
charCodeCategory.Digit = 0x83;
charCodeCategory.NameStart = 0x84;
charCodeCategory.NonPrintable = 0x85;

for (var i = 0; i < CATEGORY.length; i++) {
    switch (true) {
        case isWhiteSpace(i):
            CATEGORY[i] = charCodeCategory.WhiteSpace;
            break;

        case isDigit(i):
            CATEGORY[i] = charCodeCategory.Digit;
            break;

        case isNameStart(i):
            CATEGORY[i] = charCodeCategory.NameStart;
            break;

        case isNonPrintable(i):
            CATEGORY[i] = charCodeCategory.NonPrintable;
            break;

        default:
            CATEGORY[i] = i || charCodeCategory.Eof;
    }
}

function charCodeCategory(code) {
    return code < 0x80 ? CATEGORY[code] : charCodeCategory.NameStart;
};

module.exports = {
    isDigit: isDigit,
    isHexDigit: isHexDigit,
    isUppercaseLetter: isUppercaseLetter,
    isLowercaseLetter: isLowercaseLetter,
    isLetter: isLetter,
    isNonAscii: isNonAscii,
    isNameStart: isNameStart,
    isName: isName,
    isNonPrintable: isNonPrintable,
    isNewline: isNewline,
    isWhiteSpace: isWhiteSpace,
    isValidEscape: isValidEscape,
    isIdentifierStart: isIdentifierStart,
    isNumberStart: isNumberStart,

    isBOM: isBOM,
    charCodeCategory: charCodeCategory
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js":[function(require,module,exports){
var TokenStream = require('../common/TokenStream');
var adoptBuffer = require('../common/adopt-buffer');

var constants = require('./const');
var TYPE = constants.TYPE;

var charCodeDefinitions = require('./char-code-definitions');
var isNewline = charCodeDefinitions.isNewline;
var isName = charCodeDefinitions.isName;
var isValidEscape = charCodeDefinitions.isValidEscape;
var isNumberStart = charCodeDefinitions.isNumberStart;
var isIdentifierStart = charCodeDefinitions.isIdentifierStart;
var charCodeCategory = charCodeDefinitions.charCodeCategory;
var isBOM = charCodeDefinitions.isBOM;

var utils = require('./utils');
var cmpStr = utils.cmpStr;
var getNewlineLength = utils.getNewlineLength;
var findWhiteSpaceEnd = utils.findWhiteSpaceEnd;
var consumeEscaped = utils.consumeEscaped;
var consumeName = utils.consumeName;
var consumeNumber = utils.consumeNumber;
var consumeBadUrlRemnants = utils.consumeBadUrlRemnants;

var OFFSET_MASK = 0x00FFFFFF;
var TYPE_SHIFT = 24;

function tokenize(source, stream) {
    function getCharCode(offset) {
        return offset < sourceLength ? source.charCodeAt(offset) : 0;
    }

    // § 4.3.3. Consume a numeric token
    function consumeNumericToken() {
        // Consume a number and let number be the result.
        offset = consumeNumber(source, offset);

        // If the next 3 input code points would start an identifier, then:
        if (isIdentifierStart(getCharCode(offset), getCharCode(offset + 1), getCharCode(offset + 2))) {
            // Create a <dimension-token> with the same value and type flag as number, and a unit set initially to the empty string.
            // Consume a name. Set the <dimension-token>’s unit to the returned value.
            // Return the <dimension-token>.
            type = TYPE.Dimension;
            offset = consumeName(source, offset);
            return;
        }

        // Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%), consume it.
        if (getCharCode(offset) === 0x0025) {
            // Create a <percentage-token> with the same value as number, and return it.
            type = TYPE.Percentage;
            offset++;
            return;
        }

        // Otherwise, create a <number-token> with the same value and type flag as number, and return it.
        type = TYPE.Number;
    }

    // § 4.3.4. Consume an ident-like token
    function consumeIdentLikeToken() {
        const nameStartOffset = offset;

        // Consume a name, and let string be the result.
        offset = consumeName(source, offset);

        // If string’s value is an ASCII case-insensitive match for "url",
        // and the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
        if (cmpStr(source, nameStartOffset, offset, 'url') && getCharCode(offset) === 0x0028) {
            // While the next two input code points are whitespace, consume the next input code point.
            offset = findWhiteSpaceEnd(source, offset + 1);

            // If the next one or two input code points are U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('),
            // or whitespace followed by U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('),
            // then create a <function-token> with its value set to string and return it.
            if (getCharCode(offset) === 0x0022 ||
                getCharCode(offset) === 0x0027) {
                type = TYPE.Function;
                offset = nameStartOffset + 4;
                return;
            }

            // Otherwise, consume a url token, and return it.
            consumeUrlToken();
            return;
        }

        // Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
        // Create a <function-token> with its value set to string and return it.
        if (getCharCode(offset) === 0x0028) {
            type = TYPE.Function;
            offset++;
            return;
        }

        // Otherwise, create an <ident-token> with its value set to string and return it.
        type = TYPE.Ident;
    }

    // § 4.3.5. Consume a string token
    function consumeStringToken(endingCodePoint) {
        // This algorithm may be called with an ending code point, which denotes the code point
        // that ends the string. If an ending code point is not specified,
        // the current input code point is used.
        if (!endingCodePoint) {
            endingCodePoint = getCharCode(offset++);
        }

        // Initially create a <string-token> with its value set to the empty string.
        type = TYPE.String;

        // Repeatedly consume the next input code point from the stream:
        for (; offset < source.length; offset++) {
            var code = source.charCodeAt(offset);

            switch (charCodeCategory(code)) {
                // ending code point
                case endingCodePoint:
                    // Return the <string-token>.
                    offset++;
                    return;

                // EOF
                case charCodeCategory.Eof:
                    // This is a parse error. Return the <string-token>.
                    return;

                // newline
                case charCodeCategory.WhiteSpace:
                    if (isNewline(code)) {
                        // This is a parse error. Reconsume the current input code point,
                        // create a <bad-string-token>, and return it.
                        offset += getNewlineLength(source, offset, code);
                        type = TYPE.BadString;
                        return;
                    }
                    break;

                // U+005C REVERSE SOLIDUS (\)
                case 0x005C:
                    // If the next input code point is EOF, do nothing.
                    if (offset === source.length - 1) {
                        break;
                    }

                    var nextCode = getCharCode(offset + 1);

                    // Otherwise, if the next input code point is a newline, consume it.
                    if (isNewline(nextCode)) {
                        offset += getNewlineLength(source, offset + 1, nextCode);
                    } else if (isValidEscape(code, nextCode)) {
                        // Otherwise, (the stream starts with a valid escape) consume
                        // an escaped code point and append the returned code point to
                        // the <string-token>’s value.
                        offset = consumeEscaped(source, offset) - 1;
                    }
                    break;

                // anything else
                // Append the current input code point to the <string-token>’s value.
            }
        }
    }

    // § 4.3.6. Consume a url token
    // Note: This algorithm assumes that the initial "url(" has already been consumed.
    // This algorithm also assumes that it’s being called to consume an "unquoted" value, like url(foo).
    // A quoted value, like url("foo"), is parsed as a <function-token>. Consume an ident-like token
    // automatically handles this distinction; this algorithm shouldn’t be called directly otherwise.
    function consumeUrlToken() {
        // Initially create a <url-token> with its value set to the empty string.
        type = TYPE.Url;

        // Consume as much whitespace as possible.
        offset = findWhiteSpaceEnd(source, offset);

        // Repeatedly consume the next input code point from the stream:
        for (; offset < source.length; offset++) {
            var code = source.charCodeAt(offset);

            switch (charCodeCategory(code)) {
                // U+0029 RIGHT PARENTHESIS ())
                case 0x0029:
                    // Return the <url-token>.
                    offset++;
                    return;

                // EOF
                case charCodeCategory.Eof:
                    // This is a parse error. Return the <url-token>.
                    return;

                // whitespace
                case charCodeCategory.WhiteSpace:
                    // Consume as much whitespace as possible.
                    offset = findWhiteSpaceEnd(source, offset);

                    // If the next input code point is U+0029 RIGHT PARENTHESIS ()) or EOF,
                    // consume it and return the <url-token>
                    // (if EOF was encountered, this is a parse error);
                    if (getCharCode(offset) === 0x0029 || offset >= source.length) {
                        if (offset < source.length) {
                            offset++;
                        }
                        return;
                    }

                    // otherwise, consume the remnants of a bad url, create a <bad-url-token>,
                    // and return it.
                    offset = consumeBadUrlRemnants(source, offset);
                    type = TYPE.BadUrl;
                    return;

                // U+0022 QUOTATION MARK (")
                // U+0027 APOSTROPHE (')
                // U+0028 LEFT PARENTHESIS (()
                // non-printable code point
                case 0x0022:
                case 0x0027:
                case 0x0028:
                case charCodeCategory.NonPrintable:
                    // This is a parse error. Consume the remnants of a bad url,
                    // create a <bad-url-token>, and return it.
                    offset = consumeBadUrlRemnants(source, offset);
                    type = TYPE.BadUrl;
                    return;

                // U+005C REVERSE SOLIDUS (\)
                case 0x005C:
                    // If the stream starts with a valid escape, consume an escaped code point and
                    // append the returned code point to the <url-token>’s value.
                    if (isValidEscape(code, getCharCode(offset + 1))) {
                        offset = consumeEscaped(source, offset) - 1;
                        break;
                    }

                    // Otherwise, this is a parse error. Consume the remnants of a bad url,
                    // create a <bad-url-token>, and return it.
                    offset = consumeBadUrlRemnants(source, offset);
                    type = TYPE.BadUrl;
                    return;

                // anything else
                // Append the current input code point to the <url-token>’s value.
            }
        }
    }

    if (!stream) {
        stream = new TokenStream();
    }

    // ensure source is a string
    source = String(source || '');

    var sourceLength = source.length;
    var offsetAndType = adoptBuffer(stream.offsetAndType, sourceLength + 1); // +1 because of eof-token
    var balance = adoptBuffer(stream.balance, sourceLength + 1);
    var tokenCount = 0;
    var start = isBOM(getCharCode(0));
    var offset = start;
    var balanceCloseType = 0;
    var balanceStart = 0;
    var balancePrev = 0;

    // https://drafts.csswg.org/css-syntax-3/#consume-token
    // § 4.3.1. Consume a token
    while (offset < sourceLength) {
        var code = source.charCodeAt(offset);
        var type = 0;

        balance[tokenCount] = sourceLength;

        switch (charCodeCategory(code)) {
            // whitespace
            case charCodeCategory.WhiteSpace:
                // Consume as much whitespace as possible. Return a <whitespace-token>.
                type = TYPE.WhiteSpace;
                offset = findWhiteSpaceEnd(source, offset + 1);
                break;

            // U+0022 QUOTATION MARK (")
            case 0x0022:
                // Consume a string token and return it.
                consumeStringToken();
                break;

            // U+0023 NUMBER SIGN (#)
            case 0x0023:
                // If the next input code point is a name code point or the next two input code points are a valid escape, then:
                if (isName(getCharCode(offset + 1)) || isValidEscape(getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // Create a <hash-token>.
                    type = TYPE.Hash;

                    // If the next 3 input code points would start an identifier, set the <hash-token>’s type flag to "id".
                    // if (isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                    //     // TODO: set id flag
                    // }

                    // Consume a name, and set the <hash-token>’s value to the returned string.
                    offset = consumeName(source, offset + 1);

                    // Return the <hash-token>.
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = TYPE.Delim;
                    offset++;
                }

                break;

            // U+0027 APOSTROPHE (')
            case 0x0027:
                // Consume a string token and return it.
                consumeStringToken();
                break;

            // U+0028 LEFT PARENTHESIS (()
            case 0x0028:
                // Return a <(-token>.
                type = TYPE.LeftParenthesis;
                offset++;
                break;

            // U+0029 RIGHT PARENTHESIS ())
            case 0x0029:
                // Return a <)-token>.
                type = TYPE.RightParenthesis;
                offset++;
                break;

            // U+002B PLUS SIGN (+)
            case 0x002B:
                // If the input stream starts with a number, ...
                if (isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // ... reconsume the current input code point, consume a numeric token, and return it.
                    consumeNumericToken();
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = TYPE.Delim;
                    offset++;
                }
                break;

            // U+002C COMMA (,)
            case 0x002C:
                // Return a <comma-token>.
                type = TYPE.Comma;
                offset++;
                break;

            // U+002D HYPHEN-MINUS (-)
            case 0x002D:
                // If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
                if (isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    consumeNumericToken();
                } else {
                    // Otherwise, if the next 2 input code points are U+002D HYPHEN-MINUS U+003E GREATER-THAN SIGN (->), consume them and return a <CDC-token>.
                    if (getCharCode(offset + 1) === 0x002D &&
                        getCharCode(offset + 2) === 0x003E) {
                        type = TYPE.CDC;
                        offset = offset + 3;
                    } else {
                        // Otherwise, if the input stream starts with an identifier, ...
                        if (isIdentifierStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                            // ... reconsume the current input code point, consume an ident-like token, and return it.
                            consumeIdentLikeToken();
                        } else {
                            // Otherwise, return a <delim-token> with its value set to the current input code point.
                            type = TYPE.Delim;
                            offset++;
                        }
                    }
                }
                break;

            // U+002E FULL STOP (.)
            case 0x002E:
                // If the input stream starts with a number, ...
                if (isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // ... reconsume the current input code point, consume a numeric token, and return it.
                    consumeNumericToken();
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = TYPE.Delim;
                    offset++;
                }

                break;

            // U+002F SOLIDUS (/)
            case 0x002F:
                // If the next two input code point are U+002F SOLIDUS (/) followed by a U+002A ASTERISK (*),
                if (getCharCode(offset + 1) === 0x002A) {
                    // ... consume them and all following code points up to and including the first U+002A ASTERISK (*)
                    // followed by a U+002F SOLIDUS (/), or up to an EOF code point.
                    type = TYPE.Comment;
                    offset = source.indexOf('*/', offset + 2) + 2;
                    if (offset === 1) {
                        offset = source.length;
                    }
                } else {
                    type = TYPE.Delim;
                    offset++;
                }
                break;

            // U+003A COLON (:)
            case 0x003A:
                // Return a <colon-token>.
                type = TYPE.Colon;
                offset++;
                break;

            // U+003B SEMICOLON (;)
            case 0x003B:
                // Return a <semicolon-token>.
                type = TYPE.Semicolon;
                offset++;
                break;

            // U+003C LESS-THAN SIGN (<)
            case 0x003C:
                // If the next 3 input code points are U+0021 EXCLAMATION MARK U+002D HYPHEN-MINUS U+002D HYPHEN-MINUS (!--), ...
                if (getCharCode(offset + 1) === 0x0021 &&
                    getCharCode(offset + 2) === 0x002D &&
                    getCharCode(offset + 3) === 0x002D) {
                    // ... consume them and return a <CDO-token>.
                    type = TYPE.CDO;
                    offset = offset + 4;
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = TYPE.Delim;
                    offset++;
                }

                break;

            // U+0040 COMMERCIAL AT (@)
            case 0x0040:
                // If the next 3 input code points would start an identifier, ...
                if (isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                    // ... consume a name, create an <at-keyword-token> with its value set to the returned value, and return it.
                    type = TYPE.AtKeyword;
                    offset = consumeName(source, offset + 1);
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = TYPE.Delim;
                    offset++;
                }

                break;

            // U+005B LEFT SQUARE BRACKET ([)
            case 0x005B:
                // Return a <[-token>.
                type = TYPE.LeftSquareBracket;
                offset++;
                break;

            // U+005C REVERSE SOLIDUS (\)
            case 0x005C:
                // If the input stream starts with a valid escape, ...
                if (isValidEscape(code, getCharCode(offset + 1))) {
                    // ... reconsume the current input code point, consume an ident-like token, and return it.
                    consumeIdentLikeToken();
                } else {
                    // Otherwise, this is a parse error. Return a <delim-token> with its value set to the current input code point.
                    type = TYPE.Delim;
                    offset++;
                }
                break;

            // U+005D RIGHT SQUARE BRACKET (])
            case 0x005D:
                // Return a <]-token>.
                type = TYPE.RightSquareBracket;
                offset++;
                break;

            // U+007B LEFT CURLY BRACKET ({)
            case 0x007B:
                // Return a <{-token>.
                type = TYPE.LeftCurlyBracket;
                offset++;
                break;

            // U+007D RIGHT CURLY BRACKET (})
            case 0x007D:
                // Return a <}-token>.
                type = TYPE.RightCurlyBracket;
                offset++;
                break;

            // digit
            case charCodeCategory.Digit:
                // Reconsume the current input code point, consume a numeric token, and return it.
                consumeNumericToken();
                break;

            // name-start code point
            case charCodeCategory.NameStart:
                // Reconsume the current input code point, consume an ident-like token, and return it.
                consumeIdentLikeToken();
                break;

            // EOF
            case charCodeCategory.Eof:
                // Return an <EOF-token>.
                break;

            // anything else
            default:
                // Return a <delim-token> with its value set to the current input code point.
                type = TYPE.Delim;
                offset++;
        }

        switch (type) {
            case balanceCloseType:
                balancePrev = balanceStart & OFFSET_MASK;
                balanceStart = balance[balancePrev];
                balanceCloseType = balanceStart >> TYPE_SHIFT;
                balance[tokenCount] = balancePrev;
                balance[balancePrev++] = tokenCount;
                for (; balancePrev < tokenCount; balancePrev++) {
                    if (balance[balancePrev] === sourceLength) {
                        balance[balancePrev] = tokenCount;
                    }
                }
                break;

            case TYPE.LeftParenthesis:
            case TYPE.Function:
                balance[tokenCount] = balanceStart;
                balanceCloseType = TYPE.RightParenthesis;
                balanceStart = (balanceCloseType << TYPE_SHIFT) | tokenCount;
                break;

            case TYPE.LeftSquareBracket:
                balance[tokenCount] = balanceStart;
                balanceCloseType = TYPE.RightSquareBracket;
                balanceStart = (balanceCloseType << TYPE_SHIFT) | tokenCount;
                break;

            case TYPE.LeftCurlyBracket:
                balance[tokenCount] = balanceStart;
                balanceCloseType = TYPE.RightCurlyBracket;
                balanceStart = (balanceCloseType << TYPE_SHIFT) | tokenCount;
                break;
        }

        offsetAndType[tokenCount++] = (type << TYPE_SHIFT) | offset;
    }

    // finalize buffers
    offsetAndType[tokenCount] = (TYPE.EOF << TYPE_SHIFT) | offset; // <EOF-token>
    balance[tokenCount] = sourceLength;
    balance[sourceLength] = sourceLength; // prevents false positive balance match with any token
    while (balanceStart !== 0) {
        balancePrev = balanceStart & OFFSET_MASK;
        balanceStart = balance[balancePrev];
        balance[balancePrev] = sourceLength;
    }

    // update stream
    stream.source = source;
    stream.firstCharOffset = start;
    stream.offsetAndType = offsetAndType;
    stream.tokenCount = tokenCount;
    stream.balance = balance;
    stream.reset();
    stream.next();

    return stream;
}

// extend tokenizer with constants
Object.keys(constants).forEach(function(key) {
    tokenize[key] = constants[key];
});

// extend tokenizer with static methods from utils
Object.keys(charCodeDefinitions).forEach(function(key) {
    tokenize[key] = charCodeDefinitions[key];
});
Object.keys(utils).forEach(function(key) {
    tokenize[key] = utils[key];
});

module.exports = tokenize;

},{"../common/TokenStream":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/TokenStream.js","../common/adopt-buffer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/adopt-buffer.js","./char-code-definitions":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/char-code-definitions.js","./const":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/const.js","./utils":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/utils.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_freeGlobal.js":[function(require,module,exports){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_root.js":[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_freeGlobal.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_Symbol.js":[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_root.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_objectToString.js":[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Nth.js":[function(require,module,exports){
module.exports = {
    name: 'Nth',
    structure: {
        nth: ['AnPlusB', 'Identifier'],
        selector: ['SelectorList', null]
    },
    parse: function(allowOfClause) {
        this.scanner.skipSC();

        var start = this.scanner.tokenStart;
        var end = start;
        var selector = null;
        var query;

        if (this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even')) {
            query = this.Identifier();
        } else {
            query = this.AnPlusB();
        }

        this.scanner.skipSC();

        if (allowOfClause && this.scanner.lookupValue(0, 'of')) {
            this.scanner.next();

            selector = this.SelectorList();

            if (this.needPositions) {
                end = this.getLastListNode(selector.children).loc.end.offset;
            }
        } else {
            if (this.needPositions) {
                end = query.loc.end.offset;
            }
        }

        return {
            type: 'Nth',
            loc: this.getLocation(start, end),
            nth: query,
            selector: selector
        };
    },
    generate: function(node) {
        this.node(node.nth);
        if (node.selector !== null) {
            this.chunk(' of ');
            this.node(node.selector);
        }
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Operator.js":[function(require,module,exports){
// '/' | '*' | ',' | ':' | '+' | '-'
module.exports = {
    name: 'Operator',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.scanner.next();

        return {
            type: 'Operator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Selector.js":[function(require,module,exports){
module.exports = {
    name: 'Selector',
    structure: {
        children: [[
            'TypeSelector',
            'IdSelector',
            'ClassSelector',
            'AttributeSelector',
            'PseudoClassSelector',
            'PseudoElementSelector',
            'Combinator',
            'WhiteSpace'
        ]]
    },
    parse: function() {
        var children = this.readSequence(this.scope.Selector);

        // nothing were consumed
        if (this.getFirstListNode(children) === null) {
            this.error('Selector is expected');
        }

        return {
            type: 'Selector',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Value.js":[function(require,module,exports){
module.exports = {
    name: 'Value',
    structure: {
        children: [[]]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = this.readSequence(this.scope.Value);

        return {
            type: 'Value',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/font-face.js":[function(require,module,exports){
module.exports = {
    parse: {
        prelude: null,
        block: function() {
            return this.Block(true);
        }
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/media.js":[function(require,module,exports){
module.exports = {
    parse: {
        prelude: function() {
            return this.createSingleNodeList(
                this.MediaQueryList()
            );
        },
        block: function() {
            return this.Block(false);
        }
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/page.js":[function(require,module,exports){
module.exports = {
    parse: {
        prelude: function() {
            return this.createSingleNodeList(
                this.SelectorList()
            );
        },
        block: function() {
            return this.Block(true);
        }
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/dir.js":[function(require,module,exports){
module.exports = {
    parse: function() {
        return this.createSingleNodeList(
            this.Identifier()
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/has.js":[function(require,module,exports){
module.exports = {
    parse: function() {
        return this.createSingleNodeList(
            this.SelectorList()
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/lang.js":[function(require,module,exports){
module.exports = {
    parse: function() {
        return this.createSingleNodeList(
            this.Identifier()
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/slotted.js":[function(require,module,exports){
module.exports = {
    parse: function compoundSelector() {
        return this.createSingleNodeList(
            this.Selector()
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/utils.js":[function(require,module,exports){
var charCodeDef = require('./char-code-definitions');
var isDigit = charCodeDef.isDigit;
var isHexDigit = charCodeDef.isHexDigit;
var isUppercaseLetter = charCodeDef.isUppercaseLetter;
var isName = charCodeDef.isName;
var isWhiteSpace = charCodeDef.isWhiteSpace;
var isValidEscape = charCodeDef.isValidEscape;

function getCharCode(source, offset) {
    return offset < source.length ? source.charCodeAt(offset) : 0;
}

function getNewlineLength(source, offset, code) {
    if (code === 13 /* \r */ && getCharCode(source, offset + 1) === 10 /* \n */) {
        return 2;
    }

    return 1;
}

function cmpChar(testStr, offset, referenceCode) {
    var code = testStr.charCodeAt(offset);

    // code.toLowerCase() for A..Z
    if (isUppercaseLetter(code)) {
        code = code | 32;
    }

    return code === referenceCode;
}

function cmpStr(testStr, start, end, referenceStr) {
    if (end - start !== referenceStr.length) {
        return false;
    }

    if (start < 0 || end > testStr.length) {
        return false;
    }

    for (var i = start; i < end; i++) {
        var testCode = testStr.charCodeAt(i);
        var referenceCode = referenceStr.charCodeAt(i - start);

        // testCode.toLowerCase() for A..Z
        if (isUppercaseLetter(testCode)) {
            testCode = testCode | 32;
        }

        if (testCode !== referenceCode) {
            return false;
        }
    }

    return true;
}

function findWhiteSpaceStart(source, offset) {
    for (; offset >= 0; offset--) {
        if (!isWhiteSpace(source.charCodeAt(offset))) {
            break;
        }
    }

    return offset + 1;
}

function findWhiteSpaceEnd(source, offset) {
    for (; offset < source.length; offset++) {
        if (!isWhiteSpace(source.charCodeAt(offset))) {
            break;
        }
    }

    return offset;
}

function findDecimalNumberEnd(source, offset) {
    for (; offset < source.length; offset++) {
        if (!isDigit(source.charCodeAt(offset))) {
            break;
        }
    }

    return offset;
}

// § 4.3.7. Consume an escaped code point
function consumeEscaped(source, offset) {
    // It assumes that the U+005C REVERSE SOLIDUS (\) has already been consumed and
    // that the next input code point has already been verified to be part of a valid escape.
    offset += 2;

    // hex digit
    if (isHexDigit(getCharCode(source, offset - 1))) {
        // Consume as many hex digits as possible, but no more than 5.
        // Note that this means 1-6 hex digits have been consumed in total.
        for (var maxOffset = Math.min(source.length, offset + 5); offset < maxOffset; offset++) {
            if (!isHexDigit(getCharCode(source, offset))) {
                break;
            }
        }

        // If the next input code point is whitespace, consume it as well.
        var code = getCharCode(source, offset);
        if (isWhiteSpace(code)) {
            offset += getNewlineLength(source, offset, code);
        }
    }

    return offset;
}

// §4.3.11. Consume a name
// Note: This algorithm does not do the verification of the first few code points that are necessary
// to ensure the returned code points would constitute an <ident-token>. If that is the intended use,
// ensure that the stream starts with an identifier before calling this algorithm.
function consumeName(source, offset) {
    // Let result initially be an empty string.
    // Repeatedly consume the next input code point from the stream:
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        // name code point
        if (isName(code)) {
            // Append the code point to result.
            continue;
        }

        // the stream starts with a valid escape
        if (isValidEscape(code, getCharCode(source, offset + 1))) {
            // Consume an escaped code point. Append the returned code point to result.
            offset = consumeEscaped(source, offset) - 1;
            continue;
        }

        // anything else
        // Reconsume the current input code point. Return result.
        break;
    }

    return offset;
}

// §4.3.12. Consume a number
function consumeNumber(source, offset) {
    var code = source.charCodeAt(offset);

    // 2. If the next input code point is U+002B PLUS SIGN (+) or U+002D HYPHEN-MINUS (-),
    // consume it and append it to repr.
    if (code === 0x002B || code === 0x002D) {
        code = source.charCodeAt(offset += 1);
    }

    // 3. While the next input code point is a digit, consume it and append it to repr.
    if (isDigit(code)) {
        offset = findDecimalNumberEnd(source, offset + 1);
        code = source.charCodeAt(offset);
    }

    // 4. If the next 2 input code points are U+002E FULL STOP (.) followed by a digit, then:
    if (code === 0x002E && isDigit(source.charCodeAt(offset + 1))) {
        // 4.1 Consume them.
        // 4.2 Append them to repr.
        code = source.charCodeAt(offset += 2);

        // 4.3 Set type to "number".
        // TODO

        // 4.4 While the next input code point is a digit, consume it and append it to repr.

        offset = findDecimalNumberEnd(source, offset);
    }

    // 5. If the next 2 or 3 input code points are U+0045 LATIN CAPITAL LETTER E (E)
    // or U+0065 LATIN SMALL LETTER E (e), ... , followed by a digit, then:
    if (cmpChar(source, offset, 101 /* e */)) {
        var sign = 0;
        code = source.charCodeAt(offset + 1);

        // ... optionally followed by U+002D HYPHEN-MINUS (-) or U+002B PLUS SIGN (+) ...
        if (code === 0x002D || code === 0x002B) {
            sign = 1;
            code = source.charCodeAt(offset + 2);
        }

        // ... followed by a digit
        if (isDigit(code)) {
            // 5.1 Consume them.
            // 5.2 Append them to repr.

            // 5.3 Set type to "number".
            // TODO

            // 5.4 While the next input code point is a digit, consume it and append it to repr.
            offset = findDecimalNumberEnd(source, offset + 1 + sign + 1);
        }
    }

    return offset;
}

// § 4.3.14. Consume the remnants of a bad url
// ... its sole use is to consume enough of the input stream to reach a recovery point
// where normal tokenizing can resume.
function consumeBadUrlRemnants(source, offset) {
    // Repeatedly consume the next input code point from the stream:
    for (; offset < source.length; offset++) {
        var code = source.charCodeAt(offset);

        // U+0029 RIGHT PARENTHESIS ())
        // EOF
        if (code === 0x0029) {
            // Return.
            offset++;
            break;
        }

        if (isValidEscape(code, getCharCode(source, offset + 1))) {
            // Consume an escaped code point.
            // Note: This allows an escaped right parenthesis ("\)") to be encountered
            // without ending the <bad-url-token>. This is otherwise identical to
            // the "anything else" clause.
            offset = consumeEscaped(source, offset);
        }
    }

    return offset;
}

module.exports = {
    consumeEscaped: consumeEscaped,
    consumeName: consumeName,
    consumeNumber: consumeNumber,
    consumeBadUrlRemnants: consumeBadUrlRemnants,

    cmpChar: cmpChar,
    cmpStr: cmpStr,

    getNewlineLength: getNewlineLength,
    findWhiteSpaceStart: findWhiteSpaceStart,
    findWhiteSpaceEnd: findWhiteSpaceEnd
};

},{"./char-code-definitions":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/char-code-definitions.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/TokenStream.js":[function(require,module,exports){
var constants = require('../tokenizer/const');
var TYPE = constants.TYPE;
var NAME = constants.NAME;

var utils = require('../tokenizer/utils');
var cmpStr = utils.cmpStr;

var EOF = TYPE.EOF;
var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;

var OFFSET_MASK = 0x00FFFFFF;
var TYPE_SHIFT = 24;

var TokenStream = function() {
    this.offsetAndType = null;
    this.balance = null;

    this.reset();
};

TokenStream.prototype = {
    reset: function() {
        this.eof = false;
        this.tokenIndex = -1;
        this.tokenType = 0;
        this.tokenStart = this.firstCharOffset;
        this.tokenEnd = this.firstCharOffset;
    },

    lookupType: function(offset) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset] >> TYPE_SHIFT;
        }

        return EOF;
    },
    lookupOffset: function(offset) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset - 1] & OFFSET_MASK;
        }

        return this.source.length;
    },
    lookupValue: function(offset, referenceStr) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return cmpStr(
                this.source,
                this.offsetAndType[offset - 1] & OFFSET_MASK,
                this.offsetAndType[offset] & OFFSET_MASK,
                referenceStr
            );
        }

        return false;
    },
    getTokenStart: function(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenStart;
        }

        if (tokenIndex > 0) {
            return tokenIndex < this.tokenCount
                ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK
                : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
        }

        return this.firstCharOffset;
    },

    // TODO: -> skipUntilBalanced
    getRawLength: function(startToken, mode) {
        var cursor = startToken;
        var balanceEnd;
        var offset = this.offsetAndType[Math.max(cursor - 1, 0)] & OFFSET_MASK;
        var type;

        loop:
        for (; cursor < this.tokenCount; cursor++) {
            balanceEnd = this.balance[cursor];

            // stop scanning on balance edge that points to offset before start token
            if (balanceEnd < startToken) {
                break loop;
            }

            type = this.offsetAndType[cursor] >> TYPE_SHIFT;

            // check token is stop type
            switch (mode(type, this.source, offset)) {
                case 1:
                    break loop;

                case 2:
                    cursor++;
                    break loop;

                default:
                    offset = this.offsetAndType[cursor] & OFFSET_MASK;

                    // fast forward to the end of balanced block
                    if (this.balance[balanceEnd] === cursor) {
                        cursor = balanceEnd;
                    }
            }
        }

        return cursor - this.tokenIndex;
    },
    isBalanceEdge: function(pos) {
        return this.balance[this.tokenIndex] < pos;
    },
    isDelim: function(code, offset) {
        if (offset) {
            return (
                this.lookupType(offset) === TYPE.Delim &&
                this.source.charCodeAt(this.lookupOffset(offset)) === code
            );
        }

        return (
            this.tokenType === TYPE.Delim &&
            this.source.charCodeAt(this.tokenStart) === code
        );
    },

    getTokenValue: function() {
        return this.source.substring(this.tokenStart, this.tokenEnd);
    },
    getTokenLength: function() {
        return this.tokenEnd - this.tokenStart;
    },
    substrToCursor: function(start) {
        return this.source.substring(start, this.tokenStart);
    },

    skipWS: function() {
        for (var i = this.tokenIndex, skipTokenCount = 0; i < this.tokenCount; i++, skipTokenCount++) {
            if ((this.offsetAndType[i] >> TYPE_SHIFT) !== WHITESPACE) {
                break;
            }
        }

        if (skipTokenCount > 0) {
            this.skip(skipTokenCount);
        }
    },
    skipSC: function() {
        while (this.tokenType === WHITESPACE || this.tokenType === COMMENT) {
            this.next();
        }
    },
    skip: function(tokenCount) {
        var next = this.tokenIndex + tokenCount;

        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.tokenIndex = this.tokenCount;
            this.next();
        }
    },
    next: function() {
        var next = this.tokenIndex + 1;

        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.tokenEnd;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.tokenIndex = this.tokenCount;
            this.eof = true;
            this.tokenType = EOF;
            this.tokenStart = this.tokenEnd = this.source.length;
        }
    },

    dump: function() {
        var offset = this.firstCharOffset;

        return Array.prototype.slice.call(this.offsetAndType, 0, this.tokenCount).map(function(item, idx) {
            var start = offset;
            var end = item & OFFSET_MASK;

            offset = end;

            return {
                idx: idx,
                type: NAME[item >> TYPE_SHIFT],
                chunk: this.source.substring(start, end),
                balance: this.balance[idx]
            };
        }, this);
    }
};

module.exports = TokenStream;

},{"../tokenizer/const":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/const.js","../tokenizer/utils":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/utils.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/error.js":[function(require,module,exports){
var createCustomError = require('../utils/createCustomError');
var generate = require('../definition-syntax/generate');

function fromMatchResult(matchResult) {
    var tokens = matchResult.tokens;
    var longestMatch = matchResult.longestMatch;
    var node = longestMatch < tokens.length ? tokens[longestMatch].node : null;
    var mismatchOffset = -1;
    var entries = 0;
    var css = '';

    for (var i = 0; i < tokens.length; i++) {
        if (i === longestMatch) {
            mismatchOffset = css.length;
        }

        if (node !== null && tokens[i].node === node) {
            if (i <= longestMatch) {
                entries++;
            } else {
                entries = 0;
            }
        }

        css += tokens[i].value;
    }

    return {
        node: node,
        css: css,
        mismatchOffset: mismatchOffset === -1 ? css.length : mismatchOffset,
        last: node === null || entries > 1
    };
}

function getLocation(node, point) {
    var loc = node && node.loc && node.loc[point];

    if (loc) {
        return {
            offset: loc.offset,
            line: loc.line,
            column: loc.column
        };
    }

    return null;
}

var SyntaxReferenceError = function(type, referenceName) {
    var error = createCustomError(
        'SyntaxReferenceError',
        type + (referenceName ? ' `' + referenceName + '`' : '')
    );

    error.reference = referenceName;

    return error;
};

var MatchError = function(message, syntax, node, matchResult) {
    var error = createCustomError('SyntaxMatchError', message);
    var details = fromMatchResult(matchResult);
    var mismatchOffset = details.mismatchOffset || 0;
    var badNode = details.node || node;
    var end = getLocation(badNode, 'end');
    var start = details.last ? end : getLocation(badNode, 'start');
    var css = details.css;

    error.rawMessage = message;
    error.syntax = syntax ? generate(syntax) : '<generic>';
    error.css = css;
    error.mismatchOffset = mismatchOffset;
    error.loc = {
        source: (badNode && badNode.loc && badNode.loc.source) || '<unknown>',
        start: start,
        end: end
    };
    error.line = start ? start.line : undefined;
    error.column = start ? start.column : undefined;
    error.offset = start ? start.offset : undefined;
    error.message = message + '\n' +
        '  syntax: ' + error.syntax + '\n' +
        '   value: ' + (error.css || '<empty string>') + '\n' +
        '  --------' + new Array(error.mismatchOffset + 1).join('-') + '^';

    return error;
};

module.exports = {
    SyntaxReferenceError: SyntaxReferenceError,
    MatchError: MatchError
};

},{"../definition-syntax/generate":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/generate.js","../utils/createCustomError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/createCustomError.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/match-graph.js":[function(require,module,exports){
var parse = require('../definition-syntax/parse');

var MATCH = { type: 'Match' };
var MISMATCH = { type: 'Mismatch' };
var DISALLOW_EMPTY = { type: 'DisallowEmpty' };
var LEFTPARENTHESIS = 40;  // (
var RIGHTPARENTHESIS = 41; // )

function createCondition(match, thenBranch, elseBranch) {
    // reduce node count
    if (thenBranch === MATCH && elseBranch === MISMATCH) {
        return match;
    }

    if (match === MATCH && thenBranch === MATCH && elseBranch === MATCH) {
        return match;
    }

    if (match.type === 'If' && match.else === MISMATCH && thenBranch === MATCH) {
        thenBranch = match.then;
        match = match.match;
    }

    return {
        type: 'If',
        match: match,
        then: thenBranch,
        else: elseBranch
    };
}

function isFunctionType(name) {
    return (
        name.length > 2 &&
        name.charCodeAt(name.length - 2) === LEFTPARENTHESIS &&
        name.charCodeAt(name.length - 1) === RIGHTPARENTHESIS
    );
}

function isEnumCapatible(term) {
    return (
        term.type === 'Keyword' ||
        term.type === 'AtKeyword' ||
        term.type === 'Function' ||
        term.type === 'Type' && isFunctionType(term.name)
    );
}

function buildGroupMatchGraph(combinator, terms, atLeastOneTermMatched) {
    switch (combinator) {
        case ' ':
            // Juxtaposing components means that all of them must occur, in the given order.
            //
            // a b c
            // =
            // match a
            //   then match b
            //     then match c
            //       then MATCH
            //       else MISMATCH
            //     else MISMATCH
            //   else MISMATCH
            var result = MATCH;

            for (var i = terms.length - 1; i >= 0; i--) {
                var term = terms[i];

                result = createCondition(
                    term,
                    result,
                    MISMATCH
                );
            };

            return result;

        case '|':
            // A bar (|) separates two or more alternatives: exactly one of them must occur.
            //
            // a | b | c
            // =
            // match a
            //   then MATCH
            //   else match b
            //     then MATCH
            //     else match c
            //       then MATCH
            //       else MISMATCH

            var result = MISMATCH;
            var map = null;

            for (var i = terms.length - 1; i >= 0; i--) {
                var term = terms[i];

                // reduce sequence of keywords into a Enum
                if (isEnumCapatible(term)) {
                    if (map === null && i > 0 && isEnumCapatible(terms[i - 1])) {
                        map = Object.create(null);
                        result = createCondition(
                            {
                                type: 'Enum',
                                map: map
                            },
                            MATCH,
                            result
                        );
                    }

                    if (map !== null) {
                        var key = (isFunctionType(term.name) ? term.name.slice(0, -1) : term.name).toLowerCase();
                        if (key in map === false) {
                            map[key] = term;
                            continue;
                        }
                    }
                }

                map = null;

                // create a new conditonal node
                result = createCondition(
                    term,
                    MATCH,
                    result
                );
            };

            return result;

        case '&&':
            // A double ampersand (&&) separates two or more components,
            // all of which must occur, in any order.

            // Use MatchOnce for groups with a large number of terms,
            // since &&-groups produces at least N!-node trees
            if (terms.length > 5) {
                return {
                    type: 'MatchOnce',
                    terms: terms,
                    all: true
                };
            }

            // Use a combination tree for groups with small number of terms
            //
            // a && b && c
            // =
            // match a
            //   then [b && c]
            //   else match b
            //     then [a && c]
            //     else match c
            //       then [a && b]
            //       else MISMATCH
            //
            // a && b
            // =
            // match a
            //   then match b
            //     then MATCH
            //     else MISMATCH
            //   else match b
            //     then match a
            //       then MATCH
            //       else MISMATCH
            //     else MISMATCH
            var result = MISMATCH;

            for (var i = terms.length - 1; i >= 0; i--) {
                var term = terms[i];
                var thenClause;

                if (terms.length > 1) {
                    thenClause = buildGroupMatchGraph(
                        combinator,
                        terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }),
                        false
                    );
                } else {
                    thenClause = MATCH;
                }

                result = createCondition(
                    term,
                    thenClause,
                    result
                );
            };

            return result;

        case '||':
            // A double bar (||) separates two or more options:
            // one or more of them must occur, in any order.

            // Use MatchOnce for groups with a large number of terms,
            // since ||-groups produces at least N!-node trees
            if (terms.length > 5) {
                return {
                    type: 'MatchOnce',
                    terms: terms,
                    all: false
                };
            }

            // Use a combination tree for groups with small number of terms
            //
            // a || b || c
            // =
            // match a
            //   then [b || c]
            //   else match b
            //     then [a || c]
            //     else match c
            //       then [a || b]
            //       else MISMATCH
            //
            // a || b
            // =
            // match a
            //   then match b
            //     then MATCH
            //     else MATCH
            //   else match b
            //     then match a
            //       then MATCH
            //       else MATCH
            //     else MISMATCH
            var result = atLeastOneTermMatched ? MATCH : MISMATCH;

            for (var i = terms.length - 1; i >= 0; i--) {
                var term = terms[i];
                var thenClause;

                if (terms.length > 1) {
                    thenClause = buildGroupMatchGraph(
                        combinator,
                        terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }),
                        true
                    );
                } else {
                    thenClause = MATCH;
                }

                result = createCondition(
                    term,
                    thenClause,
                    result
                );
            };

            return result;
    }
}

function buildMultiplierMatchGraph(node) {
    var result = MATCH;
    var matchTerm = buildMatchGraph(node.term);

    if (node.max === 0) {
        // disable repeating of empty match to prevent infinite loop
        matchTerm = createCondition(
            matchTerm,
            DISALLOW_EMPTY,
            MISMATCH
        );

        // an occurrence count is not limited, make a cycle;
        // to collect more terms on each following matching mismatch
        result = createCondition(
            matchTerm,
            null, // will be a loop
            MISMATCH
        );

        result.then = createCondition(
            MATCH,
            MATCH,
            result // make a loop
        );

        if (node.comma) {
            result.then.else = createCondition(
                { type: 'Comma', syntax: node },
                result,
                MISMATCH
            );
        }
    } else {
        // create a match node chain for [min .. max] interval with optional matches
        for (var i = node.min || 1; i <= node.max; i++) {
            if (node.comma && result !== MATCH) {
                result = createCondition(
                    { type: 'Comma', syntax: node },
                    result,
                    MISMATCH
                );
            }

            result = createCondition(
                matchTerm,
                createCondition(
                    MATCH,
                    MATCH,
                    result
                ),
                MISMATCH
            );
        }
    }

    if (node.min === 0) {
        // allow zero match
        result = createCondition(
            MATCH,
            MATCH,
            result
        );
    } else {
        // create a match node chain to collect [0 ... min - 1] required matches
        for (var i = 0; i < node.min - 1; i++) {
            if (node.comma && result !== MATCH) {
                result = createCondition(
                    { type: 'Comma', syntax: node },
                    result,
                    MISMATCH
                );
            }

            result = createCondition(
                matchTerm,
                result,
                MISMATCH
            );
        }
    }

    return result;
}

function buildMatchGraph(node) {
    if (typeof node === 'function') {
        return {
            type: 'Generic',
            fn: node
        };
    }

    switch (node.type) {
        case 'Group':
            var result = buildGroupMatchGraph(
                node.combinator,
                node.terms.map(buildMatchGraph),
                false
            );

            if (node.disallowEmpty) {
                result = createCondition(
                    result,
                    DISALLOW_EMPTY,
                    MISMATCH
                );
            }

            return result;

        case 'Multiplier':
            return buildMultiplierMatchGraph(node);

        case 'Type':
        case 'Property':
            return {
                type: node.type,
                name: node.name,
                syntax: node
            };

        case 'Keyword':
            return {
                type: node.type,
                name: node.name.toLowerCase(),
                syntax: node
            };

        case 'AtKeyword':
            return {
                type: node.type,
                name: '@' + node.name.toLowerCase(),
                syntax: node
            };

        case 'Function':
            return {
                type: node.type,
                name: node.name.toLowerCase() + '(',
                syntax: node
            };

        case 'String':
            // convert a one char length String to a Token
            if (node.value.length === 3) {
                return {
                    type: 'Token',
                    value: node.value.charAt(1),
                    syntax: node
                };
            }

            // otherwise use it as is
            return {
                type: node.type,
                value: node.value.substr(1, node.value.length - 2).replace(/\\'/g, '\''),
                syntax: node
            };

        case 'Token':
            return {
                type: node.type,
                value: node.value,
                syntax: node
            };

        case 'Comma':
            return {
                type: node.type,
                syntax: node
            };

        default:
            throw new Error('Unknown node type:', node.type);
    }
}

module.exports = {
    MATCH: MATCH,
    MISMATCH: MISMATCH,
    DISALLOW_EMPTY: DISALLOW_EMPTY,
    buildMatchGraph: function(syntaxTree, ref) {
        if (typeof syntaxTree === 'string') {
            syntaxTree = parse(syntaxTree);
        }

        return {
            type: 'MatchGraph',
            match: buildMatchGraph(syntaxTree),
            syntax: ref || null,
            source: syntaxTree
        };
    }
};

},{"../definition-syntax/parse":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/parse.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/match.js":[function(require,module,exports){
var hasOwnProperty = Object.prototype.hasOwnProperty;
var matchGraph = require('./match-graph');
var MATCH = matchGraph.MATCH;
var MISMATCH = matchGraph.MISMATCH;
var DISALLOW_EMPTY = matchGraph.DISALLOW_EMPTY;
var TYPE = require('../tokenizer/const').TYPE;

var STUB = 0;
var TOKEN = 1;
var OPEN_SYNTAX = 2;
var CLOSE_SYNTAX = 3;

var EXIT_REASON_MATCH = 'Match';
var EXIT_REASON_MISMATCH = 'Mismatch';
var EXIT_REASON_ITERATION_LIMIT = 'Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)';

var ITERATION_LIMIT = 15000;
var totalIterationCount = 0;

function reverseList(list) {
    var prev = null;
    var next = null;
    var item = list;

    while (item !== null) {
        next = item.prev;
        item.prev = prev;
        prev = item;
        item = next;
    }

    return prev;
}

function areStringsEqualCaseInsensitive(testStr, referenceStr) {
    if (testStr.length !== referenceStr.length) {
        return false;
    }

    for (var i = 0; i < testStr.length; i++) {
        var testCode = testStr.charCodeAt(i);
        var referenceCode = referenceStr.charCodeAt(i);

        // testCode.toLowerCase() for U+0041 LATIN CAPITAL LETTER A (A) .. U+005A LATIN CAPITAL LETTER Z (Z).
        if (testCode >= 0x0041 && testCode <= 0x005A) {
            testCode = testCode | 32;
        }

        if (testCode !== referenceCode) {
            return false;
        }
    }

    return true;
}

function isCommaContextStart(token) {
    if (token === null) {
        return true;
    }

    return (
        token.type === TYPE.Comma ||
        token.type === TYPE.Function ||
        token.type === TYPE.LeftParenthesis ||
        token.type === TYPE.LeftSquareBracket ||
        token.type === TYPE.LeftCurlyBracket ||
        token.type === TYPE.Delim
    );
}

function isCommaContextEnd(token) {
    if (token === null) {
        return true;
    }

    return (
        token.type === TYPE.RightParenthesis ||
        token.type === TYPE.RightSquareBracket ||
        token.type === TYPE.RightCurlyBracket ||
        token.type === TYPE.Delim
    );
}

function internalMatch(tokens, state, syntaxes) {
    function moveToNextToken() {
        do {
            tokenIndex++;
            token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
        } while (token !== null && (token.type === TYPE.WhiteSpace || token.type === TYPE.Comment));
    }

    function getNextToken(offset) {
        var nextIndex = tokenIndex + offset;

        return nextIndex < tokens.length ? tokens[nextIndex] : null;
    }

    function stateSnapshotFromSyntax(nextState, prev) {
        return {
            nextState: nextState,
            matchStack: matchStack,
            syntaxStack: syntaxStack,
            thenStack: thenStack,
            tokenIndex: tokenIndex,
            prev: prev
        };
    }

    function pushThenStack(nextState) {
        thenStack = {
            nextState: nextState,
            matchStack: matchStack,
            syntaxStack: syntaxStack,
            prev: thenStack
        };
    }

    function pushElseStack(nextState) {
        elseStack = stateSnapshotFromSyntax(nextState, elseStack);
    }

    function addTokenToMatch() {
        matchStack = {
            type: TOKEN,
            syntax: state.syntax,
            token: token,
            prev: matchStack
        };

        moveToNextToken();
        syntaxStash = null;

        if (tokenIndex > longestMatch) {
            longestMatch = tokenIndex;
        }
    }

    function openSyntax() {
        syntaxStack = {
            syntax: state.syntax,
            opts: state.syntax.opts || (syntaxStack !== null && syntaxStack.opts) || null,
            prev: syntaxStack
        };

        matchStack = {
            type: OPEN_SYNTAX,
            syntax: state.syntax,
            token: matchStack.token,
            prev: matchStack
        };
    }

    function closeSyntax() {
        if (matchStack.type === OPEN_SYNTAX) {
            matchStack = matchStack.prev;
        } else {
            matchStack = {
                type: CLOSE_SYNTAX,
                syntax: syntaxStack.syntax,
                token: matchStack.token,
                prev: matchStack
            };
        }

        syntaxStack = syntaxStack.prev;
    }

    var syntaxStack = null;
    var thenStack = null;
    var elseStack = null;

    // null – stashing allowed, nothing stashed
    // false – stashing disabled, nothing stashed
    // anithing else – fail stashable syntaxes, some syntax stashed
    var syntaxStash = null;

    var iterationCount = 0; // count iterations and prevent infinite loop
    var exitReason = null;

    var token = null;
    var tokenIndex = -1;
    var longestMatch = 0;
    var matchStack = {
        type: STUB,
        syntax: null,
        token: null,
        prev: null
    };

    moveToNextToken();

    while (exitReason === null && ++iterationCount < ITERATION_LIMIT) {
        // function mapList(list, fn) {
        //     var result = [];
        //     while (list) {
        //         result.unshift(fn(list));
        //         list = list.prev;
        //     }
        //     return result;
        // }
        // console.log('--\n',
        //     '#' + iterationCount,
        //     require('util').inspect({
        //         match: mapList(matchStack, x => x.type === TOKEN ? x.token && x.token.value : x.syntax ? ({ [OPEN_SYNTAX]: '<', [CLOSE_SYNTAX]: '</' }[x.type] || x.type) + '!' + x.syntax.name : null),
        //         token: token && token.value,
        //         tokenIndex,
        //         syntax: syntax.type + (syntax.id ? ' #' + syntax.id : '')
        //     }, { depth: null })
        // );
        switch (state.type) {
            case 'Match':
                if (thenStack === null) {
                    // turn to MISMATCH when some tokens left unmatched
                    if (token !== null) {
                        // doesn't mismatch if just one token left and it's an IE hack
                        if (tokenIndex !== tokens.length - 1 || (token.value !== '\\0' && token.value !== '\\9')) {
                            state = MISMATCH;
                            break;
                        }
                    }

                    // break the main loop, return a result - MATCH
                    exitReason = EXIT_REASON_MATCH;
                    break;
                }

                // go to next syntax (`then` branch)
                state = thenStack.nextState;

                // check match is not empty
                if (state === DISALLOW_EMPTY) {
                    if (thenStack.matchStack === matchStack) {
                        state = MISMATCH;
                        break;
                    } else {
                        state = MATCH;
                    }
                }

                // close syntax if needed
                while (thenStack.syntaxStack !== syntaxStack) {
                    closeSyntax();
                }

                // pop stack
                thenStack = thenStack.prev;
                break;

            case 'Mismatch':
                // when some syntax is stashed
                if (syntaxStash !== null && syntaxStash !== false) {
                    // there is no else branches or a branch reduce match stack
                    if (elseStack === null || tokenIndex > elseStack.tokenIndex) {
                        // restore state from the stash
                        elseStack = syntaxStash;
                        syntaxStash = false; // disable stashing
                    }
                } else if (elseStack === null) {
                    // no else branches -> break the main loop
                    // return a result - MISMATCH
                    exitReason = EXIT_REASON_MISMATCH;
                    break;
                }

                // go to next syntax (`else` branch)
                state = elseStack.nextState;

                // restore all the rest stack states
                thenStack = elseStack.thenStack;
                syntaxStack = elseStack.syntaxStack;
                matchStack = elseStack.matchStack;
                tokenIndex = elseStack.tokenIndex;
                token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;

                // pop stack
                elseStack = elseStack.prev;
                break;

            case 'MatchGraph':
                state = state.match;
                break;

            case 'If':
                // IMPORTANT: else stack push must go first,
                // since it stores the state of thenStack before changes
                if (state.else !== MISMATCH) {
                    pushElseStack(state.else);
                }

                if (state.then !== MATCH) {
                    pushThenStack(state.then);
                }

                state = state.match;
                break;

            case 'MatchOnce':
                state = {
                    type: 'MatchOnceBuffer',
                    syntax: state,
                    index: 0,
                    mask: 0
                };
                break;

            case 'MatchOnceBuffer':
                var terms = state.syntax.terms;

                if (state.index === terms.length) {
                    // no matches at all or it's required all terms to be matched
                    if (state.mask === 0 || state.syntax.all) {
                        state = MISMATCH;
                        break;
                    }

                    // a partial match is ok
                    state = MATCH;
                    break;
                }

                // all terms are matched
                if (state.mask === (1 << terms.length) - 1) {
                    state = MATCH;
                    break;
                }

                for (; state.index < terms.length; state.index++) {
                    var matchFlag = 1 << state.index;

                    if ((state.mask & matchFlag) === 0) {
                        // IMPORTANT: else stack push must go first,
                        // since it stores the state of thenStack before changes
                        pushElseStack(state);
                        pushThenStack({
                            type: 'AddMatchOnce',
                            syntax: state.syntax,
                            mask: state.mask | matchFlag
                        });

                        // match
                        state = terms[state.index++];
                        break;
                    }
                }
                break;

            case 'AddMatchOnce':
                state = {
                    type: 'MatchOnceBuffer',
                    syntax: state.syntax,
                    index: 0,
                    mask: state.mask
                };
                break;

            case 'Enum':
                if (token !== null) {
                    var name = token.value.toLowerCase();

                    // drop \0 and \9 hack from keyword name
                    if (name.indexOf('\\') !== -1) {
                        name = name.replace(/\\[09].*$/, '');
                    }

                    if (hasOwnProperty.call(state.map, name)) {
                        state = state.map[name];
                        break;
                    }
                }

                state = MISMATCH;
                break;

            case 'Generic':
                var opts = syntaxStack !== null ? syntaxStack.opts : null;
                var lastTokenIndex = tokenIndex + Math.floor(state.fn(token, getNextToken, opts));

                if (!isNaN(lastTokenIndex) && lastTokenIndex > tokenIndex) {
                    while (tokenIndex < lastTokenIndex) {
                        addTokenToMatch();
                    }

                    state = MATCH;
                } else {
                    state = MISMATCH;
                }

                break;

            case 'Type':
            case 'Property':
                var syntaxDict = state.type === 'Type' ? 'types' : 'properties';
                var dictSyntax = hasOwnProperty.call(syntaxes, syntaxDict) ? syntaxes[syntaxDict][state.name] : null;

                if (!dictSyntax || !dictSyntax.match) {
                    throw new Error(
                        'Bad syntax reference: ' +
                        (state.type === 'Type'
                            ? '<' + state.name + '>'
                            : '<\'' + state.name + '\'>')
                    );
                }

                // stash a syntax for types with low priority
                if (syntaxStash !== false && token !== null && state.type === 'Type') {
                    var lowPriorityMatching =
                        // https://drafts.csswg.org/css-values-4/#custom-idents
                        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
                        // can only claim the keyword if no other unfulfilled production can claim it.
                        (state.name === 'custom-ident' && token.type === TYPE.Ident) ||

                        // https://drafts.csswg.org/css-values-4/#lengths
                        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
                        // it must parse as a <number>
                        (state.name === 'length' && token.value === '0');

                    if (lowPriorityMatching) {
                        if (syntaxStash === null) {
                            syntaxStash = stateSnapshotFromSyntax(state, elseStack);
                        }

                        state = MISMATCH;
                        break;
                    }
                }

                openSyntax();
                state = dictSyntax.match;
                break;

            case 'Keyword':
                var name = state.name;

                if (token !== null) {
                    var keywordName = token.value;

                    // drop \0 and \9 hack from keyword name
                    if (keywordName.indexOf('\\') !== -1) {
                        keywordName = keywordName.replace(/\\[09].*$/, '');
                    }

                    if (areStringsEqualCaseInsensitive(keywordName, name)) {
                        addTokenToMatch();
                        state = MATCH;
                        break;
                    }
                }

                state = MISMATCH;
                break;

            case 'AtKeyword':
            case 'Function':
                if (token !== null && areStringsEqualCaseInsensitive(token.value, state.name)) {
                    addTokenToMatch();
                    state = MATCH;
                    break;
                }

                state = MISMATCH;
                break;

            case 'Token':
                if (token !== null && token.value === state.value) {
                    addTokenToMatch();
                    state = MATCH;
                    break;
                }

                state = MISMATCH;
                break;

            case 'Comma':
                if (token !== null && token.type === TYPE.Comma) {
                    if (isCommaContextStart(matchStack.token)) {
                        state = MISMATCH;
                    } else {
                        addTokenToMatch();
                        state = isCommaContextEnd(token) ? MISMATCH : MATCH;
                    }
                } else {
                    state = isCommaContextStart(matchStack.token) || isCommaContextEnd(token) ? MATCH : MISMATCH;
                }

                break;

            case 'String':
                var string = '';

                for (var lastTokenIndex = tokenIndex; lastTokenIndex < tokens.length && string.length < state.value.length; lastTokenIndex++) {
                    string += tokens[lastTokenIndex].value;
                }

                if (areStringsEqualCaseInsensitive(string, state.value)) {
                    while (tokenIndex < lastTokenIndex) {
                        addTokenToMatch();
                    }

                    state = MATCH;
                } else {
                    state = MISMATCH;
                }

                break;

            default:
                throw new Error('Unknown node type: ' + state.type);
        }
    }

    totalIterationCount += iterationCount;

    switch (exitReason) {
        case null:
            console.warn('[csstree-match] BREAK after ' + ITERATION_LIMIT + ' iterations');
            exitReason = EXIT_REASON_ITERATION_LIMIT;
            matchStack = null;
            break;

        case EXIT_REASON_MATCH:
            while (syntaxStack !== null) {
                closeSyntax();
            }
            break;

        default:
            matchStack = null;
    }

    return {
        tokens: tokens,
        reason: exitReason,
        iterations: iterationCount,
        match: matchStack,
        longestMatch: longestMatch
    };
}

function matchAsList(tokens, matchGraph, syntaxes) {
    var matchResult = internalMatch(tokens, matchGraph, syntaxes || {});

    if (matchResult.match !== null) {
        var item = reverseList(matchResult.match).prev;

        matchResult.match = [];

        while (item !== null) {
            switch (item.type) {
                case STUB:
                    break;

                case OPEN_SYNTAX:
                case CLOSE_SYNTAX:
                    matchResult.match.push({
                        type: item.type,
                        syntax: item.syntax
                    });
                    break;

                default:
                    matchResult.match.push({
                        token: item.token.value,
                        node: item.token.node
                    });
                    break;
            }

            item = item.prev;
        }
    }

    return matchResult;
}

function matchAsTree(tokens, matchGraph, syntaxes) {
    var matchResult = internalMatch(tokens, matchGraph, syntaxes || {});

    if (matchResult.match === null) {
        return matchResult;
    }

    var item = matchResult.match;
    var host = matchResult.match = {
        syntax: matchGraph.syntax || null,
        match: []
    };
    var hostStack = [host];

    // revert a list and start with 2nd item since 1st is a stub item
    item = reverseList(item).prev;

    // build a tree
    while (item !== null) {
        switch (item.type) {
            case OPEN_SYNTAX:
                host.match.push(host = {
                    syntax: item.syntax,
                    match: []
                });
                hostStack.push(host);
                break;

            case CLOSE_SYNTAX:
                hostStack.pop();
                host = hostStack[hostStack.length - 1];
                break;

            default:
                host.match.push({
                    syntax: item.syntax || null,
                    token: item.token.value,
                    node: item.token.node
                });
        }

        item = item.prev;
    }

    return matchResult;
}

module.exports = {
    matchAsList: matchAsList,
    matchAsTree: matchAsTree,
    getTotalIterationCount: function() {
        return totalIterationCount;
    }
};

},{"../tokenizer/const":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/const.js","./match-graph":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/match-graph.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/search.js":[function(require,module,exports){
var List = require('../common/List');

function getFirstMatchNode(matchNode) {
    if ('node' in matchNode) {
        return matchNode.node;
    }

    return getFirstMatchNode(matchNode.match[0]);
}

function getLastMatchNode(matchNode) {
    if ('node' in matchNode) {
        return matchNode.node;
    }

    return getLastMatchNode(matchNode.match[matchNode.match.length - 1]);
}

function matchFragments(lexer, ast, match, type, name) {
    function findFragments(matchNode) {
        if (matchNode.syntax !== null &&
            matchNode.syntax.type === type &&
            matchNode.syntax.name === name) {
            var start = getFirstMatchNode(matchNode);
            var end = getLastMatchNode(matchNode);

            lexer.syntax.walk(ast, function(node, item, list) {
                if (node === start) {
                    var nodes = new List();

                    do {
                        nodes.appendData(item.data);

                        if (item.data === end) {
                            break;
                        }

                        item = item.next;
                    } while (item !== null);

                    fragments.push({
                        parent: list,
                        nodes: nodes
                    });
                }
            });
        }

        if (Array.isArray(matchNode.match)) {
            matchNode.match.forEach(findFragments);
        }
    }

    var fragments = [];

    if (match.matched !== null) {
        findFragments(match.matched);
    }

    return fragments;
}

module.exports = {
    matchFragments: matchFragments
};

},{"../common/List":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/structure.js":[function(require,module,exports){
var List = require('../common/List');
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isValidNumber(value) {
    // Number.isInteger(value) && value >= 0
    return (
        typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value &&
        value >= 0
    );
}

function isValidLocation(loc) {
    return (
        Boolean(loc) &&
        isValidNumber(loc.offset) &&
        isValidNumber(loc.line) &&
        isValidNumber(loc.column)
    );
}

function createNodeStructureChecker(type, fields) {
    return function checkNode(node, warn) {
        if (!node || node.constructor !== Object) {
            return warn(node, 'Type of node should be an Object');
        }

        for (var key in node) {
            var valid = true;

            if (hasOwnProperty.call(node, key) === false) {
                continue;
            }

            if (key === 'type') {
                if (node.type !== type) {
                    warn(node, 'Wrong node type `' + node.type + '`, expected `' + type + '`');
                }
            } else if (key === 'loc') {
                if (node.loc === null) {
                    continue;
                } else if (node.loc && node.loc.constructor === Object) {
                    if (typeof node.loc.source !== 'string') {
                        key += '.source';
                    } else if (!isValidLocation(node.loc.start)) {
                        key += '.start';
                    } else if (!isValidLocation(node.loc.end)) {
                        key += '.end';
                    } else {
                        continue;
                    }
                }

                valid = false;
            } else if (fields.hasOwnProperty(key)) {
                for (var i = 0, valid = false; !valid && i < fields[key].length; i++) {
                    var fieldType = fields[key][i];

                    switch (fieldType) {
                        case String:
                            valid = typeof node[key] === 'string';
                            break;

                        case Boolean:
                            valid = typeof node[key] === 'boolean';
                            break;

                        case null:
                            valid = node[key] === null;
                            break;

                        default:
                            if (typeof fieldType === 'string') {
                                valid = node[key] && node[key].type === fieldType;
                            } else if (Array.isArray(fieldType)) {
                                valid = node[key] instanceof List;
                            }
                    }
                }
            } else {
                warn(node, 'Unknown field `' + key + '` for ' + type + ' node type');
            }

            if (!valid) {
                warn(node, 'Bad value for `' + type + '.' + key + '`');
            }
        }

        for (var key in fields) {
            if (hasOwnProperty.call(fields, key) &&
                hasOwnProperty.call(node, key) === false) {
                warn(node, 'Field `' + type + '.' + key + '` is missed');
            }
        }
    };
}

function processStructure(name, nodeType) {
    var structure = nodeType.structure;
    var fields = {
        type: String,
        loc: true
    };
    var docs = {
        type: '"' + name + '"'
    };

    for (var key in structure) {
        if (hasOwnProperty.call(structure, key) === false) {
            continue;
        }

        var docsTypes = [];
        var fieldTypes = fields[key] = Array.isArray(structure[key])
            ? structure[key].slice()
            : [structure[key]];

        for (var i = 0; i < fieldTypes.length; i++) {
            var fieldType = fieldTypes[i];
            if (fieldType === String || fieldType === Boolean) {
                docsTypes.push(fieldType.name);
            } else if (fieldType === null) {
                docsTypes.push('null');
            } else if (typeof fieldType === 'string') {
                docsTypes.push('<' + fieldType + '>');
            } else if (Array.isArray(fieldType)) {
                docsTypes.push('List'); // TODO: use type enum
            } else {
                throw new Error('Wrong value `' + fieldType + '` in `' + name + '.' + key + '` structure definition');
            }
        }

        docs[key] = docsTypes.join(' | ');
    }

    return {
        docs: docs,
        check: createNodeStructureChecker(name, fields)
    };
}

module.exports = {
    getStructureFromConfig: function(config) {
        var structure = {};

        if (config.node) {
            for (var name in config.node) {
                if (hasOwnProperty.call(config.node, name)) {
                    var nodeType = config.node[name];

                    if (nodeType.structure) {
                        structure[name] = processStructure(name, nodeType);
                    } else {
                        throw new Error('Missed `structure` field in `' + name + '` node type definition');
                    }
                }
            }
        }

        return structure;
    }
};

},{"../common/List":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_getRawTag.js":[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_Symbol.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_baseGetTag.js":[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_Symbol.js","./_getRawTag":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_getRawTag.js","./_objectToString":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_objectToString.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/isSymbol.js":[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_baseGetTag.js","./isObjectLike":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/isObjectLike.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_baseToString.js":[function(require,module,exports){
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_Symbol.js","./_arrayMap":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_arrayMap.js","./isArray":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/isArray.js","./isSymbol":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/isSymbol.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/toString.js":[function(require,module,exports){
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_baseToString.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/words.js":[function(require,module,exports){
var asciiWords = require('./_asciiWords'),
    hasUnicodeWord = require('./_hasUnicodeWord'),
    toString = require('./toString'),
    unicodeWords = require('./_unicodeWords');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;

},{"./_asciiWords":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_asciiWords.js","./_hasUnicodeWord":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_hasUnicodeWord.js","./_unicodeWords":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/_unicodeWords.js","./toString":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/toString.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/prepare-tokens.js":[function(require,module,exports){
var tokenize = require('../tokenizer');
var TokenStream = require('../common/TokenStream');
var tokenStream = new TokenStream();
var astToTokens = {
    decorator: function(handlers) {
        var curNode = null;
        var prev = { len: 0, node: null };
        var nodes = [prev];
        var buffer = '';

        return {
            children: handlers.children,
            node: function(node) {
                var tmp = curNode;
                curNode = node;
                handlers.node.call(this, node);
                curNode = tmp;
            },
            chunk: function(chunk) {
                buffer += chunk;
                if (prev.node !== curNode) {
                    nodes.push({
                        len: chunk.length,
                        node: curNode
                    });
                } else {
                    prev.len += chunk.length;
                }
            },
            result: function() {
                return prepareTokens(buffer, nodes);
            }
        };
    }
};

function prepareTokens(str, nodes) {
    var tokens = [];
    var nodesOffset = 0;
    var nodesIndex = 0;
    var currentNode = nodes ? nodes[nodesIndex].node : null;

    tokenize(str, tokenStream);

    while (!tokenStream.eof) {
        if (nodes) {
            while (nodesIndex < nodes.length && nodesOffset + nodes[nodesIndex].len <= tokenStream.tokenStart) {
                nodesOffset += nodes[nodesIndex++].len;
                currentNode = nodes[nodesIndex].node;
            }
        }

        tokens.push({
            type: tokenStream.tokenType,
            value: tokenStream.getTokenValue(),
            index: tokenStream.tokenIndex, // TODO: remove it, temporary solution
            balance: tokenStream.balance[tokenStream.tokenIndex], // TODO: remove it, temporary solution
            node: currentNode
        });
        tokenStream.next();
        // console.log({ ...tokens[tokens.length - 1], node: undefined });
    }

    return tokens;
}

module.exports = function(value, syntax) {
    if (typeof value === 'string') {
        return prepareTokens(value, null);
    }

    return syntax.generate(value, astToTokens);
};

},{"../common/TokenStream":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/TokenStream.js","../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/OffsetToLocation.js":[function(require,module,exports){
var adoptBuffer = require('./adopt-buffer');
var isBOM = require('../tokenizer').isBOM;

var N = 10;
var F = 12;
var R = 13;

function computeLinesAndColumns(host, source) {
    var sourceLength = source.length;
    var lines = adoptBuffer(host.lines, sourceLength); // +1
    var line = host.startLine;
    var columns = adoptBuffer(host.columns, sourceLength);
    var column = host.startColumn;
    var startOffset = source.length > 0 ? isBOM(source.charCodeAt(0)) : 0;

    for (var i = startOffset; i < sourceLength; i++) { // -1
        var code = source.charCodeAt(i);

        lines[i] = line;
        columns[i] = column++;

        if (code === N || code === R || code === F) {
            if (code === R && i + 1 < sourceLength && source.charCodeAt(i + 1) === N) {
                i++;
                lines[i] = line;
                columns[i] = column;
            }

            line++;
            column = 1;
        }
    }

    lines[i] = line;
    columns[i] = column;

    host.lines = lines;
    host.columns = columns;
}

var OffsetToLocation = function() {
    this.lines = null;
    this.columns = null;
    this.linesAndColumnsComputed = false;
};

OffsetToLocation.prototype = {
    setSource: function(source, startOffset, startLine, startColumn) {
        this.source = source;
        this.startOffset = typeof startOffset === 'undefined' ? 0 : startOffset;
        this.startLine = typeof startLine === 'undefined' ? 1 : startLine;
        this.startColumn = typeof startColumn === 'undefined' ? 1 : startColumn;
        this.linesAndColumnsComputed = false;
    },

    ensureLinesAndColumnsComputed: function() {
        if (!this.linesAndColumnsComputed) {
            computeLinesAndColumns(this, this.source);
            this.linesAndColumnsComputed = true;
        }
    },
    getLocation: function(offset, filename) {
        this.ensureLinesAndColumnsComputed();

        return {
            source: filename,
            offset: this.startOffset + offset,
            line: this.lines[offset],
            column: this.columns[offset]
        };
    },
    getLocationRange: function(start, end, filename) {
        this.ensureLinesAndColumnsComputed();

        return {
            source: filename,
            start: {
                offset: this.startOffset + start,
                line: this.lines[start],
                column: this.columns[start]
            },
            end: {
                offset: this.startOffset + end,
                line: this.lines[end],
                column: this.columns[end]
            }
        };
    }
};

module.exports = OffsetToLocation;

},{"../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","./adopt-buffer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/adopt-buffer.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/parser/sequence.js":[function(require,module,exports){
var TYPE = require('../tokenizer').TYPE;
var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;

module.exports = function readSequence(recognizer) {
    var children = this.createList();
    var child = null;
    var context = {
        recognizer: recognizer,
        space: null,
        ignoreWS: false,
        ignoreWSAfter: false
    };

    this.scanner.skipSC();

    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case COMMENT:
                this.scanner.next();
                continue;

            case WHITESPACE:
                if (context.ignoreWS) {
                    this.scanner.next();
                } else {
                    context.space = this.WhiteSpace();
                }
                continue;
        }

        child = recognizer.getNode.call(this, context);

        if (child === undefined) {
            break;
        }

        if (context.space !== null) {
            children.push(context.space);
            context.space = null;
        }

        children.push(child);

        if (context.ignoreWSAfter) {
            context.ignoreWSAfter = false;
            context.ignoreWS = true;
        } else {
            context.ignoreWS = false;
        }
    }

    return children;
};

},{"../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/parser/create.js":[function(require,module,exports){
var OffsetToLocation = require('../common/OffsetToLocation');
var SyntaxError = require('../common/SyntaxError');
var TokenStream = require('../common/TokenStream');
var List = require('../common/List');
var tokenize = require('../tokenizer');
var constants = require('../tokenizer/const');
var findWhiteSpaceStart = require('../tokenizer/utils').findWhiteSpaceStart;
var sequence = require('./sequence');
var noop = function() {};

var TYPE = constants.TYPE;
var NAME = constants.NAME;
var WHITESPACE = TYPE.WhiteSpace;
var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var HASH = TYPE.Hash;
var PERCENTAGE = TYPE.Percentage;
var NUMBER = TYPE.Number;
var NUMBERSIGN = 0x0023; // U+0023 NUMBER SIGN (#)
var NULL = 0;

function createParseContext(name) {
    return function() {
        return this[name]();
    };
}

function processConfig(config) {
    var parserConfig = {
        context: {},
        scope: {},
        atrule: {},
        pseudo: {}
    };

    if (config.parseContext) {
        for (var name in config.parseContext) {
            switch (typeof config.parseContext[name]) {
                case 'function':
                    parserConfig.context[name] = config.parseContext[name];
                    break;

                case 'string':
                    parserConfig.context[name] = createParseContext(config.parseContext[name]);
                    break;
            }
        }
    }

    if (config.scope) {
        for (var name in config.scope) {
            parserConfig.scope[name] = config.scope[name];
        }
    }

    if (config.atrule) {
        for (var name in config.atrule) {
            var atrule = config.atrule[name];

            if (atrule.parse) {
                parserConfig.atrule[name] = atrule.parse;
            }
        }
    }

    if (config.pseudo) {
        for (var name in config.pseudo) {
            var pseudo = config.pseudo[name];

            if (pseudo.parse) {
                parserConfig.pseudo[name] = pseudo.parse;
            }
        }
    }

    if (config.node) {
        for (var name in config.node) {
            parserConfig[name] = config.node[name].parse;
        }
    }

    return parserConfig;
}

module.exports = function createParser(config) {
    var parser = {
        scanner: new TokenStream(),
        locationMap: new OffsetToLocation(),

        filename: '<unknown>',
        needPositions: false,
        onParseError: noop,
        onParseErrorThrow: false,
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,

        readSequence: sequence,

        createList: function() {
            return new List();
        },
        createSingleNodeList: function(node) {
            return new List().appendData(node);
        },
        getFirstListNode: function(list) {
            return list && list.first();
        },
        getLastListNode: function(list) {
            return list.last();
        },

        parseWithFallback: function(consumer, fallback) {
            var startToken = this.scanner.tokenIndex;

            try {
                return consumer.call(this);
            } catch (e) {
                if (this.onParseErrorThrow) {
                    throw e;
                }

                var fallbackNode = fallback.call(this, startToken);

                this.onParseErrorThrow = true;
                this.onParseError(e, fallbackNode);
                this.onParseErrorThrow = false;

                return fallbackNode;
            }
        },

        lookupNonWSType: function(offset) {
            do {
                var type = this.scanner.lookupType(offset++);
                if (type !== WHITESPACE) {
                    return type;
                }
            } while (type !== NULL);

            return NULL;
        },

        eat: function(tokenType) {
            if (this.scanner.tokenType !== tokenType) {
                var offset = this.scanner.tokenStart;
                var message = NAME[tokenType] + ' is expected';

                // tweak message and offset
                switch (tokenType) {
                    case IDENT:
                        // when identifier is expected but there is a function or url
                        if (this.scanner.tokenType === FUNCTION || this.scanner.tokenType === URL) {
                            offset = this.scanner.tokenEnd - 1;
                            message = 'Identifier is expected but function found';
                        } else {
                            message = 'Identifier is expected';
                        }
                        break;

                    case HASH:
                        if (this.scanner.isDelim(NUMBERSIGN)) {
                            this.scanner.next();
                            offset++;
                            message = 'Name is expected';
                        }
                        break;

                    case PERCENTAGE:
                        if (this.scanner.tokenType === NUMBER) {
                            offset = this.scanner.tokenEnd;
                            message = 'Percent sign is expected';
                        }
                        break;

                    default:
                        // when test type is part of another token show error for current position + 1
                        // e.g. eat(HYPHENMINUS) will fail on "-foo", but pointing on "-" is odd
                        if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === tokenType) {
                            offset = offset + 1;
                        }
                }

                this.error(message, offset);
            }

            this.scanner.next();
        },

        consume: function(tokenType) {
            var value = this.scanner.getTokenValue();

            this.eat(tokenType);

            return value;
        },
        consumeFunctionName: function() {
            var name = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);

            this.eat(FUNCTION);

            return name;
        },

        getLocation: function(start, end) {
            if (this.needPositions) {
                return this.locationMap.getLocationRange(
                    start,
                    end,
                    this.filename
                );
            }

            return null;
        },
        getLocationFromList: function(list) {
            if (this.needPositions) {
                var head = this.getFirstListNode(list);
                var tail = this.getLastListNode(list);
                return this.locationMap.getLocationRange(
                    head !== null ? head.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart,
                    tail !== null ? tail.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart,
                    this.filename
                );
            }

            return null;
        },

        error: function(message, offset) {
            var location = typeof offset !== 'undefined' && offset < this.scanner.source.length
                ? this.locationMap.getLocation(offset)
                : this.scanner.eof
                    ? this.locationMap.getLocation(findWhiteSpaceStart(this.scanner.source, this.scanner.source.length - 1))
                    : this.locationMap.getLocation(this.scanner.tokenStart);

            throw new SyntaxError(
                message || 'Unexpected input',
                this.scanner.source,
                location.offset,
                location.line,
                location.column
            );
        }
    };

    config = processConfig(config || {});
    for (var key in config) {
        parser[key] = config[key];
    }

    return function(source, options) {
        options = options || {};

        var context = options.context || 'default';
        var ast;

        tokenize(source, parser.scanner);
        parser.locationMap.setSource(
            source,
            options.offset,
            options.line,
            options.column
        );

        parser.filename = options.filename || '<unknown>';
        parser.needPositions = Boolean(options.positions);
        parser.onParseError = typeof options.onParseError === 'function' ? options.onParseError : noop;
        parser.onParseErrorThrow = false;
        parser.parseAtrulePrelude = 'parseAtrulePrelude' in options ? Boolean(options.parseAtrulePrelude) : true;
        parser.parseRulePrelude = 'parseRulePrelude' in options ? Boolean(options.parseRulePrelude) : true;
        parser.parseValue = 'parseValue' in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = 'parseCustomProperty' in options ? Boolean(options.parseCustomProperty) : false;

        if (!parser.context.hasOwnProperty(context)) {
            throw new Error('Unknown context `' + context + '`');
        }

        ast = parser.context[context].call(parser, options);

        if (!parser.scanner.eof) {
            parser.error();
        }

        return ast;
    };
};

},{"../common/List":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js","../common/OffsetToLocation":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/OffsetToLocation.js","../common/SyntaxError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/SyntaxError.js","../common/TokenStream":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/TokenStream.js","../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","../tokenizer/const":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/const.js","../tokenizer/utils":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/utils.js","./sequence":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/parser/sequence.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/SyntaxError.js":[function(require,module,exports){
var createCustomError = require('../utils/createCustomError');

module.exports = function SyntaxError(message, input, offset) {
    var error = createCustomError('SyntaxError', message);

    error.input = input;
    error.offset = offset;
    error.rawMessage = message;
    error.message = error.rawMessage + '\n' +
        '  ' + error.input + '\n' +
        '--' + new Array((error.offset || error.input.length) + 1).join('-') + '^';

    return error;
};

},{"../utils/createCustomError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/createCustomError.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/index.js":[function(require,module,exports){
module.exports = {
    SyntaxError: require('./SyntaxError'),
    parse: require('./parse'),
    generate: require('./generate'),
    walk: require('./walk')
};

},{"./SyntaxError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/SyntaxError.js","./generate":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/generate.js","./parse":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/parse.js","./walk":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/walk.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/not.js":[function(require,module,exports){
module.exports = require('./common/selectorList');

},{"./common/selectorList":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/selectorList.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-last-child.js":[function(require,module,exports){
module.exports = require('./common/nthWithOfClause');

},{"./common/nthWithOfClause":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/nthWithOfClause.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-of-type.js":[function(require,module,exports){
module.exports = require('./common/nth');

},{"./common/nth":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/nth.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/AnPlusB.js":[function(require,module,exports){
var cmpChar = require('../../tokenizer').cmpChar;
var isDigit = require('../../tokenizer').isDigit;
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var NUMBER = TYPE.Number;
var DIMENSION = TYPE.Dimension;
var PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
var N = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;

function checkInteger(offset, disallowSign) {
    var pos = this.scanner.tokenStart + offset;
    var code = this.scanner.source.charCodeAt(pos);

    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            this.error('Number sign is not allowed');
        }
        pos++;
    }

    for (; pos < this.scanner.tokenEnd; pos++) {
        if (!isDigit(this.scanner.source.charCodeAt(pos))) {
            this.error('Integer is expected', pos);
        }
    }
}

function checkTokenIsInteger(disallowSign) {
    return checkInteger.call(this, 0, disallowSign);
}

function expectCharCode(offset, code) {
    if (!cmpChar(this.scanner.source, this.scanner.tokenStart + offset, code)) {
        var msg = '';

        switch (code) {
            case N:
                msg = 'N is expected';
                break;
            case HYPHENMINUS:
                msg = 'HyphenMinus is expected';
                break;
        }

        this.error(msg, this.scanner.tokenStart + offset);
    }
}

// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB() {
    var offset = 0;
    var sign = 0;
    var type = this.scanner.tokenType;

    while (type === WHITESPACE || type === COMMENT) {
        type = this.scanner.lookupType(++offset);
    }

    if (type !== NUMBER) {
        if (this.scanner.isDelim(PLUSSIGN, offset) ||
            this.scanner.isDelim(HYPHENMINUS, offset)) {
            sign = this.scanner.isDelim(PLUSSIGN, offset) ? PLUSSIGN : HYPHENMINUS;

            do {
                type = this.scanner.lookupType(++offset);
            } while (type === WHITESPACE || type === COMMENT);

            if (type !== NUMBER) {
                this.scanner.skip(offset);
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
            }
        } else {
            return null;
        }
    }

    if (offset > 0) {
        this.scanner.skip(offset);
    }

    if (sign === 0) {
        type = this.scanner.source.charCodeAt(this.scanner.tokenStart);
        if (type !== PLUSSIGN && type !== HYPHENMINUS) {
            this.error('Number sign is expected');
        }
    }

    checkTokenIsInteger.call(this, sign !== 0);
    return sign === HYPHENMINUS ? '-' + this.consume(NUMBER) : this.consume(NUMBER);
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
module.exports = {
    name: 'AnPlusB',
    structure: {
        a: [String, null],
        b: [String, null]
    },
    parse: function() {
        /* eslint-disable brace-style*/
        var start = this.scanner.tokenStart;
        var a = null;
        var b = null;

        // <integer>
        if (this.scanner.tokenType === NUMBER) {
            checkTokenIsInteger.call(this, ALLOW_SIGN);
            b = this.consume(NUMBER);
        }

        // -n
        // -n <signed-integer>
        // -n ['+' | '-'] <signless-integer>
        // -n- <signless-integer>
        // <dashndashdigit-ident>
        else if (this.scanner.tokenType === IDENT && cmpChar(this.scanner.source, this.scanner.tokenStart, HYPHENMINUS)) {
            a = '-1';

            expectCharCode.call(this, 1, N);

            switch (this.scanner.getTokenLength()) {
                // -n
                // -n <signed-integer>
                // -n ['+' | '-'] <signless-integer>
                case 2:
                    this.scanner.next();
                    b = consumeB.call(this);
                    break;

                // -n- <signless-integer>
                case 3:
                    expectCharCode.call(this, 2, HYPHENMINUS);

                    this.scanner.next();
                    this.scanner.skipSC();

                    checkTokenIsInteger.call(this, DISALLOW_SIGN);

                    b = '-' + this.consume(NUMBER);
                    break;

                // <dashndashdigit-ident>
                default:
                    expectCharCode.call(this, 2, HYPHENMINUS);
                    checkInteger.call(this, 3, DISALLOW_SIGN);
                    this.scanner.next();

                    b = this.scanner.substrToCursor(start + 2);
            }
        }

        // '+'? n
        // '+'? n <signed-integer>
        // '+'? n ['+' | '-'] <signless-integer>
        // '+'? n- <signless-integer>
        // '+'? <ndashdigit-ident>
        else if (this.scanner.tokenType === IDENT || (this.scanner.isDelim(PLUSSIGN) && this.scanner.lookupType(1) === IDENT)) {
            var sign = 0;
            a = '1';

            // just ignore a plus
            if (this.scanner.isDelim(PLUSSIGN)) {
                sign = 1;
                this.scanner.next();
            }

            expectCharCode.call(this, 0, N);

            switch (this.scanner.getTokenLength()) {
                // '+'? n
                // '+'? n <signed-integer>
                // '+'? n ['+' | '-'] <signless-integer>
                case 1:
                    this.scanner.next();
                    b = consumeB.call(this);
                    break;

                // '+'? n- <signless-integer>
                case 2:
                    expectCharCode.call(this, 1, HYPHENMINUS);

                    this.scanner.next();
                    this.scanner.skipSC();

                    checkTokenIsInteger.call(this, DISALLOW_SIGN);

                    b = '-' + this.consume(NUMBER);
                    break;

                // '+'? <ndashdigit-ident>
                default:
                    expectCharCode.call(this, 1, HYPHENMINUS);
                    checkInteger.call(this, 2, DISALLOW_SIGN);
                    this.scanner.next();

                    b = this.scanner.substrToCursor(start + sign + 1);
            }
        }

        // <ndashdigit-dimension>
        // <ndash-dimension> <signless-integer>
        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        else if (this.scanner.tokenType === DIMENSION) {
            var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
            var sign = code === PLUSSIGN || code === HYPHENMINUS;

            for (var i = this.scanner.tokenStart + sign; i < this.scanner.tokenEnd; i++) {
                if (!isDigit(this.scanner.source.charCodeAt(i))) {
                    break;
                }
            }

            if (i === this.scanner.tokenStart + sign) {
                this.error('Integer is expected', this.scanner.tokenStart + sign);
            }

            expectCharCode.call(this, i - this.scanner.tokenStart, N);
            a = this.scanner.source.substring(start, i);

            // <n-dimension>
            // <n-dimension> <signed-integer>
            // <n-dimension> ['+' | '-'] <signless-integer>
            if (i + 1 === this.scanner.tokenEnd) {
                this.scanner.next();
                b = consumeB.call(this);
            } else {
                expectCharCode.call(this, i - this.scanner.tokenStart + 1, HYPHENMINUS);

                // <ndash-dimension> <signless-integer>
                if (i + 2 === this.scanner.tokenEnd) {
                    this.scanner.next();
                    this.scanner.skipSC();
                    checkTokenIsInteger.call(this, DISALLOW_SIGN);
                    b = '-' + this.consume(NUMBER);
                }
                // <ndashdigit-dimension>
                else {
                    checkInteger.call(this, i - this.scanner.tokenStart + 2, DISALLOW_SIGN);
                    this.scanner.next();
                    b = this.scanner.substrToCursor(i + 1);
                }
            }
        } else {
            this.error();
        }

        if (a !== null && a.charCodeAt(0) === PLUSSIGN) {
            a = a.substr(1);
        }

        if (b !== null && b.charCodeAt(0) === PLUSSIGN) {
            b = b.substr(1);
        }

        return {
            type: 'AnPlusB',
            loc: this.getLocation(start, this.scanner.tokenStart),
            a: a,
            b: b
        };
    },
    generate: function(node) {
        var a = node.a !== null && node.a !== undefined;
        var b = node.b !== null && node.b !== undefined;

        if (a) {
            this.chunk(
                node.a === '+1' ? '+n' : // eslint-disable-line operator-linebreak, indent
                node.a ===  '1' ?  'n' : // eslint-disable-line operator-linebreak, indent
                node.a === '-1' ? '-n' : // eslint-disable-line operator-linebreak, indent
                node.a + 'n'             // eslint-disable-line operator-linebreak, indent
            );

            if (b) {
                b = String(node.b);
                if (b.charAt(0) === '-' || b.charAt(0) === '+') {
                    this.chunk(b.charAt(0));
                    this.chunk(b.substr(1));
                } else {
                    this.chunk('+');
                    this.chunk(b);
                }
            }
        } else {
            this.chunk(String(node.b));
        }
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Atrule.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var ATKEYWORD = TYPE.AtKeyword;
var SEMICOLON = TYPE.Semicolon;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;

function consumeRaw(startToken) {
    return this.Raw(startToken, rawMode.leftCurlyBracketOrSemicolon, true);
}

function isDeclarationBlockAtrule() {
    for (var offset = 1, type; type = this.scanner.lookupType(offset); offset++) {
        if (type === RIGHTCURLYBRACKET) {
            return true;
        }

        if (type === LEFTCURLYBRACKET ||
            type === ATKEYWORD) {
            return false;
        }
    }

    return false;
}

module.exports = {
    name: 'Atrule',
    structure: {
        name: String,
        prelude: ['AtrulePrelude', 'Raw', null],
        block: ['Block', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var nameLowerCase;
        var prelude = null;
        var block = null;

        this.eat(ATKEYWORD);

        name = this.scanner.substrToCursor(start + 1);
        nameLowerCase = name.toLowerCase();
        this.scanner.skipSC();

        // parse prelude
        if (this.scanner.eof === false &&
            this.scanner.tokenType !== LEFTCURLYBRACKET &&
            this.scanner.tokenType !== SEMICOLON) {
            if (this.parseAtrulePrelude) {
                prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name), consumeRaw);

                // turn empty AtrulePrelude into null
                if (prelude.type === 'AtrulePrelude' && prelude.children.head === null) {
                    prelude = null;
                }
            } else {
                prelude = consumeRaw.call(this, this.scanner.tokenIndex);
            }

            this.scanner.skipSC();
        }

        switch (this.scanner.tokenType) {
            case SEMICOLON:
                this.scanner.next();
                break;

            case LEFTCURLYBRACKET:
                if (this.atrule.hasOwnProperty(nameLowerCase) &&
                    typeof this.atrule[nameLowerCase].block === 'function') {
                    block = this.atrule[nameLowerCase].block.call(this);
                } else {
                    // TODO: should consume block content as Raw?
                    block = this.Block(isDeclarationBlockAtrule.call(this));
                }

                break;
        }

        return {
            type: 'Atrule',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            prelude: prelude,
            block: block
        };
    },
    generate: function(node) {
        this.chunk('@');
        this.chunk(node.name);

        if (node.prelude !== null) {
            this.chunk(' ');
            this.node(node.prelude);
        }

        if (node.block) {
            this.node(node.block);
        } else {
            this.chunk(';');
        }
    },
    walkContext: 'atrule'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","./Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/AtrulePrelude.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var SEMICOLON = TYPE.Semicolon;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;

module.exports = {
    name: 'AtrulePrelude',
    structure: {
        children: [[]]
    },
    parse: function(name) {
        var children = null;

        if (name !== null) {
            name = name.toLowerCase();
        }

        this.scanner.skipSC();

        if (this.atrule.hasOwnProperty(name) &&
            typeof this.atrule[name].prelude === 'function') {
            // custom consumer
            children = this.atrule[name].prelude.call(this);
        } else {
            // default consumer
            children = this.readSequence(this.scope.AtrulePrelude);
        }

        this.scanner.skipSC();

        if (this.scanner.eof !== true &&
            this.scanner.tokenType !== LEFTCURLYBRACKET &&
            this.scanner.tokenType !== SEMICOLON) {
            this.error('Semicolon or block is expected');
        }

        if (children === null) {
            children = this.createList();
        }

        return {
            type: 'AtrulePrelude',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    },
    walkContext: 'atrulePrelude'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/AttributeSelector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var STRING = TYPE.String;
var COLON = TYPE.Colon;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;
var DOLLARSIGN = 0x0024;       // U+0024 DOLLAR SIGN ($)
var ASTERISK = 0x002A;         // U+002A ASTERISK (*)
var EQUALSSIGN = 0x003D;       // U+003D EQUALS SIGN (=)
var CIRCUMFLEXACCENT = 0x005E; // U+005E (^)
var VERTICALLINE = 0x007C;     // U+007C VERTICAL LINE (|)
var TILDE = 0x007E;            // U+007E TILDE (~)

function getAttributeName() {
    if (this.scanner.eof) {
        this.error('Unexpected end of input');
    }

    var start = this.scanner.tokenStart;
    var expectIdent = false;
    var checkColon = true;

    if (this.scanner.isDelim(ASTERISK)) {
        expectIdent = true;
        checkColon = false;
        this.scanner.next();
    } else if (!this.scanner.isDelim(VERTICALLINE)) {
        this.eat(IDENT);
    }

    if (this.scanner.isDelim(VERTICALLINE)) {
        if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== EQUALSSIGN) {
            this.scanner.next();
            this.eat(IDENT);
        } else if (expectIdent) {
            this.error('Identifier is expected', this.scanner.tokenEnd);
        }
    } else if (expectIdent) {
        this.error('Vertical line is expected');
    }

    if (checkColon && this.scanner.tokenType === COLON) {
        this.scanner.next();
        this.eat(IDENT);
    }

    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
    };
}

function getOperator() {
    var start = this.scanner.tokenStart;
    var code = this.scanner.source.charCodeAt(start);

    if (code !== EQUALSSIGN &&        // =
        code !== TILDE &&             // ~=
        code !== CIRCUMFLEXACCENT &&  // ^=
        code !== DOLLARSIGN &&        // $=
        code !== ASTERISK &&          // *=
        code !== VERTICALLINE         // |=
    ) {
        this.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }

    this.scanner.next();

    if (code !== EQUALSSIGN) {
        if (!this.scanner.isDelim(EQUALSSIGN)) {
            this.error('Equal sign is expected');
        }

        this.scanner.next();
    }

    return this.scanner.substrToCursor(start);
}

// '[' <wq-name> ']'
// '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
module.exports = {
    name: 'AttributeSelector',
    structure: {
        name: 'Identifier',
        matcher: [String, null],
        value: ['String', 'Identifier', null],
        flags: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var matcher = null;
        var value = null;
        var flags = null;

        this.eat(LEFTSQUAREBRACKET);
        this.scanner.skipSC();

        name = getAttributeName.call(this);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTSQUAREBRACKET) {
            // avoid case `[name i]`
            if (this.scanner.tokenType !== IDENT) {
                matcher = getOperator.call(this);

                this.scanner.skipSC();

                value = this.scanner.tokenType === STRING
                    ? this.String()
                    : this.Identifier();

                this.scanner.skipSC();
            }

            // attribute flags
            if (this.scanner.tokenType === IDENT) {
                flags = this.scanner.getTokenValue();
                this.scanner.next();

                this.scanner.skipSC();
            }
        }

        this.eat(RIGHTSQUAREBRACKET);

        return {
            type: 'AttributeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            matcher: matcher,
            value: value,
            flags: flags
        };
    },
    generate: function(node) {
        var flagsPrefix = ' ';

        this.chunk('[');
        this.node(node.name);

        if (node.matcher !== null) {
            this.chunk(node.matcher);

            if (node.value !== null) {
                this.node(node.value);

                // space between string and flags is not required
                if (node.value.type === 'String') {
                    flagsPrefix = '';
                }
            }
        }

        if (node.flags !== null) {
            this.chunk(flagsPrefix);
            this.chunk(node.flags);
        }

        this.chunk(']');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Block.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;
var ATKEYWORD = TYPE.AtKeyword;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;

function consumeRaw(startToken) {
    return this.Raw(startToken, null, true);
}
function consumeRule() {
    return this.parseWithFallback(this.Rule, consumeRaw);
}
function consumeRawDeclaration(startToken) {
    return this.Raw(startToken, rawMode.semicolonIncluded, true);
}
function consumeDeclaration() {
    if (this.scanner.tokenType === SEMICOLON) {
        return consumeRawDeclaration.call(this, this.scanner.tokenIndex);
    }

    var node = this.parseWithFallback(this.Declaration, consumeRawDeclaration);

    if (this.scanner.tokenType === SEMICOLON) {
        this.scanner.next();
    }

    return node;
}

module.exports = {
    name: 'Block',
    structure: {
        children: [[
            'Atrule',
            'Rule',
            'Declaration'
        ]]
    },
    parse: function(isDeclaration) {
        var consumer = isDeclaration ? consumeDeclaration : consumeRule;

        var start = this.scanner.tokenStart;
        var children = this.createList();

        this.eat(LEFTCURLYBRACKET);

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case RIGHTCURLYBRACKET:
                    break scan;

                case WHITESPACE:
                case COMMENT:
                    this.scanner.next();
                    break;

                case ATKEYWORD:
                    children.push(this.parseWithFallback(this.Atrule, consumeRaw));
                    break;

                default:
                    children.push(consumer.call(this));
            }
        }

        if (!this.scanner.eof) {
            this.eat(RIGHTCURLYBRACKET);
        }

        return {
            type: 'Block',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.chunk('{');
        this.children(node, function(prev) {
            if (prev.type === 'Declaration') {
                this.chunk(';');
            }
        });
        this.chunk('}');
    },
    walkContext: 'block'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","./Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Brackets.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

module.exports = {
    name: 'Brackets',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.eat(LEFTSQUAREBRACKET);

        children = readSequence.call(this, recognizer);

        if (!this.scanner.eof) {
            this.eat(RIGHTSQUAREBRACKET);
        }

        return {
            type: 'Brackets',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.chunk('[');
        this.children(node);
        this.chunk(']');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/CDC.js":[function(require,module,exports){
var CDC = require('../../tokenizer').TYPE.CDC;

module.exports = {
    name: 'CDC',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.eat(CDC); // -->

        return {
            type: 'CDC',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function() {
        this.chunk('-->');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/CDO.js":[function(require,module,exports){
var CDO = require('../../tokenizer').TYPE.CDO;

module.exports = {
    name: 'CDO',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.eat(CDO); // <!--

        return {
            type: 'CDO',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function() {
        this.chunk('<!--');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/ClassSelector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var FULLSTOP = 0x002E; // U+002E FULL STOP (.)

// '.' ident
module.exports = {
    name: 'ClassSelector',
    structure: {
        name: String
    },
    parse: function() {
        if (!this.scanner.isDelim(FULLSTOP)) {
            this.error('Full stop is expected');
        }

        this.scanner.next();

        return {
            type: 'ClassSelector',
            loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
            name: this.consume(IDENT)
        };
    },
    generate: function(node) {
        this.chunk('.');
        this.chunk(node.name);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Combinator.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
var GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
var TILDE = 0x007E;           // U+007E TILDE (~)

// + | > | ~ | /deep/
module.exports = {
    name: 'Combinator',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

        switch (code) {
            case GREATERTHANSIGN:
            case PLUSSIGN:
            case TILDE:
                this.scanner.next();
                break;

            case SOLIDUS:
                this.scanner.next();

                if (this.scanner.tokenType !== IDENT || this.scanner.lookupValue(0, 'deep') === false) {
                    this.error('Identifier `deep` is expected');
                }

                this.scanner.next();

                if (!this.scanner.isDelim(SOLIDUS)) {
                    this.error('Solidus is expected');
                }

                this.scanner.next();
                break;

            default:
                this.error('Combinator is expected');
        }

        return {
            type: 'Combinator',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        this.chunk(node.name);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Comment.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var COMMENT = TYPE.Comment;
var ASTERISK = 0x002A;        // U+002A ASTERISK (*)
var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)

// '/*' .* '*/'
module.exports = {
    name: 'Comment',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var end = this.scanner.tokenEnd;

        this.eat(COMMENT);

        if ((end - start + 2) >= 2 &&
            this.scanner.source.charCodeAt(end - 2) === ASTERISK &&
            this.scanner.source.charCodeAt(end - 1) === SOLIDUS) {
            end -= 2;
        }

        return {
            type: 'Comment',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start + 2, end)
        };
    },
    generate: function(node) {
        this.chunk('/*');
        this.chunk(node.value);
        this.chunk('*/');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Declaration.js":[function(require,module,exports){
var isCustomProperty = require('../../utils/names').isCustomProperty;
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var IDENT = TYPE.Ident;
var HASH = TYPE.Hash;
var COLON = TYPE.Colon;
var SEMICOLON = TYPE.Semicolon;
var DELIM = TYPE.Delim;
var EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)
var NUMBERSIGN = 0x0023;      // U+0023 NUMBER SIGN (#)
var DOLLARSIGN = 0x0024;      // U+0024 DOLLAR SIGN ($)
var AMPERSAND = 0x0026;       // U+0026 ANPERSAND (&)
var ASTERISK = 0x002A;        // U+002A ASTERISK (*)
var PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)

function consumeValueRaw(startToken) {
    return this.Raw(startToken, rawMode.exclamationMarkOrSemicolon, true);
}

function consumeCustomPropertyRaw(startToken) {
    return this.Raw(startToken, rawMode.exclamationMarkOrSemicolon, false);
}

function consumeValue() {
    var startValueToken = this.scanner.tokenIndex;
    var value = this.Value();

    if (value.type !== 'Raw' &&
        this.scanner.eof === false &&
        this.scanner.tokenType !== SEMICOLON &&
        this.scanner.isDelim(EXCLAMATIONMARK) === false &&
        this.scanner.isBalanceEdge(startValueToken) === false) {
        this.error();
    }

    return value;
}

module.exports = {
    name: 'Declaration',
    structure: {
        important: [Boolean, String],
        property: String,
        value: ['Value', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var startToken = this.scanner.tokenIndex;
        var property = readProperty.call(this);
        var customProperty = isCustomProperty(property);
        var parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
        var consumeRaw = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
        var important = false;
        var value;

        this.scanner.skipSC();
        this.eat(COLON);

        if (!customProperty) {
            this.scanner.skipSC();
        }

        if (parseValue) {
            value = this.parseWithFallback(consumeValue, consumeRaw);
        } else {
            value = consumeRaw.call(this, this.scanner.tokenIndex);
        }

        if (this.scanner.isDelim(EXCLAMATIONMARK)) {
            important = getImportant.call(this);
            this.scanner.skipSC();
        }

        // Do not include semicolon to range per spec
        // https://drafts.csswg.org/css-syntax/#declaration-diagram

        if (this.scanner.eof === false &&
            this.scanner.tokenType !== SEMICOLON &&
            this.scanner.isBalanceEdge(startToken) === false) {
            this.error();
        }

        return {
            type: 'Declaration',
            loc: this.getLocation(start, this.scanner.tokenStart),
            important: important,
            property: property,
            value: value
        };
    },
    generate: function(node) {
        this.chunk(node.property);
        this.chunk(':');
        this.node(node.value);

        if (node.important) {
            this.chunk(node.important === true ? '!important' : '!' + node.important);
        }
    },
    walkContext: 'declaration'
};

function readProperty() {
    var start = this.scanner.tokenStart;
    var prefix = 0;

    // hacks
    if (this.scanner.tokenType === DELIM) {
        switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
            case ASTERISK:
            case DOLLARSIGN:
            case PLUSSIGN:
            case NUMBERSIGN:
            case AMPERSAND:
                this.scanner.next();
                break;

            // TODO: not sure we should support this hack
            case SOLIDUS:
                this.scanner.next();
                if (this.scanner.isDelim(SOLIDUS)) {
                    this.scanner.next();
                }
                break;
        }
    }

    if (prefix) {
        this.scanner.skip(prefix);
    }

    if (this.scanner.tokenType === HASH) {
        this.eat(HASH);
    } else {
        this.eat(IDENT);
    }

    return this.scanner.substrToCursor(start);
}

// ! ws* important
function getImportant() {
    this.eat(DELIM);
    this.scanner.skipSC();

    var important = this.consume(IDENT);

    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","../../utils/names":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/names.js","./Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/DeclarationList.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;

function consumeRaw(startToken) {
    return this.Raw(startToken, rawMode.semicolonIncluded, true);
}

module.exports = {
    name: 'DeclarationList',
    structure: {
        children: [[
            'Declaration'
        ]]
    },
    parse: function() {
        var children = this.createList();

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                case COMMENT:
                case SEMICOLON:
                    this.scanner.next();
                    break;

                default:
                    children.push(this.parseWithFallback(this.Declaration, consumeRaw));
            }
        }

        return {
            type: 'DeclarationList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node, function(prev) {
            if (prev.type === 'Declaration') {
                this.chunk(';');
            }
        });
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","./Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Dimension.js":[function(require,module,exports){
var consumeNumber = require('../../tokenizer/utils').consumeNumber;
var TYPE = require('../../tokenizer').TYPE;

var DIMENSION = TYPE.Dimension;

module.exports = {
    name: 'Dimension',
    structure: {
        value: String,
        unit: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var numberEnd = consumeNumber(this.scanner.source, start);

        this.eat(DIMENSION);

        return {
            type: 'Dimension',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start, numberEnd),
            unit: this.scanner.source.substring(numberEnd, this.scanner.tokenStart)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
        this.chunk(node.unit);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","../../tokenizer/utils":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/utils.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Function.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// <function-token> <sequence> )
module.exports = {
    name: 'Function',
    structure: {
        name: String,
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var name = this.consumeFunctionName();
        var nameLowerCase = name.toLowerCase();
        var children;

        children = recognizer.hasOwnProperty(nameLowerCase)
            ? recognizer[nameLowerCase].call(this, recognizer)
            : readSequence.call(this, recognizer);

        if (!this.scanner.eof) {
            this.eat(RIGHTPARENTHESIS);
        }

        return {
            type: 'Function',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        this.chunk(node.name);
        this.chunk('(');
        this.children(node);
        this.chunk(')');
    },
    walkContext: 'function'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/HexColor.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var HASH = TYPE.Hash;

// '#' ident
module.exports = {
    name: 'HexColor',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.eat(HASH);

        return {
            type: 'HexColor',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start + 1)
        };
    },
    generate: function(node) {
        this.chunk('#');
        this.chunk(node.value);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Identifier.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;

module.exports = {
    name: 'Identifier',
    structure: {
        name: String
    },
    parse: function() {
        return {
            type: 'Identifier',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            name: this.consume(IDENT)
        };
    },
    generate: function(node) {
        this.chunk(node.name);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/IdSelector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var HASH = TYPE.Hash;

// <hash-token>
module.exports = {
    name: 'IdSelector',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        // TODO: check value is an ident
        this.eat(HASH);

        return {
            type: 'IdSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start + 1)
        };
    },
    generate: function(node) {
        this.chunk('#');
        this.chunk(node.name);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/MediaFeature.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var NUMBER = TYPE.Number;
var DIMENSION = TYPE.Dimension;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;
var COLON = TYPE.Colon;
var DELIM = TYPE.Delim;

module.exports = {
    name: 'MediaFeature',
    structure: {
        name: String,
        value: ['Identifier', 'Number', 'Dimension', 'Ratio', null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var value = null;

        this.eat(LEFTPARENTHESIS);
        this.scanner.skipSC();

        name = this.consume(IDENT);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTPARENTHESIS) {
            this.eat(COLON);
            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case NUMBER:
                    if (this.lookupNonWSType(1) === DELIM) {
                        value = this.Ratio();
                    } else {
                        value = this.Number();
                    }

                    break;

                case DIMENSION:
                    value = this.Dimension();
                    break;

                case IDENT:
                    value = this.Identifier();

                    break;

                default:
                    this.error('Number, dimension, ratio or identifier is expected');
            }

            this.scanner.skipSC();
        }

        this.eat(RIGHTPARENTHESIS);

        return {
            type: 'MediaFeature',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            value: value
        };
    },
    generate: function(node) {
        this.chunk('(');
        this.chunk(node.name);
        if (node.value !== null) {
            this.chunk(':');
            this.node(node.value);
        }
        this.chunk(')');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/MediaQuery.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

module.exports = {
    name: 'MediaQuery',
    structure: {
        children: [[
            'Identifier',
            'MediaFeature',
            'WhiteSpace'
        ]]
    },
    parse: function() {
        this.scanner.skipSC();

        var children = this.createList();
        var child = null;
        var space = null;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case COMMENT:
                    this.scanner.next();
                    continue;

                case WHITESPACE:
                    space = this.WhiteSpace();
                    continue;

                case IDENT:
                    child = this.Identifier();
                    break;

                case LEFTPARENTHESIS:
                    child = this.MediaFeature();
                    break;

                default:
                    break scan;
            }

            if (space !== null) {
                children.push(space);
                space = null;
            }

            children.push(child);
        }

        if (child === null) {
            this.error('Identifier or parenthesis is expected');
        }

        return {
            type: 'MediaQuery',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/MediaQueryList.js":[function(require,module,exports){
var COMMA = require('../../tokenizer').TYPE.Comma;

module.exports = {
    name: 'MediaQueryList',
    structure: {
        children: [[
            'MediaQuery'
        ]]
    },
    parse: function(relative) {
        var children = this.createList();

        this.scanner.skipSC();

        while (!this.scanner.eof) {
            children.push(this.MediaQuery(relative));

            if (this.scanner.tokenType !== COMMA) {
                break;
            }

            this.scanner.next();
        }

        return {
            type: 'MediaQueryList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node, function() {
            this.chunk(',');
        });
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Number.js":[function(require,module,exports){
var NUMBER = require('../../tokenizer').TYPE.Number;

module.exports = {
    name: 'Number',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'Number',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.consume(NUMBER)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Parentheses.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

module.exports = {
    name: 'Parentheses',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.eat(LEFTPARENTHESIS);

        children = readSequence.call(this, recognizer);

        if (!this.scanner.eof) {
            this.eat(RIGHTPARENTHESIS);
        }

        return {
            type: 'Parentheses',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.chunk('(');
        this.children(node);
        this.chunk(')');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Percentage.js":[function(require,module,exports){
var consumeNumber = require('../../tokenizer/utils').consumeNumber;
var TYPE = require('../../tokenizer').TYPE;

var PERCENTAGE = TYPE.Percentage;

module.exports = {
    name: 'Percentage',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var numberEnd = consumeNumber(this.scanner.source, start);

        this.eat(PERCENTAGE);

        return {
            type: 'Percentage',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start, numberEnd)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
        this.chunk('%');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","../../tokenizer/utils":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/utils.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/PseudoClassSelector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var COLON = TYPE.Colon;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// : [ <ident> | <function-token> <any-value>? ) ]
module.exports = {
    name: 'PseudoClassSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = null;
        var name;
        var nameLowerCase;

        this.eat(COLON);

        if (this.scanner.tokenType === FUNCTION) {
            name = this.consumeFunctionName();
            nameLowerCase = name.toLowerCase();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = this.createList();
                children.push(
                    this.Raw(this.scanner.tokenIndex, null, false)
                );
            }

            this.eat(RIGHTPARENTHESIS);
        } else {
            name = this.consume(IDENT);
        }

        return {
            type: 'PseudoClassSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        this.chunk(':');
        this.chunk(node.name);

        if (node.children !== null) {
            this.chunk('(');
            this.children(node);
            this.chunk(')');
        }
    },
    walkContext: 'function'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/PseudoElementSelector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var COLON = TYPE.Colon;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// :: [ <ident> | <function-token> <any-value>? ) ]
module.exports = {
    name: 'PseudoElementSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = null;
        var name;
        var nameLowerCase;

        this.eat(COLON);
        this.eat(COLON);

        if (this.scanner.tokenType === FUNCTION) {
            name = this.consumeFunctionName();
            nameLowerCase = name.toLowerCase();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = this.createList();
                children.push(
                    this.Raw(this.scanner.tokenIndex, null, false)
                );
            }

            this.eat(RIGHTPARENTHESIS);
        } else {
            name = this.consume(IDENT);
        }

        return {
            type: 'PseudoElementSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        this.chunk('::');
        this.chunk(node.name);

        if (node.children !== null) {
            this.chunk('(');
            this.children(node);
            this.chunk(')');
        }
    },
    walkContext: 'function'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Ratio.js":[function(require,module,exports){
var isDigit = require('../../tokenizer').isDigit;
var TYPE = require('../../tokenizer').TYPE;

var NUMBER = TYPE.Number;
var DELIM = TYPE.Delim;
var SOLIDUS = 0x002F;  // U+002F SOLIDUS (/)
var FULLSTOP = 0x002E; // U+002E FULL STOP (.)

// Terms of <ratio> should be a positive numbers (not zero or negative)
// (see https://drafts.csswg.org/mediaqueries-3/#values)
// However, -o-min-device-pixel-ratio takes fractional values as a ratio's term
// and this is using by various sites. Therefore we relax checking on parse
// to test a term is unsigned number without an exponent part.
// Additional checking may be applied on lexer validation.
function consumeNumber() {
    this.scanner.skipWS();

    var value = this.consume(NUMBER);

    for (var i = 0; i < value.length; i++) {
        var code = value.charCodeAt(i);
        if (!isDigit(code) && code !== FULLSTOP) {
            this.error('Unsigned number is expected', this.scanner.tokenStart - value.length + i);
        }
    }

    if (Number(value) === 0) {
        this.error('Zero number is not allowed', this.scanner.tokenStart - value.length);
    }

    return value;
}

// <positive-integer> S* '/' S* <positive-integer>
module.exports = {
    name: 'Ratio',
    structure: {
        left: String,
        right: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var left = consumeNumber.call(this);
        var right;

        this.scanner.skipWS();

        if (!this.scanner.isDelim(SOLIDUS)) {
            this.error('Solidus is expected');
        }
        this.eat(DELIM);
        right = consumeNumber.call(this);

        return {
            type: 'Ratio',
            loc: this.getLocation(start, this.scanner.tokenStart),
            left: left,
            right: right
        };
    },
    generate: function(node) {
        this.chunk(node.left);
        this.chunk('/');
        this.chunk(node.right);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Rule.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;

function consumeRaw(startToken) {
    return this.Raw(startToken, rawMode.leftCurlyBracket, true);
}

function consumePrelude() {
    var prelude = this.SelectorList();

    if (prelude.type !== 'Raw' &&
        this.scanner.eof === false &&
        this.scanner.tokenType !== LEFTCURLYBRACKET) {
        this.error();
    }

    return prelude;
}

module.exports = {
    name: 'Rule',
    structure: {
        prelude: ['SelectorList', 'Raw'],
        block: ['Block']
    },
    parse: function() {
        var startToken = this.scanner.tokenIndex;
        var startOffset = this.scanner.tokenStart;
        var prelude;
        var block;

        if (this.parseRulePrelude) {
            prelude = this.parseWithFallback(consumePrelude, consumeRaw);
        } else {
            prelude = consumeRaw.call(this, startToken);
        }

        block = this.Block(true);

        return {
            type: 'Rule',
            loc: this.getLocation(startOffset, this.scanner.tokenStart),
            prelude: prelude,
            block: block
        };
    },
    generate: function(node) {
        this.node(node.prelude);
        this.node(node.block);
    },
    walkContext: 'rule'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","./Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js":[function(require,module,exports){
var tokenizer = require('../../tokenizer');
var TYPE = tokenizer.TYPE;

var WhiteSpace = TYPE.WhiteSpace;
var Semicolon = TYPE.Semicolon;
var LeftCurlyBracket = TYPE.LeftCurlyBracket;
var Delim = TYPE.Delim;
var EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)

function getOffsetExcludeWS() {
    if (this.scanner.tokenIndex > 0) {
        if (this.scanner.lookupType(-1) === WhiteSpace) {
            return this.scanner.tokenIndex > 1
                ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1)
                : this.scanner.firstCharOffset;
        }
    }

    return this.scanner.tokenStart;
}

// 0, 0, false
function balanceEnd() {
    return 0;
}

// LEFTCURLYBRACKET, 0, false
function leftCurlyBracket(tokenType) {
    return tokenType === LeftCurlyBracket ? 1 : 0;
}

// LEFTCURLYBRACKET, SEMICOLON, false
function leftCurlyBracketOrSemicolon(tokenType) {
    return tokenType === LeftCurlyBracket || tokenType === Semicolon ? 1 : 0;
}

// EXCLAMATIONMARK, SEMICOLON, false
function exclamationMarkOrSemicolon(tokenType, source, offset) {
    if (tokenType === Delim && source.charCodeAt(offset) === EXCLAMATIONMARK) {
        return 1;
    }

    return tokenType === Semicolon ? 1 : 0;
}

// 0, SEMICOLON, true
function semicolonIncluded(tokenType) {
    return tokenType === Semicolon ? 2 : 0;
}

module.exports = {
    name: 'Raw',
    structure: {
        value: String
    },
    parse: function(startToken, mode, excludeWhiteSpace) {
        var startOffset = this.scanner.getTokenStart(startToken);
        var endOffset;

        this.scanner.skip(
            this.scanner.getRawLength(startToken, mode || balanceEnd)
        );

        if (excludeWhiteSpace && this.scanner.tokenStart > startOffset) {
            endOffset = getOffsetExcludeWS.call(this);
        } else {
            endOffset = this.scanner.tokenStart;
        }

        return {
            type: 'Raw',
            loc: this.getLocation(startOffset, endOffset),
            value: this.scanner.source.substring(startOffset, endOffset)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
    },

    mode: {
        default: balanceEnd,
        leftCurlyBracket: leftCurlyBracket,
        leftCurlyBracketOrSemicolon: leftCurlyBracketOrSemicolon,
        exclamationMarkOrSemicolon: exclamationMarkOrSemicolon,
        semicolonIncluded: semicolonIncluded
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/SelectorList.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var COMMA = TYPE.Comma;

module.exports = {
    name: 'SelectorList',
    structure: {
        children: [[
            'Selector',
            'Raw'
        ]]
    },
    parse: function() {
        var children = this.createList();

        while (!this.scanner.eof) {
            children.push(this.Selector());

            if (this.scanner.tokenType === COMMA) {
                this.scanner.next();
                continue;
            }

            break;
        }

        return {
            type: 'SelectorList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node, function() {
            this.chunk(',');
        });
    },
    walkContext: 'selector'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/String.js":[function(require,module,exports){
var STRING = require('../../tokenizer').TYPE.String;

module.exports = {
    name: 'String',
    structure: {
        value: String
    },
    parse: function() {
        return {
            type: 'String',
            loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
            value: this.consume(STRING)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/StyleSheet.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var ATKEYWORD = TYPE.AtKeyword;
var CDO = TYPE.CDO;
var CDC = TYPE.CDC;
var EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)

function consumeRaw(startToken) {
    return this.Raw(startToken, null, false);
}

module.exports = {
    name: 'StyleSheet',
    structure: {
        children: [[
            'Comment',
            'CDO',
            'CDC',
            'Atrule',
            'Rule',
            'Raw'
        ]]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = this.createList();
        var child;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                    this.scanner.next();
                    continue;

                case COMMENT:
                    // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                    if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK) {
                        this.scanner.next();
                        continue;
                    }

                    child = this.Comment();
                    break;

                case CDO: // <!--
                    child = this.CDO();
                    break;

                case CDC: // -->
                    child = this.CDC();
                    break;

                // CSS Syntax Module Level 3
                // §2.2 Error handling
                // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
                case ATKEYWORD:
                    child = this.parseWithFallback(this.Atrule, consumeRaw);
                    break;

                // Anything else starts a qualified rule ...
                default:
                    child = this.parseWithFallback(this.Rule, consumeRaw);
            }

            children.push(child);
        }

        return {
            type: 'StyleSheet',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    },
    walkContext: 'stylesheet'
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/TypeSelector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var ASTERISK = 0x002A;     // U+002A ASTERISK (*)
var VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)

function eatIdentifierOrAsterisk() {
    if (this.scanner.tokenType !== IDENT &&
        this.scanner.isDelim(ASTERISK) === false) {
        this.error('Identifier or asterisk is expected');
    }

    this.scanner.next();
}

// ident
// ident|ident
// ident|*
// *
// *|ident
// *|*
// |ident
// |*
module.exports = {
    name: 'TypeSelector',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        if (this.scanner.isDelim(VERTICALLINE)) {
            this.scanner.next();
            eatIdentifierOrAsterisk.call(this);
        } else {
            eatIdentifierOrAsterisk.call(this);

            if (this.scanner.isDelim(VERTICALLINE)) {
                this.scanner.next();
                eatIdentifierOrAsterisk.call(this);
            }
        }

        return {
            type: 'TypeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        this.chunk(node.name);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/UnicodeRange.js":[function(require,module,exports){
var isHexDigit = require('../../tokenizer').isHexDigit;
var cmpChar = require('../../tokenizer').cmpChar;
var TYPE = require('../../tokenizer').TYPE;
var NAME = require('../../tokenizer').NAME;

var IDENT = TYPE.Ident;
var NUMBER = TYPE.Number;
var DIMENSION = TYPE.Dimension;
var PLUSSIGN = 0x002B;     // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D;  // U+002D HYPHEN-MINUS (-)
var QUESTIONMARK = 0x003F; // U+003F QUESTION MARK (?)
var U = 0x0075;            // U+0075 LATIN SMALL LETTER U (u)

function eatHexSequence(offset, allowDash) {
    for (var pos = this.scanner.tokenStart + offset, len = 0; pos < this.scanner.tokenEnd; pos++) {
        var code = this.scanner.source.charCodeAt(pos);

        if (code === HYPHENMINUS && allowDash && len !== 0) {
            if (eatHexSequence.call(this, offset + len + 1, false) === 0) {
                this.error();
            }

            return -1;
        }

        if (!isHexDigit(code)) {
            this.error(
                allowDash && len !== 0
                    ? 'HyphenMinus' + (len < 6 ? ' or hex digit' : '') + ' is expected'
                    : (len < 6 ? 'Hex digit is expected' : 'Unexpected input'),
                pos
            );
        }

        if (++len > 6) {
            this.error('Too many hex digits', pos);
        };
    }

    this.scanner.next();
    return len;
}

function eatQuestionMarkSequence(max) {
    var count = 0;

    while (this.scanner.isDelim(QUESTIONMARK)) {
        if (++count > max) {
            this.error('Too many question marks');
        }

        this.scanner.next();
    }
}

function startsWith(code) {
    if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== code) {
        this.error(NAME[code] + ' is expected');
    }
}

// https://drafts.csswg.org/css-syntax/#urange
// Informally, the <urange> production has three forms:
// U+0001
//      Defines a range consisting of a single code point, in this case the code point "1".
// U+0001-00ff
//      Defines a range of codepoints between the first and the second value, in this case
//      the range between "1" and "ff" (255 in decimal) inclusive.
// U+00??
//      Defines a range of codepoints where the "?" characters range over all hex digits,
//      in this case defining the same as the value U+0000-00ff.
// In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
//
// <urange> =
//   u '+' <ident-token> '?'* |
//   u <dimension-token> '?'* |
//   u <number-token> '?'* |
//   u <number-token> <dimension-token> |
//   u <number-token> <number-token> |
//   u '+' '?'+
function scanUnicodeRange() {
    var hexLength = 0;

    // u '+' <ident-token> '?'*
    // u '+' '?'+
    if (this.scanner.isDelim(PLUSSIGN)) {
        this.scanner.next();

        if (this.scanner.tokenType === IDENT) {
            hexLength = eatHexSequence.call(this, 0, true);
            if (hexLength > 0) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
            }
            return;
        }

        if (this.scanner.isDelim(QUESTIONMARK)) {
            this.scanner.next();
            eatQuestionMarkSequence.call(this, 5);
            return;
        }

        this.error('Hex digit or question mark is expected');
        return;
    }

    // u <number-token> '?'*
    // u <number-token> <dimension-token>
    // u <number-token> <number-token>
    if (this.scanner.tokenType === NUMBER) {
        startsWith.call(this, PLUSSIGN);
        hexLength = eatHexSequence.call(this, 1, true);

        if (this.scanner.isDelim(QUESTIONMARK)) {
            eatQuestionMarkSequence.call(this, 6 - hexLength);
            return;
        }

        if (this.scanner.tokenType === DIMENSION ||
            this.scanner.tokenType === NUMBER) {
            startsWith.call(this, HYPHENMINUS);
            eatHexSequence.call(this, 1, false);
            return;
        }

        return;
    }

    // u <dimension-token> '?'*
    if (this.scanner.tokenType === DIMENSION) {
        startsWith.call(this, PLUSSIGN);
        hexLength = eatHexSequence.call(this, 1, true);

        if (hexLength > 0) {
            eatQuestionMarkSequence.call(this, 6 - hexLength);
        }

        return;
    }

    this.error();
}

module.exports = {
    name: 'UnicodeRange',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        // U or u
        if (!cmpChar(this.scanner.source, start, U)) {
            this.error('U is expected');
        }

        if (!cmpChar(this.scanner.source, start + 1, PLUSSIGN)) {
            this.error('Plus sign is expected');
        }

        this.scanner.next();
        scanUnicodeRange.call(this);

        return {
            type: 'UnicodeRange',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Url.js":[function(require,module,exports){
var isWhiteSpace = require('../../tokenizer').isWhiteSpace;
var cmpStr = require('../../tokenizer').cmpStr;
var TYPE = require('../../tokenizer').TYPE;

var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// <url-token> | <function-token> <string> )
module.exports = {
    name: 'Url',
    structure: {
        value: ['String', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value;

        switch (this.scanner.tokenType) {
            case URL:
                var rawStart = start + 4;
                var rawEnd = this.scanner.tokenEnd - 1;

                while (rawStart < rawEnd && isWhiteSpace(this.scanner.source.charCodeAt(rawStart))) {
                    rawStart++;
                }

                while (rawStart < rawEnd && isWhiteSpace(this.scanner.source.charCodeAt(rawEnd - 1))) {
                    rawEnd--;
                }

                value = {
                    type: 'Raw',
                    loc: this.getLocation(rawStart, rawEnd),
                    value: this.scanner.source.substring(rawStart, rawEnd)
                };

                this.eat(URL);
                break;

            case FUNCTION:
                if (!cmpStr(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')) {
                    this.error('Function name must be `url`');
                }

                this.eat(FUNCTION);
                this.scanner.skipSC();
                value = this.String();
                this.scanner.skipSC();
                this.eat(RIGHTPARENTHESIS);
                break;

            default:
                this.error('Url or Function is expected');
        }

        return {
            type: 'Url',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value
        };
    },
    generate: function(node) {
        this.chunk('url');
        this.chunk('(');
        this.node(node.value);
        this.chunk(')');
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/WhiteSpace.js":[function(require,module,exports){
var WHITESPACE = require('../../tokenizer').TYPE.WhiteSpace;
var SPACE = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});

module.exports = {
    name: 'WhiteSpace',
    structure: {
        value: String
    },
    parse: function() {
        this.eat(WHITESPACE);
        return SPACE;

        // return {
        //     type: 'WhiteSpace',
        //     loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        //     value: this.consume(WHITESPACE)
        // };
    },
    generate: function(node) {
        this.chunk(node.value);
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/index.js":[function(require,module,exports){
module.exports = {
    AnPlusB: require('./AnPlusB'),
    Atrule: require('./Atrule'),
    AtrulePrelude: require('./AtrulePrelude'),
    AttributeSelector: require('./AttributeSelector'),
    Block: require('./Block'),
    Brackets: require('./Brackets'),
    CDC: require('./CDC'),
    CDO: require('./CDO'),
    ClassSelector: require('./ClassSelector'),
    Combinator: require('./Combinator'),
    Comment: require('./Comment'),
    Declaration: require('./Declaration'),
    DeclarationList: require('./DeclarationList'),
    Dimension: require('./Dimension'),
    Function: require('./Function'),
    HexColor: require('./HexColor'),
    Identifier: require('./Identifier'),
    IdSelector: require('./IdSelector'),
    MediaFeature: require('./MediaFeature'),
    MediaQuery: require('./MediaQuery'),
    MediaQueryList: require('./MediaQueryList'),
    Nth: require('./Nth'),
    Number: require('./Number'),
    Operator: require('./Operator'),
    Parentheses: require('./Parentheses'),
    Percentage: require('./Percentage'),
    PseudoClassSelector: require('./PseudoClassSelector'),
    PseudoElementSelector: require('./PseudoElementSelector'),
    Ratio: require('./Ratio'),
    Raw: require('./Raw'),
    Rule: require('./Rule'),
    Selector: require('./Selector'),
    SelectorList: require('./SelectorList'),
    String: require('./String'),
    StyleSheet: require('./StyleSheet'),
    TypeSelector: require('./TypeSelector'),
    UnicodeRange: require('./UnicodeRange'),
    Url: require('./Url'),
    Value: require('./Value'),
    WhiteSpace: require('./WhiteSpace')
};

},{"./AnPlusB":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/AnPlusB.js","./Atrule":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Atrule.js","./AtrulePrelude":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/AtrulePrelude.js","./AttributeSelector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/AttributeSelector.js","./Block":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Block.js","./Brackets":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Brackets.js","./CDC":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/CDC.js","./CDO":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/CDO.js","./ClassSelector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/ClassSelector.js","./Combinator":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Combinator.js","./Comment":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Comment.js","./Declaration":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Declaration.js","./DeclarationList":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/DeclarationList.js","./Dimension":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Dimension.js","./Function":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Function.js","./HexColor":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/HexColor.js","./IdSelector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/IdSelector.js","./Identifier":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Identifier.js","./MediaFeature":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/MediaFeature.js","./MediaQuery":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/MediaQuery.js","./MediaQueryList":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/MediaQueryList.js","./Nth":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Nth.js","./Number":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Number.js","./Operator":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Operator.js","./Parentheses":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Parentheses.js","./Percentage":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Percentage.js","./PseudoClassSelector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/PseudoClassSelector.js","./PseudoElementSelector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/PseudoElementSelector.js","./Ratio":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Ratio.js","./Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js","./Rule":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Rule.js","./Selector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Selector.js","./SelectorList":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/SelectorList.js","./String":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/String.js","./StyleSheet":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/StyleSheet.js","./TypeSelector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/TypeSelector.js","./UnicodeRange":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/UnicodeRange.js","./Url":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Url.js","./Value":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Value.js","./WhiteSpace":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/WhiteSpace.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/lexer.js":[function(require,module,exports){
var data = require('../../../data');

module.exports = {
    generic: true,
    types: data.types,
    atrules: data.atrules,
    properties: data.properties,
    node: require('../node')
};

},{"../../../data":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/dist/default-syntax.json","../node":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/selector.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var DELIM = TYPE.Delim;
var IDENT = TYPE.Ident;
var DIMENSION = TYPE.Dimension;
var PERCENTAGE = TYPE.Percentage;
var NUMBER = TYPE.Number;
var HASH = TYPE.Hash;
var COLON = TYPE.Colon;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var NUMBERSIGN = 0x0023;      // U+0023 NUMBER SIGN (#)
var ASTERISK = 0x002A;        // U+002A ASTERISK (*)
var PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
var FULLSTOP = 0x002E;        // U+002E FULL STOP (.)
var GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
var VERTICALLINE = 0x007C;    // U+007C VERTICAL LINE (|)
var TILDE = 0x007E;           // U+007E TILDE (~)

function getNode(context) {
    switch (this.scanner.tokenType) {
        case LEFTSQUAREBRACKET:
            return this.AttributeSelector();

        case HASH:
            return this.IdSelector();

        case COLON:
            if (this.scanner.lookupType(1) === COLON) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }

        case IDENT:
            return this.TypeSelector();

        case NUMBER:
        case PERCENTAGE:
            return this.Percentage();

        case DIMENSION:
            // throws when .123ident
            if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === FULLSTOP) {
                this.error('Identifier is expected', this.scanner.tokenStart + 1);
            }
            break;

        case DELIM:
            var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

            switch (code) {
                case PLUSSIGN:
                case GREATERTHANSIGN:
                case TILDE:
                    context.space = null;
                    context.ignoreWSAfter = true;
                    return this.Combinator();

                case SOLIDUS:  // /deep/
                    return this.Combinator();

                case FULLSTOP:
                    return this.ClassSelector();

                case ASTERISK:
                case VERTICALLINE:
                    return this.TypeSelector();

                case NUMBERSIGN:
                    return this.IdSelector();
            }

            break;
    }
};

module.exports = {
    getNode: getNode
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/function/element.js":[function(require,module,exports){
// https://drafts.csswg.org/css-images-4/#element-notation
// https://developer.mozilla.org/en-US/docs/Web/CSS/element
module.exports = function() {
    this.scanner.skipSC();

    var children = this.createSingleNodeList(
        this.IdSelector()
    );

    this.scanner.skipSC();

    return children;
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/function/expression.js":[function(require,module,exports){
// legacy IE function
// expression( <any-value> )
module.exports = function() {
    return this.createSingleNodeList(
        this.Raw(this.scanner.tokenIndex, null, false)
    );
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/import.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var STRING = TYPE.String;
var IDENT = TYPE.Ident;
var URL = TYPE.Url;
var FUNCTION = TYPE.Function;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

module.exports = {
    parse: {
        prelude: function() {
            var children = this.createList();

            this.scanner.skipSC();

            switch (this.scanner.tokenType) {
                case STRING:
                    children.push(this.String());
                    break;

                case URL:
                case FUNCTION:
                    children.push(this.Url());
                    break;

                default:
                    this.error('String or url() is expected');
            }

            if (this.lookupNonWSType(0) === IDENT ||
                this.lookupNonWSType(0) === LEFTPARENTHESIS) {
                children.push(this.WhiteSpace());
                children.push(this.MediaQueryList());
            }

            return children;
        },
        block: null
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/supports.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var COLON = TYPE.Colon;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

function consumeRaw() {
    return this.createSingleNodeList(
        this.Raw(this.scanner.tokenIndex, null, false)
    );
}

function parentheses() {
    this.scanner.skipSC();

    if (this.scanner.tokenType === IDENT &&
        this.lookupNonWSType(1) === COLON) {
        return this.createSingleNodeList(
            this.Declaration()
        );
    }

    return readSequence.call(this);
}

function readSequence() {
    var children = this.createList();
    var space = null;
    var child;

    this.scanner.skipSC();

    scan:
    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case WHITESPACE:
                space = this.WhiteSpace();
                continue;

            case COMMENT:
                this.scanner.next();
                continue;

            case FUNCTION:
                child = this.Function(consumeRaw, this.scope.AtrulePrelude);
                break;

            case IDENT:
                child = this.Identifier();
                break;

            case LEFTPARENTHESIS:
                child = this.Parentheses(parentheses, this.scope.AtrulePrelude);
                break;

            default:
                break scan;
        }

        if (space !== null) {
            children.push(space);
            space = null;
        }

        children.push(child);
    }

    return children;
}

module.exports = {
    parse: {
        prelude: function() {
            var children = readSequence.call(this);

            if (this.getFirstListNode(children) === null) {
                this.error('Condition is expected');
            }

            return children;
        },
        block: function() {
            return this.Block(false);
        }
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/index.js":[function(require,module,exports){
module.exports = {
    'font-face': require('./font-face'),
    'import': require('./import'),
    'media': require('./media'),
    'page': require('./page'),
    'supports': require('./supports')
};

},{"./font-face":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/font-face.js","./import":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/import.js","./media":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/media.js","./page":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/page.js","./supports":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/supports.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/selectorList.js":[function(require,module,exports){
module.exports = {
    parse: function selectorList() {
        return this.createSingleNodeList(
            this.SelectorList()
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/matches.js":[function(require,module,exports){
module.exports = require('./common/selectorList');

},{"./common/selectorList":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/selectorList.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/nthWithOfClause.js":[function(require,module,exports){
var ALLOW_OF_CLAUSE = true;

module.exports = {
    parse: function nthWithOfClause() {
        return this.createSingleNodeList(
            this.Nth(ALLOW_OF_CLAUSE)
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-child.js":[function(require,module,exports){
module.exports = require('./common/nthWithOfClause');

},{"./common/nthWithOfClause":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/nthWithOfClause.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/nth.js":[function(require,module,exports){
var DISALLOW_OF_CLAUSE = false;

module.exports = {
    parse: function nth() {
        return this.createSingleNodeList(
            this.Nth(DISALLOW_OF_CLAUSE)
        );
    }
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-last-of-type.js":[function(require,module,exports){
module.exports = require('./common/nth');

},{"./common/nth":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/common/nth.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/index.js":[function(require,module,exports){
module.exports = {
    'dir': require('./dir'),
    'has': require('./has'),
    'lang': require('./lang'),
    'matches': require('./matches'),
    'not': require('./not'),
    'nth-child': require('./nth-child'),
    'nth-last-child': require('./nth-last-child'),
    'nth-last-of-type': require('./nth-last-of-type'),
    'nth-of-type': require('./nth-of-type'),
    'slotted': require('./slotted')
};

},{"./dir":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/dir.js","./has":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/has.js","./lang":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/lang.js","./matches":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/matches.js","./not":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/not.js","./nth-child":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-child.js","./nth-last-child":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-last-child.js","./nth-last-of-type":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-last-of-type.js","./nth-of-type":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/nth-of-type.js","./slotted":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/slotted.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/tokenizer.js":[function(require,module,exports){
var SyntaxError = require('./SyntaxError');

var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;

var Tokenizer = function(str) {
    this.str = str;
    this.pos = 0;
};

Tokenizer.prototype = {
    charCodeAt: function(pos) {
        return pos < this.str.length ? this.str.charCodeAt(pos) : 0;
    },
    charCode: function() {
        return this.charCodeAt(this.pos);
    },
    nextCharCode: function() {
        return this.charCodeAt(this.pos + 1);
    },
    nextNonWsCode: function(pos) {
        return this.charCodeAt(this.findWsEnd(pos));
    },
    findWsEnd: function(pos) {
        for (; pos < this.str.length; pos++) {
            var code = this.str.charCodeAt(pos);
            if (code !== R && code !== N && code !== F && code !== SPACE && code !== TAB) {
                break;
            }
        }

        return pos;
    },
    substringToPos: function(end) {
        return this.str.substring(this.pos, this.pos = end);
    },
    eat: function(code) {
        if (this.charCode() !== code) {
            this.error('Expect `' + String.fromCharCode(code) + '`');
        }

        this.pos++;
    },
    peek: function() {
        return this.pos < this.str.length ? this.str.charAt(this.pos++) : '';
    },
    error: function(message) {
        throw new SyntaxError(message, this.str, this.pos);
    }
};

module.exports = Tokenizer;

},{"./SyntaxError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/SyntaxError.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/parse.js":[function(require,module,exports){
var Tokenizer = require('./tokenizer');
var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;
var EXCLAMATIONMARK = 33;    // !
var NUMBERSIGN = 35;         // #
var AMPERSAND = 38;          // &
var APOSTROPHE = 39;         // '
var LEFTPARENTHESIS = 40;    // (
var RIGHTPARENTHESIS = 41;   // )
var ASTERISK = 42;           // *
var PLUSSIGN = 43;           // +
var COMMA = 44;              // ,
var HYPERMINUS = 45;         // -
var LESSTHANSIGN = 60;       // <
var GREATERTHANSIGN = 62;    // >
var QUESTIONMARK = 63;       // ?
var COMMERCIALAT = 64;       // @
var LEFTSQUAREBRACKET = 91;  // [
var RIGHTSQUAREBRACKET = 93; // ]
var LEFTCURLYBRACKET = 123;  // {
var VERTICALLINE = 124;      // |
var RIGHTCURLYBRACKET = 125; // }
var INFINITY = 8734;         // ∞
var NAME_CHAR = createCharMap(function(ch) {
    return /[a-zA-Z0-9\-]/.test(ch);
});
var COMBINATOR_PRECEDENCE = {
    ' ': 1,
    '&&': 2,
    '||': 3,
    '|': 4
};

function createCharMap(fn) {
    var array = typeof Uint32Array === 'function' ? new Uint32Array(128) : new Array(128);
    for (var i = 0; i < 128; i++) {
        array[i] = fn(String.fromCharCode(i)) ? 1 : 0;
    }
    return array;
}

function scanSpaces(tokenizer) {
    return tokenizer.substringToPos(
        tokenizer.findWsEnd(tokenizer.pos)
    );
}

function scanWord(tokenizer) {
    var end = tokenizer.pos;

    for (; end < tokenizer.str.length; end++) {
        var code = tokenizer.str.charCodeAt(end);
        if (code >= 128 || NAME_CHAR[code] === 0) {
            break;
        }
    }

    if (tokenizer.pos === end) {
        tokenizer.error('Expect a keyword');
    }

    return tokenizer.substringToPos(end);
}

function scanNumber(tokenizer) {
    var end = tokenizer.pos;

    for (; end < tokenizer.str.length; end++) {
        var code = tokenizer.str.charCodeAt(end);
        if (code < 48 || code > 57) {
            break;
        }
    }

    if (tokenizer.pos === end) {
        tokenizer.error('Expect a number');
    }

    return tokenizer.substringToPos(end);
}

function scanString(tokenizer) {
    var end = tokenizer.str.indexOf('\'', tokenizer.pos + 1);

    if (end === -1) {
        tokenizer.pos = tokenizer.str.length;
        tokenizer.error('Expect an apostrophe');
    }

    return tokenizer.substringToPos(end + 1);
}

function readMultiplierRange(tokenizer) {
    var min = null;
    var max = null;

    tokenizer.eat(LEFTCURLYBRACKET);

    min = scanNumber(tokenizer);

    if (tokenizer.charCode() === COMMA) {
        tokenizer.pos++;
        if (tokenizer.charCode() !== RIGHTCURLYBRACKET) {
            max = scanNumber(tokenizer);
        }
    } else {
        max = min;
    }

    tokenizer.eat(RIGHTCURLYBRACKET);

    return {
        min: Number(min),
        max: max ? Number(max) : 0
    };
}

function readMultiplier(tokenizer) {
    var range = null;
    var comma = false;

    switch (tokenizer.charCode()) {
        case ASTERISK:
            tokenizer.pos++;

            range = {
                min: 0,
                max: 0
            };

            break;

        case PLUSSIGN:
            tokenizer.pos++;

            range = {
                min: 1,
                max: 0
            };

            break;

        case QUESTIONMARK:
            tokenizer.pos++;

            range = {
                min: 0,
                max: 1
            };

            break;

        case NUMBERSIGN:
            tokenizer.pos++;

            comma = true;

            if (tokenizer.charCode() === LEFTCURLYBRACKET) {
                range = readMultiplierRange(tokenizer);
            } else {
                range = {
                    min: 1,
                    max: 0
                };
            }

            break;

        case LEFTCURLYBRACKET:
            range = readMultiplierRange(tokenizer);
            break;

        default:
            return null;
    }

    return {
        type: 'Multiplier',
        comma: comma,
        min: range.min,
        max: range.max,
        term: null
    };
}

function maybeMultiplied(tokenizer, node) {
    var multiplier = readMultiplier(tokenizer);

    if (multiplier !== null) {
        multiplier.term = node;
        return multiplier;
    }

    return node;
}

function maybeToken(tokenizer) {
    var ch = tokenizer.peek();

    if (ch === '') {
        return null;
    }

    return {
        type: 'Token',
        value: ch
    };
}

function readProperty(tokenizer) {
    var name;

    tokenizer.eat(LESSTHANSIGN);
    tokenizer.eat(APOSTROPHE);

    name = scanWord(tokenizer);

    tokenizer.eat(APOSTROPHE);
    tokenizer.eat(GREATERTHANSIGN);

    return maybeMultiplied(tokenizer, {
        type: 'Property',
        name: name
    });
}

// https://drafts.csswg.org/css-values-3/#numeric-ranges
// 4.1. Range Restrictions and Range Definition Notation
//
// Range restrictions can be annotated in the numeric type notation using CSS bracketed
// range notation—[min,max]—within the angle brackets, after the identifying keyword,
// indicating a closed range between (and including) min and max.
// For example, <integer [0, 10]> indicates an integer between 0 and 10, inclusive.
function readTypeRange(tokenizer) {
    // use null for Infinity to make AST format JSON serializable/deserializable
    var min = null; // -Infinity
    var max = null; // Infinity
    var sign = 1;

    tokenizer.eat(LEFTSQUAREBRACKET);

    if (tokenizer.charCode() === HYPERMINUS) {
        tokenizer.peek();
        sign = -1;
    }

    if (sign == -1 && tokenizer.charCode() === INFINITY) {
        tokenizer.peek();
    } else {
        min = sign * Number(scanNumber(tokenizer));
    }

    scanSpaces(tokenizer);
    tokenizer.eat(COMMA);
    scanSpaces(tokenizer);

    if (tokenizer.charCode() === INFINITY) {
        tokenizer.peek();
    } else {
        sign = 1;

        if (tokenizer.charCode() === HYPERMINUS) {
            tokenizer.peek();
            sign = -1;
        }

        max = sign * Number(scanNumber(tokenizer));
    }

    tokenizer.eat(RIGHTSQUAREBRACKET);

    // If no range is indicated, either by using the bracketed range notation
    // or in the property description, then [−∞,∞] is assumed.
    if (min === null && max === null) {
        return null;
    }

    return {
        type: 'Range',
        min: min,
        max: max
    };
}

function readType(tokenizer) {
    var name;
    var opts = null;

    tokenizer.eat(LESSTHANSIGN);
    name = scanWord(tokenizer);

    if (tokenizer.charCode() === LEFTPARENTHESIS &&
        tokenizer.nextCharCode() === RIGHTPARENTHESIS) {
        tokenizer.pos += 2;
        name += '()';
    }

    if (tokenizer.charCodeAt(tokenizer.findWsEnd(tokenizer.pos)) === LEFTSQUAREBRACKET) {
        scanSpaces(tokenizer);
        opts = readTypeRange(tokenizer);
    }

    tokenizer.eat(GREATERTHANSIGN);

    return maybeMultiplied(tokenizer, {
        type: 'Type',
        name: name,
        opts: opts
    });
}

function readKeywordOrFunction(tokenizer) {
    var name;

    name = scanWord(tokenizer);

    if (tokenizer.charCode() === LEFTPARENTHESIS) {
        tokenizer.pos++;

        return {
            type: 'Function',
            name: name
        };
    }

    return maybeMultiplied(tokenizer, {
        type: 'Keyword',
        name: name
    });
}

function regroupTerms(terms, combinators) {
    function createGroup(terms, combinator) {
        return {
            type: 'Group',
            terms: terms,
            combinator: combinator,
            disallowEmpty: false,
            explicit: false
        };
    }

    combinators = Object.keys(combinators).sort(function(a, b) {
        return COMBINATOR_PRECEDENCE[a] - COMBINATOR_PRECEDENCE[b];
    });

    while (combinators.length > 0) {
        var combinator = combinators.shift();
        for (var i = 0, subgroupStart = 0; i < terms.length; i++) {
            var term = terms[i];
            if (term.type === 'Combinator') {
                if (term.value === combinator) {
                    if (subgroupStart === -1) {
                        subgroupStart = i - 1;
                    }
                    terms.splice(i, 1);
                    i--;
                } else {
                    if (subgroupStart !== -1 && i - subgroupStart > 1) {
                        terms.splice(
                            subgroupStart,
                            i - subgroupStart,
                            createGroup(terms.slice(subgroupStart, i), combinator)
                        );
                        i = subgroupStart + 1;
                    }
                    subgroupStart = -1;
                }
            }
        }

        if (subgroupStart !== -1 && combinators.length) {
            terms.splice(
                subgroupStart,
                i - subgroupStart,
                createGroup(terms.slice(subgroupStart, i), combinator)
            );
        }
    }

    return combinator;
}

function readImplicitGroup(tokenizer) {
    var terms = [];
    var combinators = {};
    var token;
    var prevToken = null;
    var prevTokenPos = tokenizer.pos;

    while (token = peek(tokenizer)) {
        if (token.type !== 'Spaces') {
            if (token.type === 'Combinator') {
                // check for combinator in group beginning and double combinator sequence
                if (prevToken === null || prevToken.type === 'Combinator') {
                    tokenizer.pos = prevTokenPos;
                    tokenizer.error('Unexpected combinator');
                }

                combinators[token.value] = true;
            } else if (prevToken !== null && prevToken.type !== 'Combinator') {
                combinators[' '] = true;  // a b
                terms.push({
                    type: 'Combinator',
                    value: ' '
                });
            }

            terms.push(token);
            prevToken = token;
            prevTokenPos = tokenizer.pos;
        }
    }

    // check for combinator in group ending
    if (prevToken !== null && prevToken.type === 'Combinator') {
        tokenizer.pos -= prevTokenPos;
        tokenizer.error('Unexpected combinator');
    }

    return {
        type: 'Group',
        terms: terms,
        combinator: regroupTerms(terms, combinators) || ' ',
        disallowEmpty: false,
        explicit: false
    };
}

function readGroup(tokenizer) {
    var result;

    tokenizer.eat(LEFTSQUAREBRACKET);
    result = readImplicitGroup(tokenizer);
    tokenizer.eat(RIGHTSQUAREBRACKET);

    result.explicit = true;

    if (tokenizer.charCode() === EXCLAMATIONMARK) {
        tokenizer.pos++;
        result.disallowEmpty = true;
    }

    return result;
}

function peek(tokenizer) {
    var code = tokenizer.charCode();

    if (code < 128 && NAME_CHAR[code] === 1) {
        return readKeywordOrFunction(tokenizer);
    }

    switch (code) {
        case RIGHTSQUAREBRACKET:
            // don't eat, stop scan a group
            break;

        case LEFTSQUAREBRACKET:
            return maybeMultiplied(tokenizer, readGroup(tokenizer));

        case LESSTHANSIGN:
            return tokenizer.nextCharCode() === APOSTROPHE
                ? readProperty(tokenizer)
                : readType(tokenizer);

        case VERTICALLINE:
            return {
                type: 'Combinator',
                value: tokenizer.substringToPos(
                    tokenizer.nextCharCode() === VERTICALLINE
                        ? tokenizer.pos + 2
                        : tokenizer.pos + 1
                )
            };

        case AMPERSAND:
            tokenizer.pos++;
            tokenizer.eat(AMPERSAND);

            return {
                type: 'Combinator',
                value: '&&'
            };

        case COMMA:
            tokenizer.pos++;
            return {
                type: 'Comma'
            };

        case APOSTROPHE:
            return maybeMultiplied(tokenizer, {
                type: 'String',
                value: scanString(tokenizer)
            });

        case SPACE:
        case TAB:
        case N:
        case R:
        case F:
            return {
                type: 'Spaces',
                value: scanSpaces(tokenizer)
            };

        case COMMERCIALAT:
            code = tokenizer.nextCharCode();

            if (code < 128 && NAME_CHAR[code] === 1) {
                tokenizer.pos++;
                return {
                    type: 'AtKeyword',
                    name: scanWord(tokenizer)
                };
            }

            return maybeToken(tokenizer);

        case ASTERISK:
        case PLUSSIGN:
        case QUESTIONMARK:
        case NUMBERSIGN:
        case EXCLAMATIONMARK:
            // prohibited tokens (used as a multiplier start)
            break;

        case LEFTCURLYBRACKET:
            // LEFTCURLYBRACKET is allowed since mdn/data uses it w/o quoting
            // check next char isn't a number, because it's likely a disjoined multiplier
            code = tokenizer.nextCharCode();

            if (code < 48 || code > 57) {
                return maybeToken(tokenizer);
            }

            break;

        default:
            return maybeToken(tokenizer);
    }
}

function parse(source) {
    var tokenizer = new Tokenizer(source);
    var result = readImplicitGroup(tokenizer);

    if (tokenizer.pos !== source.length) {
        tokenizer.error('Unexpected input');
    }

    // reduce redundant groups with single group term
    if (result.terms.length === 1 && result.terms[0].type === 'Group') {
        result = result.terms[0];
    }

    return result;
}

// warm up parse to elimitate code branches that never execute
// fix soft deoptimizations (insufficient type feedback)
parse('[a&&<b>#|<\'c\'>*||e() f{2} /,(% g#{1,2} h{2,})]!');

module.exports = parse;

},{"./tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/tokenizer.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/generic-an-plus-b.js":[function(require,module,exports){
var isDigit = require('../tokenizer').isDigit;
var cmpChar = require('../tokenizer').cmpChar;
var TYPE = require('../tokenizer').TYPE;

var DELIM = TYPE.Delim;
var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var NUMBER = TYPE.Number;
var DIMENSION = TYPE.Dimension;
var PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
var N = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;

function isDelim(token, code) {
    return token !== null && token.type === DELIM && token.value.charCodeAt(0) === code;
}

function skipSC(token, offset, getNextToken) {
    while (token !== null && (token.type === WHITESPACE || token.type === COMMENT)) {
        token = getNextToken(++offset);
    }

    return offset;
}

function checkInteger(token, valueOffset, disallowSign, offset) {
    if (!token) {
        return 0;
    }

    var code = token.value.charCodeAt(valueOffset);

    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            // Number sign is not allowed
            return 0;
        }
        valueOffset++;
    }

    for (; valueOffset < token.value.length; valueOffset++) {
        if (!isDigit(token.value.charCodeAt(valueOffset))) {
            // Integer is expected
            return 0;
        }
    }

    return offset + 1;
}

// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB(token, offset_, getNextToken) {
    var sign = false;
    var offset = skipSC(token, offset_, getNextToken);

    token = getNextToken(offset);

    if (token === null) {
        return offset_;
    }

    if (token.type !== NUMBER) {
        if (isDelim(token, PLUSSIGN) || isDelim(token, HYPHENMINUS)) {
            sign = true;
            offset = skipSC(getNextToken(++offset), offset, getNextToken);
            token = getNextToken(offset);

            if (token === null && token.type !== NUMBER) {
                return 0;
            }
        } else {
            return offset_;
        }
    }

    if (!sign) {
        var code = token.value.charCodeAt(0);
        if (code !== PLUSSIGN && code !== HYPHENMINUS) {
            // Number sign is expected
            return 0;
        }
    }

    return checkInteger(token, sign ? 0 : 1, sign, offset);
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
module.exports = function anPlusB(token, getNextToken) {
    /* eslint-disable brace-style*/
    var offset = 0;

    if (!token) {
        return 0;
    }

    // <integer>
    if (token.type === NUMBER) {
        return checkInteger(token, 0, ALLOW_SIGN, offset); // b
    }

    // -n
    // -n <signed-integer>
    // -n ['+' | '-'] <signless-integer>
    // -n- <signless-integer>
    // <dashndashdigit-ident>
    else if (token.type === IDENT && token.value.charCodeAt(0) === HYPHENMINUS) {
        // expect 1st char is N
        if (!cmpChar(token.value, 1, N)) {
            return 0;
        }

        switch (token.value.length) {
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                return consumeB(getNextToken(++offset), offset, getNextToken);

            // -n- <signless-integer>
            case 3:
                if (token.value.charCodeAt(2) !== HYPHENMINUS) {
                    return 0;
                }

                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);

                return checkInteger(token, 0, DISALLOW_SIGN, offset);

            // <dashndashdigit-ident>
            default:
                if (token.value.charCodeAt(2) !== HYPHENMINUS) {
                    return 0;
                }

                return checkInteger(token, 3, DISALLOW_SIGN, offset);
        }
    }

    // '+'? n
    // '+'? n <signed-integer>
    // '+'? n ['+' | '-'] <signless-integer>
    // '+'? n- <signless-integer>
    // '+'? <ndashdigit-ident>
    else if (token.type === IDENT || (isDelim(token, PLUSSIGN) && getNextToken(offset + 1).type === IDENT)) {
        // just ignore a plus
        if (token.type !== IDENT) {
            token = getNextToken(++offset);
        }

        if (token === null || !cmpChar(token.value, 0, N)) {
            return 0;
        }

        switch (token.value.length) {
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                return consumeB(getNextToken(++offset), offset, getNextToken);

            // '+'? n- <signless-integer>
            case 2:
                if (token.value.charCodeAt(1) !== HYPHENMINUS) {
                    return 0;
                }

                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);

                return checkInteger(token, 0, DISALLOW_SIGN, offset);

            // '+'? <ndashdigit-ident>
            default:
                if (token.value.charCodeAt(1) !== HYPHENMINUS) {
                    return 0;
                }

                return checkInteger(token, 2, DISALLOW_SIGN, offset);
        }
    }

    // <ndashdigit-dimension>
    // <ndash-dimension> <signless-integer>
    // <n-dimension>
    // <n-dimension> <signed-integer>
    // <n-dimension> ['+' | '-'] <signless-integer>
    else if (token.type === DIMENSION) {
        var code = token.value.charCodeAt(0);
        var sign = code === PLUSSIGN || code === HYPHENMINUS ? 1 : 0;

        for (var i = sign; i < token.value.length; i++) {
            if (!isDigit(token.value.charCodeAt(i))) {
                break;
            }
        }

        if (i === sign) {
            // Integer is expected
            return 0;
        }

        if (!cmpChar(token.value, i, N)) {
            return 0;
        }

        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        if (i + 1 === token.value.length) {
            return consumeB(getNextToken(++offset), offset, getNextToken);
        } else {
            if (token.value.charCodeAt(i + 1) !== HYPHENMINUS) {
                return 0;
            }

            // <ndash-dimension> <signless-integer>
            if (i + 2 === token.value.length) {
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);

                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            }
            // <ndashdigit-dimension>
            else {
                return checkInteger(token, i + 2, DISALLOW_SIGN, offset);
            }
        }
    }

    return 0;
};

},{"../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/generic-urange.js":[function(require,module,exports){
var isHexDigit = require('../tokenizer').isHexDigit;
var cmpChar = require('../tokenizer').cmpChar;
var TYPE = require('../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var DELIM = TYPE.Delim;
var NUMBER = TYPE.Number;
var DIMENSION = TYPE.Dimension;
var PLUSSIGN = 0x002B;     // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D;  // U+002D HYPHEN-MINUS (-)
var QUESTIONMARK = 0x003F; // U+003F QUESTION MARK (?)
var U = 0x0075;            // U+0075 LATIN SMALL LETTER U (u)

function isDelim(token, code) {
    return token !== null && token.type === DELIM && token.value.charCodeAt(0) === code;
}

function startsWith(token, code) {
    return token.value.charCodeAt(0) === code;
}

function hexSequence(token, offset, allowDash) {
    for (var pos = offset, hexlen = 0; pos < token.value.length; pos++) {
        var code = token.value.charCodeAt(pos);

        if (code === HYPHENMINUS && allowDash && hexlen !== 0) {
            if (hexSequence(token, offset + hexlen + 1, false) > 0) {
                return 6; // dissallow following question marks
            }

            return 0; // dash at the ending of a hex sequence is not allowed
        }

        if (!isHexDigit(code)) {
            return 0; // not a hex digit
        }

        if (++hexlen > 6) {
            return 0; // too many hex digits
        };
    }

    return hexlen;
}

function withQuestionMarkSequence(consumed, length, getNextToken) {
    if (!consumed) {
        return 0; // nothing consumed
    }

    while (isDelim(getNextToken(length), QUESTIONMARK)) {
        if (++consumed > 6) {
            return 0; // too many question marks
        }

        length++;
    }

    return length;
}

// https://drafts.csswg.org/css-syntax/#urange
// Informally, the <urange> production has three forms:
// U+0001
//      Defines a range consisting of a single code point, in this case the code point "1".
// U+0001-00ff
//      Defines a range of codepoints between the first and the second value, in this case
//      the range between "1" and "ff" (255 in decimal) inclusive.
// U+00??
//      Defines a range of codepoints where the "?" characters range over all hex digits,
//      in this case defining the same as the value U+0000-00ff.
// In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
//
// <urange> =
//   u '+' <ident-token> '?'* |
//   u <dimension-token> '?'* |
//   u <number-token> '?'* |
//   u <number-token> <dimension-token> |
//   u <number-token> <number-token> |
//   u '+' '?'+
module.exports = function urange(token, getNextToken) {
    var length = 0;

    // should start with `u` or `U`
    if (token === null || token.type !== IDENT || !cmpChar(token.value, 0, U)) {
        return 0;
    }

    token = getNextToken(++length);
    if (token === null) {
        return 0;
    }

    // u '+' <ident-token> '?'*
    // u '+' '?'+
    if (isDelim(token, PLUSSIGN)) {
        token = getNextToken(++length);
        if (token === null) {
            return 0;
        }

        if (token.type === IDENT) {
            // u '+' <ident-token> '?'*
            return withQuestionMarkSequence(hexSequence(token, 0, true), ++length, getNextToken);
        }

        if (isDelim(token, QUESTIONMARK)) {
            // u '+' '?'+
            return withQuestionMarkSequence(1, ++length, getNextToken);
        }

        // Hex digit or question mark is expected
        return 0;
    }

    // u <number-token> '?'*
    // u <number-token> <dimension-token>
    // u <number-token> <number-token>
    if (token.type === NUMBER) {
        if (!startsWith(token, PLUSSIGN)) {
            return 0;
        }

        var consumedHexLength = hexSequence(token, 1, true);
        if (consumedHexLength === 0) {
            return 0;
        }

        token = getNextToken(++length);
        if (token === null) {
            // u <number-token> <eof>
            return length;
        }

        if (token.type === DIMENSION || token.type === NUMBER) {
            // u <number-token> <dimension-token>
            // u <number-token> <number-token>
            if (!startsWith(token, HYPHENMINUS) || !hexSequence(token, 1, false)) {
                return 0;
            }

            return length + 1;
        }

        // u <number-token> '?'*
        return withQuestionMarkSequence(consumedHexLength, length, getNextToken);
    }

    // u <dimension-token> '?'*
    if (token.type === DIMENSION) {
        if (!startsWith(token, PLUSSIGN)) {
            return 0;
        }

        return withQuestionMarkSequence(hexSequence(token, 1, true), ++length, getNextToken);
    }

    return 0;
};

},{"../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/generic.js":[function(require,module,exports){
var tokenizer = require('../tokenizer');
var isIdentifierStart = tokenizer.isIdentifierStart;
var isHexDigit = tokenizer.isHexDigit;
var isDigit = tokenizer.isDigit;
var cmpStr = tokenizer.cmpStr;
var consumeNumber = tokenizer.consumeNumber;
var TYPE = tokenizer.TYPE;
var anPlusB = require('./generic-an-plus-b');
var urange = require('./generic-urange');

var cssWideKeywords = ['unset', 'initial', 'inherit'];
var calcFunctionNames = ['calc(', '-moz-calc(', '-webkit-calc('];

// https://www.w3.org/TR/css-values-3/#lengths
var LENGTH = {
    // absolute length units
    'px': true,
    'mm': true,
    'cm': true,
    'in': true,
    'pt': true,
    'pc': true,
    'q': true,

    // relative length units
    'em': true,
    'ex': true,
    'ch': true,
    'rem': true,

    // viewport-percentage lengths
    'vh': true,
    'vw': true,
    'vmin': true,
    'vmax': true,
    'vm': true
};

var ANGLE = {
    'deg': true,
    'grad': true,
    'rad': true,
    'turn': true
};

var TIME = {
    's': true,
    'ms': true
};

var FREQUENCY = {
    'hz': true,
    'khz': true
};

// https://www.w3.org/TR/css-values-3/#resolution (https://drafts.csswg.org/css-values/#resolution)
var RESOLUTION = {
    'dpi': true,
    'dpcm': true,
    'dppx': true,
    'x': true      // https://github.com/w3c/csswg-drafts/issues/461
};

// https://drafts.csswg.org/css-grid/#fr-unit
var FLEX = {
    'fr': true
};

// https://www.w3.org/TR/css3-speech/#mixing-props-voice-volume
var DECIBEL = {
    'db': true
};

// https://www.w3.org/TR/css3-speech/#voice-props-voice-pitch
var SEMITONES = {
    'st': true
};

// safe char code getter
function charCode(str, index) {
    return index < str.length ? str.charCodeAt(index) : 0;
}

function eqStr(actual, expected) {
    return cmpStr(actual, 0, actual.length, expected);
}

function eqStrAny(actual, expected) {
    for (var i = 0; i < expected.length; i++) {
        if (eqStr(actual, expected[i])) {
            return true;
        }
    }

    return false;
}

// IE postfix hack, i.e. 123\0 or 123px\9
function isPostfixIeHack(str, offset) {
    if (offset !== str.length - 2) {
        return false;
    }

    return (
        str.charCodeAt(offset) === 0x005C &&  // U+005C REVERSE SOLIDUS (\)
        isDigit(str.charCodeAt(offset + 1))
    );
}

function outOfRange(opts, value, numEnd) {
    if (opts && opts.type === 'Range') {
        var num = Number(
            numEnd !== undefined && numEnd !== value.length
                ? value.substr(0, numEnd)
                : value
        );

        if (isNaN(num)) {
            return true;
        }

        if (opts.min !== null && num < opts.min) {
            return true;
        }

        if (opts.max !== null && num > opts.max) {
            return true;
        }
    }

    return false;
}

function consumeFunction(token, getNextToken) {
    var startIdx = token.index;
    var length = 0;

    // balanced token consuming
    do {
        length++;

        if (token.balance <= startIdx) {
            break;
        }
    } while (token = getNextToken(length));

    return length;
}

// TODO: implement
// can be used wherever <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> values are allowed
// https://drafts.csswg.org/css-values/#calc-notation
function calc(next) {
    return function(token, getNextToken, opts) {
        if (token === null) {
            return 0;
        }

        if (token.type === TYPE.Function && eqStrAny(token.value, calcFunctionNames)) {
            return consumeFunction(token, getNextToken);
        }

        return next(token, getNextToken, opts);
    };
}

function tokenType(expectedTokenType) {
    return function(token) {
        if (token === null || token.type !== expectedTokenType) {
            return 0;
        }

        return 1;
    };
}

function func(name) {
    name = name + '(';

    return function(token, getNextToken) {
        if (token !== null && eqStr(token.value, name)) {
            return consumeFunction(token, getNextToken);
        }

        return 0;
    };
}

// =========================
// Complex types
//

// https://drafts.csswg.org/css-values-4/#custom-idents
// 4.2. Author-defined Identifiers: the <custom-ident> type
// Some properties accept arbitrary author-defined identifiers as a component value.
// This generic data type is denoted by <custom-ident>, and represents any valid CSS identifier
// that would not be misinterpreted as a pre-defined keyword in that property’s value definition.
//
// See also: https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident
function customIdent(token) {
    if (token === null || token.type !== TYPE.Ident) {
        return 0;
    }

    var name = token.value.toLowerCase();

    // The CSS-wide keywords are not valid <custom-ident>s
    if (eqStrAny(name, cssWideKeywords)) {
        return 0;
    }

    // The default keyword is reserved and is also not a valid <custom-ident>
    if (eqStr(name, 'default')) {
        return 0;
    }

    // TODO: ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
    // Specifications using <custom-ident> must specify clearly what other keywords
    // are excluded from <custom-ident>, if any—for example by saying that any pre-defined keywords
    // in that property’s value definition are excluded. Excluded keywords are excluded
    // in all ASCII case permutations.

    return 1;
}

// https://drafts.csswg.org/css-variables/#typedef-custom-property-name
// A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS), like --foo.
// The <custom-property-name> production corresponds to this: it’s defined as any valid identifier
// that starts with two dashes, except -- itself, which is reserved for future use by CSS.
// NOTE: Current implementation treat `--` as a valid name since most (all?) major browsers treat it as valid.
function customPropertyName(token) {
    // ... defined as any valid identifier
    if (token === null || token.type !== TYPE.Ident) {
        return 0;
    }

    // ... that starts with two dashes (U+002D HYPHEN-MINUS)
    if (charCode(token.value, 0) !== 0x002D || charCode(token.value, 1) !== 0x002D) {
        return 0;
    }

    return 1;
}

// https://drafts.csswg.org/css-color-4/#hex-notation
// The syntax of a <hex-color> is a <hash-token> token whose value consists of 3, 4, 6, or 8 hexadecimal digits.
// In other words, a hex color is written as a hash character, "#", followed by some number of digits 0-9 or
// letters a-f (the case of the letters doesn’t matter - #00ff00 is identical to #00FF00).
function hexColor(token) {
    if (token === null || token.type !== TYPE.Hash) {
        return 0;
    }

    var length = token.value.length;

    // valid values (length): #rgb (4), #rgba (5), #rrggbb (7), #rrggbbaa (9)
    if (length !== 4 && length !== 5 && length !== 7 && length !== 9) {
        return 0;
    }

    for (var i = 1; i < length; i++) {
        if (!isHexDigit(token.value.charCodeAt(i))) {
            return 0;
        }
    }

    return 1;
}

function idSelector(token) {
    if (token === null || token.type !== TYPE.Hash) {
        return 0;
    }

    if (!isIdentifierStart(charCode(token.value, 1), charCode(token.value, 2), charCode(token.value, 3))) {
        return 0;
    }

    return 1;
}

// https://drafts.csswg.org/css-syntax/#any-value
// It represents the entirety of what a valid declaration can have as its value.
function declarationValue(token, getNextToken) {
    if (!token) {
        return 0;
    }

    var length = 0;
    var level = 0;
    var startIdx = token.index;

    // The <declaration-value> production matches any sequence of one or more tokens,
    // so long as the sequence ...
    scan:
    do {
        switch (token.type) {
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case TYPE.BadString:
            case TYPE.BadUrl:
                break scan;

            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case TYPE.RightCurlyBracket:
            case TYPE.RightParenthesis:
            case TYPE.RightSquareBracket:
                if (token.balance > token.index || token.balance < startIdx) {
                    break scan;
                }

                level--;
                break;

            // ... or top-level <semicolon-token> tokens
            case TYPE.Semicolon:
                if (level === 0) {
                    break scan;
                }

                break;

            // ... or <delim-token> tokens with a value of "!"
            case TYPE.Delim:
                if (token.value === '!' && level === 0) {
                    break scan;
                }

                break;

            case TYPE.Function:
            case TYPE.LeftParenthesis:
            case TYPE.LeftSquareBracket:
            case TYPE.LeftCurlyBracket:
                level++;
                break;
        }

        length++;

        // until balance closing
        if (token.balance <= startIdx) {
            break;
        }
    } while (token = getNextToken(length));

    return length;
}

// https://drafts.csswg.org/css-syntax/#any-value
// The <any-value> production is identical to <declaration-value>, but also
// allows top-level <semicolon-token> tokens and <delim-token> tokens
// with a value of "!". It represents the entirety of what valid CSS can be in any context.
function anyValue(token, getNextToken) {
    if (!token) {
        return 0;
    }

    var startIdx = token.index;
    var length = 0;

    // The <any-value> production matches any sequence of one or more tokens,
    // so long as the sequence ...
    scan:
    do {
        switch (token.type) {
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case TYPE.BadString:
            case TYPE.BadUrl:
                break scan;

            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case TYPE.RightCurlyBracket:
            case TYPE.RightParenthesis:
            case TYPE.RightSquareBracket:
                if (token.balance > token.index || token.balance < startIdx) {
                    break scan;
                }

                break;
        }

        length++;

        // until balance closing
        if (token.balance <= startIdx) {
            break;
        }
    } while (token = getNextToken(length));

    return length;
}

// =========================
// Dimensions
//

function dimension(type) {
    return function(token, getNextToken, opts) {
        if (token === null || token.type !== TYPE.Dimension) {
            return 0;
        }

        var numberEnd = consumeNumber(token.value, 0);

        // check unit
        if (type !== null) {
            // check for IE postfix hack, i.e. 123px\0 or 123px\9
            var reverseSolidusOffset = token.value.indexOf('\\', numberEnd);
            var unit = reverseSolidusOffset === -1 || !isPostfixIeHack(token.value, reverseSolidusOffset)
                ? token.value.substr(numberEnd)
                : token.value.substring(numberEnd, reverseSolidusOffset);

            if (type.hasOwnProperty(unit.toLowerCase()) === false) {
                return 0;
            }
        }

        // check range if specified
        if (outOfRange(opts, token.value, numberEnd)) {
            return 0;
        }

        return 1;
    };
}

// =========================
// Percentage
//

// §5.5. Percentages: the <percentage> type
// https://drafts.csswg.org/css-values-4/#percentages
function percentage(token, getNextToken, opts) {
    // ... corresponds to the <percentage-token> production
    if (token === null || token.type !== TYPE.Percentage) {
        return 0;
    }

    // check range if specified
    if (outOfRange(opts, token.value, token.value.length - 1)) {
        return 0;
    }

    return 1;
}

// =========================
// Numeric
//

// https://drafts.csswg.org/css-values-4/#numbers
// The value <zero> represents a literal number with the value 0. Expressions that merely
// evaluate to a <number> with the value 0 (for example, calc(0)) do not match <zero>;
// only literal <number-token>s do.
function zero(next) {
    if (typeof next !== 'function') {
        next = function() {
            return 0;
        };
    }

    return function(token, getNextToken, opts) {
        if (token !== null && token.type === TYPE.Number) {
            if (Number(token.value) === 0) {
                return 1;
            }
        }

        return next(token, getNextToken, opts);
    };
}

// § 5.3. Real Numbers: the <number> type
// https://drafts.csswg.org/css-values-4/#numbers
// Number values are denoted by <number>, and represent real numbers, possibly with a fractional component.
// ... It corresponds to the <number-token> production
function number(token, getNextToken, opts) {
    if (token === null) {
        return 0;
    }

    var numberEnd = consumeNumber(token.value, 0);
    var isNumber = numberEnd === token.value.length;
    if (!isNumber && !isPostfixIeHack(token.value, numberEnd)) {
        return 0;
    }

    // check range if specified
    if (outOfRange(opts, token.value, numberEnd)) {
        return 0;
    }

    return 1;
}

// §5.2. Integers: the <integer> type
// https://drafts.csswg.org/css-values-4/#integers
function integer(token, getNextToken, opts) {
    // ... corresponds to a subset of the <number-token> production
    if (token === null || token.type !== TYPE.Number) {
        return 0;
    }

    // The first digit of an integer may be immediately preceded by `-` or `+` to indicate the integer’s sign.
    var i = token.value.charCodeAt(0) === 0x002B ||       // U+002B PLUS SIGN (+)
            token.value.charCodeAt(0) === 0x002D ? 1 : 0; // U+002D HYPHEN-MINUS (-)

    // When written literally, an integer is one or more decimal digits 0 through 9 ...
    for (; i < token.value.length; i++) {
        if (!isDigit(token.value.charCodeAt(i))) {
            return 0;
        }
    }

    // check range if specified
    if (outOfRange(opts, token.value, i)) {
        return 0;
    }

    return 1;
}

module.exports = {
    // token types
    'ident-token': tokenType(TYPE.Ident),
    'function-token': tokenType(TYPE.Function),
    'at-keyword-token': tokenType(TYPE.AtKeyword),
    'hash-token': tokenType(TYPE.Hash),
    'string-token': tokenType(TYPE.String),
    'bad-string-token': tokenType(TYPE.BadString),
    'url-token': tokenType(TYPE.Url),
    'bad-url-token': tokenType(TYPE.BadUrl),
    'delim-token': tokenType(TYPE.Delim),
    'number-token': tokenType(TYPE.Number),
    'percentage-token': tokenType(TYPE.Percentage),
    'dimension-token': tokenType(TYPE.Dimension),
    'whitespace-token': tokenType(TYPE.WhiteSpace),
    'CDO-token': tokenType(TYPE.CDO),
    'CDC-token': tokenType(TYPE.CDC),
    'colon-token': tokenType(TYPE.Colon),
    'semicolon-token': tokenType(TYPE.Semicolon),
    'comma-token': tokenType(TYPE.Comma),
    '[-token': tokenType(TYPE.LeftSquareBracket),
    ']-token': tokenType(TYPE.RightSquareBracket),
    '(-token': tokenType(TYPE.LeftParenthesis),
    ')-token': tokenType(TYPE.RightParenthesis),
    '{-token': tokenType(TYPE.LeftCurlyBracket),
    '}-token': tokenType(TYPE.RightCurlyBracket),

    // token type aliases
    'string': tokenType(TYPE.String),
    'ident': tokenType(TYPE.Ident),

    // complex types
    'custom-ident': customIdent,
    'custom-property-name': customPropertyName,
    'hex-color': hexColor,
    'id-selector': idSelector, // element( <id-selector> )
    'an-plus-b': anPlusB,
    'urange': urange,
    'declaration-value': declarationValue,
    'any-value': anyValue,

    // dimensions
    'dimension': calc(dimension(null)),
    'angle': calc(dimension(ANGLE)),
    'decibel': calc(dimension(DECIBEL)),
    'frequency': calc(dimension(FREQUENCY)),
    'flex': calc(dimension(FLEX)),
    'length': calc(zero(dimension(LENGTH))),
    'resolution': calc(dimension(RESOLUTION)),
    'semitones': calc(dimension(SEMITONES)),
    'time': calc(dimension(TIME)),

    // percentage
    'percentage': calc(percentage),

    // numeric
    'zero': zero(),
    'number': calc(number),
    'integer': calc(integer),

    // old IE stuff
    '-ms-legacy-expression': func('expression')
};

},{"../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","./generic-an-plus-b":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/generic-an-plus-b.js","./generic-urange":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/generic-urange.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/Lexer.js":[function(require,module,exports){
var SyntaxReferenceError = require('./error').SyntaxReferenceError;
var MatchError = require('./error').MatchError;
var names = require('../utils/names');
var generic = require('./generic');
var parse = require('../definition-syntax/parse');
var generate = require('../definition-syntax/generate');
var walk = require('../definition-syntax/walk');
var prepareTokens = require('./prepare-tokens');
var buildMatchGraph = require('./match-graph').buildMatchGraph;
var matchAsTree = require('./match').matchAsTree;
var trace = require('./trace');
var search = require('./search');
var getStructureFromConfig = require('./structure').getStructureFromConfig;
var cssWideKeywords = buildMatchGraph('inherit | initial | unset');
var cssWideKeywordsWithExpression = buildMatchGraph('inherit | initial | unset | <-ms-legacy-expression>');

function dumpMapSyntax(map, compact, syntaxAsAst) {
    var result = {};

    for (var name in map) {
        if (map[name].syntax) {
            result[name] = syntaxAsAst
                ? map[name].syntax
                : generate(map[name].syntax, { compact: compact });
        }
    }

    return result;
}

function valueHasVar(tokens) {
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].value.toLowerCase() === 'var(') {
            return true;
        }
    }

    return false;
}

function buildMatchResult(match, error, iterations) {
    return {
        matched: match,
        iterations: iterations,
        error: error,
        getTrace: trace.getTrace,
        isType: trace.isType,
        isProperty: trace.isProperty,
        isKeyword: trace.isKeyword
    };
}

function matchSyntax(lexer, syntax, value, useCommon) {
    var tokens = prepareTokens(value, lexer.syntax);
    var result;

    if (valueHasVar(tokens)) {
        return buildMatchResult(null, new Error('Matching for a tree with var() is not supported'));
    }

    if (useCommon) {
        result = matchAsTree(tokens, lexer.valueCommonSyntax, lexer);
    }

    if (!useCommon || !result.match) {
        result = matchAsTree(tokens, syntax.match, lexer);
        if (!result.match) {
            return buildMatchResult(
                null,
                new MatchError(result.reason, syntax.syntax, value, result),
                result.iterations
            );
        }
    }

    return buildMatchResult(result.match, null, result.iterations);
}

var Lexer = function(config, syntax, structure) {
    this.valueCommonSyntax = cssWideKeywords;
    this.syntax = syntax;
    this.generic = false;
    this.atrules = {};
    this.properties = {};
    this.types = {};
    this.structure = structure || getStructureFromConfig(config);

    if (config) {
        if (config.types) {
            for (var name in config.types) {
                this.addType_(name, config.types[name]);
            }
        }

        if (config.generic) {
            this.generic = true;
            for (var name in generic) {
                this.addType_(name, generic[name]);
            }
        }

        if (config.atrules) {
            for (var name in config.atrules) {
                this.addAtrule_(name, config.atrules[name]);
            }
        }

        if (config.properties) {
            for (var name in config.properties) {
                this.addProperty_(name, config.properties[name]);
            }
        }
    }
};

Lexer.prototype = {
    structure: {},
    checkStructure: function(ast) {
        function collectWarning(node, message) {
            warns.push({
                node: node,
                message: message
            });
        }

        var structure = this.structure;
        var warns = [];

        this.syntax.walk(ast, function(node) {
            if (structure.hasOwnProperty(node.type)) {
                structure[node.type].check(node, collectWarning);
            } else {
                collectWarning(node, 'Unknown node type `' + node.type + '`');
            }
        });

        return warns.length ? warns : false;
    },

    createDescriptor: function(syntax, type, name) {
        var ref = {
            type: type,
            name: name
        };
        var descriptor = {
            type: type,
            name: name,
            syntax: null,
            match: null
        };

        if (typeof syntax === 'function') {
            descriptor.match = buildMatchGraph(syntax, ref);
        } else {
            if (typeof syntax === 'string') {
                // lazy parsing on first access
                Object.defineProperty(descriptor, 'syntax', {
                    get: function() {
                        Object.defineProperty(descriptor, 'syntax', {
                            value: parse(syntax)
                        });

                        return descriptor.syntax;
                    }
                });
            } else {
                descriptor.syntax = syntax;
            }

            // lazy graph build on first access
            Object.defineProperty(descriptor, 'match', {
                get: function() {
                    Object.defineProperty(descriptor, 'match', {
                        value: buildMatchGraph(descriptor.syntax, ref)
                    });

                    return descriptor.match;
                }
            });
        }

        return descriptor;
    },
    addAtrule_: function(name, syntax) {
        this.atrules[name] = {
            prelude: syntax.prelude ? this.createDescriptor(syntax.prelude, 'AtrulePrelude', name) : null,
            descriptors: syntax.descriptors
                ? Object.keys(syntax.descriptors).reduce((res, name) => {
                    res[name] = this.createDescriptor(syntax.descriptors[name], 'AtruleDescriptor', name);
                    return res;
                }, {})
                : null
        };
    },
    addProperty_: function(name, syntax) {
        this.properties[name] = this.createDescriptor(syntax, 'Property', name);
    },
    addType_: function(name, syntax) {
        this.types[name] = this.createDescriptor(syntax, 'Type', name);

        if (syntax === generic['-ms-legacy-expression']) {
            this.valueCommonSyntax = cssWideKeywordsWithExpression;
        }
    },

    matchAtrulePrelude: function(atruleName, prelude) {
        var atrule = names.keyword(atruleName);

        var atrulePreludeSyntax = atrule.vendor
            ? this.getAtrulePrelude(atrule.name) || this.getAtrulePrelude(atrule.basename)
            : this.getAtrulePrelude(atrule.name);

        if (!atrulePreludeSyntax) {
            if (atrule.basename in this.atrules) {
                return buildMatchResult(null, new Error('At-rule `' + atruleName + '` should not contain a prelude'));
            }

            return buildMatchResult(null, new SyntaxReferenceError('Unknown at-rule', atruleName));
        }

        return matchSyntax(this, atrulePreludeSyntax, prelude, true);
    },
    matchAtruleDescriptor: function(atruleName, descriptorName, value) {
        var atrule = names.keyword(atruleName);
        var descriptor = names.keyword(descriptorName);

        var atruleEntry = atrule.vendor
            ? this.atrules[atrule.name] || this.atrules[atrule.basename]
            : this.atrules[atrule.name];

        if (!atruleEntry) {
            return buildMatchResult(null, new SyntaxReferenceError('Unknown at-rule', atruleName));
        }

        if (!atruleEntry.descriptors) {
            return buildMatchResult(null, new Error('At-rule `' + atruleName + '` has no known descriptors'));
        }

        var atruleDescriptorSyntax = descriptor.vendor
            ? atruleEntry.descriptors[descriptor.name] || atruleEntry.descriptors[descriptor.basename]
            : atruleEntry.descriptors[descriptor.name];

        if (!atruleDescriptorSyntax) {
            return buildMatchResult(null, new SyntaxReferenceError('Unknown at-rule descriptor', descriptorName));
        }

        return matchSyntax(this, atruleDescriptorSyntax, value, true);
    },
    matchDeclaration: function(node) {
        if (node.type !== 'Declaration') {
            return buildMatchResult(null, new Error('Not a Declaration node'));
        }

        return this.matchProperty(node.property, node.value);
    },
    matchProperty: function(propertyName, value) {
        var property = names.property(propertyName);

        // don't match syntax for a custom property
        if (property.custom) {
            return buildMatchResult(null, new Error('Lexer matching doesn\'t applicable for custom properties'));
        }

        var propertySyntax = property.vendor
            ? this.getProperty(property.name) || this.getProperty(property.basename)
            : this.getProperty(property.name);

        if (!propertySyntax) {
            return buildMatchResult(null, new SyntaxReferenceError('Unknown property', propertyName));
        }

        return matchSyntax(this, propertySyntax, value, true);
    },
    matchType: function(typeName, value) {
        var typeSyntax = this.getType(typeName);

        if (!typeSyntax) {
            return buildMatchResult(null, new SyntaxReferenceError('Unknown type', typeName));
        }

        return matchSyntax(this, typeSyntax, value, false);
    },
    match: function(syntax, value) {
        if (typeof syntax !== 'string' && (!syntax || !syntax.type)) {
            return buildMatchResult(null, new SyntaxReferenceError('Bad syntax'));
        }

        if (typeof syntax === 'string' || !syntax.match) {
            syntax = this.createDescriptor(syntax, 'Type', 'anonymous');
        }

        return matchSyntax(this, syntax, value, false);
    },

    findValueFragments: function(propertyName, value, type, name) {
        return search.matchFragments(this, value, this.matchProperty(propertyName, value), type, name);
    },
    findDeclarationValueFragments: function(declaration, type, name) {
        return search.matchFragments(this, declaration.value, this.matchDeclaration(declaration), type, name);
    },
    findAllFragments: function(ast, type, name) {
        var result = [];

        this.syntax.walk(ast, {
            visit: 'Declaration',
            enter: function(declaration) {
                result.push.apply(result, this.findDeclarationValueFragments(declaration, type, name));
            }.bind(this)
        });

        return result;
    },

    getAtrulePrelude: function(atruleName) {
        return this.atrules.hasOwnProperty(atruleName) ? this.atrules[atruleName].prelude : null;
    },
    getAtruleDescriptor: function(atruleName, name) {
        return this.atrules.hasOwnProperty(atruleName) && this.atrules.declarators
            ? this.atrules[atruleName].declarators[name] || null
            : null;
    },
    getProperty: function(name) {
        return this.properties.hasOwnProperty(name) ? this.properties[name] : null;
    },
    getType: function(name) {
        return this.types.hasOwnProperty(name) ? this.types[name] : null;
    },

    validate: function() {
        function validate(syntax, name, broken, descriptor) {
            if (broken.hasOwnProperty(name)) {
                return broken[name];
            }

            broken[name] = false;
            if (descriptor.syntax !== null) {
                walk(descriptor.syntax, function(node) {
                    if (node.type !== 'Type' && node.type !== 'Property') {
                        return;
                    }

                    var map = node.type === 'Type' ? syntax.types : syntax.properties;
                    var brokenMap = node.type === 'Type' ? brokenTypes : brokenProperties;

                    if (!map.hasOwnProperty(node.name) || validate(syntax, node.name, brokenMap, map[node.name])) {
                        broken[name] = true;
                    }
                }, this);
            }
        }

        var brokenTypes = {};
        var brokenProperties = {};

        for (var key in this.types) {
            validate(this, key, brokenTypes, this.types[key]);
        }

        for (var key in this.properties) {
            validate(this, key, brokenProperties, this.properties[key]);
        }

        brokenTypes = Object.keys(brokenTypes).filter(function(name) {
            return brokenTypes[name];
        });
        brokenProperties = Object.keys(brokenProperties).filter(function(name) {
            return brokenProperties[name];
        });

        if (brokenTypes.length || brokenProperties.length) {
            return {
                types: brokenTypes,
                properties: brokenProperties
            };
        }

        return null;
    },
    dump: function(syntaxAsAst, pretty) {
        return {
            generic: this.generic,
            types: dumpMapSyntax(this.types, !pretty, syntaxAsAst),
            properties: dumpMapSyntax(this.properties, !pretty, syntaxAsAst)
        };
    },
    toString: function() {
        return JSON.stringify(this.dump());
    }
};

module.exports = Lexer;

},{"../definition-syntax/generate":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/generate.js","../definition-syntax/parse":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/parse.js","../definition-syntax/walk":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/walk.js","../utils/names":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/names.js","./error":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/error.js","./generic":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/generic.js","./match":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/match.js","./match-graph":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/match-graph.js","./prepare-tokens":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/prepare-tokens.js","./search":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/search.js","./structure":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/structure.js","./trace":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/trace.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/default.js":[function(require,module,exports){
var cmpChar = require('../../tokenizer').cmpChar;
var cmpStr = require('../../tokenizer').cmpStr;
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var STRING = TYPE.String;
var NUMBER = TYPE.Number;
var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var HASH = TYPE.Hash;
var DIMENSION = TYPE.Dimension;
var PERCENTAGE = TYPE.Percentage;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var COMMA = TYPE.Comma;
var DELIM = TYPE.Delim;
var NUMBERSIGN = 0x0023;  // U+0023 NUMBER SIGN (#)
var ASTERISK = 0x002A;    // U+002A ASTERISK (*)
var PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
var SOLIDUS = 0x002F;     // U+002F SOLIDUS (/)
var U = 0x0075;           // U+0075 LATIN SMALL LETTER U (u)

module.exports = function defaultRecognizer(context) {
    switch (this.scanner.tokenType) {
        case HASH:
            return this.HexColor();

        case COMMA:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Operator();

        case LEFTPARENTHESIS:
            return this.Parentheses(this.readSequence, context.recognizer);

        case LEFTSQUAREBRACKET:
            return this.Brackets(this.readSequence, context.recognizer);

        case STRING:
            return this.String();

        case DIMENSION:
            return this.Dimension();

        case PERCENTAGE:
            return this.Percentage();

        case NUMBER:
            return this.Number();

        case FUNCTION:
            return cmpStr(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')
                ? this.Url()
                : this.Function(this.readSequence, context.recognizer);

        case URL:
            return this.Url();

        case IDENT:
            // check for unicode range, it should start with u+ or U+
            if (cmpChar(this.scanner.source, this.scanner.tokenStart, U) &&
                cmpChar(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }

        case DELIM:
            var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

            if (code === SOLIDUS ||
                code === ASTERISK ||
                code === PLUSSIGN ||
                code === HYPHENMINUS) {
                return this.Operator(); // TODO: replace with Delim
            }

            // TODO: produce a node with Delim node type

            if (code === NUMBERSIGN) {
                this.error('Hex or identifier is expected', this.scanner.tokenStart + 1);
            }

            break;
    }
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/atrulePrelude.js":[function(require,module,exports){
module.exports = {
    getNode: require('./default')
};

},{"./default":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/default.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/function/var.js":[function(require,module,exports){
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('../node/Raw').mode;

var COMMA = TYPE.Comma;

// var( <ident> , <value>? )
module.exports = function() {
    var children = this.createList();

    this.scanner.skipSC();

    // NOTE: Don't check more than a first argument is an ident, rest checks are for lexer
    children.push(this.Identifier());

    this.scanner.skipSC();

    if (this.scanner.tokenType === COMMA) {
        children.push(this.Operator());
        children.push(this.parseCustomProperty
            ? this.Value(null)
            : this.Raw(this.scanner.tokenIndex, rawMode.exclamationMarkOrSemicolon, false)
        );
    }

    return children;
};

},{"../../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","../node/Raw":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/Raw.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/value.js":[function(require,module,exports){
module.exports = {
    getNode: require('./default'),
    '-moz-element': require('../function/element'),
    'element': require('../function/element'),
    'expression': require('../function/expression'),
    'var': require('../function/var')
};

},{"../function/element":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/function/element.js","../function/expression":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/function/expression.js","../function/var":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/function/var.js","./default":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/default.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/index.js":[function(require,module,exports){
module.exports = {
    AtrulePrelude: require('./atrulePrelude'),
    Selector: require('./selector'),
    Value: require('./value')
};

},{"./atrulePrelude":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/atrulePrelude.js","./selector":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/selector.js","./value":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/value.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/parser.js":[function(require,module,exports){
module.exports = {
    parseContext: {
        default: 'StyleSheet',
        stylesheet: 'StyleSheet',
        atrule: 'Atrule',
        atrulePrelude: function(options) {
            return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: 'MediaQueryList',
        mediaQuery: 'MediaQuery',
        rule: 'Rule',
        selectorList: 'SelectorList',
        selector: 'Selector',
        block: function() {
            return this.Block(true);
        },
        declarationList: 'DeclarationList',
        declaration: 'Declaration',
        value: 'Value'
    },
    scope: require('../scope'),
    atrule: require('../atrule'),
    pseudo: require('../pseudo'),
    node: require('../node')
};

},{"../atrule":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/atrule/index.js","../node":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/node/index.js","../pseudo":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/pseudo/index.js","../scope":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/scope/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/util.js":[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/array-set.js":[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

},{"./util":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/util.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/mapping-list.js":[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = require('./util');

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;

},{"./util":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/util.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/base64.js":[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

},{}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/base64-vlq.js":[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = require('./base64');

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

},{"./base64":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/base64.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/source-map-generator.js":[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = require('./base64-vlq');
var util = require('./util');
var ArraySet = require('./array-set').ArraySet;
var MappingList = require('./mapping-list').MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;

},{"./array-set":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/array-set.js","./base64-vlq":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/base64-vlq.js","./mapping-list":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/mapping-list.js","./util":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/util.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/generator/sourceMap.js":[function(require,module,exports){
var SourceMapGenerator = require('source-map/lib/source-map-generator').SourceMapGenerator;
var trackNodes = {
    Atrule: true,
    Selector: true,
    Declaration: true
};

module.exports = function generateSourceMap(handlers) {
    var map = new SourceMapGenerator();
    var line = 1;
    var column = 0;
    var generated = {
        line: 1,
        column: 0
    };
    var original = {
        line: 0, // should be zero to add first mapping
        column: 0
    };
    var sourceMappingActive = false;
    var activatedGenerated = {
        line: 1,
        column: 0
    };
    var activatedMapping = {
        generated: activatedGenerated
    };

    var handlersNode = handlers.node;
    handlers.node = function(node) {
        if (node.loc && node.loc.start && trackNodes.hasOwnProperty(node.type)) {
            var nodeLine = node.loc.start.line;
            var nodeColumn = node.loc.start.column - 1;

            if (original.line !== nodeLine ||
                original.column !== nodeColumn) {
                original.line = nodeLine;
                original.column = nodeColumn;

                generated.line = line;
                generated.column = column;

                if (sourceMappingActive) {
                    sourceMappingActive = false;
                    if (generated.line !== activatedGenerated.line ||
                        generated.column !== activatedGenerated.column) {
                        map.addMapping(activatedMapping);
                    }
                }

                sourceMappingActive = true;
                map.addMapping({
                    source: node.loc.source,
                    original: original,
                    generated: generated
                });
            }
        }

        handlersNode.call(this, node);

        if (sourceMappingActive && trackNodes.hasOwnProperty(node.type)) {
            activatedGenerated.line = line;
            activatedGenerated.column = column;
        }
    };

    var handlersChunk = handlers.chunk;
    handlers.chunk = function(chunk) {
        for (var i = 0; i < chunk.length; i++) {
            if (chunk.charCodeAt(i) === 10) { // \n
                line++;
                column = 0;
            } else {
                column++;
            }
        }

        handlersChunk(chunk);
    };

    var handlersResult = handlers.result;
    handlers.result = function() {
        if (sourceMappingActive) {
            map.addMapping(activatedMapping);
        }

        return {
            css: handlersResult(),
            map: map
        };
    };

    return handlers;
};

},{"source-map/lib/source-map-generator":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/node_modules/source-map/lib/source-map-generator.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/generator/create.js":[function(require,module,exports){
var sourceMap = require('./sourceMap');
var hasOwnProperty = Object.prototype.hasOwnProperty;

function processChildren(node, delimeter) {
    var list = node.children;
    var prev = null;

    if (typeof delimeter !== 'function') {
        list.forEach(this.node, this);
    } else {
        list.forEach(function(node) {
            if (prev !== null) {
                delimeter.call(this, prev);
            }

            this.node(node);
            prev = node;
        }, this);
    }
}

module.exports = function createGenerator(config) {
    function processNode(node) {
        if (hasOwnProperty.call(types, node.type)) {
            types[node.type].call(this, node);
        } else {
            throw new Error('Unknown node type: ' + node.type);
        }
    }

    var types = {};

    if (config.node) {
        for (var name in config.node) {
            types[name] = config.node[name].generate;
        }
    }

    return function(node, options) {
        var buffer = '';
        var handlers = {
            children: processChildren,
            node: processNode,
            chunk: function(chunk) {
                buffer += chunk;
            },
            result: function() {
                return buffer;
            }
        };

        if (options) {
            if (typeof options.decorator === 'function') {
                handlers = options.decorator(handlers);
            }

            if (options.sourceMap) {
                handlers = sourceMap(handlers);
            }
        }

        handlers.node(node);

        return handlers.result();
    };
};

},{"./sourceMap":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/generator/sourceMap.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/create.js":[function(require,module,exports){
var List = require('../common/List');
var SyntaxError = require('../common/SyntaxError');
var TokenStream = require('../common/TokenStream');
var Lexer = require('../lexer/Lexer');
var definitionSyntax = require('../definition-syntax');
var tokenize = require('../tokenizer');
var createParser = require('../parser/create');
var createGenerator = require('../generator/create');
var createConvertor = require('../convertor/create');
var createWalker = require('../walker/create');
var clone = require('../utils/clone');
var names = require('../utils/names');
var mix = require('./config/mix');

function createSyntax(config) {
    var parse = createParser(config);
    var walk = createWalker(config);
    var generate = createGenerator(config);
    var convert = createConvertor(walk);

    var syntax = {
        List: List,
        SyntaxError: SyntaxError,
        TokenStream: TokenStream,
        Lexer: Lexer,

        vendorPrefix: names.vendorPrefix,
        keyword: names.keyword,
        property: names.property,
        isCustomProperty: names.isCustomProperty,

        definitionSyntax: definitionSyntax,
        lexer: null,
        createLexer: function(config) {
            return new Lexer(config, syntax, syntax.lexer.structure);
        },

        tokenize: tokenize,
        parse: parse,
        walk: walk,
        generate: generate,

        find: walk.find,
        findLast: walk.findLast,
        findAll: walk.findAll,

        clone: clone,
        fromPlainObject: convert.fromPlainObject,
        toPlainObject: convert.toPlainObject,

        createSyntax: function(config) {
            return createSyntax(mix({}, config));
        },
        fork: function(extension) {
            var base = mix({}, config); // copy of config
            return createSyntax(
                typeof extension === 'function'
                    ? extension(base, Object.assign)
                    : mix(base, extension)
            );
        }
    };

    syntax.lexer = new Lexer({
        generic: true,
        types: config.types,
        atrules: config.atrules,
        properties: config.properties,
        node: config.node
    }, syntax);

    return syntax;
};

exports.create = function(config) {
    return createSyntax(mix({}, config));
};

},{"../common/List":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/List.js","../common/SyntaxError":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/SyntaxError.js","../common/TokenStream":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/common/TokenStream.js","../convertor/create":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/convertor/create.js","../definition-syntax":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/definition-syntax/index.js","../generator/create":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/generator/create.js","../lexer/Lexer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/lexer/Lexer.js","../parser/create":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/parser/create.js","../tokenizer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/tokenizer/index.js","../utils/clone":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/clone.js","../utils/names":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/utils/names.js","../walker/create":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/walker/create.js","./config/mix":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/mix.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/index.js":[function(require,module,exports){
function merge() {
    var dest = {};

    for (var i = 0; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
}

module.exports = require('./create').create(
    merge(
        require('./config/lexer'),
        require('./config/parser'),
        require('./config/walker')
    )
);

},{"./config/lexer":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/lexer.js","./config/parser":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/parser.js","./config/walker":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/config/walker.js","./create":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/create.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/index.js":[function(require,module,exports){
module.exports = require('./syntax');

},{"./syntax":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/syntax/index.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/index.js":[function(require,module,exports){
'';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-82a4407b.js');
require('clivi');
var Form = require('./Form-67d3128d.js');
require('lodash/words');
var classList = require('./classList-f68ba567.js');
require('dompurify');
require('stylis');
require('css-tree');

/*
polyfillLoader.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles loading of the polyfill
loader...

Eric James Foster, MIT License.
*/
(function () {
  // The polyfill CDN url...
  var polyfillCDN = 'https://cdn.rawgit.com/webcomponents/custom-elements/4f7072c0/custom-elements.min.js'; // A function for loading the native-shim....

  function loadPolyfill() {
    return new Promise(function (resolve, reject) {
      var // Create and config script...
      script = document.createElement('script');
      script.src = polyfillCDN;
      script.type = 'text/javascript';
      script.onload = resolve;
      script.onerror = reject; // Append to the DOM...

      document.head.append(script);
    });
  } // Check for existence of customElements API, and load shim or not...


  if (window.customElements) {
    return;
  } else {
    // Load the shim...
    loadPolyfill().then(function (result) {
      console.log('loading polyfill');
      console.dir(result);
    });
  }
})();

/*
shimLoader.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles loading of the native-shim
dynamic loader...

Eric James Foster, MIT License.
*/

(function () {
  // native shim, remote src...
  var shimRemoteSrc = 'https://cdn.jsdelivr.net/gh/ejames9/Algorithms@837db14f7cdb1320db956888960f97cad3b37ef1/Resources/valenceNativeShim.js'; // A function for loading the native-shim....

  function loadNativeShim(src) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return new Promise(function (resolve, reject) {
      var // Create and config script...
      script = document.createElement('script');

      if (src) {
        script.src = src;
      }

      script.onload = resolve;
      script.onerror = reject;

      if (text) {
        script.textContent = text;
      } // Append to the DOM just after the previously loaded inline script...


      document.head.append(script);
    });
  } // Check for existence of customElements API, and load shim or not...


  if (!window.customElements) {
    return;
  } else {
    // Load the shim...
    loadNativeShim(shimRemoteSrc).then(function (result) {
      Form.dir(result); // Confirm load with following function that is defined on the window object
      // in the shim...

      supportLoaded();
    });
  }
})();

/*
MountingError.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file contains the framework's custom
MountingError...

Eric James Foster, MIT License.
*/
var MountingError =
/*#__PURE__*/
function () {
  function MountingError() {
    _rollupPluginBabelHelpers._classCallCheck(this, MountingError);
  }

  _rollupPluginBabelHelpers._createClass(MountingError, null, [{
    key: "Failure",
    // A custom error, thrown when a component fails to mount properly...
    get: function get() {
      // Return new error...
      return new Error('MountingError: There is no component mounted.');
    } // A custom error, thrown when there is an unknown error during the mounting process...

  }, {
    key: "Unknown",
    get: function get() {
      // Return new error...
      return new Error('MountingError: There was an unknown error during the mounting process.');
    }
  }]);

  return MountingError;
}();

/*
UnountingError.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file contains the framework's custom
MountingError...

Eric James Foster, MIT License.
*/
var UnmountError =
/*#__PURE__*/
function () {
  function UnmountError() {
    _rollupPluginBabelHelpers._classCallCheck(this, UnmountError);
  }

  _rollupPluginBabelHelpers._createClass(UnmountError, null, [{
    key: "NoComponentMounted",
    // A custom error, thrown when an unmounted component is attempted to unmount...
    get: function get() {
      // Return new error...
      return new Error('UnmountError: There is no component mounted.');
    } // A custom error, thrown when there is an unknown error during the umount process...

  }, {
    key: "Unknown",
    get: function get() {
      // Return new error...
      return new Error('UnmountError: There was an unknown error during the unmount process.');
    }
  }]);

  return UnmountError;
}();

/*
UpdateError.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file contains the framework's custom
UpdateError...

Eric James Foster, MIT License.
*/
var UpdateError =
/*#__PURE__*/
function () {
  function UpdateError() {
    _rollupPluginBabelHelpers._classCallCheck(this, UpdateError);
  }

  _rollupPluginBabelHelpers._createClass(UpdateError, null, [{
    key: "Failure",
    // A custom error, thrown when a component fails to update properly...
    get: function get() {
      // Return new error...
      return new Error('UpdateError: The component update failed.');
    } // A custom error, thrown when there is an unknown error during the mounting process...

  }, {
    key: "Unknown",
    get: function get() {
      // Return new error...
      return new Error('UpdateError: There was an unknown error during the update process.');
    }
  }]);

  return UpdateError;
}();

var Errors = function Errors() {
  _rollupPluginBabelHelpers._classCallCheck(this, Errors);
};

_rollupPluginBabelHelpers._defineProperty(Errors, "MountingFailure", MountingError.Failure);

_rollupPluginBabelHelpers._defineProperty(Errors, "UnknownMounting", MountingError.Unknown);

_rollupPluginBabelHelpers._defineProperty(Errors, "NoMountedUnmount", UnmountError.NoComponentMounted);

_rollupPluginBabelHelpers._defineProperty(Errors, "UnknownUnmount", UnmountError.Unknown);

_rollupPluginBabelHelpers._defineProperty(Errors, "UpdateFailure", UpdateError.Failure);

_rollupPluginBabelHelpers._defineProperty(Errors, "UnknownUpdate", UpdateError.Unknown);

window.valenceGlobals = {}; // Initializing an array for Flare component tag names...

window.valenceGlobals.flareComponents = {}; // window.valenceGlobals.webComponents = {}
// window.valenceGlobals.valenceComponents = []

window.valenceGlobals.componentRegister = []; // Initializing an array for all stateless instantiated component tag names...

window.valenceGlobals.statelessComponents = []; // initialize global flags...

window.valenceGlobals.valence = true;
window.valenceGlobals.rootNodeDefined = false;
window.valenceGlobals.rootComponentMounted = false;
window.valenceGlobals.polyfillLoaded = false; // If the 'webComponentsLoaded' flag is not set, set it.....

if (!valenceGlobals.webComponentsLoaded) {
  window.valenceGlobals.webComponentsLoaded = false;
} // Provide access to PropTypes...


window.PropTypes = Form.PropTypes; // Provide `jsx to vDOM`, x(), function...

window.x = Form.Form.x; // Globalize Flare library...

window.flare = Form.Flare; // Creating utils collection for export....

var _ = {
  DOM: {
    el: Form.queryDOM,
    addClass: classList.addClass,
    removeClass: classList.removeClass,
    listContains: classList.listContains,
    replaceClass: classList.replaceClass
  },
  log: Form.log,
  dir: Form.dir,
  mergeData: Form.mergeData,
  is: Form.Is
}; // The framework's API class...

var Valence =
/*#__PURE__*/
function () {
  function Valence() {
    _rollupPluginBabelHelpers._classCallCheck(this, Valence);

    _rollupPluginBabelHelpers._defineProperty(this, "Component", Form.ValenceComponent);

    _rollupPluginBabelHelpers._defineProperty(this, "Errors", Errors);

    _rollupPluginBabelHelpers._defineProperty(this, "rootComponentMounted", false);

    _rollupPluginBabelHelpers._defineProperty(this, "componentRoot", null);

    _rollupPluginBabelHelpers._defineProperty(this, "rootComponent", null);

    _rollupPluginBabelHelpers._defineProperty(this, "rootNode", null);

    _rollupPluginBabelHelpers._defineProperty(this, "form", null);

    _rollupPluginBabelHelpers._defineProperty(this, "_assumptions", {
      cornDogCase: false
    });
  }

  _rollupPluginBabelHelpers._createClass(Valence, [{
    key: "_setAssumptions",

    /*
     * Class Methods...
     */
    // A private method for setting library user assumptions...
    value: function _setAssumptions(assumptions) {
      // If we have the global functions option set to true.....
      if (assumptions.globalFunctions) {
        // Globalize Flare functions for convenience...
        window.global = flare.global;
        window.extend = flare.extend;
        window.keyframes = flare.keyframes; // Globalize style elements for convenience...

        window.div = flare.div;
        window.aside = flare.aside;
        window.area = flare.area;
        window.button = flare.button;
        window.col = flare.col;
        window.colgroup = flare.colgroup;
        window.header = flare.header;
        window.footer = flare.footer;
        window.input = flare.input;
        window.h1 = flare.h1;
        window.h2 = flare.h2;
        window.h3 = flare.h3;
        window.h4 = flare.h4;
        window.h5 = flare.h5;
        window.h6 = flare.h6;
        window.p = flare.p;
        window.section = flare.section;
        window.span = flare.span;
        window.table = flare.table;
        window.textarea = flare.textarea; // Globalize style elements for WebComponents...

        window.Flyer = flare.Flyer;
      } // If underscore abbreviation for global insertion option is set to true....


      if (assumptions.underscoreGlobal) {
        // Abbreviate flare.global...
        window.__ = flare.global;
      } // Syntax highlighting....


      if (assumptions.syntaxHighlighting) {
        window.styled = flare;
      }

      return assumptions;
    } // A public helper method for setting Flare assumptions, config options...

  }, {
    key: "set",
    value: function set(userAssumptions) {
      return this._setAssumptions(Form.Flare.set(Form.mergeData(this._assumptions, userAssumptions)));
    } // Method for converting virtual dom to real dom...

  }, {
    key: "realize",
    value: function realize(node, ground) {
      var _this = this;

      // Set component root and root component properties...
      this.groundElement = ground;
      this.rootNode = node;
      this.rootNode.props.rootNode = true; // Create new virtual DOM and mount the root component...

      var mount = function mount() {
        // Get new vDOM and draw tree...
        _this.form = new Form.Form(_this.rootNode, ground); // Give this.form to this.Component...

        _this.Component.form = _this.form; // Convert virtual DOM to actual DOM...

        _this.rootComponent = _this.form.realize(); // Mount on Valence root node...

        root.appendChild(_this.rootComponent); // Confirm component mounted...

        valenceGlobals.rootComponentMounted = true;
      }; // Method for effeciently updating the UI of the Valence application. It is a
      // link to Form DOM's updateElement method...


      var update = function update() {
        return _this.form.updateDOM(ground, _this.rootNode);
      }; // If no component is mounted, mount component. Otherwise
      // update the component...


      if (!valenceGlobals.rootComponentMounted) {
        if (valenceGlobals.webComponentsLoaded) {
          // Mount rootnode....
          mount();
        } else {
          // If we don't have web component support code loaded, set a listener, and mount when
          // the wCLoaded event fires.....
          document.addEventListener('webComponentsLoaded', function (e) {
            if (!valenceGlobals.rootComponentMounted) mount();
          });
        }
      } else {
        Form.log('UPDATING', 'yellow');

        try {
          update();
        } catch (err) {
          console.error("UpdateError: ".concat(err.message));
        }
      }
    } // Method for unmounting the given component at the given node...

  }, {
    key: "unMount",
    value: function unMount() {
      if (valenceGlobals.rootComponentMounted) {
        // Fire componentWillUnmount event, then remove component...
        Form.Events.fire('componentWillUnmount', this.rootComponent);
        this.rootComponent.remove(); // Remove the #valence-stylesheet, if present.....

        var valenceStyles; // Using a try/catch here, just in case there is not stylesheet present......

        try {
          valenceStyles = _.DOM.el('#valence-stylesheet');
        } catch (e) {
          Form.log('Valence stylesheet not present.', 'yellow');
        } // If we were successfull in grabbing the stylesheet.....


        if (!!valenceStyles) {
          // Delete it....
          valenceStyles.remove();
          Form.log('Valence stylesheet removed.', 'yellow');
        } //NOTE: Do not need this for now.....
        // Set a flag for the unmounted root component....
        // valenceGlobals.rootComponentUnmounting = true
        // Set a flag to signal a valence stylesheet reset...


        valenceGlobals.resetStyleSheet = true; // Reset componentMounted flag...

        valenceGlobals.rootComponentMounted = false;
      } else {
        try {
          throw this.Errors.UnmountError;
        } catch (err) {
          console.error(err.message);
        }
      }
    } // A very complex, magical method for dealing with Valence.Fragment's.....

  }, {
    key: "Fragment",
    value: function Fragment() {
      return;
    }
  }]);

  return Valence;
}();
/*
**
** Library Exports.....
*/
// Instantiate Valence for export.....


var valence = new Valence(); // Set the unMount function on the global var..........

valenceGlobals.unMountAtGround = valence.unMount.bind(valence); // Export instantiated Valence as default....
/*
Jesus Christ is King!
*/

exports.Component = Form.ValenceComponent;
exports.css = Form.css;
exports._ = _;
exports.default = valence;

},{"./Form-67d3128d.js":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/Form-67d3128d.js","./_rollupPluginBabelHelpers-82a4407b.js":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/_rollupPluginBabelHelpers-82a4407b.js","./classList-f68ba567.js":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/classList-f68ba567.js","clivi":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/clivi/index.js","css-tree":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/css-tree/lib/index.js","dompurify":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/dompurify/dist/purify.js","lodash/words":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/lodash/words.js","stylis":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/stylis/stylis.js"}],"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/MixoCalculator.jsx":[function(require,module,exports){
"";

var _index = _interopRequireWildcard(require("../../node_modules/valencejs/cjs/index.js"));

var _Ops = _interopRequireDefault(require("./Math/Ops"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-top: 3rem;\n  justify-content: center;\n\n  .calculator {\n    display: flex;\n    width: 35%;\n    flex-direction: column;\n    padding: 2.5rem 1.5rem;\n    background: green;\n    border: 1px solid #161616;\n    border-radius: 10px;\n\n    .inputs {\n      display: flex;\n      width: 100%;\n      justify-content: space-around;\n\n      .input {\n        background: #161616;\n        color: #9a9a9a;\n        width: 25%;\n        height: 2.5rem;\n        font-size: 1.8rem;\n        border: none;\n        border-radius: 8px;\n        text-align: center;\n      }\n\n      /* .input::placeholder {\n        position: relative;\n        bottom: .3rem;\n        font-size: 1.2rem;\n      } */\n    }\n\n    .btns {\n      display: flex;\n      width: 100%;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.3rem;\n      margin-bottom: 1.3rem;\n\n      .btn {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        max-height: 5%;\n        padding: .5rem  1rem;\n        background: #585858;\n        color: #161616;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        font-size: 1.8rem;\n        cursor: pointer;\n\n        &:hover {\n          background: #161616;\n          color: #dedede;\n        }\n\n        &:active {\n          background: #dedede;\n          color: #161616;\n          box-shadow: 0px 0px 0px 1px #161616 inset;\n        }\n      }\n\n      .add-btn {\n        font-size: 2rem;\n      }\n    }\n\n    .res {\n      display: flex;\n      width: 100%;\n      justify-content: center;\n\n      .input {\n        background: #161616;\n        color: #9a9a9a;\n        width: 25%;\n        height: 2.5rem;\n        font-size: 1.8rem;\n        border: none;\n        border-radius: 8px;\n        text-align: center;\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n\n  .card {\n    display: flex;\n    flex-direction: column;\n    width: 45%;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem;\n    background: blue;\n    border: 1px solid #161616;\n    border-radius: 12px;\n  }\n\n  h1.name {\n    font-size: 4rem;\n    font-weight: 600;\n    color: #373737;\n    margin-bottom: 0;\n  }\n\n  h3 {\n    font-size: 1.35rem;\n    color: #585858;\n    margin-bottom: 0;\n  }\n\n  p {\n    font-size: 1rem;\n    color: #9a9a9a;\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    font-size: 16px;\n    font-family: Raleway;\n    background: #161616;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var log = _index._.log;
var dir = _index._.dir;
var el = _index._.DOM.el;

_index["default"].set({
  developmentMode: true,
  shadowByDefault: false,
  underscoreGlobal: true,
  directChildNesting: true,
  kebabCase: false,
  syntaxHighlighting: true
});

styled.global(_templateObject());

var JumboStyler = function JumboStyler() {
  return styled.div(_templateObject2());
};

var CalcStyler = function CalcStyler() {
  return styled.div(_templateObject3());
};

function Jumbotron() {
  return x(JumboStyler, {
    className: "container mixo"
  }, x("div", {
    className: "card"
  }, x("h1", {
    className: "name"
  }, "Mixolydian.js"), x("h3", {
    className: "title"
  }, "A Fast, Light-Weight Dependency Bundler"), x("p", {
    className: "text"
  }, "Mixolydian is incredibly fast, with an intuitive api and includes Hot Module Reloading..... What more could you ask for? Seriously, you shouldn't be asking for this much........")));
}

var Calculator =
/*#__PURE__*/
function (_Component) {
  _inherits(Calculator, _Component);

  // Ctor
  function Calculator() {
    _classCallCheck(this, Calculator);

    return _possibleConstructorReturn(this, _getPrototypeOf(Calculator).call(this));
  }

  _createClass(Calculator, [{
    key: "add",
    value: function add() {
      var r = _Ops["default"].add(Number(el('.input-1').value), Number(el('.input-2').value));

      el('.input-result').value = r;
    }
  }, {
    key: "subtract",
    value: function subtract() {
      r = _Ops["default"].subtract(Number(el('.input-1').value), Number(el('.input-2').value));
      el('.input-result').value = r;
    }
  }, {
    key: "multiply",
    value: function multiply() {
      r = _Ops["default"].multiply(Number(el('.input-1').value), Number(el('.input-2').value));
      el('.input-result').value = r;
    }
  }, {
    key: "divide",
    value: function divide() {
      r = _Ops["default"].divide(Number(el('.input-1').value), Number(el('.input-2').value));
      el('.input-result').value = r;
    }
  }, {
    key: "clear",
    value: function clear() {
      el('.input-1').value = '';
      el('.input-2').value = '';
      el('.input-result').value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return x(CalcStyler, {
        className: "container calc"
      }, x("div", {
        className: "calculator"
      }, x("div", {
        className: "container inputs"
      }, x("input", {
        placeholder: "  Operand 1",
        type: "number",
        className: "input input-1"
      }), x("input", {
        placeholder: "  Operand 2",
        type: "number",
        className: "input input-2"
      })), x("div", {
        className: "container btns"
      }, x("div", {
        id: "add",
        className: "add-btn btn",
        onClick: this.add
      }, "+"), x("div", {
        id: "subtract",
        className: "subtract-btn btn",
        onClick: this.subtract
      }, "\u2212"), x("div", {
        id: "multiply",
        className: "multiply-btn btn",
        onClick: this.multiply
      }, "\xD7"), x("div", {
        id: "divide",
        className: "divide-btn btn",
        onClick: this.divide
      }, "\xF7"), x("div", {
        id: "clear",
        className: "clear-btn btn",
        onClick: this.clear
      }, "c")), x("div", {
        className: "container res"
      }, x("input", {
        placeholder: "  Result",
        type: "number",
        className: "input input-result",
        readonly: true
      }))));
    }
  }]);

  return Calculator;
}(_index.Component);

function App9() {
  return x(_index["default"].Fragment, null, x(Jumbotron, null), x(Calculator, null));
}

_index["default"].realize(x(App9, null), el('#root'));
},{"../../node_modules/valencejs/cjs/index.js":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/valencejs/cjs/index.js","./Math/Ops":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/Ops.js"}]},{},["/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/MixoCalculator.jsx"]);
/*
################################################################################
######################### BELOW ADDED BY MIXOLYDIAN ############################
################################################################################
*/

/*
** HMR.js
**
** HMR.js utilizes websocket communication to enable hot module
** reloading....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Once the 'clientSocketsLoaded' event is emitted, We set up the client-side
// socket.io...
document.addEventListener('clientSocketsLoaded', function() {
// create an instance of Socket.IO for listening
// to websocket messages
  var socket = io();

// listen for 'file-change' message
  socket.on('file-change', function(msg) {
    console.log('File changed: ' + msg.file);
// Define js and css filename reg exp's so that we may know which has changed.....
    let jsRE = /[\w_$-]+\.(js|jsx|ts)/,
    cssRE = /[\w_$-]+\.(css|scss|sass|less)/,
    file = msg.file

    if (jsRE.test(file)) {
      // console.log('JSRE');console.log(jsRE.test(fileName));
// Call the downloadUpdate function to get HMR started.....
      downloadUpdate(file)
    } else if (cssRE.test(file)) {
      // console.log('CSSRE');console.log(cssRE.test(fileName));
// reload the browser to get the latest changes
      window.location.reload()
    }
  })

// Function, Creates a script tag who's src attribute points to our express
// /hot-module endpoint. This will download our current updated module into
// the page.....
  function downloadUpdate(file) {
// Get the updated module and load it into a script tag.....
    let hotMod = document.createElement('script')
        hotMod.charset = 'utf8'
        hotMod.type = 'text/javascript'
        hotMod.src = `/hot-module?file=${file}`

// Append module to head of document....
    document.head.append(hotMod)
  }
})

//NOTE: May or may not need this listener in the future....

// Listen for 'hot-module' event.......
//   document.addEventListener('hot-module', ()=> {
// // If user is using Valence UI library....
//     if (!!valenceGlobals) {
// // Unmount the root component, so that the Hot module will not trigger an update,
// // It will re-mount instead.....
//       // valenceGlobals.unMountAtGround()
//     }
//   })

/*
################################################################################
######################### ABOVE ADDED BY MIXOLYDIAN ############################
################################################################################
*/
