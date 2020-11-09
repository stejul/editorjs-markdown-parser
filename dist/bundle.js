(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = bail\n\nfunction bail(err) {\n  if (err) {\n    throw err\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/bail/index.js?");

/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n\tif (typeof Array.isArray === 'function') {\n\t\treturn Array.isArray(arr);\n\t}\n\n\treturn toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n\tif (!obj || toStr.call(obj) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tvar hasOwnConstructor = hasOwn.call(obj, 'constructor');\n\tvar hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');\n\t// Not own constructor property must be Object\n\tif (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n\t\treturn false;\n\t}\n\n\t// Own properties are enumerated firstly, so to speed up,\n\t// if last one is own, then all properties are own.\n\tvar key;\n\tfor (key in obj) { /**/ }\n\n\treturn typeof key === 'undefined' || hasOwn.call(obj, key);\n};\n\n// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\nvar setProperty = function setProperty(target, options) {\n\tif (defineProperty && options.name === '__proto__') {\n\t\tdefineProperty(target, options.name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\t\t\tvalue: options.newValue,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\ttarget[options.name] = options.newValue;\n\t}\n};\n\n// Return undefined instead of __proto__ if '__proto__' is not an own property\nvar getProperty = function getProperty(obj, name) {\n\tif (name === '__proto__') {\n\t\tif (!hasOwn.call(obj, name)) {\n\t\t\treturn void 0;\n\t\t} else if (gOPD) {\n\t\t\t// In early versions of node, obj['__proto__'] is buggy when obj has\n\t\t\t// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n\t\t\treturn gOPD(obj, name).value;\n\t\t}\n\t}\n\n\treturn obj[name];\n};\n\nmodule.exports = function extend() {\n\tvar options, name, src, copy, copyIsArray, clone;\n\tvar target = arguments[0];\n\tvar i = 1;\n\tvar length = arguments.length;\n\tvar deep = false;\n\n\t// Handle a deep copy situation\n\tif (typeof target === 'boolean') {\n\t\tdeep = target;\n\t\ttarget = arguments[1] || {};\n\t\t// skip the boolean and the target\n\t\ti = 2;\n\t}\n\tif (target == null || (typeof target !== 'object' && typeof target !== 'function')) {\n\t\ttarget = {};\n\t}\n\n\tfor (; i < length; ++i) {\n\t\toptions = arguments[i];\n\t\t// Only deal with non-null/undefined values\n\t\tif (options != null) {\n\t\t\t// Extend the base object\n\t\t\tfor (name in options) {\n\t\t\t\tsrc = getProperty(target, name);\n\t\t\t\tcopy = getProperty(options, name);\n\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif (target !== copy) {\n\t\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\t\tif (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && isArray(src) ? src : [];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: extend(deep, clone, copy) });\n\n\t\t\t\t\t// Don't bring in undefined values\n\t\t\t\t\t} else if (typeof copy !== 'undefined') {\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: copy });\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/extend/index.js?");

/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = value => {\n\tif (Object.prototype.toString.call(value) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tconst prototype = Object.getPrototypeOf(value);\n\treturn prototype === null || prototype === Object.prototype;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-plain-obj/index.js?");

/***/ }),

/***/ "./node_modules/longest-streak/index.js":
/*!**********************************************!*\
  !*** ./node_modules/longest-streak/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = longestStreak\n\n// Get the count of the longest repeating streak of `character` in `value`.\nfunction longestStreak(value, character) {\n  var count = 0\n  var maximum = 0\n  var expected\n  var index\n\n  if (typeof character !== 'string' || character.length !== 1) {\n    throw new Error('Expected character')\n  }\n\n  value = String(value)\n  index = value.indexOf(character)\n  expected = index\n\n  while (index !== -1) {\n    count++\n\n    if (index === expected) {\n      if (count > maximum) {\n        maximum = count\n      }\n    } else {\n      count = 1\n    }\n\n    expected = index + 1\n    index = value.indexOf(character, expected)\n  }\n\n  return maximum\n}\n\n\n//# sourceURL=webpack:///./node_modules/longest-streak/index.js?");

/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = fromMarkdown\n\n// These three are compiled away in the `dist/`\n\nvar decode = __webpack_require__(/*! parse-entities/decode-entity */ \"./node_modules/parse-entities/decode-entity.browser.js\")\nvar toString = __webpack_require__(/*! mdast-util-to-string */ \"./node_modules/mdast-util-to-string/index.js\")\nvar own = __webpack_require__(/*! micromark/dist/constant/has-own-property */ \"./node_modules/micromark/dist/constant/has-own-property.js\")\nvar normalizeIdentifier = __webpack_require__(/*! micromark/dist/util/normalize-identifier */ \"./node_modules/micromark/dist/util/normalize-identifier.js\")\nvar safeFromInt = __webpack_require__(/*! micromark/dist/util/safe-from-int */ \"./node_modules/micromark/dist/util/safe-from-int.js\")\nvar parser = __webpack_require__(/*! micromark/dist/parse */ \"./node_modules/micromark/dist/parse.js\")\nvar preprocessor = __webpack_require__(/*! micromark/dist/preprocess */ \"./node_modules/micromark/dist/preprocess.js\")\nvar postprocess = __webpack_require__(/*! micromark/dist/postprocess */ \"./node_modules/micromark/dist/postprocess.js\")\n\nfunction fromMarkdown(value, encoding, options) {\n  if (typeof encoding !== 'string') {\n    options = encoding\n    encoding = undefined\n  }\n\n  return compiler(options)(\n    postprocess(\n      parser(options).document().write(preprocessor()(value, encoding, true))\n    )\n  )\n}\n\n// Note this compiler only understand complete buffering, not streaming.\nfunction compiler(options) {\n  var settings = options || {}\n  var config = configure(\n    {\n      canContainEols: [\n        'emphasis',\n        'fragment',\n        'heading',\n        'paragraph',\n        'strong'\n      ],\n\n      enter: {\n        autolink: opener(link),\n        autolinkProtocol: onenterdata,\n        autolinkEmail: onenterdata,\n        atxHeading: opener(heading),\n        blockQuote: opener(blockQuote),\n        characterEscape: onenterdata,\n        characterReference: onenterdata,\n        codeFenced: opener(codeFlow),\n        codeFencedFenceInfo: buffer,\n        codeFencedFenceMeta: buffer,\n        codeIndented: opener(codeFlow, buffer),\n        codeText: opener(codeText, buffer),\n        codeTextData: onenterdata,\n        data: onenterdata,\n        codeFlowValue: onenterdata,\n        definition: opener(definition),\n        definitionDestinationString: buffer,\n        definitionLabelString: buffer,\n        definitionTitleString: buffer,\n        emphasis: opener(emphasis),\n        hardBreakEscape: opener(hardBreak),\n        hardBreakTrailing: opener(hardBreak),\n        htmlFlow: opener(html, buffer),\n        htmlFlowData: onenterdata,\n        htmlText: opener(html, buffer),\n        htmlTextData: onenterdata,\n        image: opener(image),\n        label: buffer,\n        link: opener(link),\n        listItem: opener(listItem),\n        listItemValue: onenterlistitemvalue,\n        listOrdered: opener(list, onenterlistordered),\n        listUnordered: opener(list),\n        paragraph: opener(paragraph),\n        reference: onenterreference,\n        referenceString: buffer,\n        resourceDestinationString: buffer,\n        resourceTitleString: buffer,\n        setextHeading: opener(heading),\n        strong: opener(strong),\n        thematicBreak: opener(thematicBreak)\n      },\n\n      exit: {\n        atxHeading: closer(),\n        atxHeadingSequence: onexitatxheadingsequence,\n        autolink: closer(),\n        autolinkEmail: onexitautolinkemail,\n        autolinkProtocol: onexitautolinkprotocol,\n        blockQuote: closer(),\n        characterEscapeValue: onexitdata,\n        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,\n        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,\n        characterReferenceValue: closer(onexitcharacterreferencevalue),\n        codeFenced: closer(onexitcodefenced),\n        codeFencedFence: onexitcodefencedfence,\n        codeFencedFenceInfo: onexitcodefencedfenceinfo,\n        codeFencedFenceMeta: onexitcodefencedfencemeta,\n        codeFlowValue: onexitdata,\n        codeIndented: closer(onexitcodeindented),\n        codeText: closer(onexitcodetext),\n        codeTextData: onexitdata,\n        data: onexitdata,\n        definition: closer(),\n        definitionDestinationString: onexitdefinitiondestinationstring,\n        definitionLabelString: onexitdefinitionlabelstring,\n        definitionTitleString: onexitdefinitiontitlestring,\n        emphasis: closer(),\n        hardBreakEscape: closer(onexithardbreak),\n        hardBreakTrailing: closer(onexithardbreak),\n        htmlFlow: closer(onexithtmlflow),\n        htmlFlowData: onexitdata,\n        htmlText: closer(onexithtmltext),\n        htmlTextData: onexitdata,\n        image: closer(onexitimage),\n        label: onexitlabel,\n        labelText: onexitlabeltext,\n        lineEnding: onexitlineending,\n        link: closer(onexitlink),\n        listItem: closer(),\n        listOrdered: closer(),\n        listUnordered: closer(),\n        paragraph: closer(),\n        referenceString: onexitreferencestring,\n        resourceDestinationString: onexitresourcedestinationstring,\n        resourceTitleString: onexitresourcetitlestring,\n        resource: onexitresource,\n        setextHeading: closer(onexitsetextheading),\n        setextHeadingLineSequence: onexitsetextheadinglinesequence,\n        setextHeadingText: onexitsetextheadingtext,\n        strong: closer(),\n        thematicBreak: closer()\n      }\n    },\n\n    settings.mdastExtensions || []\n  )\n\n  var data = {}\n\n  return compile\n\n  function compile(events) {\n    var stack = [{type: 'root', children: []}]\n    var index = -1\n    var listStack = []\n    var length\n    var handler\n    var listStart\n    var event\n\n    while (++index < events.length) {\n      event = events[index]\n\n      // We preprocess lists to add `listItem` tokens, and to infer whether\n      // items the list itself are spread out.\n      if (\n        event[1].type === 'listOrdered' ||\n        event[1].type === 'listUnordered'\n      ) {\n        if (event[0] === 'enter') {\n          listStack.push(index)\n        } else {\n          listStart = listStack.pop(index)\n          index = prepareList(events, listStart, index)\n        }\n      }\n    }\n\n    index = -1\n    length = events.length\n\n    while (++index < length) {\n      handler = config[events[index][0]]\n\n      if (own.call(handler, events[index][1].type)) {\n        handler[events[index][1].type].call(\n          {\n            stack: stack,\n            config: config,\n            enter: enter,\n            exit: exit,\n            buffer: buffer,\n            resume: resume,\n            sliceSerialize: events[index][2].sliceSerialize,\n            setData: setData,\n            getData: getData\n          },\n\n          events[index][1]\n        )\n      }\n    }\n\n    // Figure out `root` position.\n    stack[0].position = {\n      start: point(\n        length ? events[0][1].start : {line: 1, column: 1, offset: 0}\n      ),\n\n      end: point(\n        length\n          ? events[events.length - 2][1].end\n          : {line: 1, column: 1, offset: 0}\n      )\n    }\n\n    return stack[0]\n  }\n\n  function prepareList(events, start, length) {\n    var index = start - 1\n    var containerBalance = -1\n    var listSpread = false\n    var listItem\n    var tailIndex\n    var lineIndex\n    var tailEvent\n    var event\n    var firstBlankLineIndex\n    var atMarker\n\n    while (++index <= length) {\n      event = events[index]\n\n      if (\n        event[1].type === 'listUnordered' ||\n        event[1].type === 'listOrdered' ||\n        event[1].type === 'blockQuote'\n      ) {\n        if (event[0] === 'enter') {\n          containerBalance++\n        } else {\n          containerBalance--\n        }\n\n        atMarker = undefined\n      } else if (event[1].type === 'lineEndingBlank') {\n        if (event[0] === 'enter') {\n          if (\n            listItem &&\n            !atMarker &&\n            !containerBalance &&\n            !firstBlankLineIndex\n          ) {\n            firstBlankLineIndex = index\n          }\n\n          atMarker = undefined\n        }\n      } else if (\n        event[1].type === 'linePrefix' ||\n        event[1].type === 'listItemValue' ||\n        event[1].type === 'listItemMarker' ||\n        event[1].type === 'listItemPrefix' ||\n        event[1].type === 'listItemPrefixWhitespace'\n      ) {\n        // Empty.\n      } else {\n        atMarker = undefined\n      }\n\n      if (\n        (!containerBalance &&\n          event[0] === 'enter' &&\n          event[1].type === 'listItemPrefix') ||\n        (containerBalance === -1 &&\n          event[0] === 'exit' &&\n          (event[1].type === 'listUnordered' ||\n            event[1].type === 'listOrdered'))\n      ) {\n        if (listItem) {\n          tailIndex = index\n          lineIndex = undefined\n\n          while (tailIndex--) {\n            tailEvent = events[tailIndex]\n\n            if (\n              tailEvent[1].type === 'lineEnding' ||\n              tailEvent[1].type === 'lineEndingBlank'\n            ) {\n              if (tailEvent[0] === 'exit') continue\n\n              if (lineIndex) {\n                events[lineIndex][1].type = 'lineEndingBlank'\n                listSpread = true\n              }\n\n              tailEvent[1].type = 'lineEnding'\n              lineIndex = tailIndex\n            } else if (\n              tailEvent[1].type === 'linePrefix' ||\n              tailEvent[1].type === 'blockQuotePrefix' ||\n              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||\n              tailEvent[1].type === 'blockQuoteMarker' ||\n              tailEvent[1].type === 'listItemIndent'\n            ) {\n              // Empty\n            } else {\n              break\n            }\n          }\n\n          if (\n            firstBlankLineIndex &&\n            (!lineIndex || firstBlankLineIndex < lineIndex)\n          ) {\n            listItem._spread = true\n          }\n\n          // Fix position.\n          listItem.end = point(\n            lineIndex ? events[lineIndex][1].start : event[1].end\n          )\n\n          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]])\n          index++\n          length++\n        }\n\n        // Create a new list item.\n        if (event[1].type === 'listItemPrefix') {\n          listItem = {\n            type: 'listItem',\n            _spread: false,\n            start: point(event[1].start)\n          }\n\n          events.splice(index, 0, ['enter', listItem, event[2]])\n          index++\n          length++\n          firstBlankLineIndex = undefined\n          atMarker = true\n        }\n      }\n    }\n\n    events[start][1]._spread = listSpread\n    return length\n  }\n\n  function setData(key, value) {\n    data[key] = value\n  }\n\n  function getData(key) {\n    return data[key]\n  }\n\n  function point(d) {\n    return {line: d.line, column: d.column, offset: d.offset}\n  }\n\n  function opener(create, and) {\n    return open\n\n    function open(token) {\n      enter.call(this, create(token), token)\n      if (and) and.call(this, token)\n    }\n  }\n\n  function buffer() {\n    this.stack.push({type: 'fragment', children: []})\n  }\n\n  function enter(node, token) {\n    this.stack[this.stack.length - 1].children.push(node)\n    this.stack.push(node)\n    node.position = {start: point(token.start)}\n    return node\n  }\n\n  function closer(and) {\n    return close\n\n    function close(token) {\n      if (and) and.call(this, token)\n      exit.call(this, token)\n    }\n  }\n\n  function exit(token) {\n    var node = this.stack.pop()\n    node.position.end = point(token.end)\n    return node\n  }\n\n  function resume() {\n    var value = toString(this.stack.pop())\n    return value\n  }\n\n  //\n  // Handlers.\n  //\n\n  function onenterlistordered() {\n    setData('expectingFirstListItemValue', true)\n  }\n\n  function onenterlistitemvalue(token) {\n    if (getData('expectingFirstListItemValue')) {\n      this.stack[this.stack.length - 2].start = parseInt(\n        this.sliceSerialize(token),\n        10\n      )\n\n      setData('expectingFirstListItemValue')\n    }\n  }\n\n  function onexitcodefencedfenceinfo() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].lang = data\n  }\n\n  function onexitcodefencedfencemeta() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].meta = data\n  }\n\n  function onexitcodefencedfence() {\n    // Exit if this is the closing fence.\n    if (getData('flowCodeInside')) return\n    this.buffer()\n    setData('flowCodeInside', true)\n  }\n\n  function onexitcodefenced() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].value = data.replace(\n      /^(\\r?\\n|\\r)|(\\r?\\n|\\r)$/g,\n      ''\n    )\n\n    setData('flowCodeInside')\n  }\n\n  function onexitcodeindented() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].value = data\n  }\n\n  function onexitdefinitionlabelstring(token) {\n    // Discard label, use the source content instead.\n    var label = this.resume()\n    this.stack[this.stack.length - 1].label = label\n    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(\n      this.sliceSerialize(token)\n    ).toLowerCase()\n  }\n\n  function onexitdefinitiontitlestring() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].title = data\n  }\n\n  function onexitdefinitiondestinationstring() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].url = data\n  }\n\n  function onexitatxheadingsequence(token) {\n    if (!this.stack[this.stack.length - 1].depth) {\n      this.stack[this.stack.length - 1].depth = this.sliceSerialize(\n        token\n      ).length\n    }\n  }\n\n  function onexitsetextheadingtext() {\n    setData('setextHeadingSlurpLineEnding', true)\n  }\n\n  function onexitsetextheadinglinesequence(token) {\n    this.stack[this.stack.length - 1].depth =\n      this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2\n  }\n\n  function onexitsetextheading() {\n    setData('setextHeadingSlurpLineEnding')\n  }\n\n  function onenterdata(token) {\n    var siblings = this.stack[this.stack.length - 1].children\n    var tail = siblings[siblings.length - 1]\n\n    if (!tail || tail.type !== 'text') {\n      // Add a new text node.\n      tail = text()\n      tail.position = {start: point(token.start)}\n      this.stack[this.stack.length - 1].children.push(tail)\n    }\n\n    this.stack.push(tail)\n  }\n\n  function onexitdata(token) {\n    var tail = this.stack.pop()\n    tail.value += this.sliceSerialize(token)\n    tail.position.end = point(token.end)\n  }\n\n  function onexitlineending(token) {\n    var context = this.stack[this.stack.length - 1]\n\n    // If we’re at a hard break, include the line ending in there.\n    if (getData('atHardBreak')) {\n      context.children[context.children.length - 1].position.end = point(\n        token.end\n      )\n\n      setData('atHardBreak')\n      return\n    }\n\n    if (getData('setextHeadingSlurpLineEnding')) {\n      return\n    }\n\n    if (config.canContainEols.indexOf(context.type) !== -1) {\n      onenterdata.call(this, token)\n      onexitdata.call(this, token)\n    }\n  }\n\n  function onexithardbreak() {\n    setData('atHardBreak', true)\n  }\n\n  function onexithtmlflow() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].value = data\n  }\n\n  function onexithtmltext() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].value = data\n  }\n\n  function onexitcodetext() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].value = data\n  }\n\n  function onexitlink() {\n    var context = this.stack[this.stack.length - 1]\n\n    // To do: clean.\n    if (getData('inReference')) {\n      context.type += 'Reference'\n      context.referenceType = getData('referenceType') || 'shortcut'\n      delete context.url\n      delete context.title\n    } else {\n      delete context.identifier\n      delete context.label\n      delete context.referenceType\n    }\n\n    setData('referenceType')\n  }\n\n  function onexitimage() {\n    var context = this.stack[this.stack.length - 1]\n\n    // To do: clean.\n    if (getData('inReference')) {\n      context.type += 'Reference'\n      context.referenceType = getData('referenceType') || 'shortcut'\n      delete context.url\n      delete context.title\n    } else {\n      delete context.identifier\n      delete context.label\n      delete context.referenceType\n    }\n\n    setData('referenceType')\n  }\n\n  function onexitlabeltext(token) {\n    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(\n      this.sliceSerialize(token)\n    ).toLowerCase()\n  }\n\n  function onexitlabel() {\n    var fragment = this.stack[this.stack.length - 1]\n    var value = this.resume()\n\n    this.stack[this.stack.length - 1].label = value\n\n    // Assume a reference.\n    setData('inReference', true)\n\n    if (this.stack[this.stack.length - 1].type === 'link') {\n      this.stack[this.stack.length - 1].children = fragment.children\n    } else {\n      this.stack[this.stack.length - 1].alt = value\n    }\n  }\n\n  function onexitresourcedestinationstring() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].url = data\n  }\n\n  function onexitresourcetitlestring() {\n    var data = this.resume()\n    this.stack[this.stack.length - 1].title = data\n  }\n\n  function onexitresource() {\n    setData('inReference')\n  }\n\n  function onenterreference() {\n    setData('referenceType', 'collapsed')\n  }\n\n  function onexitreferencestring(token) {\n    var label = this.resume()\n    this.stack[this.stack.length - 1].label = label\n    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(\n      this.sliceSerialize(token)\n    ).toLowerCase()\n    setData('referenceType', 'full')\n  }\n\n  function onexitcharacterreferencemarker(token) {\n    setData('characterReferenceType', token.type)\n  }\n\n  function onexitcharacterreferencevalue(token) {\n    var data = this.sliceSerialize(token)\n    var type = getData('characterReferenceType')\n    var value\n\n    if (type) {\n      value = safeFromInt(\n        data,\n        type === 'characterReferenceMarkerNumeric' ? 10 : 16\n      )\n\n      setData('characterReferenceType')\n    } else {\n      value = decode(data)\n    }\n\n    this.stack[this.stack.length - 1].value += value\n  }\n\n  function onexitautolinkprotocol(token) {\n    onexitdata.call(this, token)\n    this.stack[this.stack.length - 1].url = this.sliceSerialize(token)\n  }\n\n  function onexitautolinkemail(token) {\n    onexitdata.call(this, token)\n    this.stack[this.stack.length - 1].url =\n      'mailto:' + this.sliceSerialize(token)\n  }\n\n  //\n  // Creaters.\n  //\n\n  function blockQuote() {\n    return {type: 'blockquote', children: []}\n  }\n\n  function codeFlow() {\n    return {type: 'code', lang: null, meta: null, value: ''}\n  }\n\n  function codeText() {\n    return {type: 'inlineCode', value: ''}\n  }\n\n  function definition() {\n    return {\n      type: 'definition',\n      identifier: '',\n      label: null,\n      title: null,\n      url: ''\n    }\n  }\n\n  function emphasis() {\n    return {type: 'emphasis', children: []}\n  }\n\n  function heading() {\n    return {type: 'heading', depth: undefined, children: []}\n  }\n\n  function hardBreak() {\n    return {type: 'break'}\n  }\n\n  function html() {\n    return {type: 'html', value: ''}\n  }\n\n  function image() {\n    return {type: 'image', title: null, url: '', alt: null}\n  }\n\n  function link() {\n    return {type: 'link', title: null, url: '', children: []}\n  }\n\n  function list(token) {\n    return {\n      type: 'list',\n      ordered: token.type === 'listOrdered',\n      start: null,\n      spread: token._spread,\n      children: []\n    }\n  }\n\n  function listItem(token) {\n    return {\n      type: 'listItem',\n      spread: token._spread,\n      checked: null,\n      children: []\n    }\n  }\n\n  function paragraph() {\n    return {type: 'paragraph', children: []}\n  }\n\n  function strong() {\n    return {type: 'strong', children: []}\n  }\n\n  function text() {\n    return {type: 'text', value: ''}\n  }\n\n  function thematicBreak() {\n    return {type: 'thematicBreak'}\n  }\n}\n\nfunction configure(config, extensions) {\n  var length = extensions.length\n  var index = -1\n\n  while (++index < length) {\n    extension(config, extensions[index])\n  }\n\n  return config\n}\n\nfunction extension(config, extension) {\n  var key\n  var left\n  var right\n\n  for (key in extension) {\n    left = own.call(config, key) ? config[key] : (config[key] = {})\n    right = extension[key]\n\n    if (key === 'canContainEols') {\n      config[key] = [].concat(left, right)\n    } else {\n      Object.assign(left, right)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-from-markdown/dist/index.js?");

/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./dist */ \"./node_modules/mdast-util-from-markdown/dist/index.js\")\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-from-markdown/index.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib */ \"./node_modules/mdast-util-to-markdown/lib/index.js\")\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/index.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/blockquote.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/blockquote.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = blockquote\n\nvar flow = __webpack_require__(/*! ../util/container-flow */ \"./node_modules/mdast-util-to-markdown/lib/util/container-flow.js\")\nvar indentLines = __webpack_require__(/*! ../util/indent-lines */ \"./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js\")\n\nfunction blockquote(node, _, context) {\n  var exit = context.enter('blockquote')\n  var value = indentLines(flow(node, context), map)\n  exit()\n  return value\n}\n\nfunction map(line, index, blank) {\n  return '>' + (blank ? '' : ' ') + line\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/blockquote.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/break.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/break.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = hardBreak\n\nfunction hardBreak() {\n  return '\\\\\\n'\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/break.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/code.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/code.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = code\n\nvar repeat = __webpack_require__(/*! repeat-string */ \"./node_modules/repeat-string/index.js\")\nvar streak = __webpack_require__(/*! longest-streak */ \"./node_modules/longest-streak/index.js\")\nvar formatCodeAsIndented = __webpack_require__(/*! ../util/format-code-as-indented */ \"./node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js\")\nvar checkFence = __webpack_require__(/*! ../util/check-fence */ \"./node_modules/mdast-util-to-markdown/lib/util/check-fence.js\")\nvar indentLines = __webpack_require__(/*! ../util/indent-lines */ \"./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js\")\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction code(node, _, context) {\n  var marker = checkFence(context)\n  var raw = node.value || ''\n  var suffix = marker === '`' ? 'GraveAccent' : 'Tilde'\n  var value\n  var sequence\n  var exit\n  var subexit\n\n  if (formatCodeAsIndented(node, context)) {\n    exit = context.enter('codeIndented')\n    value = indentLines(raw, map)\n  } else {\n    sequence = repeat(marker, Math.max(streak(raw, marker) + 1, 3))\n    exit = context.enter('codeFenced')\n    value = sequence\n\n    if (node.lang) {\n      subexit = context.enter('codeFencedLang' + suffix)\n      value += safe(context, node.lang, {\n        before: '`',\n        after: ' ',\n        encode: ['`']\n      })\n      subexit()\n    }\n\n    if (node.lang && node.meta) {\n      subexit = context.enter('codeFencedMeta' + suffix)\n      value +=\n        ' ' +\n        safe(context, node.meta, {\n          before: ' ',\n          after: '\\n',\n          encode: ['`']\n        })\n      subexit()\n    }\n\n    value += '\\n'\n\n    if (raw) {\n      value += raw + '\\n'\n    }\n\n    value += sequence\n  }\n\n  exit()\n  return value\n}\n\nfunction map(line, _, blank) {\n  return (blank ? '' : '    ') + line\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/code.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/definition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/definition.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = definition\n\nvar association = __webpack_require__(/*! ../util/association */ \"./node_modules/mdast-util-to-markdown/lib/util/association.js\")\nvar checkQuote = __webpack_require__(/*! ../util/check-quote */ \"./node_modules/mdast-util-to-markdown/lib/util/check-quote.js\")\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction definition(node, _, context) {\n  var marker = checkQuote(context)\n  var suffix = marker === '\"' ? 'Quote' : 'Apostrophe'\n  var exit = context.enter('definition')\n  var subexit = context.enter('label')\n  var value =\n    '[' + safe(context, association(node), {before: '[', after: ']'}) + ']: '\n\n  subexit()\n\n  if (\n    // If there’s no url, or…\n    !node.url ||\n    // If there’s whitespace, enclosed is prettier.\n    /[ \\t\\r\\n]/.test(node.url)\n  ) {\n    subexit = context.enter('destinationLiteral')\n    value += '<' + safe(context, node.url, {before: '<', after: '>'}) + '>'\n  } else {\n    // No whitespace, raw is prettier.\n    subexit = context.enter('destinationRaw')\n    value += safe(context, node.url, {before: ' ', after: ' '})\n  }\n\n  subexit()\n\n  if (node.title) {\n    subexit = context.enter('title' + suffix)\n    value +=\n      ' ' +\n      marker +\n      safe(context, node.title, {before: marker, after: marker}) +\n      marker\n    subexit()\n  }\n\n  exit()\n\n  return value\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/definition.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/emphasis.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/emphasis.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = emphasis\nemphasis.peek = emphasisPeek\n\nvar checkEmphasis = __webpack_require__(/*! ../util/check-emphasis */ \"./node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js\")\nvar phrasing = __webpack_require__(/*! ../util/container-phrasing */ \"./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\n\n// To do: there are cases where emphasis cannot “form” depending on the\n// previous or next character of sequences.\n// There’s no way around that though, except for injecting zero-width stuff.\n// Do we need to safeguard against that?\nfunction emphasis(node, _, context) {\n  var marker = checkEmphasis(context)\n  var exit = context.enter('emphasis')\n  var value = phrasing(node, context, {before: marker, after: marker})\n  exit()\n  return marker + value + marker\n}\n\nfunction emphasisPeek(node, _, context) {\n  return context.options.emphasis || '*'\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/emphasis.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/heading.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/heading.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = heading\n\nvar repeat = __webpack_require__(/*! repeat-string */ \"./node_modules/repeat-string/index.js\")\nvar formatHeadingAsSetext = __webpack_require__(/*! ../util/format-heading-as-setext */ \"./node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js\")\nvar phrasing = __webpack_require__(/*! ../util/container-phrasing */ \"./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\n\nfunction heading(node, _, context) {\n  var rank = Math.max(Math.min(6, node.depth || 1), 1)\n  var exit\n  var subexit\n  var value\n  var sequence\n\n  if (formatHeadingAsSetext(node, context)) {\n    exit = context.enter('headingSetext')\n    subexit = context.enter('phrasing')\n    value = phrasing(node, context, {before: '\\n', after: '\\n'})\n    subexit()\n    exit()\n\n    return (\n      value +\n      '\\n' +\n      repeat(\n        rank === 1 ? '=' : '-',\n        // The whole size…\n        value.length -\n          // Minus the position of the character after the last EOL (or\n          // 0 if there is none)…\n          (Math.max(value.lastIndexOf('\\r'), value.lastIndexOf('\\n')) + 1)\n      )\n    )\n  }\n\n  sequence = repeat('#', rank)\n  exit = context.enter('headingAtx')\n  subexit = context.enter('phrasing')\n  value = phrasing(node, context, {before: '# ', after: '\\n'})\n  value = value ? sequence + ' ' + value : sequence\n  if (context.options.closeAtx) {\n    value += ' ' + sequence\n  }\n\n  subexit()\n  exit()\n\n  return value\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/heading.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/html.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/html.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = html\n\nfunction html(node) {\n  return node.value || ''\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/html.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/image-reference.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/image-reference.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = imageReference\nimageReference.peek = imageReferencePeek\n\nvar association = __webpack_require__(/*! ../util/association */ \"./node_modules/mdast-util-to-markdown/lib/util/association.js\")\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction imageReference(node, _, context) {\n  var type = node.referenceType\n  var exit = context.enter('imageReference')\n  var subexit = context.enter('label')\n  var alt = safe(context, node.alt, {before: '[', after: ']'})\n  var value = '![' + alt + ']'\n  var reference\n  var stack\n\n  subexit()\n  // Hide the fact that we’re in phrasing, because escapes don’t work.\n  stack = context.stack\n  context.stack = []\n  subexit = context.enter('reference')\n  reference = safe(context, association(node), {before: '[', after: ']'})\n  subexit()\n  context.stack = stack\n  exit()\n\n  if (type === 'full' || !alt || alt !== reference) {\n    value += '[' + reference + ']'\n  } else if (type !== 'shortcut') {\n    value += '[]'\n  }\n\n  return value\n}\n\nfunction imageReferencePeek() {\n  return '!'\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/image-reference.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/image.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/image.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = image\nimage.peek = imagePeek\n\nvar checkQuote = __webpack_require__(/*! ../util/check-quote */ \"./node_modules/mdast-util-to-markdown/lib/util/check-quote.js\")\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction image(node, _, context) {\n  var quote = checkQuote(context)\n  var suffix = quote === '\"' ? 'Quote' : 'Apostrophe'\n  var exit = context.enter('image')\n  var subexit = context.enter('label')\n  var value = '![' + safe(context, node.alt, {before: '[', after: ']'}) + ']('\n\n  subexit()\n\n  if (\n    // If there’s no url but there is a title…\n    (!node.url && node.title) ||\n    // Or if there’s markdown whitespace or an eol, enclose.\n    /[ \\t\\r\\n]/.test(node.url)\n  ) {\n    subexit = context.enter('destinationLiteral')\n    value += '<' + safe(context, node.url, {before: '<', after: '>'}) + '>'\n  } else {\n    // No whitespace, raw is prettier.\n    subexit = context.enter('destinationRaw')\n    value += safe(context, node.url, {\n      before: '(',\n      after: node.title ? ' ' : ')'\n    })\n  }\n\n  subexit()\n\n  if (node.title) {\n    subexit = context.enter('title' + suffix)\n    value +=\n      ' ' +\n      quote +\n      safe(context, node.title, {before: quote, after: quote}) +\n      quote\n    subexit()\n  }\n\n  value += ')'\n  exit()\n\n  return value\n}\n\nfunction imagePeek() {\n  return '!'\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/image.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.blockquote = __webpack_require__(/*! ./blockquote */ \"./node_modules/mdast-util-to-markdown/lib/handle/blockquote.js\")\nexports.break = __webpack_require__(/*! ./break */ \"./node_modules/mdast-util-to-markdown/lib/handle/break.js\")\nexports.code = __webpack_require__(/*! ./code */ \"./node_modules/mdast-util-to-markdown/lib/handle/code.js\")\nexports.definition = __webpack_require__(/*! ./definition */ \"./node_modules/mdast-util-to-markdown/lib/handle/definition.js\")\nexports.emphasis = __webpack_require__(/*! ./emphasis */ \"./node_modules/mdast-util-to-markdown/lib/handle/emphasis.js\")\nexports.hardBreak = __webpack_require__(/*! ./break */ \"./node_modules/mdast-util-to-markdown/lib/handle/break.js\")\nexports.heading = __webpack_require__(/*! ./heading */ \"./node_modules/mdast-util-to-markdown/lib/handle/heading.js\")\nexports.html = __webpack_require__(/*! ./html */ \"./node_modules/mdast-util-to-markdown/lib/handle/html.js\")\nexports.image = __webpack_require__(/*! ./image */ \"./node_modules/mdast-util-to-markdown/lib/handle/image.js\")\nexports.imageReference = __webpack_require__(/*! ./image-reference */ \"./node_modules/mdast-util-to-markdown/lib/handle/image-reference.js\")\nexports.inlineCode = __webpack_require__(/*! ./inline-code */ \"./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js\")\nexports.link = __webpack_require__(/*! ./link */ \"./node_modules/mdast-util-to-markdown/lib/handle/link.js\")\nexports.linkReference = __webpack_require__(/*! ./link-reference */ \"./node_modules/mdast-util-to-markdown/lib/handle/link-reference.js\")\nexports.list = __webpack_require__(/*! ./list */ \"./node_modules/mdast-util-to-markdown/lib/handle/list.js\")\nexports.listItem = __webpack_require__(/*! ./list-item */ \"./node_modules/mdast-util-to-markdown/lib/handle/list-item.js\")\nexports.paragraph = __webpack_require__(/*! ./paragraph */ \"./node_modules/mdast-util-to-markdown/lib/handle/paragraph.js\")\nexports.root = __webpack_require__(/*! ./root */ \"./node_modules/mdast-util-to-markdown/lib/handle/root.js\")\nexports.strong = __webpack_require__(/*! ./strong */ \"./node_modules/mdast-util-to-markdown/lib/handle/strong.js\")\nexports.text = __webpack_require__(/*! ./text */ \"./node_modules/mdast-util-to-markdown/lib/handle/text.js\")\nexports.thematicBreak = __webpack_require__(/*! ./thematic-break */ \"./node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js\")\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/index.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = inlineCode\ninlineCode.peek = inlineCodePeek\n\nfunction inlineCode(node) {\n  var value = node.value || ''\n  var sequence = '`'\n  var pad = ''\n\n  // If there is a single grave accent on its own in the code, use a fence of\n  // two.\n  // If there are two in a row, use one.\n  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {\n    sequence += '`'\n  }\n\n  // If this is not just spaces or eols (tabs don’t count), and either the\n  // first or last character are a space, eol, or tick, then pad with spaces.\n  if (\n    /[^ \\r\\n]/.test(value) &&\n    (/[ \\r\\n`]/.test(value.charAt(0)) ||\n      /[ \\r\\n`]/.test(value.charAt(value.length - 1)))\n  ) {\n    pad = ' '\n  }\n\n  return sequence + pad + value + pad + sequence\n}\n\nfunction inlineCodePeek() {\n  return '`'\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/link-reference.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/link-reference.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = linkReference\nlinkReference.peek = linkReferencePeek\n\nvar association = __webpack_require__(/*! ../util/association */ \"./node_modules/mdast-util-to-markdown/lib/util/association.js\")\nvar phrasing = __webpack_require__(/*! ../util/container-phrasing */ \"./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction linkReference(node, _, context) {\n  var type = node.referenceType\n  var exit = context.enter('linkReference')\n  var subexit = context.enter('label')\n  var text = phrasing(node, context, {before: '[', after: ']'})\n  var value = '[' + text + ']'\n  var reference\n  var stack\n\n  subexit()\n  // Hide the fact that we’re in phrasing, because escapes don’t work.\n  stack = context.stack\n  context.stack = []\n  subexit = context.enter('reference')\n  reference = safe(context, association(node), {before: '[', after: ']'})\n  subexit()\n  context.stack = stack\n  exit()\n\n  if (type === 'full' || !text || text !== reference) {\n    value += '[' + reference + ']'\n  } else if (type !== 'shortcut') {\n    value += '[]'\n  }\n\n  return value\n}\n\nfunction linkReferencePeek() {\n  return '['\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/link-reference.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/link.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/link.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = link\nlink.peek = linkPeek\n\nvar checkQuote = __webpack_require__(/*! ../util/check-quote */ \"./node_modules/mdast-util-to-markdown/lib/util/check-quote.js\")\nvar formatLinkAsAutolink = __webpack_require__(/*! ../util/format-link-as-autolink */ \"./node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js\")\nvar phrasing = __webpack_require__(/*! ../util/container-phrasing */ \"./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction link(node, _, context) {\n  var quote = checkQuote(context)\n  var suffix = quote === '\"' ? 'Quote' : 'Apostrophe'\n  var exit\n  var subexit\n  var value\n  var stack\n\n  if (formatLinkAsAutolink(node)) {\n    // Hide the fact that we’re in phrasing, because escapes don’t work.\n    stack = context.stack\n    context.stack = []\n    exit = context.enter('autolink')\n    value = '<' + phrasing(node, context, {before: '<', after: '>'}) + '>'\n    exit()\n    context.stack = stack\n    return value\n  }\n\n  exit = context.enter('link')\n  subexit = context.enter('label')\n  value = '[' + phrasing(node, context, {before: '[', after: ']'}) + ']('\n  subexit()\n\n  if (\n    // If there’s no url but there is a title…\n    (!node.url && node.title) ||\n    // Or if there’s markdown whitespace or an eol, enclose.\n    /[ \\t\\r\\n]/.test(node.url)\n  ) {\n    subexit = context.enter('destinationLiteral')\n    value += '<' + safe(context, node.url, {before: '<', after: '>'}) + '>'\n  } else {\n    // No whitespace, raw is prettier.\n    subexit = context.enter('destinationRaw')\n    value += safe(context, node.url, {\n      before: '(',\n      after: node.title ? ' ' : ')'\n    })\n  }\n\n  subexit()\n\n  if (node.title) {\n    subexit = context.enter('title' + suffix)\n    value +=\n      ' ' +\n      quote +\n      safe(context, node.title, {before: quote, after: quote}) +\n      quote\n    subexit()\n  }\n\n  value += ')'\n\n  exit()\n  return value\n}\n\nfunction linkPeek(node) {\n  return formatLinkAsAutolink(node) ? '<' : '['\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/link.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/list-item.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = listItem\n\nvar repeat = __webpack_require__(/*! repeat-string */ \"./node_modules/repeat-string/index.js\")\nvar checkBullet = __webpack_require__(/*! ../util/check-bullet */ \"./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js\")\nvar checkListItemIndent = __webpack_require__(/*! ../util/check-list-item-indent */ \"./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js\")\nvar flow = __webpack_require__(/*! ../util/container-flow */ \"./node_modules/mdast-util-to-markdown/lib/util/container-flow.js\")\nvar indentLines = __webpack_require__(/*! ../util/indent-lines */ \"./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js\")\n\nfunction listItem(node, parent, context) {\n  var bullet = checkBullet(context)\n  var listItemIndent = checkListItemIndent(context)\n  var size\n  var value\n  var exit\n\n  if (parent && parent.ordered) {\n    bullet =\n      (parent.start > -1 ? parent.start : 1) +\n      (context.options.incrementListMarker === false\n        ? 0\n        : parent.children.indexOf(node)) +\n      '.'\n  }\n\n  size = bullet.length + 1\n\n  if (\n    listItemIndent === 'tab' ||\n    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))\n  ) {\n    size = Math.ceil(size / 4) * 4\n  }\n\n  exit = context.enter('listItem')\n  value = indentLines(flow(node, context), map)\n  exit()\n\n  return value\n\n  function map(line, index, blank) {\n    if (index) {\n      return (blank ? '' : repeat(' ', size)) + line\n    }\n\n    return (blank ? bullet : bullet + repeat(' ', size - bullet.length)) + line\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/list-item.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/list.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = list\n\nvar flow = __webpack_require__(/*! ../util/container-flow */ \"./node_modules/mdast-util-to-markdown/lib/util/container-flow.js\")\n\nfunction list(node, _, context) {\n  var exit = context.enter('list')\n  var value = flow(node, context)\n  exit()\n  return value\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/list.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/paragraph.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/paragraph.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = paragraph\n\nvar phrasing = __webpack_require__(/*! ../util/container-phrasing */ \"./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\n\nfunction paragraph(node, _, context) {\n  var exit = context.enter('paragraph')\n  var subexit = context.enter('phrasing')\n  var value = phrasing(node, context, {before: '\\n', after: '\\n'})\n  subexit()\n  exit()\n  return value\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/paragraph.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/root.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/root.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = root\n\nvar flow = __webpack_require__(/*! ../util/container-flow */ \"./node_modules/mdast-util-to-markdown/lib/util/container-flow.js\")\n\nfunction root(node, _, context) {\n  return flow(node, context)\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/root.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/strong.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/strong.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = strong\nstrong.peek = strongPeek\n\nvar checkStrong = __webpack_require__(/*! ../util/check-strong */ \"./node_modules/mdast-util-to-markdown/lib/util/check-strong.js\")\nvar phrasing = __webpack_require__(/*! ../util/container-phrasing */ \"./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\")\n\n// To do: there are cases where emphasis cannot “form” depending on the\n// previous or next character of sequences.\n// There’s no way around that though, except for injecting zero-width stuff.\n// Do we need to safeguard against that?\nfunction strong(node, _, context) {\n  var marker = checkStrong(context)\n  var exit = context.enter('strong')\n  var value = phrasing(node, context, {before: marker, after: marker})\n  exit()\n  return marker + marker + value + marker + marker\n}\n\nfunction strongPeek(node, _, context) {\n  return context.options.strong || '*'\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/strong.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/text.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/text.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = text\n\nvar safe = __webpack_require__(/*! ../util/safe */ \"./node_modules/mdast-util-to-markdown/lib/util/safe.js\")\n\nfunction text(node, parent, context, safeOptions) {\n  return safe(context, node.value, safeOptions)\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/text.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = thematicBreak\n\nvar repeat = __webpack_require__(/*! repeat-string */ \"./node_modules/repeat-string/index.js\")\nvar checkRepeat = __webpack_require__(/*! ../util/check-rule-repeat */ \"./node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js\")\nvar checkRule = __webpack_require__(/*! ../util/check-rule */ \"./node_modules/mdast-util-to-markdown/lib/util/check-rule.js\")\n\nfunction thematicBreak(node, parent, context) {\n  var value = repeat(\n    checkRule(context) + (context.options.ruleSpaces ? ' ' : ''),\n    checkRepeat(context)\n  )\n\n  return context.options.ruleSpaces ? value.slice(0, -1) : value\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = toMarkdown\n\nvar zwitch = __webpack_require__(/*! zwitch */ \"./node_modules/zwitch/index.js\")\nvar defaultHandlers = __webpack_require__(/*! ./handle */ \"./node_modules/mdast-util-to-markdown/lib/handle/index.js\")\nvar defaultUnsafePatterns = __webpack_require__(/*! ./unsafe */ \"./node_modules/mdast-util-to-markdown/lib/unsafe.js\")\nvar defaultJoin = __webpack_require__(/*! ./join */ \"./node_modules/mdast-util-to-markdown/lib/join.js\")\n\nfunction toMarkdown(tree, options) {\n  var settings = options || {}\n  var extensions = configure(settings)\n  var stack = []\n  var handle = zwitch('type', {\n    invalid: invalid,\n    unknown: unknown,\n    handlers: extensions.handlers\n  })\n  var context = {\n    handle: handle,\n    stack: stack,\n    enter: enter,\n    options: settings,\n    unsafePatterns: extensions.unsafe,\n    join: extensions.join\n  }\n  var result = handle(tree, null, context, {before: '\\n', after: '\\n'})\n\n  if (\n    result &&\n    result.charCodeAt(result.length - 1) !== 10 &&\n    result.charCodeAt(result.length - 1) !== 13\n  ) {\n    result += '\\n'\n  }\n\n  return result\n\n  function enter(name) {\n    stack.push(name)\n    return exit\n\n    function exit() {\n      stack.pop()\n    }\n  }\n}\n\nfunction invalid(value) {\n  throw new Error('Cannot handle value `' + value + '`, expected node')\n}\n\nfunction unknown(node) {\n  throw new Error('Cannot handle unknown node `' + node.type + '`')\n}\n\nfunction configure(settings) {\n  var extensions = [\n    {unsafe: settings.unsafe, handlers: settings.handlers, join: settings.join}\n  ].concat(settings.extensions || [])\n  var unsafe = defaultUnsafePatterns\n  var join = defaultJoin\n  var handlers = Object.assign({}, defaultHandlers)\n  var index = -1\n\n  if (settings.tightDefinitions) {\n    join = [joinDefinition].concat(join)\n  }\n\n  while (++index < extensions.length) {\n    unsafe = unsafe.concat(extensions[index].unsafe || [])\n    join = join.concat(extensions[index].join || [])\n    Object.assign(handlers, extensions[index].handlers || {})\n  }\n\n  return {unsafe: unsafe, join: join, handlers: handlers}\n}\n\nfunction joinDefinition(left, right) {\n  // No blank line between adjacent definitions.\n  if (left.type === 'definition' && left.type === right.type) {\n    return 0\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/index.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/join.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = [joinDefaults]\n\nvar formatCodeAsIndented = __webpack_require__(/*! ./util/format-code-as-indented */ \"./node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js\")\nvar formatHeadingAsSetext = __webpack_require__(/*! ./util/format-heading-as-setext */ \"./node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js\")\n\nfunction joinDefaults(left, right, parent, context) {\n  if (\n    // Two lists with the same marker.\n    (right.type === 'list' &&\n      right.type === left.type &&\n      Boolean(left.ordered) === Boolean(right.ordered)) ||\n    // Indented code after list or another indented code.\n    (right.type === 'code' &&\n      formatCodeAsIndented(right, context) &&\n      (left.type === 'list' ||\n        (left.type === right.type && formatCodeAsIndented(left, context))))\n  ) {\n    return false\n  }\n\n  // Join children of a list or an item.\n  // In which case, `parent` has a `spread` field.\n  if (typeof parent.spread === 'boolean') {\n    if (\n      left.type === 'paragraph' &&\n      // Two paragraphs.\n      (left.type === right.type ||\n        right.type === 'definition' ||\n        // Paragraph followed by a setext heading.\n        (right.type === 'heading' && formatHeadingAsSetext(right, context)))\n    ) {\n      return\n    }\n\n    return parent.spread ? 1 : 0\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/join.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/unsafe.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/unsafe.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\n  {\n    character: '\\t',\n    inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde']\n  },\n  {\n    character: '\\r',\n    inConstruct: [\n      'codeFencedLangGraveAccent',\n      'codeFencedLangTilde',\n      'codeFencedMetaGraveAccent',\n      'codeFencedMetaTilde',\n      'destinationLiteral',\n      'headingAtx'\n    ]\n  },\n  {\n    character: '\\n',\n    inConstruct: [\n      'codeFencedLangGraveAccent',\n      'codeFencedLangTilde',\n      'codeFencedMetaGraveAccent',\n      'codeFencedMetaTilde',\n      'destinationLiteral',\n      'headingAtx'\n    ]\n  },\n  {\n    character: ' ',\n    inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde']\n  },\n  // An exclamation mark can start an image, if it is followed by a link or\n  // a link reference.\n  {character: '!', after: '\\\\[', inConstruct: 'phrasing'},\n  // A quote can break out of a title.\n  {character: '\"', inConstruct: 'titleQuote'},\n  // A number sign could start an ATX heading if it starts a line.\n  {atBreak: true, character: '#'},\n  // Dollar sign and percentage are not used in markdown.\n  // An ampersand could start a character reference.\n  {character: '&', after: '[#A-Za-z]', inConstruct: 'phrasing'},\n  // An apostrophe can break out of a title.\n  {character: \"'\", inConstruct: 'titleApostrophe'},\n  // A left paren could break out of a destination raw.\n  {character: '(', inConstruct: 'destinationRaw'},\n  {before: '\\\\]', character: '(', inConstruct: 'phrasing'},\n  // A right paren could start a list item or break out of a destination\n  // raw.\n  {atBreak: true, before: '\\\\d+', character: ')'},\n  {character: ')', inConstruct: 'destinationRaw'},\n  // An asterisk can start thematic breaks, list items, emphasis, strong.\n  {atBreak: true, character: '*'},\n  {character: '*', inConstruct: 'phrasing'},\n  // A plus sign could start a list item.\n  {atBreak: true, character: '+'},\n  // A dash can start thematic breaks, list items, and setext heading\n  // underlines.\n  {atBreak: true, character: '-'},\n  // A dot could start a list item.\n  {atBreak: true, before: '\\\\d+', character: '.', after: '(?:[ \\t\\r\\n]|$)'},\n  // Slash, colon, and semicolon are not used in markdown for constructs.\n  // A less than can start html (flow or text) or an autolink.\n  // HTML could start with an exclamation mark (declaration, cdata, comment),\n  // slash (closing tag), question mark (instruction), or a letter (tag).\n  // An autolink also starts with a letter.\n  // Finally, it could break out of a destination literal.\n  {atBreak: true, character: '<', after: '[!/?A-Za-z]'},\n  {character: '<', after: '[!/?A-Za-z]', inConstruct: 'phrasing'},\n  {character: '<', inConstruct: 'destinationLiteral'},\n  // An equals to can start setext heading underlines.\n  {atBreak: true, character: '='},\n  // A greater than can start block quotes and it can break out of a\n  // destination literal.\n  {atBreak: true, character: '>'},\n  {character: '>', inConstruct: 'destinationLiteral'},\n  // Question mark and at sign are not used in markdown for constructs.\n  // A left bracket can start definitions, references, labels,\n  {atBreak: true, character: '['},\n  {\n    character: '[',\n    inConstruct: ['phrasing', 'label', 'reference']\n  },\n  // A backslash can start an escape (when followed by punctuation) or a\n  // hard break (when followed by an eol).\n  {character: '\\\\', after: '[!-/:-@[-`{-~]'},\n  {character: '\\\\', after: '[\\\\r\\\\n]', inConstruct: 'phrasing'},\n  // A right bracket can exit labels.\n  {\n    character: ']',\n    inConstruct: ['label', 'reference']\n  },\n  // Caret is not used in markdown for constructs.\n  // An underscore can start emphasis, strong, or a thematic break.\n  {atBreak: true, character: '_'},\n  {before: '[^A-Za-z]', character: '_', inConstruct: 'phrasing'},\n  {character: '_', after: '[^A-Za-z]', inConstruct: 'phrasing'},\n  // A grave accent can start code (fenced or text), or it can break out of\n  // a grave accent code fence.\n  {atBreak: true, character: '`'},\n  {\n    character: '`',\n    inConstruct: [\n      'codeFencedLangGraveAccent',\n      'codeFencedMetaGraveAccent',\n      'phrasing'\n    ]\n  },\n  // Left brace, vertical bar, right brace are not used in markdown for\n  // constructs.\n  // A tilde can start code (fenced).\n  {atBreak: true, character: '~'}\n]\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/unsafe.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/association.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/association.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = association\n\nvar decode = __webpack_require__(/*! parse-entities/decode-entity */ \"./node_modules/parse-entities/decode-entity.browser.js\")\n\nvar characterEscape = /\\\\([!-/:-@[-`{-~])/g\nvar characterReference = /&(#(\\d{1,7}|x[\\da-f]{1,6})|[\\da-z]{1,31});/gi\n\n// The `label` of an association is the string value: character escapes and\n// references work, and casing is intact.\n// The `identifier` is used to match one association to another: controversially,\n// character escapes and references don’t work in this matching: `&copy;` does\n// not match `©`, and `\\+` does not match `+`.\n// But casing is ignored (and whitespace) is trimmed and collapsed: ` A\\nb`\n// matches `a b`.\n// So, we do prefer the label when figuring out how we’re going to serialize:\n// it has whitespace, casing, and we can ignore most useless character escapes\n// and all character references.\nfunction association(node) {\n  if (node.label || !node.identifier) {\n    return node.label || ''\n  }\n\n  return node.identifier\n    .replace(characterEscape, '$1')\n    .replace(characterReference, decodeIfPossible)\n}\n\nfunction decodeIfPossible($0, $1) {\n  return decode($1) || $0\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/association.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkBullet\n\nfunction checkBullet(context) {\n  var marker = context.options.bullet || '*'\n\n  if (marker !== '*' && marker !== '+' && marker !== '-') {\n    throw new Error(\n      'Cannot serialize items with `' +\n        marker +\n        '` for `options.bullet`, expected `*`, `+`, or `-`'\n    )\n  }\n\n  return marker\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkEmphasis\n\nfunction checkEmphasis(context) {\n  var marker = context.options.emphasis || '*'\n\n  if (marker !== '*' && marker !== '_') {\n    throw new Error(\n      'Cannot serialize emphasis with `' +\n        marker +\n        '` for `options.emphasis`, expected `*`, or `_`'\n    )\n  }\n\n  return marker\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-fence.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-fence.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkFence\n\nfunction checkFence(context) {\n  var marker = context.options.fence || '`'\n\n  if (marker !== '`' && marker !== '~') {\n    throw new Error(\n      'Cannot serialize code with `' +\n        marker +\n        '` for `options.fence`, expected `` ` `` or `~`'\n    )\n  }\n\n  return marker\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-fence.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkListItemIndent\n\nfunction checkListItemIndent(context) {\n  var style = context.options.listItemIndent || 'tab'\n\n  if (style === 1 || style === '1') {\n    return 'one'\n  }\n\n  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {\n    throw new Error(\n      'Cannot serialize items with `' +\n        style +\n        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'\n    )\n  }\n\n  return style\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-quote.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-quote.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkQuote\n\nfunction checkQuote(context) {\n  var marker = context.options.quote || '\"'\n\n  if (marker !== '\"' && marker !== \"'\") {\n    throw new Error(\n      'Cannot serialize title with `' +\n        marker +\n        '` for `options.quote`, expected `\"`, or `\\'`'\n    )\n  }\n\n  return marker\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-quote.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkRule\n\nfunction checkRule(context) {\n  var repetition = context.options.ruleRepetition || 3\n\n  if (repetition < 3) {\n    throw new Error(\n      'Cannot serialize rules with repetition `' +\n        repetition +\n        '` for `options.ruleRepetition`, expected `3` or more'\n    )\n  }\n\n  return repetition\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-rule-repeat.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-rule.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-rule.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkRule\n\nfunction checkRule(context) {\n  var marker = context.options.rule || '*'\n\n  if (marker !== '*' && marker !== '-' && marker !== '_') {\n    throw new Error(\n      'Cannot serialize rules with `' +\n        marker +\n        '` for `options.rule`, expected `*`, `-`, or `_`'\n    )\n  }\n\n  return marker\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-rule.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-strong.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-strong.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = checkStrong\n\nfunction checkStrong(context) {\n  var marker = context.options.strong || '*'\n\n  if (marker !== '*' && marker !== '_') {\n    throw new Error(\n      'Cannot serialize strong with `' +\n        marker +\n        '` for `options.strong`, expected `*`, or `_`'\n    )\n  }\n\n  return marker\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/check-strong.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-flow.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = flow\n\nvar repeat = __webpack_require__(/*! repeat-string */ \"./node_modules/repeat-string/index.js\")\n\nfunction flow(parent, context) {\n  var children = parent.children || []\n  var results = []\n  var index = -1\n  var child\n\n  while (++index < children.length) {\n    child = children[index]\n\n    results.push(\n      context.handle(child, parent, context, {before: '\\n', after: '\\n'})\n    )\n\n    if (index + 1 < children.length) {\n      results.push(between(child, children[index + 1]))\n    }\n  }\n\n  return results.join('')\n\n  function between(left, right) {\n    var index = -1\n    var result\n\n    while (++index < context.join.length) {\n      result = context.join[index](left, right, parent, context)\n\n      if (result === true || result === 1) {\n        break\n      }\n\n      if (typeof result === 'number') {\n        return repeat('\\n', 1 + Number(result))\n      }\n\n      if (result === false) {\n        return '\\n\\n<!---->\\n\\n'\n      }\n    }\n\n    return '\\n\\n'\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/container-flow.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = phrasing\n\nfunction phrasing(parent, context, safeOptions) {\n  var children = parent.children || []\n  var results = []\n  var index = -1\n  var before = safeOptions.before\n  var after\n  var handle\n  var child\n\n  while (++index < children.length) {\n    child = children[index]\n\n    if (index + 1 < children.length) {\n      handle = context.handle.handlers[children[index + 1].type]\n      if (handle && handle.peek) handle = handle.peek\n      after = handle\n        ? handle(children[index + 1], parent, context, {\n            before: '',\n            after: ''\n          }).charAt(0)\n        : ''\n    } else {\n      after = safeOptions.after\n    }\n\n    results.push(\n      context.handle(child, parent, context, {\n        before: before,\n        after: after\n      })\n    )\n    before = results[results.length - 1].slice(-1)\n  }\n\n  return results.join('')\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = formatCodeAsIndented\n\nfunction formatCodeAsIndented(node, context) {\n  return (\n    node.value &&\n    !context.options.fences &&\n    // If there’s no info…\n    !node.lang &&\n    // And there’s a non-whitespace character…\n    /[^ \\r\\n]/.test(node.value) &&\n    // And the value doesn’t start or end in a blank…\n    !/^[\\t ]*[\\r\\n]|[\\r\\n][\\t ]*$/.test(node.value)\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = formatHeadingAsSetext\n\nvar toString = __webpack_require__(/*! mdast-util-to-string */ \"./node_modules/mdast-util-to-string/index.js\")\n\nfunction formatHeadingAsSetext(node, context) {\n  return (\n    context.options.setext && (!node.depth || node.depth < 3) && toString(node)\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = formatLinkAsAutolink\n\nvar toString = __webpack_require__(/*! mdast-util-to-string */ \"./node_modules/mdast-util-to-string/index.js\")\n\nfunction formatLinkAsAutolink(node) {\n  var raw = toString(node)\n\n  return (\n    // If there’s a url…\n    node.url &&\n    // And there’s a no title…\n    !node.title &&\n    // And if the url is the same as the content…\n    (raw === node.url || 'mailto:' + raw === node.url) &&\n    // And that starts w/ a protocol…\n    /^[a-z][a-z+.-]+:/i.test(node.url) &&\n    // And that doesn’t contain ASCII control codes (character escapes and\n    // references don’t work) or angle brackets…\n    !/[\\0- <>\\u007F]/.test(node.url)\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = indentLines\n\nvar eol = /\\r?\\n|\\r/g\n\nfunction indentLines(value, map) {\n  var result = []\n  var start = 0\n  var line = 0\n  var match\n\n  while ((match = eol.exec(value))) {\n    one(value.slice(start, match.index))\n    result.push(match[0])\n    start = match.index + match[0].length\n    line++\n  }\n\n  one(value.slice(start))\n\n  return result.join('')\n\n  function one(value) {\n    result.push(map(value, line, !value))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/safe.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/safe.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = safe\n\nfunction safe(context, input, config) {\n  var value = (config.before || '') + (input || '') + (config.after || '')\n  var positions = []\n  var result = []\n  var infos = {}\n  var index = -1\n  var before\n  var after\n  var position\n  var pattern\n  var expression\n  var match\n  var start\n  var end\n\n  while (++index < context.unsafePatterns.length) {\n    pattern = context.unsafePatterns[index]\n\n    if (\n      !inScope(context.stack, pattern.inConstruct, true) ||\n      inScope(context.stack, pattern.notInConstruct)\n    ) {\n      continue\n    }\n\n    expression =\n      pattern._compiled || (pattern._compiled = toExpression(pattern))\n\n    while ((match = expression.exec(value))) {\n      before = 'before' in pattern || pattern.atBreak\n      after = 'after' in pattern\n      position = match.index + (before ? match[1].length : 0)\n\n      if (positions.indexOf(position) === -1) {\n        positions.push(position)\n        infos[position] = {before: before, after: after}\n      } else {\n        if (infos[position].before && !before) {\n          infos[position].before = false\n        }\n\n        if (infos[position].after && !after) {\n          infos[position].after = false\n        }\n      }\n    }\n  }\n\n  positions.sort(numerical)\n\n  start = config.before ? config.before.length : 0\n  end = value.length - (config.after ? config.after.length : 0)\n  index = -1\n\n  while (++index < positions.length) {\n    position = positions[index]\n\n    if (\n      // Character before or after matched:\n      position < start ||\n      position >= end\n    ) {\n      continue\n    }\n\n    // If this character is supposed to be escaped because it has a condition on\n    // the next character, and the next character is definitly being escaped,\n    // then skip this escape.\n    if (\n      position + 1 < end &&\n      positions[index + 1] === position + 1 &&\n      infos[position].after &&\n      !infos[position + 1].before &&\n      !infos[position + 1].after\n    ) {\n      continue\n    }\n\n    if (start !== position) {\n      result.push(value.slice(start, position))\n    }\n\n    start = position\n\n    if (\n      /[!-/:-@[-`{-~]/.test(value.charAt(position)) &&\n      (!config.encode || config.encode.indexOf(value.charAt(position)) === -1)\n    ) {\n      // Character escape.\n      result.push('\\\\')\n    } else {\n      // Character reference.\n      result.push(\n        '&#x' + value.charCodeAt(position).toString(16).toUpperCase() + ';'\n      )\n      start++\n    }\n  }\n\n  result.push(value.slice(start, end))\n\n  return result.join('')\n}\n\nfunction inScope(stack, list, none) {\n  var index\n\n  if (!list) {\n    return none\n  }\n\n  if (typeof list === 'string') {\n    list = [list]\n  }\n\n  index = -1\n\n  while (++index < list.length) {\n    if (stack.indexOf(list[index]) !== -1) {\n      return true\n    }\n  }\n\n  return false\n}\n\nfunction toExpression(pattern) {\n  var before = pattern.before ? '(?:' + pattern.before + ')' : ''\n  var after = pattern.after ? '(?:' + pattern.after + ')' : ''\n\n  if (pattern.atBreak) {\n    before = '[\\\\r\\\\n][\\\\t ]*' + before\n  }\n\n  return new RegExp(\n    (before ? '(' + before + ')' : '') +\n      (/[|\\\\{}()[\\]^$+*?.-]/.test(pattern.character) ? '\\\\' : '') +\n      pattern.character +\n      (after || ''),\n    'g'\n  )\n}\n\nfunction numerical(a, b) {\n  return a - b\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-markdown/lib/util/safe.js?");

