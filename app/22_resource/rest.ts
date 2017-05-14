'use strict';

import * as express from 'express';
const router = express.Router();
export default router;

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

router.delete('/tickets', (req, res, next) => {
	tickets = [];
	res.json({});
});


// Creation
router.post('/tickets', (req, res, next) => {
	const ticket = req.body;
	ticket.id = id;
	id++;
	tickets.push(ticket);
	res.status(201);
	res.json(ticket);
});

router.get('/tickets/:id', (req, res, next) => {
	const ticket = tickets.find((n) => {
		return n.id === Number(req.params.id);
	});
	if (ticket === undefined) {
		res.sendStatus(404);
	}
	console.log('ticket', ticket);
	res.json(ticket);
});

router.put('/tickets/:id', (req, res, next) => {
	console.log('update req.body', req.body);
	const ticket = tickets.find((n) => {
		return n.id === Number(req.params.id);
	});
	if (!ticket) {
		res.sendStatus(404);
		return;
	}
	ticket.name = req.body.name;
	console.log('ticket', ticket);
	res.json(ticket);
});

router.delete('/tickets/:id', (req, res, next) => {
	const ticket = tickets.find((n) => {
		return n.id === Number(req.params.id);
	});
	if (!ticket) {
		res.sendStatus(404);
		return;
	}
	const index: number = tickets.findIndex((n) => {
		return n.id === Number(req.params.id);
	});
	tickets.splice(index, 1);
	res.json(ticket);
});








