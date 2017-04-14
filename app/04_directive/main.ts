/// <reference path="../../node_modules/@types/angular/index.d.ts" />

var app = angular.module('myApp', []);

app.directive('myFirstDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'my_template.html',
        transclude: true
    };
});

// app.controller();

angular.element(function () {
    angular.bootstrap(document, ['myApp']);
});
