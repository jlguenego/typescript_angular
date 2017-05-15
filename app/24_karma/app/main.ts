import 'angular';
declare const angular: angular.IAngularStatic;
const app = angular.module('myApp', []);

app.controller('MyController', function () {
	this.message = 'Hello World!';
});

