// Two way to make classes:

// Class declaration
class Animal {

}

// Class expression
const Animal = class {

}

// eg.
class Animal {
    constructor(name) { // class constructor
        this.name = name;
    }
    speak() { // class method
        console.log(`${this.name} makes a noise`) // we dont know what animal it is
    }
}

class Dog extends Animal {
    constructor (name, breed) {
        super(name); // to run constructor of parent class
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks`)
    }

}

const puppy = new Dog('Spot');
puppy.speak(); // Spot barks