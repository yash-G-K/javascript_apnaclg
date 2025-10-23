// array Methods in js
// foreach method
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//     console.log(number);
// });

// let arr = [{
//     name: 'apple',
//     color: 'red'
// }, {
//     name: 'banana',
//     color: 'yellow'
// }, {
//     name: 'cherry',
//     color: 'red'
// }];
// arr.forEach((fruits) => {
//     console.log(fruits.name, fruits.color);
// });

// // Map method
// // map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// let array = [1, 2, 3, 4, 5];
// let double = array.map((num) => {
//     return num * 2;
// });
// console.log(double); // [2,4,6,8,10]

// // Filter method
// // filter method creates a new array with all elements that pass the test implemented by the provided function.if the function returns true, the element is included in the new array. and if it returns false, the element is excluded.
// let nums = [10, 15, 20, 25, 30, 35, 40];
// let ans = nums.filter((nums) => {
//  if (nums % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// })   
// console.log(ans); // [10,20,30,40]

// // Every method
// // every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// let values = [2, 4, 6, 8, 10];
// let allEven = values.every((value) => {
//     return value % 2 === 0;
// });
// console.log(allEven); // true

// //Some method
// // some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// let val = [1, 3, 5, 6, 7];  
// let hasEven = val.some((value) => {
//     return value % 2 === 0;
// }); 
// console.log(hasEven); // true


// // Reduce method
// // reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// let values1 = [1, 2, 3, 4, 5];
// let sum = values1.reduce ((sum, value) => {
//     return (sum + value);
// });
// console.log(sum); // 15

//use reduce to find the maximum value in an array
// let num = [ 3, 5, 7, 2, 8, 1];
// let max = num.reduce ((element ,num) =>{
//     if(element > num ){ 
//         return element;
//     } else {
//         return num;
//     }
// });
// console.log(max); // 8

// // Default parameters in functions
// function multiply(a, b = 1) { // b has a default value of 1
//     return a * b;
// }
// console.log(multiply(5, 2)); // 10
// console.log(multiply(5));    // 5 (b defaults to 1)


//spread operator
// let num = [1, 2, 3];
// let newNum = [...num, 4, 5, 6]; // using spread operator to add elements
// console.log(newNum); // [1, 2, 3, 4, 5, 6]


// //spread with array literals
// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['d', 'e', 'f'];
// let combinedArr = [...arr1, ...arr2];
// console.log(combinedArr); // ['a', 'b', 'c', 'd', 'e', 'f']


// // spread with object literals  
// const data = {
//     name: 'Disha',
//     age: 21,
// };
// const datacopy ={ ...data, city: 'New York' }; // using spread to add new property
// console.log(datacopy); // { name: 'Disha', age: 21, city: 'New York' }

// let arr = [4, 5, 6];
// let obj = { ...arr }; // using spread on an array to create an object
// console.log(obj); // { '0': 4, '1': 5, '2': 6 }

// // Rest operator
// // allows a function to accept an indefinite number of arguments as an array.
// function sum(...numbers) {
//     for(let i = 0; i < numbers.length; i++){
//         console.log("you gave us",numbers[i]);
//     }
// }
// sum(1, 2, 3);
// sum(4, 5, 6, 7, 8);


// Destructuring assignment
//Storing values from arrays or properties from objects into distinct variables.
// Array destructuring
let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
let [firstName, secondName,...ohters] = names;
console.log(firstName); // Alice
console.log(secondName); // Bob
console.log(ohters); // [ 'Charlie', 'David', 'Eve', 'Frank' ]

// Object destructuring
const person = {
    name: "Disha",
    age: 21,
    city: "New York",
    profession: "Developer"
};

const { name, age, ...rest } = person;
console.log(name);
console.log(age);
console.log(rest); // { city: 'New York', profession: 'Developer' }