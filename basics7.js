// this keyword in java 
// The "this" keyword in Java is a reference variable that refers to the current object. It is commonly used within instance methods and constructors to refer to the current object's fields and methods. Here are some common uses of the "this" keyword in Java:
// 1. Differentiating between instance variables and parameters:
// When a method or constructor has parameters with the same names as instance variables, "this" is used to distinguish between them.
// const student ={
//     name: "disha",
//     age: 21,
//     eng : 90,
//     math: 95,
//     phy: 85,
//     getAvg(){
//                 console.log(this);
//         let total = this.eng + this.math + this.phy;
//         return total / 3;
//     }
// };
// console.log("Average marks: " + student.getAvg());

// function getAvg(){
//     console.log(this); // winows global object
// }

// // try and catch block in js
// // try block contains code that may throw an error
// // catch block contains code that handles the error
// let  x = 10;
// try{
//     console.log(x); // x is not defined
// }catch(err){
//     console.log("An error occurred: " + err.message);
// }

// //miscellaneous topics
// // arrow function // callback function // anonymous function // IIFE
// // Arrow function syntax 

// const square  = (num) =>{
//     return num * num;
// }
// console.log(square(25));

// // implicit return
// const cube = num => num * num * num;
// console.log(cube(5));

// //setTimeout using arrow function
// // syntsx : setTimeout(() => { /* code to be executed */}, delayInMilliseconds);
// console.log("Message will be shown after 4 seconds");
// setTimeout(() => {
//     console.log("4 second delay over!");
// }, 4000);

// // set Interval using arrow function
// // syntax : setInterval(() => { /* code to be executed */}, intervalInMilliseconds);
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Count: ${count}`);
//     if(count >= 5){
//         clearInterval(intervalId); // stop the interval after 5 counts          
//     }
// }, 1000);

// this with the arrow function
//arrow function have the lexical scope.parent scope is retained.
// function scope of this is determined by the surrounding non-arrow function.

// const Student ={ 
//     name: "Disha",
//     age: 21,
//     prop : this,//global scope
//     getname(){
//         console.log(this); // 'this' here refers to the Student object
//         return this.name;
//     },
//     getAgeArrow: () => {
//         console.log(this); // 'this' here refers to the global object
//         return this.age; // 'this' here does not refer to the Student object
//     },
// };

// //print hello world 5 times in 2 sec interval using arrow function and this keyword
// let count = 0;
// const interval = setInterval (() => {
//     count++;
//     console.log("Hello, World!");
//     if(count >= 5){
//         clearInterval(interval);
//         console.log("Interval cleared");
//     }
// },2000);

// // usinfg set timeout with this in arrow function
// setTimeout(() => {
//     console.log("Name:", Student.getname());
//     console.log("Age:", Student.getAgeArrow());
// }, 1000);


// WriteanarrowfunctionnamedarrayAveragethatacceptsanarrayofnumbersandreturnstheaverageofthosenumbers.
let number = [10, 20, 30, 40, 50];

const avg = (number) => {
    let sum = 0;
    for(i = 0 ; i < number.length ; i++){
        sum += number[i];
        
    }
    return sum / number.length;
}

console.log("Average is: " + avg(number));