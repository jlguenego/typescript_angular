'use strict';

import 'angular';
declare const angular: angular.IAngularStatic;
import 'angular-mocks';

describe('hello world', () => {

	describe('myController', () => {
		let scope;
		let ctrl;

		beforeEach(angular.mock.module('myApp'));
		beforeEach(inject(($rootScope, $controller) => {
			scope = $rootScope.$new();
			ctrl = $controller('MyController', {
				$scope: scope
			});
		}));


		it('should return "Hello World!"', () => {
			expect(ctrl.message).toEqual('Hello World!');
		});
	});
});
