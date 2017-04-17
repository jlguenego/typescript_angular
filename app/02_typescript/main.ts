(() => {
	'use strict';

	console.log('Hello World!');

	class Animal {
		public static nbr: number = 0;
		constructor() {
			Animal.nbr++;
		}
		public eat() {
			console.log('miam miam slurp slurp...');
		}
		public sleep() {
			console.log('rzzzzzzzzz...');
		}
	};

	class Cat extends Animal {
		public speak() {
			console.log('miaou');
		}
	};

	const garfield: Cat = new Cat();
	garfield.speak();
	garfield.sleep();
	garfield.eat();
	// garfield = 3;
	const grominet: Cat = new Cat();
	const leRoiLion: Animal = new Animal();
	console.log('Number of instanciated Animals: ', Animal.nbr);

	function myTest() {
		x = 25;
		console.log('x=' + x);

		if (true) {
			// tslint:disable-next-line:no-var-keyword
			var x;
			console.log('x=' + x);
			x = 32;
			console.log('x=' + x);
		}
		console.log('x=' + x);
		x += 1;
		console.log('x=' + x);
	}

	myTest();

	for (let i = 0; i < 3; i++) {
		console.log(i);
	}
	console.log(i);

	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
	// console.log(j);

	function myTest2(a, b, c) {
		console.log('start');
		console.log(a, b, c);
		console.log(arguments);
		console.log(arguments[3]);
		console.log('is arguments an Array ?', arguments.constructor === Array);
		Array.prototype.forEach.call(arguments, (n, i) => {
			console.log(n, i);
		});
	}

	// myTest2(1);
	myTest2(1, 3, 12);
	// myTest2(1, 3, 12, 14);
	let x = [1, 12, 3];
	console.log(x);
	x.forEach((n, i) => {
		console.log(n, i);
	});
	// x = 5;
})();