/***/ }),

/***/ "./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = toString\n\n// Get the text content of a node.\n// Prefer the node’s plain-text fields, otherwise serialize its children,\n// and if the given value is an array, serialize the nodes in it.\nfunction toString(node) {\n  return (\n    (node &&\n      (node.value ||\n        node.alt ||\n        node.title ||\n        ('children' in node && all(node.children)) ||\n        ('length' in node && all(node)))) ||\n    ''\n  )\n}\n\nfunction all(values) {\n  var result = []\n  var length = values.length\n  var index = -1\n\n  while (++index < length) {\n    result[index] = toString(values[index])\n  }\n\n  return result.join('')\n}\n\n\n//# sourceURL=webpack:///./node_modules/mdast-util-to-string/index.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alpha.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alpha.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/[A-Za-z]/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-alpha.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alphanumeric.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alphanumeric.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/[\\dA-Za-z]/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-alphanumeric.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-atext.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-atext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/[#-'*+\\--9=?A-Z^-~]/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-atext.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-control.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-control.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = asciiControl\n\n// Note: EOF is seen as ASCII control here, because `null < 32 == true`.\nfunction asciiControl(code) {\n  return (\n    // Special whitespace codes (which have negative values), C0 and Control\n    // character DEL\n    code < 32 || code === 127\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-control.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-digit.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-digit.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/\\d/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-digit.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-hex-digit.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-hex-digit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/[\\dA-Fa-f]/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-hex-digit.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-punctuation.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-punctuation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/[!-/:-@[-`{-~]/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/ascii-punctuation.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js":
/*!********************************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending-or-space.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = markdownLineEndingOrSpace\n\nfunction markdownLineEndingOrSpace(code) {\n  return code < 0 || code === 32\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/markdown-line-ending-or-space.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = markdownLineEnding\n\nfunction markdownLineEnding(code) {\n  return code < -2\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/markdown-line-ending.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-space.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-space.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = markdownSpace\n\nfunction markdownSpace(code) {\n  return code === -2 || code === -1 || code === 32\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/markdown-space.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-punctuation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-punctuation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var unicodePunctuation = __webpack_require__(/*! ../constant/unicode-punctuation-regex */ \"./node_modules/micromark/dist/constant/unicode-punctuation-regex.js\")\nvar check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\n// Size note: removing ASCII from the regex and using `ascii-punctuation` here\n// In fact adds to the bundle size.\nmodule.exports = check(unicodePunctuation)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/unicode-punctuation.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-whitespace.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-whitespace.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var check = __webpack_require__(/*! ../util/regex-check */ \"./node_modules/micromark/dist/util/regex-check.js\")\n\nmodule.exports = check(/\\s/)\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/character/unicode-whitespace.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constant/assign.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/constant/assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Object.assign\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constant/assign.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constant/from-char-code.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/from-char-code.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = String.fromCharCode\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constant/from-char-code.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constant/has-own-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/has-own-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {}.hasOwnProperty\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constant/has-own-property.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-block-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-block-names.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.\nmodule.exports = [\n  'address',\n  'article',\n  'aside',\n  'base',\n  'basefont',\n  'blockquote',\n  'body',\n  'caption',\n  'center',\n  'col',\n  'colgroup',\n  'dd',\n  'details',\n  'dialog',\n  'dir',\n  'div',\n  'dl',\n  'dt',\n  'fieldset',\n  'figcaption',\n  'figure',\n  'footer',\n  'form',\n  'frame',\n  'frameset',\n  'h1',\n  'h2',\n  'h3',\n  'h4',\n  'h5',\n  'h6',\n  'head',\n  'header',\n  'hr',\n  'html',\n  'iframe',\n  'legend',\n  'li',\n  'link',\n  'main',\n  'menu',\n  'menuitem',\n  'nav',\n  'noframes',\n  'ol',\n  'optgroup',\n  'option',\n  'p',\n  'param',\n  'section',\n  'source',\n  'summary',\n  'table',\n  'tbody',\n  'td',\n  'tfoot',\n  'th',\n  'thead',\n  'title',\n  'tr',\n  'track',\n  'ul'\n]\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constant/html-block-names.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-raw-names.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-raw-names.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.\nmodule.exports = ['pre', 'script', 'style']\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constant/html-raw-names.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/unicode-punctuation-regex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This module is generated by `script/`.\n//\n// CommonMark handles attention (emphasis, strong) markers based on what comes\n// before or after them.\n// One such difference is if those characters are Unicode punctuation.\n// This script is generated from the Unicode data.\nmodule.exports = /[!-\\/:-@\\[-`\\{-~\\xA1\\xA7\\xAB\\xB6\\xB7\\xBB\\xBF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u09FD\\u0A76\\u0AF0\\u0C77\\u0C84\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E4F\\u2E52\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65]/\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constant/unicode-punctuation-regex.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/constructs.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/constructs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var attention = __webpack_require__(/*! ./tokenize/attention */ \"./node_modules/micromark/dist/tokenize/attention.js\")\nvar headingAtx = __webpack_require__(/*! ./tokenize/heading-atx */ \"./node_modules/micromark/dist/tokenize/heading-atx.js\")\nvar autolink = __webpack_require__(/*! ./tokenize/autolink */ \"./node_modules/micromark/dist/tokenize/autolink.js\")\nvar list = __webpack_require__(/*! ./tokenize/list */ \"./node_modules/micromark/dist/tokenize/list.js\")\nvar blockQuote = __webpack_require__(/*! ./tokenize/block-quote */ \"./node_modules/micromark/dist/tokenize/block-quote.js\")\nvar characterEscape = __webpack_require__(/*! ./tokenize/character-escape */ \"./node_modules/micromark/dist/tokenize/character-escape.js\")\nvar characterReference = __webpack_require__(/*! ./tokenize/character-reference */ \"./node_modules/micromark/dist/tokenize/character-reference.js\")\nvar codeFenced = __webpack_require__(/*! ./tokenize/code-fenced */ \"./node_modules/micromark/dist/tokenize/code-fenced.js\")\nvar codeIndented = __webpack_require__(/*! ./tokenize/code-indented */ \"./node_modules/micromark/dist/tokenize/code-indented.js\")\nvar codeText = __webpack_require__(/*! ./tokenize/code-text */ \"./node_modules/micromark/dist/tokenize/code-text.js\")\nvar definition = __webpack_require__(/*! ./tokenize/definition */ \"./node_modules/micromark/dist/tokenize/definition.js\")\nvar hardBreakEscape = __webpack_require__(/*! ./tokenize/hard-break-escape */ \"./node_modules/micromark/dist/tokenize/hard-break-escape.js\")\nvar htmlFlow = __webpack_require__(/*! ./tokenize/html-flow */ \"./node_modules/micromark/dist/tokenize/html-flow.js\")\nvar htmlText = __webpack_require__(/*! ./tokenize/html-text */ \"./node_modules/micromark/dist/tokenize/html-text.js\")\nvar labelEnd = __webpack_require__(/*! ./tokenize/label-end */ \"./node_modules/micromark/dist/tokenize/label-end.js\")\nvar labelImage = __webpack_require__(/*! ./tokenize/label-start-image */ \"./node_modules/micromark/dist/tokenize/label-start-image.js\")\nvar labelLink = __webpack_require__(/*! ./tokenize/label-start-link */ \"./node_modules/micromark/dist/tokenize/label-start-link.js\")\nvar setextUnderline = __webpack_require__(/*! ./tokenize/setext-underline */ \"./node_modules/micromark/dist/tokenize/setext-underline.js\")\nvar thematicBreak = __webpack_require__(/*! ./tokenize/thematic-break */ \"./node_modules/micromark/dist/tokenize/thematic-break.js\")\nvar lineEnding = __webpack_require__(/*! ./tokenize/line-ending */ \"./node_modules/micromark/dist/tokenize/line-ending.js\")\nvar resolveText = __webpack_require__(/*! ./initialize/text */ \"./node_modules/micromark/dist/initialize/text.js\").resolver\n\nexports.document = {\n  42: list, // Asterisk\n  43: list, // Plus sign\n  45: list, // Dash\n  48: list, // 0\n  49: list, // 1\n  50: list, // 2\n  51: list, // 3\n  52: list, // 4\n  53: list, // 5\n  54: list, // 6\n  55: list, // 7\n  56: list, // 8\n  57: list, // 9\n  62: blockQuote // Greater than\n}\n\nexports.contentInitial = {\n  91: definition // Left square bracket\n}\n\nexports.flowInitial = {\n  '-2': codeIndented, // Horizontal tab\n  '-1': codeIndented, // Virtual space\n  32: codeIndented // Space\n}\n\nexports.flow = {\n  35: headingAtx, // Number sign\n  42: thematicBreak, // Asterisk\n  45: [setextUnderline, thematicBreak], // Dash\n  60: htmlFlow, // Less than\n  61: setextUnderline, // Equals to\n  95: thematicBreak, // Underscore\n  96: codeFenced, // Grave accent\n  126: codeFenced // Tilde\n}\n\nexports.string = {\n  38: characterReference, // Ampersand\n  92: characterEscape // Backslash\n}\n\nexports.text = {\n  '-5': lineEnding, // Carriage return\n  '-4': lineEnding, // Line feed\n  '-3': lineEnding, // Carriage return + line feed\n  33: labelImage, // Exclamation mark\n  38: characterReference, // Ampersand\n  42: attention, // Asterisk\n  60: [autolink, htmlText], // Less than\n  91: labelLink, // Left square bracket\n  92: [hardBreakEscape, characterEscape], // Backslash\n  93: labelEnd, // Right square bracket\n  95: attention, // Underscore\n  96: codeText // Grave accent\n}\n\nexports.insideSpan = {\n  null: [attention, resolveText]\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/constructs.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/initialize/content.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/content.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = initializeContent\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar createSpace = __webpack_require__(/*! ../tokenize/factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction initializeContent(effects) {\n  var contentStart = effects.attempt(\n    this.parser.constructs.contentInitial,\n    afterContentStartConstruct,\n    paragraphInitial\n  )\n\n  var previous\n\n  return contentStart\n\n  function afterContentStartConstruct(code) {\n    if (code === null) {\n      effects.consume(code)\n      return\n    }\n\n    effects.enter('lineEnding')\n    effects.consume(code)\n    effects.exit('lineEnding')\n    return createSpace(effects, contentStart, 'linePrefix')\n  }\n\n  function paragraphInitial(code) {\n    effects.enter('paragraph')\n    return lineStart(code)\n  }\n\n  function lineStart(code) {\n    var token = effects.enter('chunkText', {\n      contentType: 'text',\n      previous: previous\n    })\n\n    if (previous) {\n      previous.next = token\n    }\n\n    previous = token\n\n    return data(code)\n  }\n\n  function data(code) {\n    if (code === null) {\n      effects.exit('chunkText')\n      effects.exit('paragraph')\n      effects.consume(code)\n      return\n    }\n\n    if (markdownLineEnding(code)) {\n      effects.consume(code)\n      effects.exit('chunkText')\n      return lineStart\n    }\n\n    // Data.\n    effects.consume(code)\n    return data\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/initialize/content.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/initialize/document.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/document.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = initializeDocument\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar createSpace = __webpack_require__(/*! ../tokenize/factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\nvar blank = __webpack_require__(/*! ../tokenize/partial-blank-line */ \"./node_modules/micromark/dist/tokenize/partial-blank-line.js\")\n\nvar container = {tokenize: tokenizeContainer}\nvar lazyFlow = {tokenize: tokenizeLazyFlow}\n\nfunction initializeDocument(effects) {\n  var self = this\n  var stack = []\n  var continued = 0\n  var inspectResult\n  var childFlow\n  var childToken\n\n  return start\n\n  function start(code) {\n    if (continued < stack.length) {\n      self.containerState = stack[continued][1]\n      return effects.attempt(\n        stack[continued][0].continuation,\n        documentContinue,\n        documentContinued\n      )(code)\n    }\n\n    return documentContinued(code)\n  }\n\n  function documentContinue(code) {\n    continued++\n    return start(code)\n  }\n\n  function documentContinued(code) {\n    // If we’re in a concrete construct (such as when expecting another line of\n    // HTML, or we resulted in lazy content), we can immediately start flow.\n    if (inspectResult && inspectResult.flowContinue) {\n      return flowStart(code)\n    }\n\n    self.interrupt =\n      childFlow &&\n      childFlow.currentConstruct &&\n      childFlow.currentConstruct.interruptible\n    self.containerState = {}\n    return effects.attempt(container, containerContinue, flowStart)(code)\n  }\n\n  function containerContinue(code) {\n    stack.push([self.currentConstruct, self.containerState])\n    self.containerState = undefined\n    return documentContinued(code)\n  }\n\n  function flowStart(code) {\n    if (code === null) {\n      exitContainers(0, true)\n      effects.consume(code)\n      return\n    }\n\n    childFlow = childFlow || self.parser.flow(self.now())\n\n    effects.enter('chunkFlow', {\n      contentType: 'flow',\n      previous: childToken,\n      _tokenizer: childFlow\n    })\n\n    return flowContinue(code)\n  }\n\n  function flowContinue(code) {\n    if (code === null) {\n      continueFlow(effects.exit('chunkFlow'))\n      return flowStart(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      effects.consume(code)\n      continueFlow(effects.exit('chunkFlow'))\n      return effects.check(\n        {tokenize: tokenizeInspect, partial: true},\n        documentAfterPeek\n      )\n    }\n\n    effects.consume(code)\n    return flowContinue\n  }\n\n  function documentAfterPeek(code) {\n    exitContainers(\n      inspectResult.continued,\n      inspectResult && inspectResult.flowEnd\n    )\n\n    continued = 0\n    return start(code)\n  }\n\n  function continueFlow(token) {\n    if (childToken) childToken.next = token\n    childToken = token\n    childFlow.lazy = inspectResult && inspectResult.lazy\n    childFlow.defineSkip(token.start)\n    childFlow.write(self.sliceStream(token))\n  }\n\n  function exitContainers(size, end) {\n    var index = stack.length\n\n    // Close the flow.\n    if (childFlow && end) {\n      childFlow.write([null])\n      childToken = childFlow = undefined\n    }\n\n    // Exit open containers.\n    while (index-- > size) {\n      self.containerState = stack[index][1]\n      stack[index][0].exit.call(self, effects)\n    }\n\n    stack.length = size\n  }\n\n  function tokenizeInspect(effects, ok) {\n    var subcontinued = 0\n\n    inspectResult = {}\n\n    return inspectStart\n\n    function inspectStart(code) {\n      if (subcontinued < stack.length) {\n        self.containerState = stack[subcontinued][1]\n        return effects.attempt(\n          stack[subcontinued][0].continuation,\n          inspectContinue,\n          inspectLess\n        )(code)\n      }\n\n      // If we’re continued but in a concrete flow, we can’t have more\n      // containers.\n      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {\n        inspectResult.flowContinue = true\n        return inspectDone(code)\n      }\n\n      self.interrupt =\n        childFlow.currentConstruct && childFlow.currentConstruct.interruptible\n      self.containerState = {}\n      return effects.attempt(container, inspectFlowEnd, inspectDone)(code)\n    }\n\n    function inspectContinue(code) {\n      subcontinued++\n      return self.containerState._closeFlow\n        ? inspectFlowEnd(code)\n        : inspectStart(code)\n    }\n\n    function inspectLess(code) {\n      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {\n        // Maybe another container?\n        self.containerState = {}\n        return effects.attempt(\n          container,\n          inspectFlowEnd,\n          // Maybe flow, or a blank line?\n          effects.attempt(\n            lazyFlow,\n            inspectFlowEnd,\n            effects.check(blank, inspectFlowEnd, inspectLazy)\n          )\n        )(code)\n      }\n\n      // Otherwise we’re interrupting.\n      return inspectFlowEnd(code)\n    }\n\n    function inspectLazy(code) {\n      // Act as if all containers are continued.\n      subcontinued = stack.length\n      inspectResult.lazy = true\n      inspectResult.flowContinue = true\n      return inspectDone(code)\n    }\n\n    // We’re done with flow if we have more containers, or an interruption.\n    function inspectFlowEnd(code) {\n      inspectResult.flowEnd = true\n      return inspectDone(code)\n    }\n\n    function inspectDone(code) {\n      inspectResult.continued = subcontinued\n      self.interrupt = self.containerState = undefined\n      return ok(code)\n    }\n  }\n}\n\nfunction tokenizeContainer(effects, ok, nok) {\n  return createSpace(\n    effects,\n    effects.attempt(this.parser.constructs.document, ok, nok),\n    'linePrefix',\n    4\n  )\n}\n\nfunction tokenizeLazyFlow(effects, ok, nok) {\n  return createSpace(\n    effects,\n    effects.lazy(this.parser.constructs.flow, ok, nok),\n    'linePrefix',\n    4\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/initialize/document.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/initialize/flow.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/flow.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = initializeFlow\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar createSpace = __webpack_require__(/*! ../tokenize/factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\nvar blank = __webpack_require__(/*! ../tokenize/partial-blank-line */ \"./node_modules/micromark/dist/tokenize/partial-blank-line.js\")\nvar content = __webpack_require__(/*! ../tokenize/content */ \"./node_modules/micromark/dist/tokenize/content.js\")\n\nfunction initializeFlow(effects) {\n  var self = this\n  var initial = effects.attempt(\n    // Try to parse a blank line.\n    blank,\n    atBlankEnding,\n    // Try to parse initial flow (essentially, only code).\n    effects.attempt(\n      this.parser.constructs.flowInitial,\n      afterConstruct,\n      createSpace(\n        effects,\n        effects.attempt(\n          this.parser.constructs.flow,\n          afterConstruct,\n          effects.attempt(content, afterConstruct)\n        ),\n        'linePrefix'\n      )\n    )\n  )\n\n  return initial\n\n  function atBlankEnding(code) {\n    if (code === null) {\n      effects.consume(code)\n      return\n    }\n\n    effects.enter('lineEndingBlank')\n    effects.consume(code)\n    effects.exit('lineEndingBlank')\n    self.currentConstruct = undefined\n    return initial\n  }\n\n  function afterConstruct(code) {\n    if (code === null) {\n      effects.consume(code)\n      return\n    }\n\n    effects.enter('lineEnding')\n    effects.consume(code)\n    effects.exit('lineEnding')\n    self.currentConstruct = undefined\n    return initial\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/initialize/flow.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/initialize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/text.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.text = initializeFactory('text')\nexports.string = initializeFactory('string')\nexports.resolver = {resolveAll: resolver()}\n\nvar assign = __webpack_require__(/*! ../constant/assign */ \"./node_modules/micromark/dist/constant/assign.js\")\n\nvar shallow = __webpack_require__(/*! ../util/shallow */ \"./node_modules/micromark/dist/util/shallow.js\")\n\nfunction initializeFactory(field) {\n  return {\n    tokenize: initializeText,\n    resolveAll: resolver(field === 'text' ? resolveAllLineSuffixes : undefined)\n  }\n\n  function initializeText(effects) {\n    var self = this\n    var constructs = this.parser.constructs[field]\n    var text = effects.attempt(constructs, start, notText)\n\n    return start\n\n    function start(code) {\n      return atBreak(code) ? text(code) : notText(code)\n    }\n\n    function notText(code) {\n      if (code === null) {\n        effects.consume(code)\n        return\n      }\n\n      effects.enter('data')\n      effects.consume(code)\n      return data\n    }\n\n    function data(code) {\n      if (atBreak(code)) {\n        effects.exit('data')\n        return text(code)\n      }\n\n      // Data.\n      effects.consume(code)\n      return data\n    }\n\n    function atBreak(code) {\n      var list = constructs[code]\n      var index = -1\n\n      if (code === null) {\n        return true\n      }\n\n      if (list) {\n        while (++index < list.length) {\n          if (\n            !list[index].previous ||\n            list[index].previous.call(self, self.previous)\n          ) {\n            return true\n          }\n        }\n      }\n    }\n  }\n}\n\nfunction resolver(extraResolver) {\n  return resolveAllText\n\n  function resolveAllText(events, context) {\n    var index = -1\n    var enter\n\n    // A rather boring computation (to merge adjacent `data` events) which\n    // improves mm performance by 29%.\n    while (++index <= events.length) {\n      if (enter === undefined) {\n        if (events[index] && events[index][1].type === 'data') {\n          enter = index\n          index++\n        }\n      } else if (!events[index] || events[index][1].type !== 'data') {\n        // Don’t do anything if there is one data token.\n        if (index !== enter + 2) {\n          events[enter][1].end = events[index - 1][1].end\n          events.splice(enter + 2, index - enter - 2)\n          index = enter + 2\n        }\n\n        enter = undefined\n      }\n    }\n\n    return extraResolver ? extraResolver(events, context) : events\n  }\n}\n\n// A rather ugly set of instructions which again looks at chunks in the input\n// stream.\n// The reason to do this here is that it is *much* faster to parse in reverse.\n// And that we can’t hook into `null` to split the line suffix before an EOF.\n// To do: figure out if we can make this into a clean utility, or even in core.\n// As it will be useful for GFMs literal autolink extension (and maybe even\n// tables?)\nfunction resolveAllLineSuffixes(events, context) {\n  var eventIndex = -1\n  var chunks\n  var data\n  var chunk\n  var index\n  var bufferIndex\n  var size\n  var tabs\n  var token\n\n  while (++eventIndex <= events.length) {\n    if (\n      (eventIndex === events.length ||\n        events[eventIndex][1].type === 'lineEnding') &&\n      events[eventIndex - 1][1].type === 'data'\n    ) {\n      data = events[eventIndex - 1][1]\n      chunks = context.sliceStream(data)\n      index = chunks.length\n      bufferIndex = -1\n      size = 0\n      tabs = undefined\n\n      while (index--) {\n        chunk = chunks[index]\n\n        if (typeof chunk === 'string') {\n          bufferIndex = chunk.length\n\n          while (chunk.charCodeAt(bufferIndex - 1) === 32) {\n            size++\n            bufferIndex--\n          }\n\n          if (bufferIndex) break\n          bufferIndex = -1\n        }\n        // Number\n        else if (chunk === -2) {\n          tabs = true\n          size++\n        } else if (chunk === -1) {\n          // Empty\n        } else {\n          // Replacement character, exit.\n          index++\n          break\n        }\n      }\n\n      if (size) {\n        token = {\n          type:\n            eventIndex === events.length || tabs || size < 2\n              ? 'lineSuffix'\n              : 'hardBreakTrailing',\n\n          start: {\n            line: data.end.line,\n            column: data.end.column - size,\n            offset: data.end.offset - size,\n            _index: data.start._index + index,\n            _bufferIndex: index\n              ? bufferIndex\n              : data.start._bufferIndex + bufferIndex\n          },\n\n          end: shallow(data.end)\n        }\n\n        data.end = shallow(token.start)\n\n        if (data.start.offset === data.end.offset) {\n          assign(data, token)\n        } else {\n          events.splice(\n            eventIndex,\n            0,\n            ['enter', token, context],\n            ['exit', token, context]\n          )\n\n          eventIndex += 2\n        }\n      }\n\n      eventIndex++\n    }\n  }\n\n  return events\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/initialize/text.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/micromark/dist/parse.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createParser\n\nvar initializeContent = __webpack_require__(/*! ./initialize/content */ \"./node_modules/micromark/dist/initialize/content.js\")\nvar initializeDocument = __webpack_require__(/*! ./initialize/document */ \"./node_modules/micromark/dist/initialize/document.js\")\nvar initializeFlow = __webpack_require__(/*! ./initialize/flow */ \"./node_modules/micromark/dist/initialize/flow.js\")\nvar initializeText = __webpack_require__(/*! ./initialize/text */ \"./node_modules/micromark/dist/initialize/text.js\")\nvar constructs = __webpack_require__(/*! ./constructs */ \"./node_modules/micromark/dist/constructs.js\")\nvar createTokenizer = __webpack_require__(/*! ./util/create-tokenizer */ \"./node_modules/micromark/dist/util/create-tokenizer.js\")\nvar combineExtensions = __webpack_require__(/*! ./util/combine-extensions */ \"./node_modules/micromark/dist/util/combine-extensions.js\")\nvar miniflat = __webpack_require__(/*! ./util/miniflat */ \"./node_modules/micromark/dist/util/miniflat.js\")\n\nfunction createParser(options) {\n  var settings = options || {}\n  var parser = {\n    defined: [],\n    constructs: combineExtensions(\n      [constructs].concat(miniflat(settings.extensions))\n    ),\n\n    content: create(initializeContent),\n    document: create(initializeDocument),\n    flow: create(initializeFlow),\n    string: create(initializeText.string),\n    text: create(initializeText.text)\n  }\n\n  return parser\n\n  function create(initializer) {\n    return creator\n    function creator(from) {\n      return createTokenizer(parser, initializer, from)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/parse.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/postprocess.js":
/*!****************************************************!*\
  !*** ./node_modules/micromark/dist/postprocess.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = postprocess\n\nvar subtokenize = __webpack_require__(/*! ./util/subtokenize */ \"./node_modules/micromark/dist/util/subtokenize.js\")\n\nfunction postprocess(events) {\n  while (!subtokenize(events)) {\n    // Empty\n  }\n\n  return events\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/postprocess.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/preprocess.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/preprocess.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = preprocessor\n\nvar search = /[\\0\\t\\n\\r]/g\n\nfunction preprocessor() {\n  var start = true\n  var column = 1\n  var buffer = ''\n  var atCarriageReturn\n\n  return preprocess\n\n  function preprocess(value, encoding, end) {\n    var chunks = []\n    var match\n    var next\n    var startPosition\n    var endPosition\n    var code\n\n    value = buffer + value.toString(encoding)\n    startPosition = 0\n    buffer = ''\n\n    if (start) {\n      if (value.charCodeAt(0) === 65279) {\n        startPosition++\n      }\n\n      start = undefined\n    }\n\n    while (startPosition < value.length) {\n      search.lastIndex = startPosition\n      match = search.exec(value)\n      endPosition = match ? match.index : value.length\n      code = value.charCodeAt(endPosition)\n\n      if (!match) {\n        buffer = value.slice(startPosition)\n        break\n      }\n\n      if (code === 10 && startPosition === endPosition && atCarriageReturn) {\n        chunks.push(-3)\n        atCarriageReturn = undefined\n      } else {\n        if (atCarriageReturn) {\n          chunks.push(-5)\n          atCarriageReturn = undefined\n        }\n\n        if (startPosition < endPosition) {\n          chunks.push(value.slice(startPosition, endPosition))\n          column += endPosition - startPosition\n        }\n\n        if (code === 0) {\n          chunks.push(65533)\n          column++\n        } else if (code === 9) {\n          next = Math.ceil(column / 4) * 4\n          chunks.push(-2)\n          while (column++ < next) chunks.push(-1)\n        } else if (code === 10) {\n          chunks.push(-4)\n          column = 1\n        }\n        // Must be carriage return.\n        else {\n          atCarriageReturn = true\n          column = 1\n        }\n      }\n\n      startPosition = endPosition + 1\n    }\n\n    if (end) {\n      if (atCarriageReturn) chunks.push(-5)\n      if (buffer) chunks.push(buffer)\n      chunks.push(null)\n    }\n\n    return chunks\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/preprocess.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/attention.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/attention.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeAttention\nexports.resolveAll = resolveAllAttention\n\nvar shallow = __webpack_require__(/*! ../util/shallow */ \"./node_modules/micromark/dist/util/shallow.js\")\nvar chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\nvar classifyCharacter = __webpack_require__(/*! ../util/classify-character */ \"./node_modules/micromark/dist/util/classify-character.js\")\nvar movePoint = __webpack_require__(/*! ../util/move-point */ \"./node_modules/micromark/dist/util/move-point.js\")\nvar resolveAll = __webpack_require__(/*! ../util/resolve-all */ \"./node_modules/micromark/dist/util/resolve-all.js\")\n\n// Take all events and resolve attention to emphasis or strong.\nfunction resolveAllAttention(events, context) {\n  var index = -1\n  var open\n  var group\n  var text\n  var openingSequence\n  var closingSequence\n  var use\n  var nextEvents\n  var offset\n\n  // Walk through all events.\n  //\n  // Note: performance of this is fine on an mb of normal markdown, but it’s\n  // a bottleneck for malicious stuff.\n  while (++index < events.length) {\n    // Find a token that can close.\n    if (\n      events[index][0] === 'enter' &&\n      events[index][1].type === 'attentionSequence' &&\n      events[index][1]._close\n    ) {\n      open = index\n\n      // Now walk back to find an opener.\n      while (open--) {\n        // Find a token that can open the closer.\n        if (\n          events[open][0] === 'exit' &&\n          events[open][1].type === 'attentionSequence' &&\n          events[open][1]._open &&\n          // If the markers are the same:\n          context.sliceSerialize(events[open][1]).charCodeAt(0) ===\n            context.sliceSerialize(events[index][1]).charCodeAt(0)\n        ) {\n          // If the opening can close or the closing can open,\n          // and the close size *is not* a multiple of three,\n          // but the sum of the opening and closing size *is* multiple of three,\n          // then don’t match.\n          if (\n            (events[open][1]._close || events[index][1]._open) &&\n            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&\n            !(\n              (events[open][1].end.offset -\n                events[open][1].start.offset +\n                events[index][1].end.offset -\n                events[index][1].start.offset) %\n              3\n            )\n          ) {\n            continue\n          }\n\n          // Number of markers to use from the sequence.\n          use =\n            events[open][1].end.offset - events[open][1].start.offset > 1 &&\n            events[index][1].end.offset - events[index][1].start.offset > 1\n              ? 2\n              : 1\n\n          openingSequence = {\n            type: use > 1 ? 'strongSequence' : 'emphasisSequence',\n            start: movePoint(shallow(events[open][1].end), -use),\n            end: shallow(events[open][1].end)\n          }\n\n          closingSequence = {\n            type: use > 1 ? 'strongSequence' : 'emphasisSequence',\n            start: shallow(events[index][1].start),\n            end: movePoint(shallow(events[index][1].start), use)\n          }\n\n          text = {\n            type: use > 1 ? 'strongText' : 'emphasisText',\n            start: shallow(events[open][1].end),\n            end: shallow(events[index][1].start)\n          }\n\n          group = {\n            type: use > 1 ? 'strong' : 'emphasis',\n            start: shallow(openingSequence.start),\n            end: shallow(closingSequence.end)\n          }\n\n          events[open][1].end = shallow(openingSequence.start)\n          events[index][1].start = shallow(closingSequence.end)\n\n          nextEvents = []\n\n          // If there are more markers in the opening, add them before.\n          if (events[open][1].end.offset - events[open][1].start.offset) {\n            chunkedSplice(nextEvents, nextEvents.length, 0, [\n              ['enter', events[open][1], context],\n              ['exit', events[open][1], context]\n            ])\n          }\n\n          // Opening.\n          chunkedSplice(nextEvents, nextEvents.length, 0, [\n            ['enter', group, context],\n            ['enter', openingSequence, context],\n            ['exit', openingSequence, context],\n            ['enter', text, context]\n          ])\n\n          // Between.\n          chunkedSplice(\n            nextEvents,\n            nextEvents.length,\n            0,\n            resolveAll(\n              context.parser.constructs.insideSpan.null,\n              events.slice(open + 1, index),\n              context\n            )\n          )\n\n          // Closing.\n          chunkedSplice(nextEvents, nextEvents.length, 0, [\n            ['exit', text, context],\n            ['enter', closingSequence, context],\n            ['exit', closingSequence, context],\n            ['exit', group, context]\n          ])\n\n          // If there are more markers in the closing, add them after.\n          if (events[index][1].end.offset - events[index][1].start.offset) {\n            offset = 2\n            chunkedSplice(nextEvents, nextEvents.length, 0, [\n              ['enter', events[index][1], context],\n              ['exit', events[index][1], context]\n            ])\n          } else {\n            offset = 0\n          }\n\n          chunkedSplice(events, open - 1, index - open + 3, nextEvents)\n\n          index = open + nextEvents.length - offset - 2\n          break\n        }\n      }\n    }\n  }\n\n  // Remove remaining sequences.\n  index = -1\n\n  while (++index < events.length) {\n    if (events[index][1].type === 'attentionSequence') {\n      events[index][1].type = 'data'\n    }\n  }\n\n  return events\n}\n\nfunction tokenizeAttention(effects, ok) {\n  var before = classifyCharacter(this.previous)\n  var marker\n\n  return start\n\n  function start(code) {\n    effects.enter('attentionSequence')\n    marker = code\n    return sequence(code)\n  }\n\n  function sequence(code) {\n    var token\n    var after\n    var open\n    var close\n\n    if (code === marker) {\n      effects.consume(code)\n      return sequence\n    }\n\n    token = effects.exit('attentionSequence')\n    after = classifyCharacter(code)\n    open = !after || (after === 2 && before)\n    close = !before || (before === 2 && after)\n    token._open = marker === 42 ? open : open && (before || !close)\n    token._close = marker === 42 ? close : close && (after || !open)\n    return ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/attention.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/autolink.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/autolink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeAutolink\n\nvar asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ \"./node_modules/micromark/dist/character/ascii-alpha.js\")\nvar asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ \"./node_modules/micromark/dist/character/ascii-alphanumeric.js\")\nvar asciiAtext = __webpack_require__(/*! ../character/ascii-atext */ \"./node_modules/micromark/dist/character/ascii-atext.js\")\nvar asciiControl = __webpack_require__(/*! ../character/ascii-control */ \"./node_modules/micromark/dist/character/ascii-control.js\")\n\nfunction tokenizeAutolink(effects, ok, nok) {\n  var size\n\n  return start\n\n  function start(code) {\n    effects.enter('autolink')\n    effects.enter('autolinkMarker')\n    effects.consume(code)\n    effects.exit('autolinkMarker')\n    effects.enter('autolinkProtocol')\n    return open\n  }\n\n  function open(code) {\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      size = 1\n      return schemeOrEmailAtext\n    }\n\n    return asciiAtext(code) ? emailAtext(code) : nok(code)\n  }\n\n  function schemeOrEmailAtext(code) {\n    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)\n      ? schemeInsideOrEmailAtext(code)\n      : emailAtext(code)\n  }\n\n  function schemeInsideOrEmailAtext(code) {\n    if (code === 58) {\n      effects.consume(code)\n      return urlInside\n    }\n\n    if (\n      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&\n      size++ < 32\n    ) {\n      effects.consume(code)\n      return schemeInsideOrEmailAtext\n    }\n\n    return emailAtext(code)\n  }\n\n  function urlInside(code) {\n    if (code === 62) {\n      effects.exit('autolinkProtocol')\n      return end(code)\n    }\n\n    if (code === 32 || code === 60 || asciiControl(code)) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return urlInside\n  }\n\n  function emailAtext(code) {\n    if (code === 64) {\n      effects.consume(code)\n      size = 0\n      return emailAtSignOrDot\n    }\n\n    if (asciiAtext(code)) {\n      effects.consume(code)\n      return emailAtext\n    }\n\n    return nok(code)\n  }\n\n  function emailAtSignOrDot(code) {\n    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)\n  }\n\n  function emailLabel(code) {\n    if (code === 46) {\n      effects.consume(code)\n      size = 0\n      return emailAtSignOrDot\n    }\n\n    if (code === 62) {\n      // Exit, then change the type.\n      effects.exit('autolinkProtocol').type = 'autolinkEmail'\n      return end(code)\n    }\n\n    return emailValue(code)\n  }\n\n  function emailValue(code) {\n    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {\n      effects.consume(code)\n      return code === 45 ? emailValue : emailLabel\n    }\n\n    return nok(code)\n  }\n\n  function end(code) {\n    effects.enter('autolinkMarker')\n    effects.consume(code)\n    effects.exit('autolinkMarker')\n    effects.exit('autolink')\n    return ok\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/autolink.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/block-quote.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/block-quote.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeBlockQuoteStart\nexports.continuation = {tokenize: tokenizeBlockQuoteContinuation}\nexports.exit = exit\n\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction tokenizeBlockQuoteStart(effects, ok, nok) {\n  var self = this\n\n  return start\n\n  function start(code) {\n    if (code === 62) {\n      if (!self.containerState.open) {\n        effects.enter('blockQuote', {_container: true})\n        self.containerState.open = true\n      }\n\n      effects.enter('blockQuotePrefix')\n      effects.enter('blockQuoteMarker')\n      effects.consume(code)\n      effects.exit('blockQuoteMarker')\n      return after\n    }\n\n    return nok(code)\n  }\n\n  function after(code) {\n    if (markdownSpace(code)) {\n      effects.enter('blockQuotePrefixWhitespace')\n      effects.consume(code)\n      effects.exit('blockQuotePrefixWhitespace')\n      effects.exit('blockQuotePrefix')\n      return ok\n    }\n\n    effects.exit('blockQuotePrefix')\n    return ok(code)\n  }\n}\n\nfunction tokenizeBlockQuoteContinuation(effects, ok, nok) {\n  return createSpace(\n    effects,\n    effects.attempt(exports, ok, nok),\n    'linePrefix',\n    4\n  )\n}\n\nfunction exit(effects) {\n  effects.exit('blockQuote')\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/block-quote.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-escape.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-escape.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeCharacterEscape\n\nvar asciiPunctuation = __webpack_require__(/*! ../character/ascii-punctuation */ \"./node_modules/micromark/dist/character/ascii-punctuation.js\")\n\nfunction tokenizeCharacterEscape(effects, ok, nok) {\n  return start\n\n  function start(code) {\n    effects.enter('characterEscape')\n    effects.enter('escapeMarker')\n    effects.consume(code)\n    effects.exit('escapeMarker')\n    return open\n  }\n\n  function open(code) {\n    if (asciiPunctuation(code)) {\n      effects.enter('characterEscapeValue')\n      effects.consume(code)\n      effects.exit('characterEscapeValue')\n      effects.exit('characterEscape')\n      return ok\n    }\n\n    return nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/character-escape.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-reference.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-reference.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeCharacterReference\n\nvar decode = __webpack_require__(/*! parse-entities/decode-entity */ \"./node_modules/parse-entities/decode-entity.browser.js\")\nvar asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ \"./node_modules/micromark/dist/character/ascii-alphanumeric.js\")\nvar asciiDigit = __webpack_require__(/*! ../character/ascii-digit */ \"./node_modules/micromark/dist/character/ascii-digit.js\")\nvar asciiHexDigit = __webpack_require__(/*! ../character/ascii-hex-digit */ \"./node_modules/micromark/dist/character/ascii-hex-digit.js\")\n\nfunction tokenizeCharacterReference(effects, ok, nok) {\n  var self = this\n  var size = 0\n  var max\n  var test\n\n  return start\n\n  function start(code) {\n    effects.enter('characterReference')\n    effects.enter('characterReferenceMarker')\n    effects.consume(code)\n    effects.exit('characterReferenceMarker')\n    return open\n  }\n\n  function open(code) {\n    if (code === 35) {\n      effects.enter('characterReferenceMarkerNumeric')\n      effects.consume(code)\n      effects.exit('characterReferenceMarkerNumeric')\n      return numeric\n    }\n\n    effects.enter('characterReferenceValue')\n    max = 31\n    test = asciiAlphanumeric\n    return value(code)\n  }\n\n  function numeric(code) {\n    if (code === 88 || code === 120) {\n      effects.enter('characterReferenceMarkerHexadecimal')\n      effects.consume(code)\n      effects.exit('characterReferenceMarkerHexadecimal')\n      effects.enter('characterReferenceValue')\n      max = 6\n      test = asciiHexDigit\n      return value\n    }\n\n    effects.enter('characterReferenceValue')\n    max = 7\n    test = asciiDigit\n    return value(code)\n  }\n\n  function value(code) {\n    var token\n\n    if (code === 59 && size) {\n      token = effects.exit('characterReferenceValue')\n\n      if (test === asciiAlphanumeric && !decode(self.sliceSerialize(token))) {\n        return nok(code)\n      }\n\n      effects.enter('characterReferenceMarker')\n      effects.consume(code)\n      effects.exit('characterReferenceMarker')\n      effects.exit('characterReference')\n      return ok\n    }\n\n    if (test(code) && size++ < max) {\n      effects.consume(code)\n      return value\n    }\n\n    return nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/character-reference.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-fenced.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-fenced.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeCodeFenced\nexports.concrete = true\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\n\nvar prefixSize = __webpack_require__(/*! ../util/prefix-size */ \"./node_modules/micromark/dist/util/prefix-size.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction tokenizeCodeFenced(effects, ok, nok) {\n  var self = this\n  var initialPrefix = prefixSize(this.events, 'linePrefix')\n  var sizeOpen = 0\n  var marker\n\n  return start\n\n  function start(code) {\n    effects.enter('codeFenced')\n    effects.enter('codeFencedFence')\n    effects.enter('codeFencedFenceSequence')\n    marker = code\n    return sequenceOpen(code)\n  }\n\n  function sequenceOpen(code) {\n    if (code === marker) {\n      effects.consume(code)\n      sizeOpen++\n      return sequenceOpen\n    }\n\n    effects.exit('codeFencedFenceSequence')\n    return sizeOpen < 3\n      ? nok(code)\n      : createSpace(effects, infoOpen, 'whitespace')(code)\n  }\n\n  function infoOpen(code) {\n    if (code === null || markdownLineEnding(code)) {\n      return openAfter(code)\n    }\n\n    effects.enter('codeFencedFenceInfo')\n    effects.enter('chunkString', {contentType: 'string'})\n    return info(code)\n  }\n\n  function info(code) {\n    if (code === null || markdownLineEndingOrSpace(code)) {\n      effects.exit('chunkString')\n      effects.exit('codeFencedFenceInfo')\n      return createSpace(effects, infoAfter, 'whitespace')(code)\n    }\n\n    if (code === 96 && code === marker) return nok(code)\n    effects.consume(code)\n    return info\n  }\n\n  function infoAfter(code) {\n    if (code === null || markdownLineEnding(code)) {\n      return openAfter(code)\n    }\n\n    effects.enter('codeFencedFenceMeta')\n    effects.enter('chunkString', {contentType: 'string'})\n    return meta(code)\n  }\n\n  function meta(code) {\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('chunkString')\n      effects.exit('codeFencedFenceMeta')\n      return openAfter(code)\n    }\n\n    if (code === 96 && code === marker) return nok(code)\n    effects.consume(code)\n    return meta\n  }\n\n  function openAfter(code) {\n    effects.exit('codeFencedFence')\n    return self.interrupt ? ok(code) : content(code)\n  }\n\n  function content(code) {\n    if (code === null) {\n      return after(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n      return effects.attempt(\n        {tokenize: tokenizeClosingFence, partial: true},\n        after,\n        initialPrefix\n          ? createSpace(effects, content, 'linePrefix', initialPrefix + 1)\n          : content\n      )\n    }\n\n    effects.enter('codeFlowValue')\n    return contentContinue(code)\n  }\n\n  function contentContinue(code) {\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('codeFlowValue')\n      return content(code)\n    }\n\n    effects.consume(code)\n    return contentContinue\n  }\n\n  function after(code) {\n    effects.exit('codeFenced')\n    return ok(code)\n  }\n\n  function tokenizeClosingFence(effects, ok, nok) {\n    var size = 0\n\n    return createSpace(effects, closingPrefixAfter, 'linePrefix', 4)\n\n    function closingPrefixAfter(code) {\n      effects.enter('codeFencedFence')\n      effects.enter('codeFencedFenceSequence')\n      return closingSequence(code)\n    }\n\n    function closingSequence(code) {\n      if (code === marker) {\n        effects.consume(code)\n        size++\n        return closingSequence\n      }\n\n      if (size < sizeOpen) return nok(code)\n      effects.exit('codeFencedFenceSequence')\n      return createSpace(effects, closingSequenceEnd, 'whitespace')(code)\n    }\n\n    function closingSequenceEnd(code) {\n      if (code === null || markdownLineEnding(code)) {\n        effects.exit('codeFencedFence')\n        return ok(code)\n      }\n\n      return nok(code)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/code-fenced.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-indented.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-indented.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeCodeIndented\nexports.resolve = resolveCodeIndented\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\nvar prefixSize = __webpack_require__(/*! ../util/prefix-size */ \"./node_modules/micromark/dist/util/prefix-size.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nvar continuedIndent = {tokenize: tokenizeContinuedIndent, partial: true}\n\nfunction resolveCodeIndented(events, context) {\n  var code = {\n    type: 'codeIndented',\n    start: events[0][1].start,\n    end: events[events.length - 1][1].end\n  }\n\n  chunkedSplice(events, 0, 0, [['enter', code, context]])\n  chunkedSplice(events, events.length, 0, [['exit', code, context]])\n\n  return events\n}\n\nfunction tokenizeCodeIndented(effects, ok, nok) {\n  var self = this\n\n  return createSpace(\n    effects,\n    afterInitial,\n    'linePrefix',\n\n    4 + 1\n  )\n\n  function afterInitial(code) {\n    // Flow checks blank lines first, so we don’t have EOL/EOF.\n\n    if (prefixSize(self.events, 'linePrefix') < 4) {\n      return nok(code)\n    }\n\n    effects.enter('codeFlowValue')\n    return content(code)\n  }\n\n  function afterPrefix(code) {\n    if (code === null) {\n      return ok(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      return effects.attempt(continuedIndent, afterPrefix, ok)(code)\n    }\n\n    effects.enter('codeFlowValue')\n    return content(code)\n  }\n\n  function content(code) {\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('codeFlowValue')\n      return afterPrefix(code)\n    }\n\n    effects.consume(code)\n    return content\n  }\n}\n\nfunction tokenizeContinuedIndent(effects, ok, nok) {\n  var self = this\n\n  return createSpace(\n    effects,\n    afterPrefix,\n    'linePrefix',\n\n    4 + 1\n  )\n\n  function afterPrefix(code) {\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n\n      return createSpace(\n        effects,\n        afterPrefix,\n        'linePrefix',\n\n        4 + 1\n      )\n    }\n\n    return prefixSize(self.events, 'linePrefix') < 4 ? nok(code) : ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/code-indented.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeCodeText\nexports.resolve = resolveCodeText\nexports.previous = previous\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nfunction resolveCodeText(events) {\n  var tailExitIndex = events.length - 4\n  var headEnterIndex = 3\n  var index\n  var enter\n\n  // If we start and end with an EOL or a space.\n  if (\n    (events[headEnterIndex][1].type === 'lineEnding' ||\n      events[headEnterIndex][1].type === 'space') &&\n    (events[tailExitIndex][1].type === 'lineEnding' ||\n      events[tailExitIndex][1].type === 'space')\n  ) {\n    index = headEnterIndex\n\n    // And we have data.\n    while (++index < tailExitIndex) {\n      if (events[index][1].type === 'codeTextData') {\n        // Then we have padding.\n        events[tailExitIndex][1].type = events[headEnterIndex][1].type =\n          'codeTextPadding'\n\n        headEnterIndex += 2\n        tailExitIndex -= 2\n        break\n      }\n    }\n  }\n\n  // Merge adjacent spaces and data.\n  index = headEnterIndex - 1\n  tailExitIndex++\n\n  while (++index <= tailExitIndex) {\n    if (enter === undefined) {\n      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {\n        enter = index\n      }\n    } else if (\n      index === tailExitIndex ||\n      events[index][1].type === 'lineEnding'\n    ) {\n      events[enter][1].type = 'codeTextData'\n\n      if (index !== enter + 2) {\n        events[enter][1].end = events[index - 1][1].end\n        events.splice(enter + 2, index - enter - 2)\n        tailExitIndex -= index - enter - 2\n        index = enter + 2\n      }\n\n      enter = undefined\n    }\n  }\n\n  return events\n}\n\nfunction previous(code) {\n  // If there is a previous code, there will always be a tail.\n  return (\n    code !== 96 ||\n    this.events[this.events.length - 1][1].type === 'characterEscape'\n  )\n}\n\nfunction tokenizeCodeText(effects, ok, nok) {\n  var self = this\n  var sizeOpen = 0\n  var size\n  var token\n\n  return start\n\n  function start(code) {\n    effects.enter('codeText')\n    effects.enter('codeTextSequence')\n    return openingSequence(code)\n  }\n\n  function openingSequence(code) {\n    if (code === 96) {\n      effects.consume(code)\n      sizeOpen++\n      return openingSequence\n    }\n\n    effects.exit('codeTextSequence')\n    return gap(code)\n  }\n\n  function gap(code) {\n    // EOF.\n    if (code === null) {\n      return nok(code)\n    }\n\n    // Closing fence?\n    // Could also be data.\n    if (code === 96) {\n      token = effects.enter('codeTextSequence')\n      size = 0\n      return closingSequence(code)\n    }\n\n    // Tabs don’t work, and virtual spaces don’t make sense.\n    if (code === 32) {\n      effects.enter('space')\n      effects.consume(code)\n      effects.exit('space')\n      return gap\n    }\n\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n      return gap\n    }\n\n    // Data.\n    effects.enter('codeTextData')\n    return data(code)\n  }\n\n  // In code.\n  function data(code) {\n    if (\n      code === null ||\n      code === 32 ||\n      code === 96 ||\n      markdownLineEnding(code)\n    ) {\n      effects.exit('codeTextData')\n      return gap(code)\n    }\n\n    effects.consume(code)\n    return data\n  }\n\n  // Closing fence.\n  function closingSequence(code) {\n    // More.\n    if (code === 96) {\n      effects.consume(code)\n      size++\n      return closingSequence\n    }\n\n    // Done!\n    if (size === sizeOpen) {\n      effects.exit('codeTextSequence')\n      effects.exit('codeText')\n      return ok(code)\n    }\n\n    // More or less accents: mark as data.\n    token.type = 'codeTextData'\n    return data(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/code-text.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/content.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/content.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeContent\nexports.resolve = resolveContent\nexports.interruptible = true\nexports.lazy = true\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar subtokenize = __webpack_require__(/*! ../util/subtokenize */ \"./node_modules/micromark/dist/util/subtokenize.js\")\nvar prefixSize = __webpack_require__(/*! ../util/prefix-size */ \"./node_modules/micromark/dist/util/prefix-size.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nvar lookaheadConstruct = {tokenize: tokenizeLookaheadConstruct, partial: true}\n\n// Content is transparent: it’s parsed right now. That way, definitions are also\n// parsed right now: before text in paragraphs (specifically, media) are parsed.\nfunction resolveContent(events) {\n  subtokenize(events)\n  return events\n}\n\nfunction tokenizeContent(effects, ok) {\n  var previous\n\n  return start\n\n  function start(code) {\n    effects.enter('content')\n    previous = effects.enter('chunkContent', {\n      contentType: 'content'\n    })\n\n    return data(code)\n  }\n\n  function data(code) {\n    if (code === null) {\n      return contentEnd(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      return effects.check(\n        lookaheadConstruct,\n        contentContinue,\n        contentEnd\n      )(code)\n    }\n\n    // Data.\n    effects.consume(code)\n    return data\n  }\n\n  function contentEnd(code) {\n    effects.exit('chunkContent')\n    effects.exit('content')\n    return ok(code)\n  }\n\n  function contentContinue(code) {\n    effects.consume(code)\n    effects.exit('chunkContent')\n    previous = previous.next = effects.enter('chunkContent', {\n      contentType: 'content',\n      previous: previous\n    })\n\n    return data\n  }\n}\n\nfunction tokenizeLookaheadConstruct(effects, ok, nok) {\n  var self = this\n\n  return startLookahead\n\n  function startLookahead(code) {\n    effects.enter('lineEnding')\n    effects.consume(code)\n    effects.exit('lineEnding')\n    return createSpace(effects, prefixed, 'linePrefix')\n  }\n\n  function prefixed(code) {\n    if (code === null || markdownLineEnding(code)) {\n      return nok(code)\n    }\n\n    if (prefixSize(self.events, 'linePrefix') < 4) {\n      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)\n    }\n\n    return ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/content.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/definition.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeDefinition\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\nvar normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier */ \"./node_modules/micromark/dist/util/normalize-identifier.js\")\n\nvar createDestination = __webpack_require__(/*! ./factory-destination */ \"./node_modules/micromark/dist/tokenize/factory-destination.js\")\nvar createLabel = __webpack_require__(/*! ./factory-label */ \"./node_modules/micromark/dist/tokenize/factory-label.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\nvar createWhitespace = __webpack_require__(/*! ./factory-whitespace */ \"./node_modules/micromark/dist/tokenize/factory-whitespace.js\")\nvar createTitle = __webpack_require__(/*! ./factory-title */ \"./node_modules/micromark/dist/tokenize/factory-title.js\")\n\nfunction tokenizeDefinition(effects, ok, nok) {\n  var self = this\n  var destinationAfter = effects.attempt(\n    {tokenize: tokenizeTitle, partial: true},\n    createSpace(effects, after, 'whitespace'),\n    createSpace(effects, after, 'whitespace')\n  )\n\n  var identifier\n\n  return start\n\n  function start(code) {\n    effects.enter('definition')\n    return createLabel.call(\n      self,\n      effects,\n      labelAfter,\n      nok,\n      'definitionLabel',\n      'definitionLabelMarker',\n      'definitionLabelString'\n    )(code)\n  }\n\n  function labelAfter(code) {\n    identifier = normalizeIdentifier(\n      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)\n    )\n\n    if (code === 58) {\n      effects.enter('definitionMarker')\n      effects.consume(code)\n      effects.exit('definitionMarker')\n\n      // Note: blank lines can’t exist in content.\n      return createWhitespace(\n        effects,\n        createDestination(\n          effects,\n          destinationAfter,\n          nok,\n          'definitionDestination',\n          'definitionDestinationLiteral',\n          'definitionDestinationLiteralMarker',\n          'definitionDestinationRaw',\n          'definitionDestinationString'\n        )\n      )\n    }\n\n    return nok(code)\n  }\n\n  function after(code) {\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('definition')\n\n      if (self.parser.defined.indexOf(identifier) < 0) {\n        self.parser.defined.push(identifier)\n      }\n\n      return ok(code)\n    }\n\n    return nok(code)\n  }\n}\n\nfunction tokenizeTitle(effects, ok, nok) {\n  return start\n\n  function start(code) {\n    return markdownLineEndingOrSpace(code)\n      ? createWhitespace(effects, before)(code)\n      : nok(code)\n  }\n\n  function before(code) {\n    if (code === 34 || code === 39 || code === 40) {\n      return createTitle(\n        effects,\n        createSpace(effects, after, 'whitespace'),\n        nok,\n        'definitionTitle',\n        'definitionTitleMarker',\n        'definitionTitleString'\n      )(code)\n    }\n\n    return nok(code)\n  }\n\n  function after(code) {\n    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/definition.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-destination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-destination.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createDestination\n\nvar asciiControl = __webpack_require__(/*! ../character/ascii-control */ \"./node_modules/micromark/dist/character/ascii-control.js\")\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\n// eslint-disable-next-line max-params\nfunction createDestination(\n  effects,\n  ok,\n  nok,\n  type,\n  literalType,\n  literalMarkerType,\n  rawType,\n  stringType,\n  max\n) {\n  var limit = max || Infinity\n  var balance = 0\n\n  return start\n\n  function start(code) {\n    if (code === 60) {\n      effects.enter(type)\n      effects.enter(literalType)\n      effects.enter(literalMarkerType)\n      effects.consume(code)\n      effects.exit(literalMarkerType)\n      return destinationEnclosedBefore\n    }\n\n    if (asciiControl(code)) {\n      return nok(code)\n    }\n\n    effects.enter(type)\n    effects.enter(rawType)\n    effects.enter(stringType)\n    effects.enter('chunkString', {contentType: 'string'})\n    return destinationRaw(code)\n  }\n\n  function destinationEnclosedBefore(code) {\n    if (code === 62) {\n      effects.enter(literalMarkerType)\n      effects.consume(code)\n      effects.exit(literalMarkerType)\n      effects.exit(literalType)\n      effects.exit(type)\n      return ok\n    }\n\n    effects.enter(stringType)\n    effects.enter('chunkString', {contentType: 'string'})\n    return destinationEnclosed(code)\n  }\n\n  function destinationEnclosed(code) {\n    if (code === 62) {\n      effects.exit('chunkString')\n      effects.exit(stringType)\n      return destinationEnclosedBefore(code)\n    }\n\n    if (code === null || code === 60 || markdownLineEnding(code)) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return code === 92 ? destinationEnclosedEscape : destinationEnclosed\n  }\n\n  function destinationEnclosedEscape(code) {\n    if (code === 60 || code === 62 || code === 92) {\n      effects.consume(code)\n      return destinationEnclosed\n    }\n\n    return destinationEnclosed(code)\n  }\n\n  function destinationRaw(code) {\n    if (code === 40) {\n      if (++balance > limit) return nok(code)\n      effects.consume(code)\n      return destinationRaw\n    }\n\n    if (code === 41) {\n      if (!balance--) {\n        effects.exit('chunkString')\n        effects.exit(stringType)\n        effects.exit(rawType)\n        effects.exit(type)\n        return ok(code)\n      }\n\n      effects.consume(code)\n      return destinationRaw\n    }\n\n    if (code === null || markdownLineEndingOrSpace(code)) {\n      if (balance) return nok(code)\n      effects.exit('chunkString')\n      effects.exit(stringType)\n      effects.exit(rawType)\n      effects.exit(type)\n      return ok(code)\n    }\n\n    if (asciiControl(code)) return nok(code)\n    effects.consume(code)\n    return code === 92 ? destinationRawEscape : destinationRaw\n  }\n\n  function destinationRawEscape(code) {\n    if (code === 40 || code === 41 || code === 92) {\n      effects.consume(code)\n      return destinationRaw\n    }\n\n    return destinationRaw(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/factory-destination.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-label.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-label.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createLabel\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\n// eslint-disable-next-line max-params\nfunction createLabel(effects, ok, nok, type, markerType, stringType) {\n  var self = this\n  var size = 0\n  var data\n\n  return start\n\n  function start(code) {\n    effects.enter(type)\n    effects.enter(markerType)\n    effects.consume(code)\n    effects.exit(markerType)\n    effects.enter(stringType)\n    return atBreak\n  }\n\n  function atBreak(code) {\n    if (\n      code === null ||\n      code === 91 ||\n      (code === 93 && !data) ||\n      /* istanbul ignore next - footnotes. */\n      (code === 94 &&\n        !size &&\n        '_hiddenFootnoteSupport' in self.parser.constructs) ||\n      size > 999\n    ) {\n      return nok(code)\n    }\n\n    if (code === 93) {\n      effects.exit(stringType)\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      effects.exit(type)\n      return ok\n    }\n\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n      return atBreak\n    }\n\n    effects.enter('chunkString', {contentType: 'string'})\n    return label(code)\n  }\n\n  function label(code) {\n    if (\n      code === null ||\n      code === 91 ||\n      code === 93 ||\n      markdownLineEnding(code) ||\n      size++ > 999\n    ) {\n      effects.exit('chunkString')\n      return atBreak(code)\n    }\n\n    effects.consume(code)\n    data = data || !markdownSpace(code)\n    return code === 92 ? labelEscape : label\n  }\n\n  function labelEscape(code) {\n    if (code === 91 || code === 92 || code === 93) {\n      effects.consume(code)\n      size++\n      return label\n    }\n\n    return label(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/factory-label.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-space.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-space.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createSpace\n\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\nfunction createSpace(effects, ok, type, max) {\n  var limit = max ? max - 1 : Infinity\n  var size\n\n  return start\n\n  function start(code) {\n    if (markdownSpace(code)) {\n      effects.enter(type)\n      size = 0\n      return prefix(code)\n    }\n\n    return ok(code)\n  }\n\n  function prefix(code) {\n    if (markdownSpace(code) && size++ < limit) {\n      effects.consume(code)\n      return prefix\n    }\n\n    effects.exit(type)\n    return ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/factory-space.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-title.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-title.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createTitle\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\n// eslint-disable-next-line max-params\nfunction createTitle(effects, ok, nok, type, markerType, stringType) {\n  var marker\n\n  return start\n\n  function start(code) {\n    effects.enter(type)\n    effects.enter(markerType)\n    effects.consume(code)\n    effects.exit(markerType)\n    marker = code === 40 ? 41 : code\n    return atFirstTitleBreak\n  }\n\n  function atFirstTitleBreak(code) {\n    if (code === marker) {\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      effects.exit(type)\n      return ok\n    }\n\n    effects.enter(stringType)\n    return atTitleBreak(code)\n  }\n\n  function atTitleBreak(code) {\n    if (code === marker) {\n      effects.exit(stringType)\n      return atFirstTitleBreak(marker)\n    }\n\n    if (code === null) {\n      return nok(code)\n    }\n\n    // Note: blank lines can’t exist in content.\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n      return createSpace(effects, atTitleBreak, 'linePrefix')\n    }\n\n    effects.enter('chunkString', {contentType: 'string'})\n    return title(code)\n  }\n\n  function title(code) {\n    if (code === marker || code === null || markdownLineEnding(code)) {\n      effects.exit('chunkString')\n      return atTitleBreak(code)\n    }\n\n    effects.consume(code)\n    return code === 92 ? titleEscape : title\n  }\n\n  function titleEscape(code) {\n    if (code === marker || code === 92) {\n      effects.consume(code)\n      return title\n    }\n\n    return title(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/factory-title.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-whitespace.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-whitespace.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createWhitespace\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction createWhitespace(effects, ok) {\n  var seen\n  return start\n\n  function start(code) {\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n      seen = true\n      return start\n    }\n\n    if (markdownSpace(code)) {\n      return createSpace(\n        effects,\n        start,\n        seen ? 'linePrefix' : 'lineSuffix'\n      )(code)\n    }\n\n    return ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/factory-whitespace.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/hard-break-escape.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/hard-break-escape.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeHardBreakEscape\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nfunction tokenizeHardBreakEscape(effects, ok, nok) {\n  return start\n\n  function start(code) {\n    effects.enter('hardBreakEscape')\n    effects.enter('escapeMarker')\n    effects.consume(code)\n    return open\n  }\n\n  function open(code) {\n    if (markdownLineEnding(code)) {\n      effects.exit('escapeMarker')\n      effects.exit('hardBreakEscape')\n      return ok(code)\n    }\n\n    return nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/hard-break-escape.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/heading-atx.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/heading-atx.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeAtxHeading\nexports.resolve = resolveAtxHeading\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\nvar chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction resolveAtxHeading(events, context) {\n  var contentEnd = events.length - 2\n  var contentStart = 3\n  var content\n  var text\n\n  // Prefix whitespace, part of the opening.\n  if (events[contentStart][1].type === 'whitespace') {\n    contentStart += 2\n  }\n\n  // Suffix whitespace, part of the closing.\n  if (\n    contentEnd - 2 > contentStart &&\n    events[contentEnd][1].type === 'whitespace'\n  ) {\n    contentEnd -= 2\n  }\n\n  if (\n    events[contentEnd][1].type === 'atxHeadingSequence' &&\n    (contentStart === contentEnd - 1 ||\n      (contentEnd - 4 > contentStart &&\n        events[contentEnd - 2][1].type === 'whitespace'))\n  ) {\n    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4\n  }\n\n  if (contentEnd > contentStart) {\n    content = {\n      type: 'atxHeadingText',\n      start: events[contentStart][1].start,\n      end: events[contentEnd][1].end\n    }\n\n    text = {\n      type: 'chunkText',\n      start: events[contentStart][1].start,\n      end: events[contentEnd][1].end,\n      contentType: 'text'\n    }\n\n    chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [\n      ['enter', content, context],\n      ['enter', text, context],\n      ['exit', text, context],\n      ['exit', content, context]\n    ])\n  }\n\n  return events\n}\n\nfunction tokenizeAtxHeading(effects, ok, nok) {\n  var self = this\n  var size = 0\n\n  return start\n\n  function start(code) {\n    effects.enter('atxHeading')\n    effects.enter('atxHeadingSequence')\n    return fenceOpenInside(code)\n  }\n\n  function fenceOpenInside(code) {\n    if (code === 35 && size++ < 6) {\n      effects.consume(code)\n      return fenceOpenInside\n    }\n\n    if (code === null || markdownLineEndingOrSpace(code)) {\n      effects.exit('atxHeadingSequence')\n      return self.interrupt ? ok(code) : headingBreak(code)\n    }\n\n    return nok(code)\n  }\n\n  function headingBreak(code) {\n    if (code === 35) {\n      effects.enter('atxHeadingSequence')\n      return sequence(code)\n    }\n\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('atxHeading')\n      return ok(code)\n    }\n\n    if (markdownSpace(code)) {\n      return createSpace(effects, headingBreak, 'whitespace')(code)\n    }\n\n    effects.enter('atxHeadingText')\n    return data(code)\n  }\n\n  function sequence(code) {\n    if (code === 35) {\n      effects.consume(code)\n      return sequence\n    }\n\n    effects.exit('atxHeadingSequence')\n    return headingBreak(code)\n  }\n\n  function data(code) {\n    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {\n      effects.exit('atxHeadingText')\n      return headingBreak(code)\n    }\n\n    effects.consume(code)\n    return data\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/heading-atx.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-flow.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-flow.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeHtml\nexports.resolveTo = resolveToHtml\nexports.concrete = true\n\nvar asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ \"./node_modules/micromark/dist/character/ascii-alpha.js\")\nvar asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ \"./node_modules/micromark/dist/character/ascii-alphanumeric.js\")\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\nvar fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ \"./node_modules/micromark/dist/constant/from-char-code.js\")\nvar basics = __webpack_require__(/*! ../constant/html-block-names */ \"./node_modules/micromark/dist/constant/html-block-names.js\")\nvar raws = __webpack_require__(/*! ../constant/html-raw-names */ \"./node_modules/micromark/dist/constant/html-raw-names.js\")\n\nvar blank = __webpack_require__(/*! ./partial-blank-line */ \"./node_modules/micromark/dist/tokenize/partial-blank-line.js\")\n\nvar nextBlank = {tokenize: tokenizeNextBlank, partial: true}\n\nfunction resolveToHtml(events) {\n  var index = events.length\n\n  while (index--) {\n    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {\n      break\n    }\n  }\n\n  if (index > 1 && events[index - 2][1].type === 'linePrefix') {\n    // Add the prefix start to the HTML token.\n    events[index][1].start = events[index - 2][1].start\n    // Add the prefix start to the HTML line token.\n    events[index + 1][1].start = events[index - 2][1].start\n    // Remove the line prefix.\n    events.splice(index - 2, 2)\n  }\n\n  return events\n}\n\nfunction tokenizeHtml(effects, ok, nok) {\n  var self = this\n  var kind\n  var startTag\n  var buffer\n  var index\n  var marker\n\n  return start\n\n  function start(code) {\n    effects.enter('htmlFlow')\n    effects.enter('htmlFlowData')\n    effects.consume(code)\n    return open\n  }\n\n  function open(code) {\n    if (code === 33) {\n      effects.consume(code)\n      return declarationStart\n    }\n\n    if (code === 47) {\n      effects.consume(code)\n      return tagCloseStart\n    }\n\n    if (code === 63) {\n      effects.consume(code)\n      kind = 3\n      // While we’re in an instruction instead of a declaration, we’re on a `?`\n      // right now, so we do need to search for `>`, similar to declarations.\n      return self.interrupt ? ok : continuationDeclarationInside\n    }\n\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      buffer = fromCharCode(code)\n      startTag = true\n      return tagName\n    }\n\n    return nok(code)\n  }\n\n  function declarationStart(code) {\n    if (code === 45) {\n      effects.consume(code)\n      kind = 2\n      return commentOpenInside\n    }\n\n    if (code === 91) {\n      effects.consume(code)\n      kind = 5\n      buffer = 'CDATA['\n      index = 0\n      return cdataOpenInside\n    }\n\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      kind = 4\n      return self.interrupt ? ok : continuationDeclarationInside\n    }\n\n    return nok(code)\n  }\n\n  function commentOpenInside(code) {\n    if (code === 45) {\n      effects.consume(code)\n      return self.interrupt ? ok : continuationDeclarationInside\n    }\n\n    return nok(code)\n  }\n\n  function cdataOpenInside(code) {\n    if (code === buffer.charCodeAt(index++)) {\n      effects.consume(code)\n      return index === buffer.length\n        ? self.interrupt\n          ? ok\n          : continuation\n        : cdataOpenInside\n    }\n\n    return nok(code)\n  }\n\n  function tagCloseStart(code) {\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      buffer = fromCharCode(code)\n      return tagName\n    }\n\n    return nok(code)\n  }\n\n  function tagName(code) {\n    if (\n      code === null ||\n      code === 47 ||\n      code === 62 ||\n      markdownLineEndingOrSpace(code)\n    ) {\n      if (code !== 47 && startTag && raws.indexOf(buffer.toLowerCase()) > -1) {\n        kind = 1\n        return self.interrupt ? ok(code) : continuation(code)\n      }\n\n      if (basics.indexOf(buffer.toLowerCase()) > -1) {\n        kind = 6\n\n        if (code === 47) {\n          effects.consume(code)\n          return basicSelfClosing\n        }\n\n        return self.interrupt ? ok(code) : continuation(code)\n      }\n\n      kind = 7\n      // Do not support complete HTML when interrupting.\n      return self.interrupt\n        ? nok(code)\n        : startTag\n        ? completeAttributeNameBefore(code)\n        : completeClosingTagAfter(code)\n    }\n\n    if (code === 45 || asciiAlphanumeric(code)) {\n      effects.consume(code)\n      buffer += fromCharCode(code)\n      return tagName\n    }\n\n    return nok(code)\n  }\n\n  function basicSelfClosing(code) {\n    if (code === 62) {\n      effects.consume(code)\n      return self.interrupt ? ok : continuation\n    }\n\n    return nok(code)\n  }\n\n  function completeClosingTagAfter(code) {\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return completeClosingTagAfter\n    }\n\n    return completeEnd(code)\n  }\n\n  function completeAttributeNameBefore(code) {\n    if (code === 47) {\n      effects.consume(code)\n      return completeEnd\n    }\n\n    if (code === 58 || code === 95 || asciiAlpha(code)) {\n      effects.consume(code)\n      return completeAttributeName\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return completeAttributeNameBefore\n    }\n\n    return completeEnd(code)\n  }\n\n  function completeAttributeName(code) {\n    if (\n      code === 45 ||\n      code === 46 ||\n      code === 58 ||\n      code === 95 ||\n      asciiAlphanumeric(code)\n    ) {\n      effects.consume(code)\n      return completeAttributeName\n    }\n\n    return completeAttributeNameAfter(code)\n  }\n\n  function completeAttributeNameAfter(code) {\n    if (code === 61) {\n      effects.consume(code)\n      return completeAttributeValueBefore\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return completeAttributeNameAfter\n    }\n\n    return completeAttributeNameBefore(code)\n  }\n\n  function completeAttributeValueBefore(code) {\n    if (\n      code === null ||\n      code === 60 ||\n      code === 61 ||\n      code === 62 ||\n      code === 96\n    ) {\n      return nok(code)\n    }\n\n    if (code === 34 || code === 39) {\n      effects.consume(code)\n      marker = code\n      return completeAttributeValueQuoted\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return completeAttributeValueBefore\n    }\n\n    marker = undefined\n    return completeAttributeValueUnquoted(code)\n  }\n\n  function completeAttributeValueQuoted(code) {\n    if (code === marker) {\n      effects.consume(code)\n      return completeAttributeValueQuotedAfter\n    }\n\n    if (code === null || markdownLineEnding(code)) {\n      return nok(code)\n    }\n\n    effects.consume(code)\n    return completeAttributeValueQuoted\n  }\n\n  function completeAttributeValueUnquoted(code) {\n    if (\n      code === null ||\n      code === 34 ||\n      code === 39 ||\n      code === 60 ||\n      code === 61 ||\n      code === 62 ||\n      code === 96 ||\n      markdownLineEndingOrSpace(code)\n    ) {\n      return completeAttributeNameAfter(code)\n    }\n\n    effects.consume(code)\n    return completeAttributeValueUnquoted\n  }\n\n  function completeAttributeValueQuotedAfter(code) {\n    if (code === 47 || code === 62 || markdownSpace(code)) {\n      return completeAttributeNameBefore(code)\n    }\n\n    return nok(code)\n  }\n\n  function completeEnd(code) {\n    if (code === 62) {\n      effects.consume(code)\n      return completeAfter\n    }\n\n    return nok(code)\n  }\n\n  function completeAfter(code) {\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return completeAfter\n    }\n\n    return code === null || markdownLineEnding(code)\n      ? continuation(code)\n      : nok(code)\n  }\n\n  function continuation(code) {\n    if (code === 45 && kind === 2) {\n      effects.consume(code)\n      return continuationCommentInside\n    }\n\n    if (code === 60 && kind === 1) {\n      effects.consume(code)\n      return continuationRawTagOpen\n    }\n\n    if (code === 62 && kind === 4) {\n      effects.consume(code)\n      return continuationClose\n    }\n\n    if (code === 63 && kind === 3) {\n      effects.consume(code)\n      return continuationDeclarationInside\n    }\n\n    if (code === 93 && kind === 5) {\n      effects.consume(code)\n      return continuationCharacterDataInside\n    }\n\n    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {\n      return effects.check(\n        nextBlank,\n        continuationClose,\n        continuationAtLineEnding\n      )(code)\n    }\n\n    if (code === null || markdownLineEnding(code)) {\n      return continuationAtLineEnding(code)\n    }\n\n    effects.consume(code)\n    return continuation\n  }\n\n  function continuationAtLineEnding(code) {\n    effects.exit('htmlFlowData')\n    return htmlContinueStart(code)\n  }\n\n  function htmlContinueStart(code) {\n    if (code === null) {\n      return done(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      effects.enter('lineEnding')\n      effects.consume(code)\n      effects.exit('lineEnding')\n      return htmlContinueStart\n    }\n\n    effects.enter('htmlFlowData')\n    return continuation(code)\n  }\n\n  function continuationCommentInside(code) {\n    if (code === 45) {\n      effects.consume(code)\n      return continuationDeclarationInside\n    }\n\n    return continuation(code)\n  }\n\n  function continuationRawTagOpen(code) {\n    if (code === 47) {\n      effects.consume(code)\n      buffer = ''\n      return continuationRawEndTag\n    }\n\n    return continuation(code)\n  }\n\n  function continuationRawEndTag(code) {\n    if (code === 62 && raws.indexOf(buffer.toLowerCase()) > -1) {\n      effects.consume(code)\n      return continuationClose\n    }\n\n    if (asciiAlpha(code) && buffer.length < 6) {\n      effects.consume(code)\n      buffer += fromCharCode(code)\n      return continuationRawEndTag\n    }\n\n    return continuation(code)\n  }\n\n  function continuationCharacterDataInside(code) {\n    if (code === 93) {\n      effects.consume(code)\n      return continuationDeclarationInside\n    }\n\n    return continuation(code)\n  }\n\n  function continuationDeclarationInside(code) {\n    if (code === 62) {\n      effects.consume(code)\n      return continuationClose\n    }\n\n    return continuation(code)\n  }\n\n  function continuationClose(code) {\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('htmlFlowData')\n      return done(code)\n    }\n\n    effects.consume(code)\n    return continuationClose\n  }\n\n  function done(code) {\n    effects.exit('htmlFlow')\n    return ok(code)\n  }\n}\n\nfunction tokenizeNextBlank(effects, ok, nok) {\n  return start\n\n  function start(code) {\n    effects.exit('htmlFlowData')\n    effects.enter('lineEndingBlank')\n    effects.consume(code)\n    effects.exit('lineEndingBlank')\n    return effects.attempt(blank, ok, nok)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/html-flow.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeHtml\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\nvar asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ \"./node_modules/micromark/dist/character/ascii-alpha.js\")\nvar asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ \"./node_modules/micromark/dist/character/ascii-alphanumeric.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction tokenizeHtml(effects, ok, nok) {\n  var marker\n  var buffer\n  var index\n  var returnState\n\n  return start\n\n  function start(code) {\n    effects.enter('htmlText')\n    effects.enter('htmlTextData')\n    effects.consume(code)\n    return open\n  }\n\n  function open(code) {\n    if (code === 33) {\n      effects.consume(code)\n      return declarationOpen\n    }\n\n    if (code === 47) {\n      effects.consume(code)\n      return tagCloseStart\n    }\n\n    if (code === 63) {\n      effects.consume(code)\n      return instruction\n    }\n\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      return tagOpen\n    }\n\n    return nok(code)\n  }\n\n  function declarationOpen(code) {\n    if (code === 45) {\n      effects.consume(code)\n      return commentOpen\n    }\n\n    if (code === 91) {\n      effects.consume(code)\n      buffer = 'CDATA['\n      index = 0\n      return cdataOpen\n    }\n\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      return declaration\n    }\n\n    return nok(code)\n  }\n\n  function commentOpen(code) {\n    if (code === 45) {\n      effects.consume(code)\n      return commentStart\n    }\n\n    return nok(code)\n  }\n\n  function commentStart(code) {\n    if (code === null || code === 62) {\n      return nok(code)\n    }\n\n    if (code === 45) {\n      effects.consume(code)\n      return commentStartDash\n    }\n\n    return comment(code)\n  }\n\n  function commentStartDash(code) {\n    if (code === null || code === 62) {\n      return nok(code)\n    }\n\n    return comment(code)\n  }\n\n  function comment(code) {\n    if (code === null) {\n      return nok(code)\n    }\n\n    if (code === 45) {\n      effects.consume(code)\n      return commentClose\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = comment\n      return atLineEnding(code)\n    }\n\n    effects.consume(code)\n    return comment\n  }\n\n  function commentClose(code) {\n    if (code === 45) {\n      effects.consume(code)\n      return end\n    }\n\n    return comment(code)\n  }\n\n  function cdataOpen(code) {\n    if (code === buffer.charCodeAt(index++)) {\n      effects.consume(code)\n      return index === buffer.length ? cdata : cdataOpen\n    }\n\n    return nok(code)\n  }\n\n  function cdata(code) {\n    if (code === null) {\n      return nok(code)\n    }\n\n    if (code === 93) {\n      effects.consume(code)\n      return cdataClose\n    }\n\n    effects.consume(code)\n    return cdata\n  }\n\n  function cdataClose(code) {\n    if (code === 93) {\n      effects.consume(code)\n      return cdataEnd\n    }\n\n    return cdata(code)\n  }\n\n  function cdataEnd(code) {\n    if (code === 62) {\n      return end(code)\n    }\n\n    if (code === 93) {\n      effects.consume(code)\n      return cdataEnd\n    }\n\n    return cdata(code)\n  }\n\n  function declaration(code) {\n    if (code === null || code === 62) {\n      return end(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = declaration\n      return atLineEnding(code)\n    }\n\n    effects.consume(code)\n    return declaration\n  }\n\n  function instruction(code) {\n    if (code === null) {\n      return nok(code)\n    }\n\n    if (code === 63) {\n      effects.consume(code)\n      return instructionClose\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = instruction\n      return atLineEnding(code)\n    }\n\n    effects.consume(code)\n    return instruction\n  }\n\n  function instructionClose(code) {\n    return code === 62 ? end(code) : instruction(code)\n  }\n\n  function tagCloseStart(code) {\n    if (asciiAlpha(code)) {\n      effects.consume(code)\n      return tagClose\n    }\n\n    return nok(code)\n  }\n\n  function tagClose(code) {\n    if (code === 45 || asciiAlphanumeric(code)) {\n      effects.consume(code)\n      return tagClose\n    }\n\n    return tagCloseBetween(code)\n  }\n\n  function tagCloseBetween(code) {\n    if (markdownLineEnding(code)) {\n      returnState = tagCloseBetween\n      return atLineEnding(code)\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return tagCloseBetween\n    }\n\n    return end(code)\n  }\n\n  function tagOpen(code) {\n    if (code === 45 || asciiAlphanumeric(code)) {\n      effects.consume(code)\n      return tagOpen\n    }\n\n    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {\n      return tagOpenBetween(code)\n    }\n\n    return nok(code)\n  }\n\n  function tagOpenBetween(code) {\n    if (code === 47) {\n      effects.consume(code)\n      return end\n    }\n\n    if (code === 58 || code === 95 || asciiAlpha(code)) {\n      effects.consume(code)\n      return tagOpenAttributeName\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = tagOpenBetween\n      return atLineEnding(code)\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return tagOpenBetween\n    }\n\n    return end(code)\n  }\n\n  function tagOpenAttributeName(code) {\n    if (\n      code === 45 ||\n      code === 46 ||\n      code === 58 ||\n      code === 95 ||\n      asciiAlphanumeric(code)\n    ) {\n      effects.consume(code)\n      return tagOpenAttributeName\n    }\n\n    return tagOpenAttributeNameAfter(code)\n  }\n\n  function tagOpenAttributeNameAfter(code) {\n    if (code === 61) {\n      effects.consume(code)\n      return tagOpenAttributeValueBefore\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = tagOpenAttributeNameAfter\n      return atLineEnding(code)\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return tagOpenAttributeNameAfter\n    }\n\n    return tagOpenBetween(code)\n  }\n\n  function tagOpenAttributeValueBefore(code) {\n    if (\n      code === null ||\n      code === 60 ||\n      code === 61 ||\n      code === 62 ||\n      code === 96\n    ) {\n      return nok(code)\n    }\n\n    if (code === 34 || code === 39) {\n      effects.consume(code)\n      marker = code\n      return tagOpenAttributeValueQuoted\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = tagOpenAttributeValueBefore\n      return atLineEnding(code)\n    }\n\n    if (markdownSpace(code)) {\n      effects.consume(code)\n      return tagOpenAttributeValueBefore\n    }\n\n    effects.consume(code)\n    marker = undefined\n    return tagOpenAttributeValueUnquoted\n  }\n\n  function tagOpenAttributeValueQuoted(code) {\n    if (code === marker) {\n      effects.consume(code)\n      return tagOpenAttributeValueQuotedAfter\n    }\n\n    if (code === null) {\n      return nok(code)\n    }\n\n    if (markdownLineEnding(code)) {\n      returnState = tagOpenAttributeValueQuoted\n      return atLineEnding(code)\n    }\n\n    effects.consume(code)\n    return tagOpenAttributeValueQuoted\n  }\n\n  function tagOpenAttributeValueQuotedAfter(code) {\n    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {\n      return tagOpenBetween(code)\n    }\n\n    return nok(code)\n  }\n\n  function tagOpenAttributeValueUnquoted(code) {\n    if (\n      code === null ||\n      code === 34 ||\n      code === 39 ||\n      code === 60 ||\n      code === 61 ||\n      code === 96\n    ) {\n      return nok(code)\n    }\n\n    if (code === 62 || markdownLineEndingOrSpace(code)) {\n      return tagOpenBetween(code)\n    }\n\n    effects.consume(code)\n    return tagOpenAttributeValueUnquoted\n  }\n\n  // We can’t have blank lines in content, so no need to worry about empty\n  // tokens.\n  function atLineEnding(code) {\n    effects.exit('htmlTextData')\n    effects.enter('lineEnding')\n    effects.consume(code)\n    effects.exit('lineEnding')\n    return createSpace(effects, afterPrefix, 'linePrefix', 4)\n  }\n\n  function afterPrefix(code) {\n    effects.enter('htmlTextData')\n    return returnState(code)\n  }\n\n  function end(code) {\n    if (code === 62) {\n      effects.consume(code)\n      effects.exit('htmlTextData')\n      effects.exit('htmlText')\n      return ok\n    }\n\n    return nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/html-text.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-end.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-end.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeLabelEnd\nexports.resolveTo = resolveToLabelEnd\nexports.resolveAll = resolveAllLabelEnd\n\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\n\nvar normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier */ \"./node_modules/micromark/dist/util/normalize-identifier.js\")\nvar chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\nvar resolveAll = __webpack_require__(/*! ../util/resolve-all */ \"./node_modules/micromark/dist/util/resolve-all.js\")\nvar shallow = __webpack_require__(/*! ../util/shallow */ \"./node_modules/micromark/dist/util/shallow.js\")\nvar createDestination = __webpack_require__(/*! ./factory-destination */ \"./node_modules/micromark/dist/tokenize/factory-destination.js\")\nvar createLabel = __webpack_require__(/*! ./factory-label */ \"./node_modules/micromark/dist/tokenize/factory-label.js\")\nvar createWhitespace = __webpack_require__(/*! ./factory-whitespace */ \"./node_modules/micromark/dist/tokenize/factory-whitespace.js\")\nvar createTitle = __webpack_require__(/*! ./factory-title */ \"./node_modules/micromark/dist/tokenize/factory-title.js\")\n\nvar resource = {tokenize: tokenizeResource}\nvar fullReference = {tokenize: tokenizeFullReference}\nvar collapsedReference = {tokenize: tokenizeCollapsedReference}\n\nfunction resolveAllLabelEnd(events) {\n  var index = -1\n  var token\n\n  while (++index < events.length) {\n    token = events[index][1]\n\n    if (\n      !token._used &&\n      (token.type === 'labelImage' ||\n        token.type === 'labelLink' ||\n        token.type === 'labelEnd')\n    ) {\n      // Remove the marker.\n      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2)\n      token.type = 'data'\n      index++\n    }\n  }\n\n  return events\n}\n\nfunction resolveToLabelEnd(events, context) {\n  var index = events.length\n  var offset = 0\n  var group\n  var label\n  var text\n  var token\n  var open\n  var close\n  var media\n\n  // Find an opening.\n  while (index--) {\n    token = events[index][1]\n\n    if (open) {\n      // If we see another link, or inactive link label, we’ve been here before.\n      if (\n        token.type === 'link' ||\n        (token.type === 'labelLink' && token._inactive)\n      ) {\n        break\n      }\n\n      // Mark other link openings as inactive, as we can’t have links in\n      // links.\n      if (events[index][0] === 'enter' && token.type === 'labelLink') {\n        token._inactive = true\n      }\n    } else if (close) {\n      if (\n        events[index][0] === 'enter' &&\n        (token.type === 'labelImage' || token.type === 'labelLink') &&\n        !token._balanced\n      ) {\n        open = index\n\n        if (token.type !== 'labelLink') {\n          offset = 2\n          break\n        }\n      }\n    } else if (token.type === 'labelEnd') {\n      close = index\n    }\n  }\n\n  group = {\n    type: events[open][1].type === 'labelLink' ? 'link' : 'image',\n    start: shallow(events[open][1].start),\n    end: shallow(events[events.length - 1][1].end)\n  }\n\n  label = {\n    type: 'label',\n    start: shallow(events[open][1].start),\n    end: shallow(events[close][1].end)\n  }\n\n  text = {\n    type: 'labelText',\n    start: shallow(events[open + offset + 2][1].end),\n    end: shallow(events[close - 2][1].start)\n  }\n\n  media = [\n    ['enter', group, context],\n    ['enter', label, context]\n  ]\n\n  // Opening marker.\n  chunkedSplice(\n    media,\n    media.length,\n    0,\n    events.slice(open + 1, open + offset + 3)\n  )\n\n  // Text open.\n  chunkedSplice(media, media.length, 0, [['enter', text, context]])\n\n  // Between.\n  chunkedSplice(\n    media,\n    media.length,\n    0,\n    resolveAll(\n      context.parser.constructs.insideSpan.null,\n      events.slice(open + offset + 4, close - 3),\n      context\n    )\n  )\n\n  // Text close, marker close, label close.\n  chunkedSplice(media, media.length, 0, [\n    ['exit', text, context],\n    events[close - 2],\n    events[close - 1],\n    ['exit', label, context]\n  ])\n\n  // Reference, resource, or so.\n  chunkedSplice(media, media.length, 0, events.slice(close + 1))\n\n  // Media close.\n  chunkedSplice(media, media.length, 0, [['exit', group, context]])\n\n  chunkedSplice(events, open, events.length, media)\n\n  return events\n}\n\nfunction tokenizeLabelEnd(effects, ok, nok) {\n  var self = this\n  var index = self.events.length\n  var labelStart\n  var defined\n\n  // Find an opening.\n  while (index--) {\n    if (\n      (self.events[index][1].type === 'labelImage' ||\n        self.events[index][1].type === 'labelLink') &&\n      !self.events[index][1]._balanced\n    ) {\n      labelStart = self.events[index][1]\n      break\n    }\n  }\n\n  return start\n\n  function start(code) {\n    if (!labelStart) {\n      return nok(code)\n    }\n\n    // It’s a balanced bracket, but contains a link.\n    if (labelStart._inactive) return balanced(code)\n    defined =\n      self.parser.defined.indexOf(\n        normalizeIdentifier(\n          self.sliceSerialize({start: labelStart.end, end: self.now()})\n        )\n      ) > -1\n    effects.enter('labelEnd')\n    effects.enter('labelMarker')\n    effects.consume(code)\n    effects.exit('labelMarker')\n    effects.exit('labelEnd')\n    return afterLabelEnd\n  }\n\n  function afterLabelEnd(code) {\n    // Resource: `[asd](fgh)`.\n    if (code === 40) {\n      return effects.attempt(resource, ok, defined ? ok : balanced)(code)\n    }\n\n    // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?\n    if (code === 91) {\n      return effects.attempt(\n        fullReference,\n        ok,\n        defined ? effects.attempt(collapsedReference, ok, balanced) : balanced\n      )(code)\n    }\n\n    // Shortcut reference: `[asd]`?\n    return defined ? ok(code) : balanced(code)\n  }\n\n  function balanced(code) {\n    labelStart._balanced = true\n    return nok(code)\n  }\n}\n\nfunction tokenizeResource(effects, ok, nok) {\n  return start\n\n  function start(code) {\n    effects.enter('resource')\n    effects.enter('resourceMarker')\n    effects.consume(code)\n    effects.exit('resourceMarker')\n    return createWhitespace(effects, open)\n  }\n\n  function open(code) {\n    if (code === 41) {\n      return end(code)\n    }\n\n    return createDestination(\n      effects,\n      destinationAfter,\n      nok,\n      'resourceDestination',\n      'resourceDestinationLiteral',\n      'resourceDestinationLiteralMarker',\n      'resourceDestinationRaw',\n      'resourceDestinationString',\n      3\n    )(code)\n  }\n\n  function destinationAfter(code) {\n    return markdownLineEndingOrSpace(code)\n      ? createWhitespace(effects, between)(code)\n      : end(code)\n  }\n\n  function between(code) {\n    if (code === 34 || code === 39 || code === 40) {\n      return createTitle(\n        effects,\n        createWhitespace(effects, end),\n        nok,\n        'resourceTitle',\n        'resourceTitleMarker',\n        'resourceTitleString'\n      )(code)\n    }\n\n    return end(code)\n  }\n\n  function end(code) {\n    if (code === 41) {\n      effects.enter('resourceMarker')\n      effects.consume(code)\n      effects.exit('resourceMarker')\n      effects.exit('resource')\n      return ok\n    }\n\n    return nok(code)\n  }\n}\n\nfunction tokenizeFullReference(effects, ok, nok) {\n  var self = this\n\n  return start\n\n  function start(code) {\n    return createLabel.call(\n      self,\n      effects,\n      afterLabel,\n      nok,\n      'reference',\n      'referenceMarker',\n      'referenceString'\n    )(code)\n  }\n\n  function afterLabel(code) {\n    return self.parser.defined.indexOf(\n      normalizeIdentifier(\n        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)\n      )\n    ) < 0\n      ? nok(code)\n      : ok(code)\n  }\n}\n\nfunction tokenizeCollapsedReference(effects, ok, nok) {\n  return start\n\n  function start(code) {\n    effects.enter('reference')\n    effects.enter('referenceMarker')\n    effects.consume(code)\n    effects.exit('referenceMarker')\n    return open\n  }\n\n  function open(code) {\n    if (code === 93) {\n      effects.enter('referenceMarker')\n      effects.consume(code)\n      effects.exit('referenceMarker')\n      effects.exit('reference')\n      return ok\n    }\n\n    return nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/label-end.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-image.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-image.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizelabelImage\nexports.resolveAll = __webpack_require__(/*! ./label-end */ \"./node_modules/micromark/dist/tokenize/label-end.js\").resolveAll\n\nfunction tokenizelabelImage(effects, ok, nok) {\n  var self = this\n\n  return start\n\n  function start(code) {\n    effects.enter('labelImage')\n    effects.enter('labelImageMarker')\n    effects.consume(code)\n    effects.exit('labelImageMarker')\n    return open\n  }\n\n  function open(code) {\n    if (code === 91) {\n      effects.enter('labelMarker')\n      effects.consume(code)\n      effects.exit('labelMarker')\n      effects.exit('labelImage')\n      return after\n    }\n\n    return nok(code)\n  }\n\n  function after(code) {\n    /* istanbul ignore next - footnotes. */\n    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs\n      ? nok(code)\n      : ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/label-start-image.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-link.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-link.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizelabelLink\nexports.resolveAll = __webpack_require__(/*! ./label-end */ \"./node_modules/micromark/dist/tokenize/label-end.js\").resolveAll\n\nfunction tokenizelabelLink(effects, ok, nok) {\n  var self = this\n\n  return start\n\n  function start(code) {\n    effects.enter('labelLink')\n    effects.enter('labelMarker')\n    effects.consume(code)\n    effects.exit('labelMarker')\n    effects.exit('labelLink')\n    return after\n  }\n\n  function after(code) {\n    /* istanbul ignore next - footnotes. */\n    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs\n      ? nok(code)\n      : ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/label-start-link.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/line-ending.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/line-ending.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeWhitespace\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction tokenizeWhitespace(effects, ok) {\n  return start\n\n  function start(code) {\n    effects.enter('lineEnding')\n    effects.consume(code)\n    effects.exit('lineEnding')\n    return createSpace(effects, ok, 'linePrefix')\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/line-ending.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/list.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/list.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeListStart\nexports.continuation = {tokenize: tokenizeListContinuation}\nexports.exit = tokenizeListEnd\n\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\nvar asciiDigit = __webpack_require__(/*! ../character/ascii-digit */ \"./node_modules/micromark/dist/character/ascii-digit.js\")\n\nvar prefixSize = __webpack_require__(/*! ../util/prefix-size */ \"./node_modules/micromark/dist/util/prefix-size.js\")\nvar sizeChunks = __webpack_require__(/*! ../util/size-chunks */ \"./node_modules/micromark/dist/util/size-chunks.js\")\nvar thematicBreak = __webpack_require__(/*! ./thematic-break */ \"./node_modules/micromark/dist/tokenize/thematic-break.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\nvar blank = __webpack_require__(/*! ./partial-blank-line */ \"./node_modules/micromark/dist/tokenize/partial-blank-line.js\")\n\nfunction tokenizeListStart(effects, ok, nok) {\n  var self = this\n  var initialSize = prefixSize(self.events, 'linePrefix')\n  var valueSize\n\n  return start\n\n  function start(code) {\n    if (\n      (code === 42 || code === 43 || code === 45) &&\n      (!self.containerState.marker || code === self.containerState.marker)\n    ) {\n      return code === 42 || code === 45\n        ? effects.check(thematicBreak, nok, unordered)(code)\n        : unordered(code)\n    }\n\n    if (\n      asciiDigit(code) &&\n      (!self.containerState.type || self.containerState.type === 'listOrdered')\n    ) {\n      return ordered(code)\n    }\n\n    return nok(code)\n  }\n\n  function unordered(code) {\n    if (!self.containerState.type) {\n      self.containerState.type = 'listUnordered'\n      effects.enter(self.containerState.type, {_container: true})\n    }\n\n    effects.enter('listItemPrefix')\n    return atMarker(code)\n  }\n\n  function ordered(code) {\n    if (self.containerState.type || !self.interrupt || code === 49) {\n      if (!self.containerState.type) {\n        self.containerState.type = 'listOrdered'\n        effects.enter(self.containerState.type, {_container: true})\n      }\n\n      effects.enter('listItemPrefix')\n      effects.enter('listItemValue')\n      effects.consume(code)\n      valueSize = 1\n      return self.interrupt ? afterValue : inside\n    }\n\n    return nok(code)\n  }\n\n  function inside(code) {\n    if (asciiDigit(code) && ++valueSize < 10) {\n      effects.consume(code)\n      return inside\n    }\n\n    return afterValue(code)\n  }\n\n  function afterValue(code) {\n    effects.exit('listItemValue')\n\n    return code === 41 || code === 46 ? atMarker(code) : nok(code)\n  }\n\n  function atMarker(code) {\n    self.containerState.marker = self.containerState.marker || code\n\n    if (code === self.containerState.marker) {\n      effects.enter('listItemMarker')\n      effects.consume(code)\n      effects.exit('listItemMarker')\n      return effects.check(\n        blank,\n        // Can’t be empty when interrupting.\n        self.interrupt ? nok : onBlank,\n        effects.attempt(\n          {tokenize: tokenizeListItemPrefixWhitespace, partial: true},\n          endOfPrefix,\n          otherPrefix\n        )\n      )\n    }\n\n    return nok(code)\n  }\n\n  function onBlank(code) {\n    self.containerState.initialBlankLine = true\n    initialSize++\n    return endOfPrefix(code)\n  }\n\n  function otherPrefix(code) {\n    if (markdownSpace(code)) {\n      effects.enter('listItemPrefixWhitespace')\n      effects.consume(code)\n      effects.exit('listItemPrefixWhitespace')\n      return endOfPrefix\n    }\n\n    return nok(code)\n  }\n\n  function endOfPrefix(code) {\n    self.containerState.size =\n      initialSize + sizeChunks(self.sliceStream(effects.exit('listItemPrefix')))\n    return ok(code)\n  }\n}\n\nfunction tokenizeListContinuation(effects, ok, nok) {\n  var self = this\n\n  self.containerState._closeFlow = undefined\n\n  return effects.check(blank, onBlank, notBlank)\n\n  function onBlank(code) {\n    self.containerState.furtherBlankLines =\n      self.containerState.furtherBlankLines ||\n      self.containerState.initialBlankLine\n    return ok(code)\n  }\n\n  function notBlank(code) {\n    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {\n      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined\n      return notInCurrentItem(code)\n    }\n\n    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined\n    return effects.attempt(\n      {tokenize: tokenizeIndent, partial: true},\n      ok,\n      notInCurrentItem\n    )(code)\n  }\n\n  function notInCurrentItem(code) {\n    // While we do continue, we signal that the flow should be closed.\n    self.containerState._closeFlow = true\n    // As we’re closing flow, we’re no longer interrupting\n    self.interrupt = undefined\n    return createSpace(\n      effects,\n      effects.attempt(exports, ok, nok),\n      'linePrefix',\n      4\n    )(code)\n  }\n}\n\nfunction tokenizeIndent(effects, ok, nok) {\n  var self = this\n\n  return createSpace(\n    effects,\n    afterPrefix,\n    'listItemIndent',\n\n    self.containerState.size + 1\n  )\n\n  function afterPrefix(code) {\n    return prefixSize(self.events, 'listItemIndent') ===\n      self.containerState.size\n      ? ok(code)\n      : nok(code)\n  }\n}\n\nfunction tokenizeListEnd(effects) {\n  effects.exit(this.containerState.type)\n}\n\nfunction tokenizeListItemPrefixWhitespace(effects, ok, nok) {\n  var self = this\n\n  return createSpace(\n    effects,\n    afterPrefix,\n    'listItemPrefixWhitespace',\n\n    4 + 1\n  )\n\n  function afterPrefix(code) {\n    return markdownSpace(code) ||\n      !prefixSize(self.events, 'listItemPrefixWhitespace')\n      ? nok(code)\n      : ok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/list.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/partial-blank-line.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/partial-blank-line.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeBlankLine\nexports.partial = true\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction tokenizeBlankLine(effects, ok, nok) {\n  return createSpace(effects, afterWhitespace, 'linePrefix')\n\n  function afterWhitespace(code) {\n    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/partial-blank-line.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/setext-underline.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/setext-underline.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeSetextUnderline\nexports.resolveTo = resolveToSetextUnderline\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\n\nvar shallow = __webpack_require__(/*! ../util/shallow */ \"./node_modules/micromark/dist/util/shallow.js\")\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction resolveToSetextUnderline(events, context) {\n  var index = events.length\n  var content\n  var text\n  var definition\n  var heading\n\n  // Find the opening of the content.\n  // It’ll always exist: we don’t tokenize if it isn’t there.\n  while (index--) {\n    if (events[index][0] === 'enter') {\n      if (events[index][1].type === 'content') {\n        content = index\n        break\n      }\n\n      if (events[index][1].type === 'paragraph') {\n        text = index\n      }\n    }\n    // Exit\n    else {\n      if (events[index][1].type === 'content') {\n        // Remove the content end (if needed we’ll add it later)\n        events.splice(index, 1)\n      }\n\n      if (!definition && events[index][1].type === 'definition') {\n        definition = index\n      }\n    }\n  }\n\n  heading = {\n    type: 'setextHeading',\n    start: shallow(events[text][1].start),\n    end: shallow(events[events.length - 1][1].end)\n  }\n\n  // Change the paragraph to setext heading text.\n  events[text][1].type = 'setextHeadingText'\n\n  // If we have definitions in the content, we’ll keep on having content,\n  // but we need move it.\n  if (definition) {\n    events.splice(text, 0, ['enter', heading, context])\n    events.splice(definition + 1, 0, ['exit', events[content][1], context])\n    events[content][1].end = shallow(events[definition][1].end)\n  } else {\n    events[content][1] = heading\n  }\n\n  // Add the heading exit at the end.\n  events.push(['exit', heading, context])\n\n  return events\n}\n\nfunction tokenizeSetextUnderline(effects, ok, nok) {\n  var self = this\n  var index = self.events.length\n  var marker\n  var paragraph\n\n  // Find an opening.\n  while (index--) {\n    // Skip enter/exit of line ending, line prefix, and content.\n    // We can now either have a definition or a paragraph.\n    if (\n      self.events[index][1].type !== 'lineEnding' &&\n      self.events[index][1].type !== 'linePrefix' &&\n      self.events[index][1].type !== 'content'\n    ) {\n      paragraph = self.events[index][1].type === 'paragraph'\n      break\n    }\n  }\n\n  return start\n\n  function start(code) {\n    if (!self.lazy && (self.interrupt || paragraph)) {\n      effects.enter('setextHeadingLine')\n      effects.enter('setextHeadingLineSequence')\n      marker = code\n      return closingSequence(code)\n    }\n\n    return nok(code)\n  }\n\n  function closingSequence(code) {\n    if (code === marker) {\n      effects.consume(code)\n      return closingSequence\n    }\n\n    effects.exit('setextHeadingLineSequence')\n    return createSpace(effects, closingSequenceEnd, 'lineSuffix')(code)\n  }\n\n  function closingSequenceEnd(code) {\n    if (code === null || markdownLineEnding(code)) {\n      effects.exit('setextHeadingLine')\n      return ok(code)\n    }\n\n    return nok(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/setext-underline.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/thematic-break.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/thematic-break.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.tokenize = tokenizeThematicBreak\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar markdownSpace = __webpack_require__(/*! ../character/markdown-space */ \"./node_modules/micromark/dist/character/markdown-space.js\")\n\nvar createSpace = __webpack_require__(/*! ./factory-space */ \"./node_modules/micromark/dist/tokenize/factory-space.js\")\n\nfunction tokenizeThematicBreak(effects, ok, nok) {\n  var size = 0\n  var marker\n\n  return start\n\n  function start(code) {\n    effects.enter('thematicBreak')\n    marker = code\n    return atBreak(code)\n  }\n\n  function atBreak(code) {\n    if (code === marker) {\n      effects.enter('thematicBreakSequence')\n      return sequence(code)\n    }\n\n    if (markdownSpace(code)) {\n      return createSpace(effects, atBreak, 'whitespace')(code)\n    }\n\n    if (size < 3 || (code !== null && !markdownLineEnding(code))) {\n      return nok(code)\n    }\n\n    effects.exit('thematicBreak')\n    return ok(code)\n  }\n\n  function sequence(code) {\n    if (code === marker) {\n      effects.consume(code)\n      size++\n      return sequence\n    }\n\n    effects.exit('thematicBreakSequence')\n    return atBreak(code)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/tokenize/thematic-break.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/chunked-splice.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/util/chunked-splice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = chunkedSplice\n\nvar v8MaxSafeChunkSize = 10000\n\n// `Array#splice` takes all items to be inserted as individual argument which\n// causes a stack overflow in V8 when trying to insert 100k items for instance.\nfunction chunkedSplice(list, start, remove, items) {\n  var end = list.length\n  var chunkStart = 0\n  var result\n  var parameters\n\n  // Make start between zero and `end` (included).\n  if (start < 0) {\n    start = -start > end ? 0 : end + start\n  } else {\n    start = start > end ? end : start\n  }\n\n  remove = remove > 0 ? remove : 0\n\n  // No need to chunk the items if there’s only a couple (10k) items.\n  if (items.length < v8MaxSafeChunkSize) {\n    parameters = Array.from(items)\n    parameters.unshift(start, remove)\n    return [].splice.apply(list, parameters)\n  }\n\n  // Delete `remove` items starting from `start`\n  result = [].splice.apply(list, [start, remove])\n\n  // Insert the items in chunks to not cause stack overflows.\n  while (chunkStart < items.length) {\n    parameters = items.slice(chunkStart, chunkStart + v8MaxSafeChunkSize)\n    parameters.unshift(start, 0)\n    ;[].splice.apply(list, parameters)\n\n    chunkStart += v8MaxSafeChunkSize\n    start += v8MaxSafeChunkSize\n  }\n\n  return result\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/chunked-splice.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/classify-character.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/classify-character.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = classifyCharacter\n\nvar markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ \"./node_modules/micromark/dist/character/markdown-line-ending-or-space.js\")\nvar unicodePunctuation = __webpack_require__(/*! ../character/unicode-punctuation */ \"./node_modules/micromark/dist/character/unicode-punctuation.js\")\nvar unicodeWhitespace = __webpack_require__(/*! ../character/unicode-whitespace */ \"./node_modules/micromark/dist/character/unicode-whitespace.js\")\n\n// Classify whether a character is unicode whitespace, unicode punctuation, or\n// anything else.\n// Used for attention (emphasis, strong), whose sequences can open or close\n// based on the class of surrounding characters.\nfunction classifyCharacter(code) {\n  if (\n    code === null ||\n    markdownLineEndingOrSpace(code) ||\n    unicodeWhitespace(code)\n  ) {\n    return 1\n  }\n\n  if (unicodePunctuation(code)) {\n    return 2\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/classify-character.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/combine-extensions.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/combine-extensions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = combineExtensions\n\nvar own = __webpack_require__(/*! ../constant/has-own-property */ \"./node_modules/micromark/dist/constant/has-own-property.js\")\nvar miniflat = __webpack_require__(/*! ./miniflat */ \"./node_modules/micromark/dist/util/miniflat.js\")\nvar chunkedSplice = __webpack_require__(/*! ./chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\n\n// Combine several syntax extensions into one.\nfunction combineExtensions(extensions) {\n  var all = {}\n  var index = -1\n\n  while (++index < extensions.length) {\n    extension(all, extensions[index])\n  }\n\n  return all\n}\n\nfunction extension(all, extension) {\n  var hook\n  var left\n  var right\n  var code\n\n  for (hook in extension) {\n    left = own.call(all, hook) ? all[hook] : (all[hook] = {})\n    right = extension[hook]\n\n    for (code in right) {\n      left[code] = constructs(\n        miniflat(right[code]),\n        own.call(left, code) ? left[code] : []\n      )\n    }\n  }\n}\n\nfunction constructs(list, existing) {\n  var index = -1\n  var before = []\n\n  while (++index < list.length) {\n    ;(list[index].add === 'after' ? existing : before).push(list[index])\n  }\n\n  chunkedSplice(existing, 0, 0, before)\n  return existing\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/combine-extensions.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/create-tokenizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/create-tokenizer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = createTokenizer\n\nvar assign = __webpack_require__(/*! ../constant/assign */ \"./node_modules/micromark/dist/constant/assign.js\")\n\nvar markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ \"./node_modules/micromark/dist/character/markdown-line-ending.js\")\nvar chunkedSplice = __webpack_require__(/*! ./chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\nvar shallow = __webpack_require__(/*! ./shallow */ \"./node_modules/micromark/dist/util/shallow.js\")\nvar serializeChunks = __webpack_require__(/*! ./serialize-chunks */ \"./node_modules/micromark/dist/util/serialize-chunks.js\")\nvar sliceChunks = __webpack_require__(/*! ./slice-chunks */ \"./node_modules/micromark/dist/util/slice-chunks.js\")\nvar resolveAll = __webpack_require__(/*! ./resolve-all */ \"./node_modules/micromark/dist/util/resolve-all.js\")\nvar miniflat = __webpack_require__(/*! ./miniflat */ \"./node_modules/micromark/dist/util/miniflat.js\")\n\n// Create a tokenizer.\n// Tokenizers deal with one type of data (e.g., containers, flow, text).\n// The parser is the object dealing with it all.\n// `initialize` works like other constructs, except that only its `tokenize`\n// function is used, in which case it doesn’t receive an `ok` or `nok`.\n// `from` can be given to set the point before the first character, although\n// when further lines are indented, they must be set with `defineSkip`.\nfunction createTokenizer(parser, initialize, from) {\n  var point = from ? shallow(from) : {line: 1, column: 1, offset: 0}\n  var columnStart = {}\n  var resolveAllConstructs = []\n  var chunks = []\n  var stack = []\n  var consumed = true\n\n  // Tools used for tokenizing.\n  var effects = {\n    consume: consume,\n    enter: enter,\n    exit: exit,\n    attempt: constructFactory(onsuccessfulconstruct),\n    check: constructFactory(onsuccessfulcheck),\n    interrupt: constructFactory(onsuccessfulcheck, {interrupt: true}),\n    lazy: constructFactory(onsuccessfulcheck, {lazy: true})\n  }\n\n  // State and tools for resolving and serializing.\n  var context = {\n    previous: null,\n    events: [],\n    parser: parser,\n    sliceStream: sliceStream,\n    sliceSerialize: sliceSerialize,\n    now: now,\n    defineSkip: skip,\n    write: write\n  }\n\n  // The state function.\n  var state = initialize.tokenize.call(context, effects)\n\n  // Track which character we expect to be consumed, to catch bugs.\n  var expectedCode\n\n  if (initialize.resolveAll) {\n    resolveAllConstructs.push(initialize)\n  }\n\n  // Store where we are in the input stream.\n  point._index = 0\n  point._bufferIndex = -1\n\n  return context\n\n  function write(slice) {\n    chunkedSplice(chunks, chunks.length, 0, slice)\n\n    main()\n\n    // Exit if we’re not done, resolve might change stuff.\n    if (chunks[chunks.length - 1] !== null) {\n      return []\n    }\n\n    addResult(initialize, 0)\n\n    // Otherwise, resolve, and exit.\n    context.events = resolveAll(resolveAllConstructs, context.events, context)\n\n    return context.events\n  }\n\n  //\n  // Tools.\n  //\n\n  function sliceSerialize(token) {\n    return serializeChunks(sliceStream(token))\n  }\n\n  function sliceStream(token) {\n    return sliceChunks(chunks, token)\n  }\n\n  function now() {\n    return shallow(point)\n  }\n\n  function skip(value) {\n    columnStart[value.line] = value.column\n    accountForPotentialSkip()\n  }\n\n  //\n  // State management.\n  //\n\n  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by\n  // `consume`).\n  // Here is where we walk through the chunks, which either include strings of\n  // several characters, or numerical character codes.\n  // The reason to do this in a loop instead of a call is so the stack can\n  // drain.\n  function main() {\n    var chunkIndex\n    var chunk\n\n    while (point._index < chunks.length) {\n      chunk = chunks[point._index]\n\n      // If we’re in a buffer chunk, loop through it.\n      if (typeof chunk === 'string') {\n        chunkIndex = point._index\n\n        if (point._bufferIndex < 0) {\n          point._bufferIndex = 0\n        }\n\n        while (\n          point._index === chunkIndex &&\n          point._bufferIndex < chunk.length\n        ) {\n          go(chunk.charCodeAt(point._bufferIndex))\n        }\n      } else {\n        go(chunk)\n      }\n    }\n  }\n\n  // Deal with one code.\n  function go(code) {\n    consumed = undefined\n\n    expectedCode = code\n    state = state(code)\n  }\n\n  // Move a character forward.\n  function consume(code) {\n    if (markdownLineEnding(code)) {\n      point.line++\n      point.column = 1\n      point.offset += code === -3 ? 2 : 1\n      accountForPotentialSkip()\n    } else if (code !== -1) {\n      point.column++\n      point.offset++\n    }\n\n    // Not in a string chunk.\n    if (point._bufferIndex < 0) {\n      point._index++\n    } else {\n      point._bufferIndex++\n\n      // At end of string chunk.\n      if (point._bufferIndex === chunks[point._index].length) {\n        point._bufferIndex = -1\n        point._index++\n      }\n    }\n\n    // Expose the previous character.\n    context.previous = code\n\n    // Mark as consumed.\n    consumed = true\n  }\n\n  // Start a token.\n  function enter(type, fields) {\n    var token = fields || {}\n    token.type = type\n    token.start = now()\n\n    context.events.push(['enter', token, context])\n\n    stack.push(token)\n\n    return token\n  }\n\n  // Stop a token.\n  function exit(type) {\n    var token = stack.pop()\n    token.end = now()\n\n    context.events.push(['exit', token, context])\n\n    return token\n  }\n\n  // Use results.\n  function onsuccessfulconstruct(construct, info) {\n    addResult(construct, info.from)\n  }\n\n  // Discard results.\n  function onsuccessfulcheck(construct, info) {\n    info.restore()\n  }\n\n  // Factory to attempt/check/interrupt.\n  function constructFactory(onreturn, fields) {\n    return hook\n\n    // Handle either an object mapping codes to constructs, a list of\n    // constructs, or a single construct.\n    function hook(constructs, returnState, bogusState) {\n      var listOfConstructs\n      var constructIndex\n      var currentConstruct\n      var info\n\n      return constructs.tokenize || 'length' in constructs\n        ? handleListOfConstructs(miniflat(constructs))\n        : handleMapOfConstructs\n\n      function handleMapOfConstructs(code) {\n        if (code in constructs || null in constructs) {\n          return handleListOfConstructs(\n            /* istanbul ignore next - `null` is used by some extensions */\n            constructs.null\n              ? miniflat(constructs[code]).concat(miniflat(constructs.null))\n              : constructs[code]\n          )(code)\n        }\n\n        return bogusState(code)\n      }\n\n      function handleListOfConstructs(list) {\n        listOfConstructs = list\n        constructIndex = 0\n        return handleConstruct(list[constructIndex])\n      }\n\n      function handleConstruct(construct) {\n        return start\n\n        function start(code) {\n          // To do: not nede to store if there is no bogus state, probably?\n          // Currently doesn’t work because `inspect` in document does a check\n          // w/o a bogus, which doesn’t make sense. But it does seem to help perf\n          // by not storing.\n          info = store()\n          currentConstruct = construct\n\n          if (!construct.partial) {\n            context.currentConstruct = construct\n          }\n\n          return construct.tokenize.call(\n            fields ? assign({}, context, fields) : context,\n            effects,\n            ok,\n            nok\n          )(code)\n        }\n      }\n\n      function ok(code) {\n        consumed = true\n        onreturn(currentConstruct, info)\n        return returnState\n      }\n\n      function nok(code) {\n        consumed = true\n        info.restore()\n\n        if (++constructIndex < listOfConstructs.length) {\n          return handleConstruct(listOfConstructs[constructIndex])\n        }\n\n        return bogusState\n      }\n    }\n  }\n\n  function addResult(construct, from) {\n    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {\n      resolveAllConstructs.push(construct)\n    }\n\n    if (construct.resolve) {\n      chunkedSplice(\n        context.events,\n        from,\n        context.events.length - from,\n        construct.resolve(context.events.slice(from), context)\n      )\n    }\n\n    if (construct.resolveTo) {\n      context.events = construct.resolveTo(context.events, context)\n    }\n  }\n\n  function store() {\n    var startPoint = now()\n    var startPrevious = context.previous\n    var startCurrentConstruct = context.currentConstruct\n    var startEventsIndex = context.events.length\n    var startStack = Array.from(stack)\n\n    return {restore: restore, from: startEventsIndex}\n\n    function restore() {\n      point = startPoint\n      context.previous = startPrevious\n      context.currentConstruct = startCurrentConstruct\n      context.events.length = startEventsIndex\n      stack = startStack\n      accountForPotentialSkip()\n    }\n  }\n\n  function accountForPotentialSkip() {\n    if (point.line in columnStart && point.column < 2) {\n      point.column = columnStart[point.line]\n      point.offset += columnStart[point.line] - 1\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/create-tokenizer.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/miniflat.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/util/miniflat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = miniflat\n\nfunction miniflat(value) {\n  return value === null || value === undefined\n    ? []\n    : 'length' in value\n    ? value\n    : [value]\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/miniflat.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/move-point.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/util/move-point.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = movePoint\n\n// Note! `move` only works inside lines! It’s not possible to move past other\n// chunks (replacement characters, tabs, or line endings).\nfunction movePoint(point, offset) {\n  point.column += offset\n  point.offset += offset\n  point._bufferIndex += offset\n  return point\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/move-point.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/normalize-identifier.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/util/normalize-identifier.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = normalizeIdentifier\n\nfunction normalizeIdentifier(value) {\n  return (\n    value\n      // Collapse Markdown whitespace.\n      .replace(/[\\t\\n\\r ]+/g, ' ')\n      // Trim.\n      .replace(/^ | $/g, '')\n      // Some characters are considered “uppercase”, but if their lowercase\n      // counterpart is uppercased will result in a different uppercase\n      // character.\n      // Hence, to get that form, we perform both lower- and uppercase.\n      // Upper case makes sure keys will not interact with default prototypal\n      // methods: no object method is uppercase.\n      .toLowerCase()\n      .toUpperCase()\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/normalize-identifier.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/prefix-size.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/prefix-size.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = prefixSize\n\nvar sizeChunks = __webpack_require__(/*! ./size-chunks */ \"./node_modules/micromark/dist/util/size-chunks.js\")\n\nfunction prefixSize(events, type) {\n  var tail = events[events.length - 1]\n  if (!tail || tail[1].type !== type) return 0\n  return sizeChunks(tail[2].sliceStream(tail[1]))\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/prefix-size.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/regex-check.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/regex-check.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = regexCheck\n\nvar fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ \"./node_modules/micromark/dist/constant/from-char-code.js\")\n\nfunction regexCheck(regex) {\n  return check\n  function check(code) {\n    return regex.test(fromCharCode(code))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/regex-check.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/resolve-all.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/resolve-all.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = resolveAll\n\nfunction resolveAll(constructs, events, context) {\n  var called = []\n  var index = -1\n  var resolve\n\n  while (++index < constructs.length) {\n    resolve = constructs[index].resolveAll\n\n    if (resolve && called.indexOf(resolve) < 0) {\n      events = resolve(events, context)\n      called.push(resolve)\n    }\n  }\n\n  return events\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/resolve-all.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/safe-from-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/util/safe-from-int.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = safeFromInt\n\nvar fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ \"./node_modules/micromark/dist/constant/from-char-code.js\")\n\nfunction safeFromInt(value, base) {\n  var code = parseInt(value, base)\n\n  if (\n    // C0 except for HT, LF, FF, CR, space\n    code < 9 ||\n    code === 11 ||\n    (code > 13 && code < 32) ||\n    // Control character (DEL) of the basic block and C1 controls.\n    (code > 126 && code < 160) ||\n    // Lone high surrogates and low surrogates.\n    (code > 55295 && code < 57344) ||\n    // Noncharacters.\n    (code > 64975 && code < 65008) ||\n    (code & 65535) === 65535 ||\n    (code & 65535) === 65534 ||\n    // Out of range\n    code > 1114111\n  ) {\n    return '\\uFFFD'\n  }\n\n  return fromCharCode(code)\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/safe-from-int.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/serialize-chunks.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/serialize-chunks.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = serializeChunks\n\nvar fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ \"./node_modules/micromark/dist/constant/from-char-code.js\")\n\nfunction serializeChunks(chunks) {\n  var index = -1\n  var result = []\n  var chunk\n  var value\n  var atTab\n\n  while (++index < chunks.length) {\n    chunk = chunks[index]\n\n    if (typeof chunk === 'string') {\n      value = chunk\n    } else if (chunk === -5) {\n      value = '\\r'\n    } else if (chunk === -4) {\n      value = '\\n'\n    } else if (chunk === -3) {\n      value = '\\r' + '\\n'\n    } else if (chunk === -2) {\n      value = '\\t'\n    } else if (chunk === -1) {\n      if (atTab) continue\n      value = ' '\n    } else {\n      // Currently only replacement character.\n      value = fromCharCode(chunk)\n    }\n\n    atTab = chunk === -2\n    result.push(value)\n  }\n\n  return result.join('')\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/serialize-chunks.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/shallow.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark/dist/util/shallow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = shallow\n\nvar assign = __webpack_require__(/*! ../constant/assign */ \"./node_modules/micromark/dist/constant/assign.js\")\n\nfunction shallow(object) {\n  return assign({}, object)\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/shallow.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/size-chunks.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/size-chunks.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = sizeChunks\n\n// Measure the number of character codes in chunks.\n// Counts tabs based on their expanded size, and CR+LF as one character.\nfunction sizeChunks(chunks) {\n  var index = -1\n  var size = 0\n\n  while (++index < chunks.length) {\n    size += typeof chunks[index] === 'string' ? chunks[index].length : 1\n  }\n\n  return size\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/size-chunks.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/slice-chunks.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/util/slice-chunks.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = sliceChunks\n\nfunction sliceChunks(chunks, token) {\n  var startIndex = token.start._index\n  var startBufferIndex = token.start._bufferIndex\n  var endIndex = token.end._index\n  var endBufferIndex = token.end._bufferIndex\n  var view\n\n  if (startIndex === endIndex) {\n    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]\n  } else {\n    view = chunks.slice(startIndex, endIndex)\n\n    if (startBufferIndex > -1) {\n      view[0] = view[0].slice(startBufferIndex)\n    }\n\n    if (endBufferIndex > 0) {\n      view.push(chunks[endIndex].slice(0, endBufferIndex))\n    }\n  }\n\n  return view\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/slice-chunks.js?");

