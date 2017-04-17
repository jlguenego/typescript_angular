/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import 'angular';
declare var angular: angular.IAngularStatic;

var app = angular.module('mainApp', []);

interface Comment {
	select: number,
	email: string,
	comment: string
}

class MainCtrl {
	object: Comment;
	list: Array<Comment> = [];
	add() {
		this.list.push(this.object);
		this.object = {select: 0, email: '', comment: ''};
	}
}

app.controller('MainCtrl', MainCtrl);

