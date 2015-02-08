function Animal() {
    this.full = false;
};

Animal.prototype.eat = function () {
    console.log('eating...');
    this.full = true;
};

Animal.prototype.isFull = function () {
    return this.full;
};

module.exports = Animal;
