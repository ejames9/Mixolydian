{"file":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/example.js","id":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/example.js","source":"\"use strict\";\n\nvar _Ops = _interopRequireDefault(require(\"./Math/Ops\"));\n\nvar _loggers = require(\"./Math/utils/loggers\");\n\nvar _elementsJS = require(\"elementsJS\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/*\n** example.js\n**\n** example.js is an entry point js file for the Mixolydian.js example....\n**\n** Eric James Foster, Fostware LLC, MIT License.\n***/\n(0, _elementsJS.go)(function () {\n  (0, _elementsJS.click)('.calculator', function (e) {\n    var r;\n\n    switch (e.target.id) {\n      case 'add':\n        (0, _loggers.log)('HERE');\n        (0, _loggers.log)(e.target.id);\n        r = _Ops[\"default\"].add(Number((0, _elementsJS.el)('.input-1').value), Number((0, _elementsJS.el)('.input-2').value));\n        (0, _loggers.log)(r, 'yellow');\n        (0, _elementsJS.el)('.input-result').value = r;\n        break;\n\n      case 'subtract':\n        (0, _loggers.log)('HERE');\n        (0, _loggers.log)(e.target.id);\n        r = _Ops[\"default\"].subtract(Number((0, _elementsJS.el)('.input-1').value), Number((0, _elementsJS.el)('.input-2').value));\n        (0, _loggers.log)(r, 'red');\n        (0, _elementsJS.el)('.input-result').value = r;\n        break;\n\n      case 'multiply':\n        (0, _loggers.log)('HERE');\n        (0, _loggers.log)(e.target.id);\n        r = _Ops[\"default\"].multiply(Number((0, _elementsJS.el)('.input-1').value), Number((0, _elementsJS.el)('.input-2').value));\n        (0, _loggers.log)(r, 'green');\n        (0, _elementsJS.el)('.input-result').value = r;\n        break;\n\n      case 'divide':\n        (0, _loggers.log)('HERE');\n        (0, _loggers.log)(e.target.id);\n        r = _Ops[\"default\"].divide(Number((0, _elementsJS.el)('.input-1').value), Number((0, _elementsJS.el)('.input-2').value));\n        (0, _loggers.log)(r, 'orange');\n        (0, _elementsJS.el)('.input-result').value = r;\n        break;\n\n      case 'clear':\n        (0, _elementsJS.el)('.input-1').value = '';\n        (0, _elementsJS.el)('.input-2').value = '';\n        (0, _elementsJS.el)('.input-result').value = '';\n        break;\n    }\n  });\n});","deps":{"./Math/Ops":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/Ops.js","./Math/utils/loggers":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/src/js/Math/utils/loggers.js","elementsJS":"/Users/ericfoster/Documents/Developer/Javascript/mixolydian/example/node_modules/elementsJS/dist/index.js"},"entry":true}
