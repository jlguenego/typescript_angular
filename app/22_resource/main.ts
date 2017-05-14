/// <reference path="../../node_modules/@types/angular/index.d.ts" />
declare const angular: angular.IAngularStatic;

const app = angular.module('myApp', ['ngResource']);

app.controller('MyController', ($scope, $resource) => {
	'ngInject';
	$scope.data = undefined;
	const Ticket = $resource('ws/tickets/:id', {
		id: '@id'
	}, {
			update: {
				method: 'PUT'
			}
		});
	console.log('Ticket', Ticket);

	$scope.query = () => {
		Ticket.query().$promise.then((tickets) => {
			$scope.tickets = tickets;
		}).catch((error) => {
			console.error('error', error);
		});
		console.log('appel query en cours...');
	};
	$scope.query();

	$scope.create = () => {
		Ticket.save($scope.newTicket).$promise.then(() => {
			$scope.query();
		}).catch((error) => {
			console.error('error', error);
		});
		console.log('appel create en cours...');
	};

	$scope.retrieve = (id) => {
		Ticket.get({
			id
		}).$promise.then((ticket) => {
			console.log('ticket', ticket);
			$scope.ticket = ticket;
		}).catch((error) => {
			console.error('error', error);
		});
		console.log('appel retrieve en cours...');
	};

	$scope.update = (ticket) => {
		Ticket.update({
			id: ticket.id,
			name: ticket.newName
			// tslint:disable-next-line:no-shadowed-variable
		}).$promise.then((ticket) => {
			console.log('ticket', ticket);
			$scope.ticket = ticket;
			$scope.query();
		}).catch((error) => {
			console.error('error', error);
		});
		console.log('appel update en cours...');
	};

	$scope.delete = (ticket) => {
		Ticket.delete({
			id: ticket.id
			// tslint:disable-next-line:no-shadowed-variable
		}).$promise.then((ticket) => {
			console.log('ticket', ticket);
			$scope.ticket = ticket;
			$scope.query();
		}).catch((error) => {
			console.error('error', error);
		});
		console.log('appel delete en cours...');
	};

	$scope.empty = (d) => {
		Ticket.delete().$promise.then(() => {
			$scope.query();
		}).catch((error) => {
			console.error('error', error);
		});
		console.log('appel delete all en cours...');
	};
});
