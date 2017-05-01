/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../types/jshashes.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;

import Hashes from 'jshashes';

const app = angular.module('myApp', []);
app.value('hash', {
	name: 'md5',
	compute(n) {
		return new Hashes.MD5().hex(n);
	}
});

class PasswordServiceProvider {
	public $get = ['hash', '$log', (hash, $log) => {
		return {
			hash: (login, password) => {
				const r = hash.compute(login + password + this.mySalt);
				$log.debug('hash = ', r);
				return r;
			}
		};
	}];
	private mySalt: string = 'default';
	public salt(s) {
		this.mySalt = s;
	}
}
app.provider('passwordService', PasswordServiceProvider);
app.config(['passwordServiceProvider', (passwordServiceProvider) => {
	passwordServiceProvider.salt('hmmm..., it is salted...');
}]);

class MyController {
	public static $inject = ['passwordService', 'hash', '$scope'];
	constructor(passwordService, hash, $scope) {
		$scope.hash = hash;
		$scope.$watch('password + login', () => {
			$scope.passwordHash = passwordService.hash($scope.login, $scope.password);
		});
	}
}
app.controller('MyController', MyController);

