// call stack functions
// function firstFunction() {
//     console.log("Inside firstFunction");
// }
// function secondFunction() {
//     console.log("Inside secondFunction");
//     firstFunction();
// }

// console.log("Calling secondFunction");
// secondFunction();
// console.log("Finished calling secondFunction");


//break points 

// js  is  single threaded 
// it can do one thing at a time
// synchronous code - line by line execution
// asynchronous code - can do multiple things at a time

// h1 = document.querySelector('h1');
// function changeColor(color,delay){
//     setTimeout (() => {
//         h1.style.color = color;
//     },delay);
// }

// changeColor('red',1000);
// changeColor('orange',2000);
// changeColor('yellow',3000);'


// call back hell
// h1 = document.querySelector('h1');
// function changeColor(color,delay,callback){
//     setTimeout (() => {
//         h1.style.color = color;
//         if(callback){
//             callback();
//         }
//     }
//     ,delay);
// }

// changeColor('red',1000,() => {
//     changeColor('orange',1000,() => {
//         changeColor('yellow',1000,() => {
//             changeColor('green',1000,() => {
//             });
//         }); 
//     });
// });


// function saveToDatabase(data){
//     let internetspeed = Math.floor(Math.random()*10) +1 ;
//     if(internetspeed > 5){
//         console.log("Data saved successfully", data);
//     }else{
//         Console.log("Data save failed");
//     }
// }

// promises
// function saveToDatabase(data){
//     return new Promise((resolve,reject) => {
//         let internetspeed = Math.floor(Math.random()*10) +1 ;
//         if(internetspeed > 5){
//             resolve("Data saved successfully: " + data);
//         }else{
//             reject("Data save failed");
//         }
//     });
// }

// // promises then and catch methods
// let request = saveToDatabase("User data");
// request.then(() => {
//     console.log("Data saved successfully");
//     }).catch(() => {
//         console.log("Data save failed");
//         console.log("Please try again later.");
//     }
// );


// promise chaining
// function savetoDb(data){
// let req =saveToDatabase("yash kalbhute")
// req.then(() => {
//     console.log("Data saved successfully");
//     return savetoDb("john doe");
// })
// req.then(() => {
//     console.log("Second data saved successfully");
//     return savetoDb("jane doe");
// })
// req.then(() => {
//     console.log("Third data saved successfully");
// })
// .catch(() => {
//     console.log("Data save failed");
//     console.log("Please try again later.");
// });
// }

//promises with result
// result arguement in resolve and reject
// function saveToDatabase(data){
//     return new Promise((resolve,reject) => {
//         let internetspeed = Math.floor(Math.random()*10) +1 ;
//         if(internetspeed > 5){
//             resolve("Data saved successfully: " + data);
//         }else{
//             reject("Data save failed");
//         }
//     });
// }


// applying promises
// h1 = document.querySelector('h1');
// function changeColor(color,delay){
//     return new Promise((resolve,reject) => {
//     setTimeout (() => {
//         h1.style.color = color;
//         resolve("color changed to " + color);
//     },delay);
// });
// }

// changeColor('red',1000)
// .then(() => {
//     console.log("color changed to red");
//     return changeColor('orange',1000);
// })
// .then(() => {
//     console.log("color changed to orange");
//     return changeColor('green',1000);
// })
// .then(() => {
//     console.log("coloe changes to green");
//     return changeColor('pink' ,1000);
// })
// .catch(() =>{
//     console.log('failes to change the color');
// });
