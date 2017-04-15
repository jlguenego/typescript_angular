/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare var angular: angular.IAngularStatic;

var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function ($scope) {
	$scope.lastUpdate = undefined;
	$scope.$watch('name', function () {
		$scope.lastUpdate = new Date();
	});
}]);

