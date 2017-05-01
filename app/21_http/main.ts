/// <reference path="../../node_modules/@types/angular/index.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', []);

class MyController {
	public static $inject = ['$scope', '$http'];
	constructor($scope, $http) {
		$http.get('content.json').then((response) => {
			$scope.content = response.data.content;
		}).catch((error) => {
			$scope.content = '';
			console.log('Error', error);
		});
	}
}

app.controller('MyController', MyController);

