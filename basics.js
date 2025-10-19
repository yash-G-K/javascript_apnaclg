// apna college js basics
// what is variable in js.
// Datatypes in javaScript.
// typepof operator in js.
// operations in js.
// NaN in js.
// operators precedence in js.
// let var const in js.
// const = constant value which can not be changed and must be initialized during declaration.
// var = global scope variable and can be re-declared and updated.
// let = block scope variable and can be updated but can not be re-declared.
// what is camelcase snakecase kebabcase pascalcase;
// TypeScript 
// Strings in js 
// String indices
// undefined vs null in js

// console.log("welcome to js basics");

// // template literals in js
// let a=25;
// let b= 46;
// let sum = `the sum of ${a} and ${b} is ${a+b}`;
// console.log(sum);

// //comparsison operarots in js
// // logical operators in js
// // == and === in js 

// let x= 25;
// let y= "25";
// console.log(x==y); // true comapres only value not datatype
// console.log(x===y); // false // compares both value and datatype

// // != and !== in js
// console.log(x!=y); // false 
// console.log(x!==y); // true 

// // conditional statements in js
// //else if ladder in js

age = 25;
if(age<18){
    console.log("you are a minor");
}   
else if(age>=18 && age<60){
    console.log("you are an adult");
}       
else if(age>=60){
    console.log("you are a senior citizen");
}

//nestwd if else in js
let num = 10;
if(num%2==0){
    if(num%3==0){
        console.log("the number is divisible by 2 and 3");
    }
    else{
        console.log("the number is divisible by 2 but not by 3");
    }   
}
else{
    console.log("the number is not divisible by 2");
}

//truthy and falsy values in js
// falsy values : 0, "", null, undefined, NaN, false
// truthy values : all values except falsy values