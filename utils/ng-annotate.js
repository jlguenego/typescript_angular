var ts = require("ts");
console.log('ts', ts);
var ngAnnotate = require("ng-annotate");
console.log('ngAnnotate', ngAnnotate);

exports.translate = function translate(load) {
	SystemJS.builder = true;
	return Promise.resolve().then(function() {
		return ts.translate(load);
	}).then(function(response) {
		console.log('response', response);
		let r2 = ngAnnotate(response, {add: true});
		console.log('r2.src', r2.src);
		return r2.src;
	});
};