/***/ }),

/***/ "./node_modules/micromark/dist/util/subtokenize.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/subtokenize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = subtokenize\n\nvar assign = __webpack_require__(/*! ../constant/assign */ \"./node_modules/micromark/dist/constant/assign.js\")\n\nvar chunkedSplice = __webpack_require__(/*! ./chunked-splice */ \"./node_modules/micromark/dist/util/chunked-splice.js\")\nvar shallow = __webpack_require__(/*! ./shallow */ \"./node_modules/micromark/dist/util/shallow.js\")\n\nfunction subtokenize(events) {\n  var jumps = {}\n  var index = -1\n  var event\n  var lineIndex\n  var otherIndex\n  var otherEvent\n  var parameters\n  var subevents\n  var more\n\n  while (++index < events.length) {\n    while (index in jumps) {\n      index = jumps[index]\n    }\n\n    event = events[index]\n\n    // Add a hook for the GFM tasklist extension, which needs to know if text\n    // is in the first content of a list item.\n    if (\n      index &&\n      event[1].type === 'chunkFlow' &&\n      events[index - 1][1].type === 'listItemPrefix'\n    ) {\n      subevents = event[1]._tokenizer.events\n      otherIndex = 0\n\n      if (\n        otherIndex < subevents.length &&\n        subevents[otherIndex][1].type === 'lineEndingBlank'\n      ) {\n        otherIndex += 2\n      }\n\n      if (\n        otherIndex < subevents.length &&\n        subevents[otherIndex][1].type === 'content'\n      ) {\n        while (++otherIndex < subevents.length) {\n          if (subevents[otherIndex][1].type === 'content') {\n            break\n          }\n\n          if (subevents[otherIndex][1].type === 'chunkText') {\n            subevents[otherIndex][1].isInFirstContentOfListItem = true\n            otherIndex++\n          }\n        }\n      }\n    }\n\n    // Enter.\n    if (event[0] === 'enter') {\n      if (event[1].contentType) {\n        assign(jumps, subcontent(events, index))\n        index = jumps[index]\n        more = true\n      }\n    }\n    // Exit.\n    else if (event[1]._container || event[1]._movePreviousLineEndings) {\n      otherIndex = index\n      lineIndex = undefined\n\n      while (otherIndex--) {\n        otherEvent = events[otherIndex]\n\n        if (\n          otherEvent[1].type === 'lineEnding' ||\n          otherEvent[1].type === 'lineEndingBlank'\n        ) {\n          if (otherEvent[0] === 'enter') {\n            if (lineIndex) {\n              events[lineIndex][1].type = 'lineEndingBlank'\n            }\n\n            otherEvent[1].type = 'lineEnding'\n            lineIndex = otherIndex\n          }\n        } else {\n          break\n        }\n      }\n\n      if (lineIndex) {\n        // Fix position.\n        event[1].end = shallow(events[lineIndex][1].start)\n\n        // Switch container exit w/ line endings.\n        parameters = events.slice(lineIndex, index)\n        parameters.unshift(event)\n        chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters)\n      }\n    }\n  }\n\n  return !more\n}\n\nfunction subcontent(events, eventIndex) {\n  var token = events[eventIndex][1]\n  var context = events[eventIndex][2]\n  var startPosition = eventIndex - 1\n  var startPositions = []\n  var tokenizer =\n    token._tokenizer || context.parser[token.contentType](token.start)\n  var childEvents = tokenizer.events\n  var jumps = []\n  var gaps = {}\n  var stream\n  var previous\n  var index\n  var entered\n  var end\n  var adjust\n\n  // Loop forward through the linked tokens to pass them in order to the\n  // subtokenizer.\n  while (token) {\n    // Find the position of the event for this token.\n    while (events[++startPosition][1] !== token) {\n      // Empty.\n    }\n\n    startPositions.push(startPosition)\n\n    if (!token._tokenizer) {\n      stream = context.sliceStream(token)\n\n      if (!token.next) {\n        stream.push(null)\n      }\n\n      if (previous) {\n        tokenizer.defineSkip(token.start)\n      }\n\n      if (token.isInFirstContentOfListItem) {\n        tokenizer._gfmTasklistFirstContentOfListItem = true\n      }\n\n      tokenizer.write(stream)\n\n      if (token.isInFirstContentOfListItem) {\n        tokenizer._gfmTasklistFirstContentOfListItem = undefined\n      }\n    }\n\n    // Unravel the next token.\n    previous = token\n    token = token.next\n  }\n\n  // Now, loop back through all events (and linked tokens), to figure out which\n  // parts belong where.\n  token = previous\n  index = childEvents.length\n\n  while (index--) {\n    // Make sure we’ve at least seen something (final eol is part of the last\n    // token).\n    if (childEvents[index][0] === 'enter') {\n      entered = true\n    } else if (\n      // Find a void token that includes a break.\n      entered &&\n      childEvents[index][1].type === childEvents[index - 1][1].type &&\n      childEvents[index][1].start.line !== childEvents[index][1].end.line\n    ) {\n      add(childEvents.slice(index + 1, end))\n\n      // Help GC.\n      token._tokenizer = token.next = undefined\n      token = token.previous\n      end = index + 1\n    }\n  }\n\n  // Help GC.\n  tokenizer.events = token._tokenizer = token.next = undefined\n\n  // Do head:\n  add(childEvents.slice(0, end))\n\n  index = -1\n  adjust = 0\n\n  while (++index < jumps.length) {\n    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]\n    adjust += jumps[index][1] - jumps[index][0] - 1\n  }\n\n  return gaps\n\n  function add(slice) {\n    var start = startPositions.pop()\n    jumps.unshift([start, start + slice.length - 1])\n    chunkedSplice(events, start, 2, slice)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/micromark/dist/util/subtokenize.js?");

