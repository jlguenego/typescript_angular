/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
import 'angular';
declare const angular: angular.IAngularStatic;

import 'angular-route';

const app = angular.module('myApp', ['ngRoute']);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
	$locationProvider
		.html5Mode(false)
		.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl: 'cover.html'
		})
		.when('/hello', {
			templateUrl: 'hello.html'
		})
		.when('/:message', {
			controller: 'MessageController',
			controllerAs: 'ctrl',
			templateUrl: 'message.html',
		})
		.otherwise({
			redirectTo: '/'
		});
}

app.config(config);

class MessageController {
	public static $inject = ['$routeParams'];
	public message: string;
	constructor($routeParams: ng.route.IRouteParamsService) {
		this.message = $routeParams.message;
	}
}
app.controller('MessageController', MessageController);
