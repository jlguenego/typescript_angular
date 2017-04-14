(function () {
	'use strict';

	console.log('Hello World!');

	class Animal {
		eat() {
			console.log('miam miam slurp slurp...');
		}
		sleep() {
			console.log('rzzzzzzzzz...');
		}
	};

	class Cat extends Animal {
		speak() {
			console.log('miaou');
		}
	};

	var garfield: Cat = new Cat();
	garfield.speak();
	garfield.sleep();
	garfield.eat();
	// garfield = 3;

	function myTest() {
		// eslint-disable-next-line no-use-before-define
		x = 25;
		// eslint-disable-next-line no-use-before-define
		console.log('x=' + x);

		// eslint-disable-next-line no-constant-condition
		if (true) {
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

	for (var i = 0; i < 3; i++) {
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
		Array.prototype.forEach.call(arguments, function (n, i) {
			console.log(n, i);
		});
	}

	// myTest2(1);
	myTest2(1, 3, 12);
	// myTest2(1, 3, 12, 14);
	var x = [1, 12, 3];
	console.log(x);
	x.forEach(function (n, i) {
		console.log(n, i);
	});
	// x = 5;
})();