/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-env browser */\n\nvar el\n\nvar semicolon = 59 //  ';'\n\nmodule.exports = decodeEntity\n\nfunction decodeEntity(characters) {\n  var entity = '&' + characters + ';'\n  var char\n\n  el = el || document.createElement('i')\n  el.innerHTML = entity\n  char = el.textContent\n\n  // Some entities do not require the closing semicolon (`&not` - for instance),\n  // which leads to situations where parsing the assumed entity of &notit; will\n  // result in the string `¬it;`.  When we encounter a trailing semicolon after\n  // parsing and the entity to decode was not a semicolon (`&semi;`), we can\n  // assume that the matching was incomplete\n  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {\n    return false\n  }\n\n  // If the decoded string is equal to the input, the entity was not valid\n  return char === entity ? false : char\n}\n\n\n//# sourceURL=webpack:///./node_modules/parse-entities/decode-entity.browser.js?");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,\n// backported and transplited with Babel, with backwards-compat fixes\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  if (path.length === 0) return '.';\n  var code = path.charCodeAt(0);\n  var hasRoot = code === 47 /*/*/;\n  var end = -1;\n  var matchedSlash = true;\n  for (var i = path.length - 1; i >= 1; --i) {\n    code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        if (!matchedSlash) {\n          end = i;\n          break;\n        }\n      } else {\n      // We saw the first non-path separator\n      matchedSlash = false;\n    }\n  }\n\n  if (end === -1) return hasRoot ? '/' : '.';\n  if (hasRoot && end === 1) {\n    // return '//';\n    // Backwards-compat fix:\n    return '/';\n  }\n  return path.slice(0, end);\n};\n\nfunction basename(path) {\n  if (typeof path !== 'string') path = path + '';\n\n  var start = 0;\n  var end = -1;\n  var matchedSlash = true;\n  var i;\n\n  for (i = path.length - 1; i >= 0; --i) {\n    if (path.charCodeAt(i) === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          start = i + 1;\n          break;\n        }\n      } else if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // path component\n      matchedSlash = false;\n      end = i + 1;\n    }\n  }\n\n  if (end === -1) return '';\n  return path.slice(start, end);\n}\n\n// Uses a mixed approach for backwards-compatibility, as ext behavior changed\n// in new Node.js versions, so only basename() above is backported here\nexports.basename = function (path, ext) {\n  var f = basename(path);\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  var startDot = -1;\n  var startPart = 0;\n  var end = -1;\n  var matchedSlash = true;\n  // Track the state of characters (if any) we see before our first dot and\n  // after any path separator we find\n  var preDotState = 0;\n  for (var i = path.length - 1; i >= 0; --i) {\n    var code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          startPart = i + 1;\n          break;\n        }\n        continue;\n      }\n    if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // extension\n      matchedSlash = false;\n      end = i + 1;\n    }\n    if (code === 46 /*.*/) {\n        // If this is our first dot, mark it as the start of our extension\n        if (startDot === -1)\n          startDot = i;\n        else if (preDotState !== 1)\n          preDotState = 1;\n    } else if (startDot !== -1) {\n      // We saw a non-dot and non-path separator before our dot, so we should\n      // have a good chance at having a non-empty extension\n      preDotState = -1;\n    }\n  }\n\n  if (startDot === -1 || end === -1 ||\n      // We saw a non-dot character immediately before the dot\n      preDotState === 0 ||\n      // The (right-most) trimmed path component is exactly '..'\n      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n    return '';\n  }\n  return path.slice(startDot, end);\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = parse\n\nvar fromMarkdown = __webpack_require__(/*! mdast-util-from-markdown */ \"./node_modules/mdast-util-from-markdown/index.js\")\n\nfunction parse(options) {\n  var self = this\n\n  this.Parser = parse\n\n  function parse(doc) {\n    return fromMarkdown(\n      doc,\n      Object.assign({}, self.data('settings'), options, {\n        // Note: these options are not in the readme.\n        // The goal is for them to be set by plugins on `data` instead of being\n        // passed by users.\n        extensions: self.data('micromarkExtensions') || [],\n        mdastExtensions: self.data('fromMarkdownExtensions') || []\n      })\n    )\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/remark-parse/index.js?");

