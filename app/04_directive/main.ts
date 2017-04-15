// this looks as a comment, but it is a typescript definition file.
// this file helps to say when developing with typescript enable editor
// what we can do with some variable (ie: in our case the angular variable)

/// <reference path="../../node_modules/@types/angular/index.d.ts" />

// Because angular is window.angular (global), we must tell it to typescript.
// A quick look to the definition file gives us the type of the angular variable.
declare var angular: angular.IAngularStatic;

var app = angular.module('myApp', []);

app.directive('myFirstDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'my_template.html',
        transclude: true,
    };
});

// the typescript transpiler shows the following line cannot work...
// This is very convenient for developers...
//app.controller();

// in this case we cannot start angular with traditional  ng-app.
// so this is the manual way to do it.
angular.element(function () {
    angular.bootstrap(document, ['myApp']);
});

// just to show that we can use our lib...
import myLib from '../03_typescript_modules/myLib';
console.log('myLib.x', myLib.x);
