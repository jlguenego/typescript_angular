/// <reference path="../../node_modules/@types/angular/index.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', []);

class MyTypeScriptCtrl {
	/* @ngInject */
	constructor(private $scope: ng.IScope, private $http: ng.IHttpService) {
		this.doSomething();
	}
	public doSomething() {
		this.$http.get('content.json').then((response: ng.IHttpPromiseCallbackArg<{content: string}>) => {
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
