/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare const angular: angular.IAngularStatic;

var app = angular.module('myApp', []);

app.config(function () {
	console.log('configuration of my app.');
});

class MyController {
	static $inject = ['$window'];
	constructor(public $window: ng.IWindowService) {}
	public sayHello(name: string) {
		this.$window.alert('Hello ' + name);
	};
}
app.controller('MyController', MyController);

