"use strict";var _promise=require("babel-runtime/core-js/promise"),_promise2=_interopRequireDefault(_promise),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_map=require("babel-runtime/core-js/map"),_map2=_interopRequireDefault(_map);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){console.log("a");var e=[1,2,3,4].filter(function(e){return 1<e&&e<4});console.log(e),console.log(e.reduce(function(e,r){return e^r}));var r=new _map2.default;r.set("a","content"),console.log(r),new _promise2.default(function(e,r){}),alert("aaaa")};