/***/ }),

/***/ "./node_modules/remark-stringify/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-stringify/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = stringify\n\nvar toMarkdown = __webpack_require__(/*! mdast-util-to-markdown */ \"./node_modules/mdast-util-to-markdown/index.js\")\n\nfunction stringify(options) {\n  var self = this\n\n  this.Compiler = compile\n\n  function compile(tree) {\n    return toMarkdown(\n      tree,\n      Object.assign({}, self.data('settings'), options, {\n        // Note: this option is not in the readme.\n        // The goal is for it to be set by plugins on `data` instead of being\n        // passed by users.\n        extensions: self.data('toMarkdownExtensions') || []\n      })\n    )\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/remark-stringify/index.js?");

/***/ }),

/***/ "./node_modules/remark/index.js":
/*!**************************************!*\
  !*** ./node_modules/remark/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar unified = __webpack_require__(/*! unified */ \"./node_modules/unified/index.js\")\nvar parse = __webpack_require__(/*! remark-parse */ \"./node_modules/remark-parse/index.js\")\nvar stringify = __webpack_require__(/*! remark-stringify */ \"./node_modules/remark-stringify/index.js\")\n\nmodule.exports = unified().use(parse).use(stringify).freeze()\n\n\n//# sourceURL=webpack:///./node_modules/remark/index.js?");

