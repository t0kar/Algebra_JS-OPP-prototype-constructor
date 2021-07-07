function Dog(name = "Unknown", owner = "Unknown owner") {
    this.name = name;
    this.owner = owner;
}

Dog.prototype.bark = function (barkCount = 1) {
    for (var i = 0; i < barkCount; i++) {
        console.log("Bark!");
    }
}

Dog.prototype.print = function () {
    console.log("Dog's name is", this.name, "and his owner is", this.owner);
}

var dog = new Dog("Johnny", "Štulić");


dog.bark(5);
dog.print();
