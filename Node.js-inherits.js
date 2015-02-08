var inherits = require('util').inherits;
var inspect = require('util').inspect;

////
// Inherits only work for Constructors
function Animal(speed) {
    this.length = 100;
    this.height = 100;
    this.speed  = speed;
    this.jump = function () { console.log('jump!'); };
};

function Rabbit() {
    this.length = 200;
};

function Rabbit2() {
    Rabbit2.super_.call(this, 300); //same as: Animal.call(this, 400);
    this.length = 200;
};

function Rabbit3() {
    this.length = 300; //this will be overridden by super
    this.full = false;
    Rabbit3.super_.call(this, 200); //same as: Animal.call(this, 600);
};
function Rabbit4() {
    this.length = 1000;
    Rabbit4.super_.call(this); //same as: Rabbit3.call(this);
};

Animal.prototype.eat = function () { this.full = true; };
Rabbit.prototype.eatMore = function () { this.full = true; };
Rabbit2.prototype.eatMore = function () { this.full = true; };

////
// Inherit!
inherits(Rabbit, Animal);
inherits(Rabbit2, Animal);
inherits(Rabbit3, Animal);
inherits(Rabbit4, Rabbit3);

////
// inherits will override local prototypes so they need to be redefined
Rabbit3.prototype.eatMore = function () { this.full = true; };

//Case 1
console.log('Rabbit1 --------');
var rabbit = new Rabbit();
console.log(inspect(rabbit)); //didn't inherit parent
console.log('----------------');

//Case 2
console.log('Rabbit2 --------');
var rabbit2 = new Rabbit2();
console.log(inspect(rabbit2));
rabbit2.eat();
console.log(inspect(rabbit2));
console.log('----------------');

//Case 3
console.log('Rabbit3 --------');
var rabbit3 = new Rabbit3();
console.log(inspect(rabbit3));
rabbit3.eatMore();
console.log(inspect(rabbit3));
console.log('----------------');

//Case 4
console.log('Rabbit4 --------');
var rabbit4 = new Rabbit4(); //inherits this.full from Rabbit3
console.log(rabbit4.full); //false
rabbit4.eatMore(); //inherits prototype from Rabbit3
console.log(rabbit4.full); //true
console.log(inspect(rabbit4));
console.log('----------------');

//Check inheritance
console.log(rabbit instanceof Animal);   //true
console.log(Rabbit.super_ === Animal);   //true
console.log(rabbit2 instanceof Animal);  //true
console.log(Rabbit2.super_ === Animal);  //true
console.log(rabbit3 instanceof Animal);  //true
console.log(Rabbit3.super_ === Animal);  //true
console.log(rabbit4 instanceof Animal);  //true!!
console.log(rabbit4 instanceof Rabbit3); //true
console.log(Rabbit4.super_ === Rabbit3); //true
