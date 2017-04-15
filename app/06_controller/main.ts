/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare var angular: angular.IAngularStatic;

interface Person {
	lastname: string,
	firstname: string,
	age: number
}
var someone: Person = {
	lastname: 'DUPOND',
	firstname: 'Marcel',
	age: 35
};

var app = angular.module('myApp', []);

class MyController {
	person: Person = someone;
};

app.controller('MyController', MyController);

class MySecondController {
	// for the minification.
	static $inject: Array<string> = ["$timeout"];
	hello: string;
	constructor($timeout: ng.ITimeoutService) {
		var ctrl = this;
		$timeout(function() {
			ctrl.hello = 'Coucou !!!';
		}, 2000);
	}
}

app.controller('MySecondController', MySecondController);
