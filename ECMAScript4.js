////
// Object literal
var animal = {
    eat: function () {
        this.full = true;
    }
},
rabbit;

//
rabbit = inherit(animal);
console.log('undefined: ' + animal.full); //undefined
console.log('undefined: ' + rabbit.full); //undefined
rabbit.eat();
console.log('undefined: ' + animal.full); //undefined
console.log('true: ' + rabbit.full); //true
console.log('----------------');

//
animal.full = false;
rabbit = inherit(animal);
console.log(' 1: false: ' + animal.full); //false
console.log(' 2: false: ' + rabbit.full); //false
rabbit.eat();
console.log(' 3: false: ' + animal.full); //false
console.log(' 4: true: ' + rabbit.full); //true
console.log('----------------');

////
// Constructor function
function Animal () { this.full = false; };
function Rabbit () { this.setConstructor = function () { Animal.call(this); }; };
Animal.prototype.eat = function () { this.full = true; };
Rabbit.prototype = new Animal();
Rabbit.prototype.eatMore = function () { this.full = true; };

//
animal = new Animal();
rabbit = new Rabbit();
rabbit.eat();
console.log(' 5: false: ' + animal.full); //false
console.log(' 6: true: ' + rabbit.full); //true
console.log('----------------');

//
rabbit = new Rabbit();
rabbit.eatMore();
console.log(' 7: true: ' + rabbit.full); //true
console.log('----------------');

//
animal = new Animal();
rabbit = new Rabbit();
console.log(' 8: false: ' + rabbit.hasOwnProperty('full')); //false
rabbit.eat();
console.log(' 9: true: ' + rabbit.hasOwnProperty('full')); //true
console.log('----------------');

//
animal = new Animal();
rabbit = new Rabbit();
console.log('10: false: ' + rabbit.hasOwnProperty('full')); //false
rabbit.setConstructor();
console.log('11: true: ' + rabbit.hasOwnProperty('full')); //true


////
// Helper
function inherit(prototype) {
    function func () {}
    func.prototype = prototype;
    return new func;
};
