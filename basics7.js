// this keyword in java 
// The "this" keyword in Java is a reference variable that refers to the current object. It is commonly used within instance methods and constructors to refer to the current object's fields and methods. Here are some common uses of the "this" keyword in Java:
// 1. Differentiating between instance variables and parameters:
// When a method or constructor has parameters with the same names as instance variables, "this" is used to distinguish between them.
const student ={
    name: "disha",
    age: 21,
    eng : 90,
    math: 95,
    phy: 85,
    getAvg(){
                console.log(this);
        let total = this.eng + this.math + this.phy;
        return total / 3;
    }
};
console.log("Average marks: " + student.getAvg());

function getAvg(){
    console.log(this); // winows global object
}

// try and catch block in js
// try block contains code that may throw an error
// catch block contains code that handles the error
let  x = 10;
try{
    console.log(x); // x is not defined
}catch(err){
    console.log("An error occurred: " + err.message);
}

//miscellaneous topics
// arrow function // callback function // anonymous function // IIFE
// Arrow function syntax 

const square  = (num) =>{
    return num * num;
}
console.log(square(25));

// implicit return
const cube = num => num * num * num;
console.log(cube(5));