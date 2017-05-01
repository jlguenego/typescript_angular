/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', []);

app.config(() => {
	console.log('configuration of my app.');
});

class MyController {
	public static $inject = ['$window'];
	constructor(public $window: ng.IWindowService) { }
	public sayHello(name: string) {
		this.$window.alert('Hello ' + name);
	}
}
app.controller('MyController', MyController);
