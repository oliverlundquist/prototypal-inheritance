var Rabbit = require('./rabbit');

var rabbit = new Rabbit();

console.log('is full: ' + rabbit.isFull()); //false

rabbit.eatCarrot();

console.log('is full: ' + rabbit.isFull()); //true
