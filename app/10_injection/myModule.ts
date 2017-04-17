module myModule {
	const myModule = angular.module('myModule', []);

	class HelloService {
		static $inject = ['$window'];
		$window;
		constructor($window) {
			this.$window = $window;
		}
		welcome(name) {
			this.$window.alert('Hello ' + name + '!');
		}
	}

	myModule.service('hello', HelloService);
}
