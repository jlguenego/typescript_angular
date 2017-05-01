/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
import 'app/myModule.ts';
declare const angular: angular.IAngularStatic;

namespace myApp {
	const app = angular.module('myApp', ['myModule']);

	class MyController {
		public static $inject = ['$scope', 'hello'];
		constructor($scope, hello) {
			$scope.sayHello = (name) => {
				hello.welcome(name);
				console.log(name);
			};
		}
	}
	app.controller('MyController', MyController);
}
