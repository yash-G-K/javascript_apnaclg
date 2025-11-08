//object prototypes defination
//prorotype is a property of javascript object from which other objects inherit properties
//every javascript object has a prototype property which is used to build new objects
//prototype is also an object

// Array.__proto__(reference) = Object.prototype
// Array.prototype = Object.prototype   //actual object
//String.__proto__ = Object.prototype
//String.prototype = Object.prototype


// Factory function
// function personmaker(name, age, salary) {
//     const person ={
//         name: name,
//         age: age,
//         salary: salary,
//         about() {
//             return `${this.name} is ${this.age} years old and earns ${this.salary}`;
//         }       
//     };
//     return person;
// }



// constructor function
// function Person(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// let p1 = new Person("Alice", 30, 50000);
// let p2 = new Person("Bob", 25, 60000);

// //new keyword creates an empty object and sets the value of 'this' to that object
// //it also links the object to a prototype
// //it returns the newly created object from the function

// Person.prototype.about = function() {
//     return `${this.name} is ${this.age} years old and earns ${this.salary}`;
// };

// console.log(p1.about());
// console.log(p2.about());    


// class is the blueprint for creating objects with pre-defined properties and methods
// the constructor method is a special method for creating and initializing an object created with a class
// class Person {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     about() {
//         return `${this.name} is ${this.age} years old and earns ${this.salary}`;
//     }
// }

// let p1 = new Person("Alice", 30, 50000);
// let p2 = new Person("Bob", 25, 60000);


//inheritance
class Person {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    about() {
        console.log(`${this.name} is ${this.age} years old and earns ${this.salary}`);
    }
}


class Student extends Person {
    constructor(name, age, salary, course) {
        super(name, age, salary);
        this.course = course;
    }
}