/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * repeat-string <https://github.com/jonschlinkert/repeat-string>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\n\n\n/**\n * Results cache\n */\n\nvar res = '';\nvar cache;\n\n/**\n * Expose `repeat`\n */\n\nmodule.exports = repeat;\n\n/**\n * Repeat the given `string` the specified `number`\n * of times.\n *\n * **Example:**\n *\n * ```js\n * var repeat = require('repeat-string');\n * repeat('A', 5);\n * //=> AAAAA\n * ```\n *\n * @param {String} `string` The string to repeat\n * @param {Number} `number` The number of times to repeat the string\n * @return {String} Repeated string\n * @api public\n */\n\nfunction repeat(str, num) {\n  if (typeof str !== 'string') {\n    throw new TypeError('expected a string');\n  }\n\n  // cover common, quick use cases\n  if (num === 1) return str;\n  if (num === 2) return str + str;\n\n  var max = str.length * num;\n  if (cache !== str || typeof cache === 'undefined') {\n    cache = str;\n    res = '';\n  } else if (res.length >= max) {\n    return res.substr(0, max);\n  }\n\n  while (max > res.length && num > 1) {\n    if (num & 1) {\n      res += str;\n    }\n\n    num >>= 1;\n    str += str;\n  }\n\n  res += str;\n  res = res.substr(0, max);\n  return res;\n}\n\n\n//# sourceURL=webpack:///./node_modules/repeat-string/index.js?");

