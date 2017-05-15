/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', []);

class MyController {
	private static $inject = ['$scope'];
	public lastUpdate: Date;
	constructor($scope: ng.IScope) {
		this.lastUpdate = undefined;
		$scope.$watch('$ctrl.name', () => {
			this.lastUpdate = new Date();
		});
	}
}

app.controller('MyController', MyController);

