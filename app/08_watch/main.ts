/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare var angular: angular.IAngularStatic;

var app = angular.module('myApp', []);

class MyController {
	static $inject = ['$scope'];
	lastUpdate: Date;
	constructor($scope: ng.IScope) {
		this.lastUpdate = undefined;
		$scope.$watch('$ctrl.name', () => {
			this.lastUpdate = new Date();
		});
	}
}

app.controller('MyController', MyController);

