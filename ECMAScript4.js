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
console.log('undefined: ' +animal.full); //undefined
console.log('undefined: ' +rabbit.full); //undefined
rabbit.eat();
console.log('undefined: ' +animal.full); //undefined
console.log('true: ' +rabbit.full); //true

//
console.log('---------');

//
animal.full = false;
rabbit = inherit(animal);
console.log('false: ' +animal.full); //false
console.log('false: ' +rabbit.full); //false
rabbit.eat();
console.log('false: ' +animal.full); //false
console.log('true: ' +rabbit.full); //true

//
console.log('---------');

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
console.log('false: ' +animal.full); //false
console.log('true: ' +rabbit.full); //true

//
animal = new Animal();
rabbit = new Rabbit();
console.log('false: ' +rabbit.hasOwnProperty('full')); //false
rabbit.eat();
console.log('true: ' +rabbit.hasOwnProperty('full')); //true


//
animal = new Animal();
rabbit = new Rabbit();
console.log('false: ' +rabbit.hasOwnProperty('full')); //false
rabbit.setConstructor();
console.log('true: ' +rabbit.hasOwnProperty('full')); //true


////
// Helper
function inherit(prototype) {
    function func () {}
    func.prototype = prototype;
    return new func;
};
