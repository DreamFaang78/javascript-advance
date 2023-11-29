//Higher Order Function In Javascript
// Map is a higher order function

var agam = [1, 2, 3, 4];
const doubleAgam = agam.map(function (agam) { return agam * 2 });
console.log(doubleAgam);

const tripleAgam = agam.map(function (agam) {
    return agam * 4;
});
console.log(tripleAgam);

// Filter Function Exaple in js

const aman = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 18, 20];
const evenNumbers = aman.filter(function (aman) {
    return aman % 2 === 0;
});
console.log(evenNumbers);
// Reduce Function In Js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum); // Output: 15

// ForEach Function In Js
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(function (number) {
    console.log(number * number)
});

// Constructor Function In Javascript
// SsIMPLE
function carPrototype() {
    this.wheels = 4;
    this.ac = true;
    this.gates = 5;
    this.fm = true;
}
var bmw = new carPrototype();
var audi = new carPrototype();
//Type-2 A Constructor Function With Input Paramters
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Agam", 21);
const person2 = new Person("Aman", 19);
person1.greet();
person2.greet();

const hello = function agam() {
    console.log("Hi MY nAME IS Agam");
}

// function runFunction(func) {
//     func();
// }
// runFunction(greet);

function createGreeter(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greetAlice = createGreeter('Alice');
greetAlice(); // Output: Hello, Alice!


// IIFE
// IMMEDIATLEY INVOKED FUNCTION EXPRESIION
(function () {
    console.log("Hi I AM Agam Singh The Only Next Elon Musk Of The World")
})();

//Getter In JS
class Personal {
    constructor(name) {
        this.name = name;
    }

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

const person = new Personal('Alice', 'Smith');
console.log(Personal.fullName); // Output: Alice Smith

//Setters In Javascript
const obj = {
    _value: 0,
};

Object.defineProperty(obj, 'value', {
    get: function () {
        return this._value;
    },
    set: function (newValue) {
        if (newValue >= 0) {
            this._value = newValue;
        } else {
            console.log("Value must be non-negative.");
        }
    }
});

obj.value = 42;
console.log(obj.value);

//Prototype
var ui = [1, 9, 8, 5, 0];
// Inheritance
// Prototypal Inheritance
// Define a base object
function Animal(name) {
    this.name = name;
}

// Add a method to the prototype of Animal
Animal.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.name);
};

// Create a new object using the Animal constructor
const cat = new Animal("Whiskers");

// Call the method from the prototype
cat.sayHello(); // Output: Hello, I'm Whiskers


const rat = new Animal("Rat");

//Class Inheritance
class Person99 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person99 {
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
}

const john = new Employee('John Doe', 30, 'Software Engineer');

console.log(".........");
console.log(".........")
console.log(".........")

console.log(john.name); // 'John Doe'
console.log(john.age); // 30
console.log(john.occupation); // 'Software Engineer'

// global Scope

var x = 999;
console.log(this);

//Local Scope
function agamsingh() {
    var b = 12;
    console.log(b);
    console.log(this)
}

agamsingh();

var agamkushwaha = {
    name: "Agam Singh",
    abpadaikaro: function () {
        console.log(this);
    }
}
agamkushwaha.abpadaikaro();

//Context-3
function amans() {
    console.log(this.age);
}
var obj2 = { age: 18 };
amans.call(obj2);

// Call In Javascript

function anmol(val1, val2, val3) {
    console.log(this, val1, val2, val3);
}
var alph = { name: "Agam" }

var aka = anmol.bind(alph, 1, 2, 0);

anmol.call(alph, 12, 23, 43);
anmol.apply(alph, [1, 8, 99]);

// Impure Function
function abx(val) {
    return Math.random() * val;
}

var ans1 = abx(2);
var ans2 = abx(2);

// Pure Function 
function pure(a, b) {
    return a * b;
}

var po2 = pure(9, 8);
var po1 = pure(9, 8);