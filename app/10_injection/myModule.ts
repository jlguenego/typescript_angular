namespace myModule {
	const myModule = angular.module('myModule', []);

	class HelloService {
		public static $inject = ['$window'];
		private $window;
		constructor($window) {
			this.$window = $window;
		}
		public welcome(name) {
			this.$window.alert('Hello ' + name + '!');
		}
	}

	myModule.service('hello', HelloService);
}
