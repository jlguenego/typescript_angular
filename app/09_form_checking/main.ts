/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare var angular: angular.IAngularStatic;

var app = angular.module('mainApp', []);

app.controller('MainCtrl', function () {
	this.object = {};
	this.list = [];

	this.add = function () {
		this.list.push(this.object);
		this.object = {};
	};
});

