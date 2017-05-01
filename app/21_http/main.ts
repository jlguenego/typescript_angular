/// <reference path="../../node_modules/@types/angular/index.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', []);

class MyTypeScriptCtrl {
	/* @ngInject */
	constructor(private $scope, private $http) {
		this.doSomething();
	}
	public doSomething() {
		this.$http.get('content.json').then((response) => {
			this.$scope.content = response.data.content;
			console.log('done');
		}).catch((error) => {
			this.$scope.content = '';
			console.log('Error', error);
		});
	}
}

app.controller('MyController', MyTypeScriptCtrl);

// app.controller('MyController', function MyController($scope, $http) {
// 	'ngInject';
// 	$http.get('content.json').then((response) => {
// 		$scope.content = response.data.content;
// 		console.log('done');
// 	}).catch((error) => {
// 		$scope.content = '';
// 		console.log('Error', error);
// 	});
// });
