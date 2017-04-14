import angular from 'angular';

angular.module('myApp', []);

angular.directive('myFirstDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'my_template.html',
        transclude: true
    };
});
