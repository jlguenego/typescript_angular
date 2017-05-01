/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../types/jshashes.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;


import Hashes from 'jshashes';

const app = angular.module('myApp', []);
app.constant('salt', 'sel de Guerande');
app.value('hash', {
	name: 'md5',
	hash(n) {
		return new Hashes.MD5().hex(n);
	}
});

class PasswordServiceProvider {
	public static $inject = ['salt'];
	public $get = ['hash', '$log', (hash, $log) => {
		return {
			hash(login, password) {
				const r = hash.hash(login + password + this.mySalt);
				$log.debug('hash = ', r);
				return r;
			}
		};
	}];

	constructor(private mySalt) { // notation courte !!! (cool)
	}
	public salt(s) {
		if (s) {
			this.mySalt = s;
		}
		return this.mySalt;
	}
}

app.provider('passwordService', PasswordServiceProvider);
app.config(['passwordServiceProvider', (passwordServiceProvider) => {
	console.log('salt ', passwordServiceProvider.salt());
}]);

class MyController {
	public static $inject = ['passwordService', 'hash', '$scope', 'salt'];
	constructor(passwordService, hash, $scope, salt) {
		$scope.hash = hash;
		$scope.$watch('password + login', () => {
			$scope.passwordHash = passwordService.hash($scope.login, $scope.password);
		});
		$scope.salt = salt;
	}
}
app.controller('MyController', MyController);

