/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
/// <reference path="../../types/html.d.ts" />
import 'angular';
declare const angular: angular.IAngularStatic;

import 'angular-route';
// You can import html file but you need to use a loader for it.
// (ng-template loader seems to be a good choice)

import { templateUrl as coverUrl } from 'app/tmpl/cover.html';
import { templateUrl as helloUrl } from 'app/tmpl/hello.html'
import { templateUrl as messageUrl } from 'app/tmpl/message.html';
console.log('coverUrl', coverUrl);

const app = angular.module('myApp', ['ngRoute']);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
	$locationProvider
		.html5Mode(false)
		.hashPrefix('!');

	$routeProvider
		.when('/', {
			templateUrl: coverUrl
		})
		.when('/hello', {
			templateUrl: helloUrl
		})
		.when('/:message', {
			controller: 'MessageController',
			controllerAs: 'ctrl',
			templateUrl: messageUrl,
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
