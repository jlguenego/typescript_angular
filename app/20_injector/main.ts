/// <reference path="../../node_modules/@types/angular/index.d.ts" />

import 'angular';
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', []);
app.value('s1', { value: 0 });
app.value('s2', { value: 0 });

class MyController {
	public static $inject = ['$scope', '$injector'];
	constructor($scope, $injector) {
		const $log = $injector.get('$log');
		$scope.myService = 's1';
		$scope.increment = () => {
			const service = $injector.get($scope.myService);
			service.value++;
			$log.debug('value', service.value);
		};

		$scope.value = () => {
			const service = $injector.get($scope.myService);
			return service.value;
		};
	}
}

app.controller('MyController', MyController);
