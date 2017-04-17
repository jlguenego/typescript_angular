// This is a module because we use export (at the file end)

// privateData is not exported and not visible outside of this file.
const privateData = 8;
const myLib = {
	hello: () => {
		console.log('hello');
		// tslint:disable-next-line:no-var-keyword
		for (var i = 0; i < 10; i++) {
			setTimeout(() => {
				console.log('i', i);
			}, 2000);
		}

		for (let i = 0; i < 12; i++) {
			setTimeout(() => {
				console.log('i', i);
			}, 2000);
		}

		// tslint:disable-next-line:no-shadowed-variable no-var-keyword
		for (var i = 0; i < 15; i++) {
			((k) => {
				setTimeout(() => {
					console.log('i', k);
				}, 2000);
			})(i);
		}
	},
	x: 12 + privateData,
};

export default myLib;