/***/ }),

/***/ "./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nfunction replaceExt(npath, ext) {\n  if (typeof npath !== 'string') {\n    return npath;\n  }\n\n  if (npath.length === 0) {\n    return npath;\n  }\n\n  var nFileName = path.basename(npath, path.extname(npath)) + ext;\n  return path.join(path.dirname(npath), nFileName);\n}\n\nmodule.exports = replaceExt;\n\n\n//# sourceURL=webpack:///./node_modules/replace-ext/index.js?");

/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar wrap = __webpack_require__(/*! ./wrap.js */ \"./node_modules/trough/wrap.js\")\n\nmodule.exports = trough\n\ntrough.wrap = wrap\n\nvar slice = [].slice\n\n// Create new middleware.\nfunction trough() {\n  var fns = []\n  var middleware = {}\n\n  middleware.run = run\n  middleware.use = use\n\n  return middleware\n\n  // Run `fns`.  Last argument must be a completion handler.\n  function run() {\n    var index = -1\n    var input = slice.call(arguments, 0, -1)\n    var done = arguments[arguments.length - 1]\n\n    if (typeof done !== 'function') {\n      throw new Error('Expected function as last argument, not ' + done)\n    }\n\n    next.apply(null, [null].concat(input))\n\n    // Run the next `fn`, if any.\n    function next(err) {\n      var fn = fns[++index]\n      var params = slice.call(arguments, 0)\n      var values = params.slice(1)\n      var length = input.length\n      var pos = -1\n\n      if (err) {\n        done(err)\n        return\n      }\n\n      // Copy non-nully input into values.\n      while (++pos < length) {\n        if (values[pos] === null || values[pos] === undefined) {\n          values[pos] = input[pos]\n        }\n      }\n\n      input = values\n\n      // Next or done.\n      if (fn) {\n        wrap(fn, next).apply(null, input)\n      } else {\n        done.apply(null, [null].concat(input))\n      }\n    }\n  }\n\n  // Add `fn` to the list.\n  function use(fn) {\n    if (typeof fn !== 'function') {\n      throw new Error('Expected `fn` to be a function, not ' + fn)\n    }\n\n    fns.push(fn)\n\n    return middleware\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/trough/index.js?");

/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slice = [].slice\n\nmodule.exports = wrap\n\n// Wrap `fn`.\n// Can be sync or async; return a promise, receive a completion handler, return\n// new values and errors.\nfunction wrap(fn, callback) {\n  var invoked\n\n  return wrapped\n\n  function wrapped() {\n    var params = slice.call(arguments, 0)\n    var callback = fn.length > params.length\n    var result\n\n    if (callback) {\n      params.push(done)\n    }\n\n    try {\n      result = fn.apply(null, params)\n    } catch (error) {\n      // Well, this is quite the pickle.\n      // `fn` received a callback and invoked it (thus continuing the pipeline),\n      // but later also threw an error.\n      // We’re not about to restart the pipeline again, so the only thing left\n      // to do is to throw the thing instead.\n      if (callback && invoked) {\n        throw error\n      }\n\n      return done(error)\n    }\n\n    if (!callback) {\n      if (result && typeof result.then === 'function') {\n        result.then(then, done)\n      } else if (result instanceof Error) {\n        done(result)\n      } else {\n        then(result)\n      }\n    }\n  }\n\n  // Invoke `next`, only once.\n  function done() {\n    if (!invoked) {\n      invoked = true\n\n      callback.apply(null, arguments)\n    }\n  }\n\n  // Invoke `done` with one value.\n  // Tracks if an error is passed, too.\n  function then(value) {\n    done(null, value)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/trough/wrap.js?");

/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bail = __webpack_require__(/*! bail */ \"./node_modules/bail/index.js\")\nvar buffer = __webpack_require__(/*! is-buffer */ \"./node_modules/unified/node_modules/is-buffer/index.js\")\nvar extend = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\")\nvar plain = __webpack_require__(/*! is-plain-obj */ \"./node_modules/is-plain-obj/index.js\")\nvar trough = __webpack_require__(/*! trough */ \"./node_modules/trough/index.js\")\nvar vfile = __webpack_require__(/*! vfile */ \"./node_modules/vfile/index.js\")\n\n// Expose a frozen processor.\nmodule.exports = unified().freeze()\n\nvar slice = [].slice\nvar own = {}.hasOwnProperty\n\n// Process pipeline.\nvar pipeline = trough()\n  .use(pipelineParse)\n  .use(pipelineRun)\n  .use(pipelineStringify)\n\nfunction pipelineParse(p, ctx) {\n  ctx.tree = p.parse(ctx.file)\n}\n\nfunction pipelineRun(p, ctx, next) {\n  p.run(ctx.tree, ctx.file, done)\n\n  function done(err, tree, file) {\n    if (err) {\n      next(err)\n    } else {\n      ctx.tree = tree\n      ctx.file = file\n      next()\n    }\n  }\n}\n\nfunction pipelineStringify(p, ctx) {\n  var result = p.stringify(ctx.tree, ctx.file)\n  var file = ctx.file\n\n  if (result === undefined || result === null) {\n    // Empty.\n  } else if (typeof result === 'string' || buffer(result)) {\n    file.contents = result\n  } else {\n    file.result = result\n  }\n}\n\n// Function to create the first processor.\nfunction unified() {\n  var attachers = []\n  var transformers = trough()\n  var namespace = {}\n  var frozen = false\n  var freezeIndex = -1\n\n  // Data management.\n  processor.data = data\n\n  // Lock.\n  processor.freeze = freeze\n\n  // Plugins.\n  processor.attachers = attachers\n  processor.use = use\n\n  // API.\n  processor.parse = parse\n  processor.stringify = stringify\n  processor.run = run\n  processor.runSync = runSync\n  processor.process = process\n  processor.processSync = processSync\n\n  // Expose.\n  return processor\n\n  // Create a new processor based on the processor in the current scope.\n  function processor() {\n    var destination = unified()\n    var length = attachers.length\n    var index = -1\n\n    while (++index < length) {\n      destination.use.apply(null, attachers[index])\n    }\n\n    destination.data(extend(true, {}, namespace))\n\n    return destination\n  }\n\n  // Freeze: used to signal a processor that has finished configuration.\n  //\n  // For example, take unified itself: it’s frozen.\n  // Plugins should not be added to it.\n  // Rather, it should be extended, by invoking it, before modifying it.\n  //\n  // In essence, always invoke this when exporting a processor.\n  function freeze() {\n    var values\n    var plugin\n    var options\n    var transformer\n\n    if (frozen) {\n      return processor\n    }\n\n    while (++freezeIndex < attachers.length) {\n      values = attachers[freezeIndex]\n      plugin = values[0]\n      options = values[1]\n      transformer = null\n\n      if (options === false) {\n        continue\n      }\n\n      if (options === true) {\n        values[1] = undefined\n      }\n\n      transformer = plugin.apply(processor, values.slice(1))\n\n      if (typeof transformer === 'function') {\n        transformers.use(transformer)\n      }\n    }\n\n    frozen = true\n    freezeIndex = Infinity\n\n    return processor\n  }\n\n  // Data management.\n  // Getter / setter for processor-specific informtion.\n  function data(key, value) {\n    if (typeof key === 'string') {\n      // Set `key`.\n      if (arguments.length === 2) {\n        assertUnfrozen('data', frozen)\n\n        namespace[key] = value\n\n        return processor\n      }\n\n      // Get `key`.\n      return (own.call(namespace, key) && namespace[key]) || null\n    }\n\n    // Set space.\n    if (key) {\n      assertUnfrozen('data', frozen)\n      namespace = key\n      return processor\n    }\n\n    // Get space.\n    return namespace\n  }\n\n  // Plugin management.\n  //\n  // Pass it:\n  // *   an attacher and options,\n  // *   a preset,\n  // *   a list of presets, attachers, and arguments (list of attachers and\n  //     options).\n  function use(value) {\n    var settings\n\n    assertUnfrozen('use', frozen)\n\n    if (value === null || value === undefined) {\n      // Empty.\n    } else if (typeof value === 'function') {\n      addPlugin.apply(null, arguments)\n    } else if (typeof value === 'object') {\n      if ('length' in value) {\n        addList(value)\n      } else {\n        addPreset(value)\n      }\n    } else {\n      throw new Error('Expected usable value, not `' + value + '`')\n    }\n\n    if (settings) {\n      namespace.settings = extend(namespace.settings || {}, settings)\n    }\n\n    return processor\n\n    function addPreset(result) {\n      addList(result.plugins)\n\n      if (result.settings) {\n        settings = extend(settings || {}, result.settings)\n      }\n    }\n\n    function add(value) {\n      if (typeof value === 'function') {\n        addPlugin(value)\n      } else if (typeof value === 'object') {\n        if ('length' in value) {\n          addPlugin.apply(null, value)\n        } else {\n          addPreset(value)\n        }\n      } else {\n        throw new Error('Expected usable value, not `' + value + '`')\n      }\n    }\n\n    function addList(plugins) {\n      var length\n      var index\n\n      if (plugins === null || plugins === undefined) {\n        // Empty.\n      } else if (typeof plugins === 'object' && 'length' in plugins) {\n        length = plugins.length\n        index = -1\n\n        while (++index < length) {\n          add(plugins[index])\n        }\n      } else {\n        throw new Error('Expected a list of plugins, not `' + plugins + '`')\n      }\n    }\n\n    function addPlugin(plugin, value) {\n      var entry = find(plugin)\n\n      if (entry) {\n        if (plain(entry[1]) && plain(value)) {\n          value = extend(entry[1], value)\n        }\n\n        entry[1] = value\n      } else {\n        attachers.push(slice.call(arguments))\n      }\n    }\n  }\n\n  function find(plugin) {\n    var length = attachers.length\n    var index = -1\n    var entry\n\n    while (++index < length) {\n      entry = attachers[index]\n\n      if (entry[0] === plugin) {\n        return entry\n      }\n    }\n  }\n\n  // Parse a file (in string or vfile representation) into a unist node using\n  // the `Parser` on the processor.\n  function parse(doc) {\n    var file = vfile(doc)\n    var Parser\n\n    freeze()\n    Parser = processor.Parser\n    assertParser('parse', Parser)\n\n    if (newable(Parser, 'parse')) {\n      return new Parser(String(file), file).parse()\n    }\n\n    return Parser(String(file), file) // eslint-disable-line new-cap\n  }\n\n  // Run transforms on a unist node representation of a file (in string or\n  // vfile representation), async.\n  function run(node, file, cb) {\n    assertNode(node)\n    freeze()\n\n    if (!cb && typeof file === 'function') {\n      cb = file\n      file = null\n    }\n\n    if (!cb) {\n      return new Promise(executor)\n    }\n\n    executor(null, cb)\n\n    function executor(resolve, reject) {\n      transformers.run(node, vfile(file), done)\n\n      function done(err, tree, file) {\n        tree = tree || node\n        if (err) {\n          reject(err)\n        } else if (resolve) {\n          resolve(tree)\n        } else {\n          cb(null, tree, file)\n        }\n      }\n    }\n  }\n\n  // Run transforms on a unist node representation of a file (in string or\n  // vfile representation), sync.\n  function runSync(node, file) {\n    var complete = false\n    var result\n\n    run(node, file, done)\n\n    assertDone('runSync', 'run', complete)\n\n    return result\n\n    function done(err, tree) {\n      complete = true\n      bail(err)\n      result = tree\n    }\n  }\n\n  // Stringify a unist node representation of a file (in string or vfile\n  // representation) into a string using the `Compiler` on the processor.\n  function stringify(node, doc) {\n    var file = vfile(doc)\n    var Compiler\n\n    freeze()\n    Compiler = processor.Compiler\n    assertCompiler('stringify', Compiler)\n    assertNode(node)\n\n    if (newable(Compiler, 'compile')) {\n      return new Compiler(node, file).compile()\n    }\n\n    return Compiler(node, file) // eslint-disable-line new-cap\n  }\n\n  // Parse a file (in string or vfile representation) into a unist node using\n  // the `Parser` on the processor, then run transforms on that node, and\n  // compile the resulting node using the `Compiler` on the processor, and\n  // store that result on the vfile.\n  function process(doc, cb) {\n    freeze()\n    assertParser('process', processor.Parser)\n    assertCompiler('process', processor.Compiler)\n\n    if (!cb) {\n      return new Promise(executor)\n    }\n\n    executor(null, cb)\n\n    function executor(resolve, reject) {\n      var file = vfile(doc)\n\n      pipeline.run(processor, {file: file}, done)\n\n      function done(err) {\n        if (err) {\n          reject(err)\n        } else if (resolve) {\n          resolve(file)\n        } else {\n          cb(null, file)\n        }\n      }\n    }\n  }\n\n  // Process the given document (in string or vfile representation), sync.\n  function processSync(doc) {\n    var complete = false\n    var file\n\n    freeze()\n    assertParser('processSync', processor.Parser)\n    assertCompiler('processSync', processor.Compiler)\n    file = vfile(doc)\n\n    process(file, done)\n\n    assertDone('processSync', 'process', complete)\n\n    return file\n\n    function done(err) {\n      complete = true\n      bail(err)\n    }\n  }\n}\n\n// Check if `value` is a constructor.\nfunction newable(value, name) {\n  return (\n    typeof value === 'function' &&\n    value.prototype &&\n    // A function with keys in its prototype is probably a constructor.\n    // Classes’ prototype methods are not enumerable, so we check if some value\n    // exists in the prototype.\n    (keys(value.prototype) || name in value.prototype)\n  )\n}\n\n// Check if `value` is an object with keys.\nfunction keys(value) {\n  var key\n  for (key in value) {\n    return true\n  }\n\n  return false\n}\n\n// Assert a parser is available.\nfunction assertParser(name, Parser) {\n  if (typeof Parser !== 'function') {\n    throw new Error('Cannot `' + name + '` without `Parser`')\n  }\n}\n\n// Assert a compiler is available.\nfunction assertCompiler(name, Compiler) {\n  if (typeof Compiler !== 'function') {\n    throw new Error('Cannot `' + name + '` without `Compiler`')\n  }\n}\n\n// Assert the processor is not frozen.\nfunction assertUnfrozen(name, frozen) {\n  if (frozen) {\n    throw new Error(\n      'Cannot invoke `' +\n        name +\n        '` on a frozen processor.\\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'\n    )\n  }\n}\n\n// Assert `node` is a unist node.\nfunction assertNode(node) {\n  if (!node || typeof node.type !== 'string') {\n    throw new Error('Expected node, got `' + node + '`')\n  }\n}\n\n// Assert that `complete` is `true`.\nfunction assertDone(name, asyncName, complete) {\n  if (!complete) {\n    throw new Error(\n      '`' + name + '` finished async. Use `' + asyncName + '` instead'\n    )\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/unified/index.js?");

