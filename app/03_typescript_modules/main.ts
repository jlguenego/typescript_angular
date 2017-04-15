// To import a module, just do:
import myLib from './myLib';
// and then you can use the module.
console.log('myLib.x', myLib.x);
myLib.hello();



// when declaring a variable, we trust our environment for that variable exists.
declare var privateData;
// if the variable does not exists, then the system goes in error (use strict mode)
// console.log('privateData', privateData);





