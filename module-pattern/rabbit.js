var Animal = require('./animal');
var inherits = require('util').inherits;

// inheritance
// important to note that prototype will be inherited
// however for property inheritance we need to
// make an explicit call inside the constructor
inherits(Rabbit, Animal);

function Rabbit() {
    Rabbit.super_.call(this);
};

Rabbit.prototype.eatCarrot = function () {
    console.log('eating carrot...');
    this.full = true;
};

module.exports = Rabbit;
