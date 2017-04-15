/// <reference path="../../node_modules/@types/angular/index.d.ts" />
declare var angular: angular.IAngularStatic;

var app = angular.module('myApp', []);

class MyFirstController {
	static $inject = ['$scope'];
	private $scope: ng.IScope;
	constructor($scope: ng.IScope) {
		this.$scope = $scope;
	}
	decrementCount = () => {
		this.$scope.count.value--;
	};
}

class MySecondController {
	static $inject = ['$scope'];
	private $scope: ng.IScope;
	constructor($scope: ng.IScope) {
		this.$scope = $scope;
	}
	incrementCount = () => {
		this.$scope.count.value++;
	};
}

app.controller('MyFirstController', MyFirstController);
app.controller('MySecondController', MySecondController);


angular.element(function () {
	angular.bootstrap(document, ['myApp']);
});
