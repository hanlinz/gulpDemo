'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	console.log('a');
	var a = [1, 2, 3, 4];
	var b = a.filter(function (item) {
		return item > 1 && item < 4;
	});
	console.log(b);
	console.log(b.reduce(function (acc, cur) {
		return acc ^ cur;
	}));
	var c = new Map();
	c.set('a', 'content');
	console.log(c);
	var d = [];
	var e = {};

	var D = function D(val) {
		_classCallCheck(this, D);

		this.val = val;
	};

	var f = new Promise(function (resolve, reject) {});
};