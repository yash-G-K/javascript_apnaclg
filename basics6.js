// functions in js
// dice roll simulation
function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());

// function with arguments
function greet(name){
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
}
greet("Yash");

// function with multiple arguments
function add(a, b){
    return a + b;
}
console.log(add(5, 10));

function table(number){
    for(let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
console.log(table(73));

// concat of the string using function

let str = ["Hello", " ", "World", "!"];
function concat(str){
    let result;
    for(i = 0; i < str,length; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));

// Scope in js
// scope defines the accessibility of variables,objects and functions in different parts of the code.
//function scope

function myFunction(){
    let functionScopeVar = "I am inside function";// function scope
    console.log(functionScopeVar);
}
myFunction();
// console.log(functionScopeVar); // error

// block scope
{
    let blockScopeVar = "I am inside block";
    console.log(blockScopeVar);
}
// console.log(blockScopeVar); // error