/***/ }),

/***/ "./node_modules/unified/node_modules/is-buffer/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/unified/node_modules/is-buffer/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\nmodule.exports = function isBuffer (obj) {\n  return obj != null && obj.constructor != null &&\n    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n\n//# sourceURL=webpack:///./node_modules/unified/node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar own = {}.hasOwnProperty\n\nmodule.exports = stringify\n\nfunction stringify(value) {\n  // Nothing.\n  if (!value || typeof value !== 'object') {\n    return ''\n  }\n\n  // Node.\n  if (own.call(value, 'position') || own.call(value, 'type')) {\n    return position(value.position)\n  }\n\n  // Position.\n  if (own.call(value, 'start') || own.call(value, 'end')) {\n    return position(value)\n  }\n\n  // Point.\n  if (own.call(value, 'line') || own.call(value, 'column')) {\n    return point(value)\n  }\n\n  // ?\n  return ''\n}\n\nfunction point(point) {\n  if (!point || typeof point !== 'object') {\n    point = {}\n  }\n\n  return index(point.line) + ':' + index(point.column)\n}\n\nfunction position(pos) {\n  if (!pos || typeof pos !== 'object') {\n    pos = {}\n  }\n\n  return point(pos.start) + '-' + point(pos.end)\n}\n\nfunction index(value) {\n  return value && typeof value === 'number' ? value : 1\n}\n\n\n//# sourceURL=webpack:///./node_modules/unist-util-stringify-position/index.js?");

/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stringify = __webpack_require__(/*! unist-util-stringify-position */ \"./node_modules/unist-util-stringify-position/index.js\")\n\nmodule.exports = VMessage\n\n// Inherit from `Error#`.\nfunction VMessagePrototype() {}\nVMessagePrototype.prototype = Error.prototype\nVMessage.prototype = new VMessagePrototype()\n\n// Message properties.\nvar proto = VMessage.prototype\n\nproto.file = ''\nproto.name = ''\nproto.reason = ''\nproto.message = ''\nproto.stack = ''\nproto.fatal = null\nproto.column = null\nproto.line = null\n\n// Construct a new VMessage.\n//\n// Note: We cannot invoke `Error` on the created context, as that adds readonly\n// `line` and `column` attributes on Safari 9, thus throwing and failing the\n// data.\nfunction VMessage(reason, position, origin) {\n  var parts\n  var range\n  var location\n\n  if (typeof position === 'string') {\n    origin = position\n    position = null\n  }\n\n  parts = parseOrigin(origin)\n  range = stringify(position) || '1:1'\n\n  location = {\n    start: {line: null, column: null},\n    end: {line: null, column: null}\n  }\n\n  // Node.\n  if (position && position.position) {\n    position = position.position\n  }\n\n  if (position) {\n    // Position.\n    if (position.start) {\n      location = position\n      position = position.start\n    } else {\n      // Point.\n      location.start = position\n    }\n  }\n\n  if (reason.stack) {\n    this.stack = reason.stack\n    reason = reason.message\n  }\n\n  this.message = reason\n  this.name = range\n  this.reason = reason\n  this.line = position ? position.line : null\n  this.column = position ? position.column : null\n  this.location = location\n  this.source = parts[0]\n  this.ruleId = parts[1]\n}\n\nfunction parseOrigin(origin) {\n  var result = [null, null]\n  var index\n\n  if (typeof origin === 'string') {\n    index = origin.indexOf(':')\n\n    if (index === -1) {\n      result[1] = origin\n    } else {\n      result[0] = origin.slice(0, index)\n      result[1] = origin.slice(index + 1)\n    }\n  }\n\n  return result\n}\n\n\n//# sourceURL=webpack:///./node_modules/vfile-message/index.js?");

/***/ }),

/***/ "./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\")\nvar replace = __webpack_require__(/*! replace-ext */ \"./node_modules/replace-ext/index.js\")\nvar buffer = __webpack_require__(/*! is-buffer */ \"./node_modules/vfile/node_modules/is-buffer/index.js\")\n\nmodule.exports = VFile\n\nvar own = {}.hasOwnProperty\nvar proto = VFile.prototype\n\n// Order of setting (least specific to most), we need this because otherwise\n// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a\n// stem can be set.\nvar order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']\n\nproto.toString = toString\n\n// Access full path (`~/index.min.js`).\nObject.defineProperty(proto, 'path', {get: getPath, set: setPath})\n\n// Access parent path (`~`).\nObject.defineProperty(proto, 'dirname', {get: getDirname, set: setDirname})\n\n// Access basename (`index.min.js`).\nObject.defineProperty(proto, 'basename', {get: getBasename, set: setBasename})\n\n// Access extname (`.js`).\nObject.defineProperty(proto, 'extname', {get: getExtname, set: setExtname})\n\n// Access stem (`index.min`).\nObject.defineProperty(proto, 'stem', {get: getStem, set: setStem})\n\n// Construct a new file.\nfunction VFile(options) {\n  var prop\n  var index\n  var length\n\n  if (!options) {\n    options = {}\n  } else if (typeof options === 'string' || buffer(options)) {\n    options = {contents: options}\n  } else if ('message' in options && 'messages' in options) {\n    return options\n  }\n\n  if (!(this instanceof VFile)) {\n    return new VFile(options)\n  }\n\n  this.data = {}\n  this.messages = []\n  this.history = []\n  this.cwd = process.cwd()\n\n  // Set path related properties in the correct order.\n  index = -1\n  length = order.length\n\n  while (++index < length) {\n    prop = order[index]\n\n    if (own.call(options, prop)) {\n      this[prop] = options[prop]\n    }\n  }\n\n  // Set non-path related properties.\n  for (prop in options) {\n    if (order.indexOf(prop) === -1) {\n      this[prop] = options[prop]\n    }\n  }\n}\n\nfunction getPath() {\n  return this.history[this.history.length - 1]\n}\n\nfunction setPath(path) {\n  assertNonEmpty(path, 'path')\n\n  if (path !== this.path) {\n    this.history.push(path)\n  }\n}\n\nfunction getDirname() {\n  return typeof this.path === 'string' ? path.dirname(this.path) : undefined\n}\n\nfunction setDirname(dirname) {\n  assertPath(this.path, 'dirname')\n  this.path = path.join(dirname || '', this.basename)\n}\n\nfunction getBasename() {\n  return typeof this.path === 'string' ? path.basename(this.path) : undefined\n}\n\nfunction setBasename(basename) {\n  assertNonEmpty(basename, 'basename')\n  assertPart(basename, 'basename')\n  this.path = path.join(this.dirname || '', basename)\n}\n\nfunction getExtname() {\n  return typeof this.path === 'string' ? path.extname(this.path) : undefined\n}\n\nfunction setExtname(extname) {\n  var ext = extname || ''\n\n  assertPart(ext, 'extname')\n  assertPath(this.path, 'extname')\n\n  if (ext) {\n    if (ext.charAt(0) !== '.') {\n      throw new Error('`extname` must start with `.`')\n    }\n\n    if (ext.indexOf('.', 1) !== -1) {\n      throw new Error('`extname` cannot contain multiple dots')\n    }\n  }\n\n  this.path = replace(this.path, ext)\n}\n\nfunction getStem() {\n  return typeof this.path === 'string'\n    ? path.basename(this.path, this.extname)\n    : undefined\n}\n\nfunction setStem(stem) {\n  assertNonEmpty(stem, 'stem')\n  assertPart(stem, 'stem')\n  this.path = path.join(this.dirname || '', stem + (this.extname || ''))\n}\n\n// Get the value of the file.\nfunction toString(encoding) {\n  var value = this.contents || ''\n  return buffer(value) ? value.toString(encoding) : String(value)\n}\n\n// Assert that `part` is not a path (i.e., does not contain `path.sep`).\nfunction assertPart(part, name) {\n  if (part.indexOf(path.sep) !== -1) {\n    throw new Error(\n      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'\n    )\n  }\n}\n\n// Assert that `part` is not empty.\nfunction assertNonEmpty(part, name) {\n  if (!part) {\n    throw new Error('`' + name + '` cannot be empty')\n  }\n}\n\n// Assert `path` exists.\nfunction assertPath(path, name) {\n  if (!path) {\n    throw new Error('Setting `' + name + '` requires `path` to be set too')\n  }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/vfile/core.js?");

/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar VMessage = __webpack_require__(/*! vfile-message */ \"./node_modules/vfile-message/index.js\")\nvar VFile = __webpack_require__(/*! ./core.js */ \"./node_modules/vfile/core.js\")\n\nmodule.exports = VFile\n\nvar proto = VFile.prototype\n\nproto.message = message\nproto.info = info\nproto.fail = fail\n\n// Create a message with `reason` at `position`.\n// When an error is passed in as `reason`, copies the stack.\nfunction message(reason, position, origin) {\n  var filePath = this.path\n  var message = new VMessage(reason, position, origin)\n\n  if (filePath) {\n    message.name = filePath + ':' + message.name\n    message.file = filePath\n  }\n\n  message.fatal = false\n\n  this.messages.push(message)\n\n  return message\n}\n\n// Fail: creates a vmessage, associates it with the file, and throws it.\nfunction fail() {\n  var message = this.message.apply(this, arguments)\n\n  message.fatal = true\n\n  throw message\n}\n\n// Info: creates a vmessage, associates it with the file, and marks the fatality\n// as null.\nfunction info() {\n  var message = this.message.apply(this, arguments)\n\n  message.fatal = null\n\n  return message\n}\n\n\n//# sourceURL=webpack:///./node_modules/vfile/index.js?");

/***/ }),

/***/ "./node_modules/vfile/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vfile/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\nmodule.exports = function isBuffer (obj) {\n  return obj != null && obj.constructor != null &&\n    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n\n//# sourceURL=webpack:///./node_modules/vfile/node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/zwitch/index.js":
/*!**************************************!*\
  !*** ./node_modules/zwitch/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = factory\n\nvar noop = Function.prototype\nvar own = {}.hasOwnProperty\n\n// Handle values based on a property.\nfunction factory(key, options) {\n  var settings = options || {}\n\n  function one(value) {\n    var fn = one.invalid\n    var handlers = one.handlers\n\n    if (value && own.call(value, key)) {\n      fn = own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown\n    }\n\n    return (fn || noop).apply(this, arguments)\n  }\n\n  one.handlers = settings.handlers || {}\n  one.invalid = settings.invalid\n  one.unknown = settings.unknown\n\n  return one\n}\n\n\n//# sourceURL=webpack:///./node_modules/zwitch/index.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/CheckboxTypeParser.js":
/*!****************************************************!*\
  !*** ./src/BlockTypeParsers/CheckboxTypeParser.js ***!
  \****************************************************/
/*! exports provided: parseCheckboxToMarkdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCheckboxToMarkdown\", function() { return parseCheckboxToMarkdown; });\nfunction parseCheckboxToMarkdown(blocks) {\n  var items = {};\n  items = blocks.items.map(function (item) {\n    if (item.checked === true) {\n      return \"- [x] \".concat(item.text);\n    }\n\n    return \"- [ ] \".concat(item.text);\n  });\n  return items.join('\\n');\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/CheckboxTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/CodeTypeParser.js":
/*!************************************************!*\
  !*** ./src/BlockTypeParsers/CodeTypeParser.js ***!
  \************************************************/
/*! exports provided: parseCodeToMarkdown, parseMarkdownToCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCodeToMarkdown\", function() { return parseCodeToMarkdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMarkdownToCode\", function() { return parseMarkdownToCode; });\nfunction parseCodeToMarkdown(blocks) {\n  return \"```\\n\".concat(blocks.code, \"\\n```\\n\");\n}\nfunction parseMarkdownToCode(blocks) {\n  var codeData = {\n    data: {\n      code: blocks.value\n    },\n    type: 'code'\n  };\n  return codeData;\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/CodeTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/DelimiterTypeParser.js":
/*!*****************************************************!*\
  !*** ./src/BlockTypeParsers/DelimiterTypeParser.js ***!
  \*****************************************************/
/*! exports provided: parseDelimiterToMarkdown, parseMarkdownToDelimiter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDelimiterToMarkdown\", function() { return parseDelimiterToMarkdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMarkdownToDelimiter\", function() { return parseMarkdownToDelimiter; });\nfunction parseDelimiterToMarkdown() {\n  var delimiter = '---';\n  return delimiter.concat('\\n');\n}\nfunction parseMarkdownToDelimiter() {\n  var delimiterData = {};\n  delimiterData = {\n    data: {\n      items: []\n    },\n    type: 'delimiter'\n  };\n  return delimiterData;\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/DelimiterTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/HeaderTypeParser.js":
/*!**************************************************!*\
  !*** ./src/BlockTypeParsers/HeaderTypeParser.js ***!
  \**************************************************/
/*! exports provided: parseHeaderToMarkdown, parseMarkdownToHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseHeaderToMarkdown\", function() { return parseHeaderToMarkdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMarkdownToHeader\", function() { return parseMarkdownToHeader; });\nfunction parseHeaderToMarkdown(blocks) {\n  switch (blocks.level) {\n    case 1:\n      return \"# \".concat(blocks.text, \"\\n\");\n\n    case 2:\n      return \"## \".concat(blocks.text, \"\\n\");\n\n    case 3:\n      return \"### \".concat(blocks.text, \"\\n\");\n\n    default:\n      break;\n  }\n}\nfunction parseMarkdownToHeader(blocks) {\n  var headerData = {};\n\n  switch (blocks.depth) {\n    case 1:\n      blocks.children.forEach(function (item) {\n        headerData = {\n          data: {\n            level: 1,\n            text: item.value\n          },\n          type: 'header'\n        };\n      });\n      return headerData;\n\n    case 2:\n      blocks.children.forEach(function (item) {\n        headerData = {\n          data: {\n            level: 2,\n            text: item.value\n          },\n          type: 'header'\n        };\n      });\n      return headerData;\n\n    case 3:\n      blocks.children.forEach(function (item) {\n        headerData = {\n          data: {\n            level: 3,\n            text: item.value\n          },\n          type: 'header'\n        };\n      });\n      return headerData;\n\n    default:\n      break;\n  }\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/HeaderTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/ImageTypeParser.js":
/*!*************************************************!*\
  !*** ./src/BlockTypeParsers/ImageTypeParser.js ***!
  \*************************************************/
/*! exports provided: parseImageToMarkdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseImageToMarkdown\", function() { return parseImageToMarkdown; });\nfunction parseImageToMarkdown(blocks) {\n  return \"![\".concat(blocks.caption, \"](\").concat(blocks.url, \" \\\"\").concat(blocks.caption, \"\\\")\").concat('\\n');\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/ImageTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/ListTypeParser.js":
/*!************************************************!*\
  !*** ./src/BlockTypeParsers/ListTypeParser.js ***!
  \************************************************/
/*! exports provided: parseListToMarkdown, parseMarkdownToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseListToMarkdown\", function() { return parseListToMarkdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMarkdownToList\", function() { return parseMarkdownToList; });\nfunction parseListToMarkdown(blocks) {\n  var items = {};\n\n  switch (blocks.style) {\n    case 'unordered':\n      items = blocks.items.map(function (item) {\n        return \"* \".concat(item);\n      });\n      return items.join('\\n');\n\n    case 'ordered':\n      items = blocks.items.map(function (item, index) {\n        return \"\".concat(index + 1, \" \").concat(item);\n      });\n      return items.join('\\n');\n\n    default:\n      break;\n  }\n}\nfunction parseMarkdownToList(blocks) {\n  var listData = {};\n  var itemData = [];\n  blocks.children.forEach(function (items) {\n    items.children.forEach(function (listItem) {\n      listItem.children.forEach(function (listEntry) {\n        itemData.push(listEntry.value);\n      });\n    });\n  });\n  listData = {\n    data: {\n      items: itemData,\n      style: blocks.ordered ? 'ordered' : 'unordered'\n    },\n    type: 'list'\n  };\n  return listData;\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/ListTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/ParagraphTypeParser.js":
/*!*****************************************************!*\
  !*** ./src/BlockTypeParsers/ParagraphTypeParser.js ***!
  \*****************************************************/
/*! exports provided: parseParagraphToMarkdown, parseMarkdownToParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseParagraphToMarkdown\", function() { return parseParagraphToMarkdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMarkdownToParagraph\", function() { return parseMarkdownToParagraph; });\nfunction parseParagraphToMarkdown(blocks) {\n  return \"\".concat(blocks.text, \"\\n\");\n}\nfunction parseMarkdownToParagraph(blocks) {\n  var paragraphData = {};\n\n  if (blocks.type === 'paragraph') {\n    blocks.children.forEach(function (item) {\n      if (item.type === 'text') {\n        paragraphData = {\n          data: {\n            text: item.value\n          },\n          type: 'paragraph'\n        };\n      }\n\n      if (item.type === 'image') {\n        paragraphData = {\n          data: {\n            caption: item.title,\n            stretched: false,\n            url: item.url,\n            withBackground: false,\n            withBorder: false\n          },\n          type: 'image'\n        };\n      }\n    });\n  }\n\n  return paragraphData;\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/ParagraphTypeParser.js?");

/***/ }),

/***/ "./src/BlockTypeParsers/QuoteTypeParser.js":
/*!*************************************************!*\
  !*** ./src/BlockTypeParsers/QuoteTypeParser.js ***!
  \*************************************************/
/*! exports provided: parseQuoteToMarkdown, parseMarkdownToQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseQuoteToMarkdown\", function() { return parseQuoteToMarkdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseMarkdownToQuote\", function() { return parseMarkdownToQuote; });\nfunction parseQuoteToMarkdown(blocks) {\n  return \"> \".concat(blocks.text, \"\\n\");\n}\nfunction parseMarkdownToQuote(blocks) {\n  var quoteData = {};\n  blocks.children.forEach(function (items) {\n    items.children.forEach(function (listItem) {\n      if (listItem.type === 'text') {\n        quoteData = {\n          data: {\n            alignment: 'left',\n            caption: '',\n            text: listItem.value\n          },\n          type: 'quote'\n        };\n      }\n    });\n  });\n  return quoteData;\n}\n\n//# sourceURL=webpack:///./src/BlockTypeParsers/QuoteTypeParser.js?");

/***/ }),

/***/ "./src/FileHandler.js":
/*!****************************!*\
  !*** ./src/FileHandler.js ***!
  \****************************/
/*! exports provided: fileDownloadHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fileDownloadHandler\", function() { return fileDownloadHandler; });\n/**\n * Function which takes data and creates a markdown file\n * @param content of the file\n * @param filename\n *\n */\nfunction fileDownloadHandler(content, fileName) {\n  var file = new File([content], {\n    type: 'text/markdown',\n    endings: 'transparent'\n  });\n  var url = URL.createObjectURL(file);\n  var element = document.createElement('a');\n  document.body.appendChild(element);\n  element.href = url;\n  element.download = fileName;\n  element.click();\n  window.URL.revokeObjectURL(url);\n  document.body.removeChild(element);\n}\n\n//# sourceURL=webpack:///./src/FileHandler.js?");

/***/ }),

/***/ "./src/MarkdownImporter.js":
/*!*********************************!*\
  !*** ./src/MarkdownImporter.js ***!
  \*********************************/
/*! exports provided: editorData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editorData\", function() { return editorData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MarkdownImporter; });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"./node_modules/remark/index.js\");\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BlockTypeParsers_HeaderTypeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockTypeParsers/HeaderTypeParser */ \"./src/BlockTypeParsers/HeaderTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_ParagraphTypeParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockTypeParsers/ParagraphTypeParser */ \"./src/BlockTypeParsers/ParagraphTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_ListTypeParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockTypeParsers/ListTypeParser */ \"./src/BlockTypeParsers/ListTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_DelimiterTypeParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockTypeParsers/DelimiterTypeParser */ \"./src/BlockTypeParsers/DelimiterTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_CodeTypeParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlockTypeParsers/CodeTypeParser */ \"./src/BlockTypeParsers/CodeTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_QuoteTypeParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlockTypeParsers/QuoteTypeParser */ \"./src/BlockTypeParsers/QuoteTypeParser.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar editorData = [];\n/**\n * Markdown Import class\n */\n\nvar MarkdownImporter = /*#__PURE__*/function () {\n  /**\n   * creates the Importer plugin\n   * {editorData, api functions} - necessary to interact with the editor\n   */\n  function MarkdownImporter(_ref) {\n    var data = _ref.data,\n        api = _ref.api;\n\n    _classCallCheck(this, MarkdownImporter);\n\n    this.data = data;\n    this.api = api;\n  }\n  /**\n   * @return Plugin data such as title and icon\n   */\n\n\n  _createClass(MarkdownImporter, [{\n    key: \"render\",\n\n    /**\n    * @return invinsible file upload form\n    */\n    value: function render() {\n      var doc = document.createElement('input');\n      doc.setAttribute('id', 'file-upload');\n      doc.setAttribute('type', 'file');\n      doc.setAttribute('style', 'display: none');\n      doc.setAttribute('name', 'files[]');\n      doc.setAttribute('onload', this.parseMarkdown());\n      return doc;\n    }\n    /**\n    * Function which parses markdown file to JSON which correspons the the editor structure\n    * @return Parsed markdown in JSON format\n    */\n\n  }, {\n    key: \"parseMarkdown\",\n    value: function () {\n      var _parseMarkdown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _this = this;\n\n        var a, data, fileUpload;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // empty the array before running the function again\n                editorData.length = 0;\n                a = {};\n                _context.next = 4;\n                return this.api.saver.save();\n\n              case 4:\n                data = _context.sent;\n                a.content = data.blocks;\n                fileUpload = document.getElementById('file-upload');\n\n                fileUpload.onchange = function (e) {\n                  var file = e.target.files[0];\n                  var reader = new FileReader();\n                  reader.readAsText(file, 'UTF-8');\n\n                  reader.onload = function (readerEvent) {\n                    var content = readerEvent.target.result;\n                    var parsedMarkdown = remark__WEBPACK_IMPORTED_MODULE_0__().parse(content); // iterating over the pared remarkjs syntax tree and executing the json parsers\n\n                    parsedMarkdown.children.forEach(function (item, index) {\n                      switch (item.type) {\n                        case 'heading':\n                          return editorData.push(Object(_BlockTypeParsers_HeaderTypeParser__WEBPACK_IMPORTED_MODULE_1__[\"parseMarkdownToHeader\"])(item));\n\n                        case 'paragraph':\n                          return editorData.push(Object(_BlockTypeParsers_ParagraphTypeParser__WEBPACK_IMPORTED_MODULE_2__[\"parseMarkdownToParagraph\"])(item));\n\n                        case 'list':\n                          return editorData.push(Object(_BlockTypeParsers_ListTypeParser__WEBPACK_IMPORTED_MODULE_3__[\"parseMarkdownToList\"])(item));\n\n                        case 'thematicBreak':\n                          return editorData.push(Object(_BlockTypeParsers_DelimiterTypeParser__WEBPACK_IMPORTED_MODULE_4__[\"parseMarkdownToDelimiter\"])());\n\n                        case 'code':\n                          return editorData.push(Object(_BlockTypeParsers_CodeTypeParser__WEBPACK_IMPORTED_MODULE_5__[\"parseMarkdownToCode\"])(item));\n\n                        case 'blockquote':\n                          return editorData.push(Object(_BlockTypeParsers_QuoteTypeParser__WEBPACK_IMPORTED_MODULE_6__[\"parseMarkdownToQuote\"])(item));\n\n                        default:\n                          break;\n                      }\n                    }); // clear the editor\n\n                    _this.api.blocks.clear(); // render the editor with imported markdown data\n\n\n                    _this.api.blocks.render({\n                      blocks: editorData.filter(function (value) {\n                        return Object.keys(value).length !== 0;\n                      }) // filter through array and remove empty objects\n\n                    });\n\n                    return remark__WEBPACK_IMPORTED_MODULE_0__().parse(content);\n                  };\n                };\n\n                fileUpload.click();\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function parseMarkdown() {\n        return _parseMarkdown.apply(this, arguments);\n      }\n\n      return parseMarkdown;\n    }()\n  }, {\n    key: \"save\",\n    value: function save() {\n      return {\n        message: 'Uploading Markdown'\n      };\n    }\n  }], [{\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        title: 'Import Markdown',\n        icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"rgb(112, 118, 132)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-fileUpload\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line></svg>'\n      };\n    }\n  }]);\n\n  return MarkdownImporter;\n}();\n\n\n\n//# sourceURL=webpack:///./src/MarkdownImporter.js?");

/***/ }),

/***/ "./src/MarkdownParser.js":
/*!*******************************!*\
  !*** ./src/MarkdownParser.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MarkdownParser; });\n/* harmony import */ var _BlockTypeParsers_HeaderTypeParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeParsers/HeaderTypeParser */ \"./src/BlockTypeParsers/HeaderTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_ParagraphTypeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockTypeParsers/ParagraphTypeParser */ \"./src/BlockTypeParsers/ParagraphTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_ListTypeParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockTypeParsers/ListTypeParser */ \"./src/BlockTypeParsers/ListTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_DelimiterTypeParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockTypeParsers/DelimiterTypeParser */ \"./src/BlockTypeParsers/DelimiterTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_ImageTypeParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockTypeParsers/ImageTypeParser */ \"./src/BlockTypeParsers/ImageTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_CheckboxTypeParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlockTypeParsers/CheckboxTypeParser */ \"./src/BlockTypeParsers/CheckboxTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_QuoteTypeParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BlockTypeParsers/QuoteTypeParser */ \"./src/BlockTypeParsers/QuoteTypeParser.js\");\n/* harmony import */ var _BlockTypeParsers_CodeTypeParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BlockTypeParsers/CodeTypeParser */ \"./src/BlockTypeParsers/CodeTypeParser.js\");\n/* harmony import */ var _FileHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FileHandler */ \"./src/FileHandler.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n/**\n * Markdown Parsing class\n */\n\nvar MarkdownParser = /*#__PURE__*/function () {\n  /**\n   * creates the Parser plugin\n   * {editorData, api functions} - necessary to interact with the editor\n   */\n  function MarkdownParser(_ref) {\n    var data = _ref.data,\n        api = _ref.api;\n\n    _classCallCheck(this, MarkdownParser);\n\n    this.data = data;\n    this.api = api;\n  }\n  /**\n   * @return Plugin data such as title and icon\n   */\n\n\n  _createClass(MarkdownParser, [{\n    key: \"render\",\n\n    /**\n     * @return empty div and run the export funtion\n     */\n    value: function render() {\n      var doc = document.createElement('div');\n      this.getContent();\n      return doc;\n    }\n    /**\n     * Function which takes saved editor data and runs the different parsing helper functions\n     * @return Markdown file download\n     */\n\n  }, {\n    key: \"getContent\",\n    value: function () {\n      var _getContent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var today, dd, mm, yyyy, initialData, data, parsedData;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                today = new Date();\n                dd = String(today.getDate()).padStart(2, '0');\n                mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!\n\n                yyyy = today.getFullYear();\n                initialData = {};\n                _context.next = 7;\n                return this.api.saver.save();\n\n              case 7:\n                data = _context.sent;\n                initialData.content = data.blocks;\n                parsedData = initialData.content.map(function (item) {\n                  // iterate through editor data and parse the single blocks to markdown syntax\n                  switch (item.type) {\n                    case 'header':\n                      return Object(_BlockTypeParsers_HeaderTypeParser__WEBPACK_IMPORTED_MODULE_0__[\"parseHeaderToMarkdown\"])(item.data);\n\n                    case 'paragraph':\n                      return Object(_BlockTypeParsers_ParagraphTypeParser__WEBPACK_IMPORTED_MODULE_1__[\"parseParagraphToMarkdown\"])(item.data);\n\n                    case 'list':\n                      return Object(_BlockTypeParsers_ListTypeParser__WEBPACK_IMPORTED_MODULE_2__[\"parseListToMarkdown\"])(item.data);\n\n                    case 'delimiter':\n                      return Object(_BlockTypeParsers_DelimiterTypeParser__WEBPACK_IMPORTED_MODULE_3__[\"parseDelimiterToMarkdown\"])(item);\n\n                    case 'image':\n                      return Object(_BlockTypeParsers_ImageTypeParser__WEBPACK_IMPORTED_MODULE_4__[\"parseImageToMarkdown\"])(item.data);\n\n                    case 'quote':\n                      return Object(_BlockTypeParsers_QuoteTypeParser__WEBPACK_IMPORTED_MODULE_6__[\"parseQuoteToMarkdown\"])(item.data);\n\n                    case 'checkbox':\n                      return Object(_BlockTypeParsers_CheckboxTypeParser__WEBPACK_IMPORTED_MODULE_5__[\"parseCheckboxToMarkdown\"])(item.data);\n\n                    case 'code':\n                      return Object(_BlockTypeParsers_CodeTypeParser__WEBPACK_IMPORTED_MODULE_7__[\"parseCodeToMarkdown\"])(item.data);\n\n                    case 'checklist':\n                      return Object(_BlockTypeParsers_CheckboxTypeParser__WEBPACK_IMPORTED_MODULE_5__[\"parseCheckboxToMarkdown\"])(item.data);\n\n                    default:\n                      break;\n                  }\n                }); // take parsed data and create a markdown file\n\n                Object(_FileHandler__WEBPACK_IMPORTED_MODULE_8__[\"fileDownloadHandler\"])(parsedData.join('\\n'), \"entry_\".concat(dd, \"-\").concat(mm, \"-\").concat(yyyy, \".md\"));\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getContent() {\n        return _getContent.apply(this, arguments);\n      }\n\n      return getContent;\n    }()\n  }, {\n    key: \"save\",\n    value: function save() {\n      return {\n        message: 'Downloading Markdown'\n      };\n    }\n  }], [{\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        title: 'Download Markdown',\n        icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"rgb(112, 118, 132)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-download\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg>'\n      };\n    }\n  }]);\n\n  return MarkdownParser;\n}();\n\n\n\n//# sourceURL=webpack:///./src/MarkdownParser.js?");

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./src/MarkdownParser.js ./src/MarkdownImporter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/smikic/projects/editorjs-markdown-parser/src/MarkdownParser.js */\"./src/MarkdownParser.js\");\nmodule.exports = __webpack_require__(/*! /home/smikic/projects/editorjs-markdown-parser/src/MarkdownImporter.js */\"./src/MarkdownImporter.js\");\n\n\n//# sourceURL=webpack:///multi_./src/MarkdownParser.js_./src/MarkdownImporter.js?");

/***/ })

/******/ })["default"];
});