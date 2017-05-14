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

interface IPasswordService {
	hash: (login: string, password: string) => string;
}

app.factory('passwordService', ['hash', '$log', (hash, $log) => {
	const result: IPasswordService = { hash: undefined };
	result.hash = (login, password) => {
		const r = hash.compute(login + password);
		$log.debug('hash = ', r);
		return r;
	};
	return result;
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
