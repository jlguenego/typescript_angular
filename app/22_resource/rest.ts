'use strict';

import * as express from 'express';
const router = express.Router();

interface ITicket {
	name: string;
	id: number;
}

let id = 3;
let tickets: ITicket[] = [{name: 'coucou', id: 1}, {name: 'hello', id: 2}];

function list(): ITicket[] {
	return tickets;
}

router.get('/tickets', (req, res, next) => {
	res.json(tickets);
});

router.get('/tickets/:id', (req, res, next) => {
	const ticket = tickets.filter((n) => {
		return n.id === Number(req.params.id);
	})[0];
	if (ticket === undefined) {
		res.sendStatus(404);
	}
	console.log('ticket', ticket);
	res.json(ticket);
});

router.get('/tickets/:id', (req, res, next) => {
	const ticket = tickets.filter((n) => {
		console.log('n', n);
		console.log('req.params.id', req.params.id);
		return n.id === Number(req.params.id);
	})[0];
	console.log('ticket', ticket);
	res.json(ticket);
});

router.post('/tickets', (req, res, next) => {
	const ticket = req.body;
	ticket.id = id;
	id++;
	tickets.push(ticket);
	res.json(ticket);
});

router.delete('/tickets', (req, res, next) => {
	tickets = [];
	res.json({});
});

export default router;


