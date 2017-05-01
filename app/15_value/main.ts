/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare const angular: angular.IAngularStatic;

import Hashes from 'jshashes';

const app = angular.module('myApp', []);
app.value('hash', {
	compute(n) {
		return new Hashes.MD5().hex(n);
	},
	name: 'md5'
});

class MyController {
	public static $inject = ['hash', '$scope'];
	constructor(hash, $scope) {
		$scope.hash = hash;
	}
}

app.controller('MyController', MyController);
