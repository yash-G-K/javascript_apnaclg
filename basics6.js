// // functions in js
// // dice roll simulation
// function rollDice(){
//     return Math.floor(Math.random() * 6) + 1;
// }

// console.log(rollDice());

// // function with arguments
// function greet(name){
//     console.log(`Hello, ${name}! Welcome to JavaScript.`);
// }
// greet("Yash");

// // function with multiple arguments
// function add(a, b){
//     return a + b;
// }
// console.log(add(5, 10));

// function table(number){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }
// console.log(table(73));

// // concat of the string using function

// let str = ["Hello", " ", "World", "!"];
// function concat(str){
//     let result;
//     for(i = 0; i < str,length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// // Scope in js
// // scope defines the accessibility of variables,objects and functions in different parts of the code.
// //function scope

// function myFunction(){
//     let functionScopeVar = "I am inside function";// function scope
//     console.log(functionScopeVar);
// }
// myFunction();
// // console.log(functionScopeVar); // error

// // block scope
// {
//     let blockScopeVar = "I am inside block";
//     console.log(blockScopeVar);
// }
// // console.log(blockScopeVar); // error

// //lexical scope
// // a variable defined outside a function can be accessed inside the function
// function outerFunction(){
//     let outerVar = "I am outside!";
//     function innerFunction(){
//         console.log(outerVar);
//     }
//     innerFunction();
// }
// outerFunction();

// // function expression
// const square = function(num){
//     return num * num;
// };
// console.log(square(5));

// let factorial = function fact(n){
//     if(n <= 1) return 1;
//     return n * fact(n - 1);
// };
// console.log(factorial(5));

// High order functions
// functions that take other functions as arguments or return functions as their results

function multiplegreet(func , count){
    for(let i = 0; i < count; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello!");
}

multiplegreet(greet, 3);

// retruning function from function
function oddoreven(request){
    if(request === "even"){
        let even = function(num){
            console.log( num % 2 === 0);
        }

        return even;
    } else if(request === "odd"){
        let odd =  function(num){
            console.log( num % 2 !== 0);
        }
        return odd;     
    }
    return function(){
        return null;
    }

}
let evenFunction = oddoreven("even");
evenFunction(4); // true
let oddFunction = oddoreven("odd");
oddFunction(5); // true

// Arrow functions
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(3, 7));

//Methods in js
const calculator = {
    add : function(a,b) {
        return a + b;
    },
    sub : function (a,b){
        return a - b;
    },
    mul : function(a,b){
        return a * b;
    },
    divide : function(a,b){
        return a / b;
    }

};
console.log(calculator.add(10, 5)); // 15
console.log(calculator.sub(10, 5));
console.log(calculator.mul(10, 5));
console.log(calculator.divide(10, 5));