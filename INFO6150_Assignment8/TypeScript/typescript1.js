var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.bark = function () {
        console.log("I am " + this.name);
    };
    return Dog;
}());
var dog = new Dog("Husky");
dog.bark();
