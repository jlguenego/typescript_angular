/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../types/jshashes.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;

import Hashes from 'jshashes';

const app = angular.module('myApp', []);
app.value('hash', {
	name: 'md5', compute(n) {
		return new Hashes.MD5().hex(n);
	}
});

class PasswordService {
	public static $inject = ['hash', '$log'];
	private $log;
	private h;
	constructor(hash, $log) {
		this.h = hash;
		this.$log = $log;
	}

	public hash(login, password) {
		if (login === undefined) {
			login = '';
		}
		password = (password === undefined) ? '' : password;
		const r = this.h.compute(login + password);
		this.$log.debug('hash(' + login + password + ') = ', r, self);
		return r;
	}
}

app.service('passwordService', PasswordService);

class MyController {
	public $inject = ['passwordService', 'hash', '$scope'];
	constructor(passwordService: PasswordService, hash, $scope) {
		$scope.hash = hash;
		$scope.$watch('password + login', () => {
			$scope.passwordHash = passwordService.hash($scope.login, $scope.password);
		});
	}
}

app.controller('MyController', MyController);

