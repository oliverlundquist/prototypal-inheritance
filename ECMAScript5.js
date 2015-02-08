////
// Object literal
var animal = {
    eat: function () {
        this.full = true;
    }
},
rabbit;

//
rabbit = Object.create(animal);
console.log(' 1: undefined: ' + animal.full); //undefined
console.log(' 2: undefined: ' + rabbit.full); //undefined
rabbit.eat();
console.log(' 3: undefined: ' + animal.full); //undefined
console.log(' 4: true: ' + rabbit.full); //true
console.log('----------------');

//
animal.full = false;
rabbit = Object.create(animal);
console.log(' 5: false: ' + animal.full); //false
console.log(' 6: false: ' + rabbit.full); //false
rabbit.eat();
console.log(' 7: false: ' + animal.full); //false
console.log(' 8: true: ' + rabbit.full); //true
console.log('----------------');

//
rabbit = Object.create(animal);
console.log(' 9: true: ' + (Object.getPrototypeOf(rabbit) === animal));
console.log('10: false: ' + rabbit.hasOwnProperty('full'));
rabbit.eat();
console.log('11: true: ' + rabbit.hasOwnProperty('full'));
console.log('12: false: ' + animal.full); //undefined
console.log('13: true: ' + rabbit.full); //true
console.log('----------------');

//
animal.eat();
rabbit = Object.create(animal);
console.log('14: true: ' + animal.full); //true
console.log('15: true: ' + rabbit.full); //true
console.log('----------------');
