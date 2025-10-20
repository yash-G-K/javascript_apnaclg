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

// age = 25;
// if(age<18){
//     console.log("you are a minor");
// }   
// else if(age>=18 && age<60){
//     console.log("you are an adult");
// }       
// else if(age>=60){
//     console.log("you are a senior citizen");
// }

// //nestwd if else in js
// let num = 10;
// if(num%2==0){
//     if(num%3==0){
//         console.log("the number is divisible by 2 and 3");
//     }
//     else{
//         console.log("the number is divisible by 2 but not by 3");
//     }   
// }
// else{
//     console.log("the number is not divisible by 2");
// }

//truthy and falsy values in js
// falsy values : 0, "", null, undefined, NaN, false
// truthy values : all values except falsy values

// switch case in js
// let color = "red";
// switch(color){
//     case "red":
//         console.log("the color is red");
//         break;
//     case "blue":
//         console.log("the color is blue");
//         break;
//     case "green":
//         console.log("the color is green");
//         break;
//     default:
//         console.log("the color is not red, blue or green");
// }

// day = 3;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("invalid day");
// }

//alerts, prompts and confirms in js
// alert("this is an alert"); // this will show an alert box with the given message
// let name = prompt("enter your name");// this will show a prompt box to enter the name
// console.log("hello " + name);


// let name = prompt("enter your name");
// let age = prompt("enter your age");
// alert(name + " is " + age + " years old");

// String methods in js
// strings are immutable in js.
// let str = "  Hello World  ";
// console.log(str.length);
// console.log(str.trim());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.slice(0,5));
// console.log(str.slice(-2));
// console.log(str.replace("World", "JavaScript"));
// console.log(str.charAt(0));
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));
// console.log(str.includes("World"));
// console.log(str.toUpperCase().trim());    
// console.log(str.repeat(3));


// Arrays in js
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// mixed data type array in js
let mixedArr = [1, "hello", true, null, undefined, 3.14];
console.log(mixedArr);

//ppsuh pop shift unshift in js
mixedArr.push("new element");
console.log(mixedArr);
mixedArr.pop();
console.log(mixedArr);
mixedArr.shift();
console.log(mixedArr);
mixedArr.unshift("first element");
console.log(mixedArr);
// indexOf in js
console.log(mixedArr.indexOf(true));
// includes in js
console.log(mixedArr.includes(3.14));
// concat in js
let arr2 = [6, 7, 8];
let newArr = arr.concat(arr2);
console.log(newArr);

newArr.reverse();
console.log(newArr);

//slice in js
let slicedArr = newArr.slice(2, 5);
console.log(slicedArr);
// splice in js make changes to original array
// splice(start index, delete count, items to add)
newArr.splice(2, 2, 10, 11);
console.log(newArr);

let cars = ["BMW", "Audi", "Mercedes"];
// splice operations
cars.splice(1, 0, "Toyota"); // add Toyota at index 1
console.log(cars);
cars.splice(2, 1); // remove 1 element at index 2
console.log(cars);
cars.splice(0, 0, "Honda", "Ford"); // remove 2 elements at index 0 and add Honda and Ford
console.log(cars);

//sorting arrays in js
let numArr = [5, 2, 8, 1, 4];
numArr.sort();
console.log(numArr);
numArr.sort((a, b) => a - b); // ascending order
console.log(numArr);
numArr.sort((a, b) => b - a);   // descending order
console.log(numArr);
 cars.sort()// object
    console.log(cars);

//array reference vs value in js
let arrA = [1, 2, 3];
let arrB = arrA;    
arrB.push(4);
console.log(arrA); // [1, 2, 3, 4]
console.log(arrB); // [1, 2, 3, 4]
let arrC = [...arrA]; // spread operator to copy array
arrC.push(5);
console.log(arrA);
console.log(arrC);
// const arr in js

//nested arrays in js // 2d arrays in js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],  ]
console.log(matrix);
console.log(matrix[0]); // first row
console.log(matrix[1][2]); // element at row 1 and column 2
matrix.length; // number of rows