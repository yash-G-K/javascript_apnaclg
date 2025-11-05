// async function that throws an error.It usese the promise returned by the async function
// and demonstrates error handling with .catch()
// async function greet(){
//     throw "This is an error!";
//     return "Hello, welcome to the lecture!";
// }

// greet()
// .then((result) => {
//     console.log("Greeting has been sent.");
// })
// .catch((error) => {
//     console.error("An error occurred:", error);
// });


//await keyword to wait for a promise to resolve before proceeding
// function getnum(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log("Generated number:",num);
//             resolve(num);
//         },1000);
// });
// }
// async function processNumber(){
//     await getnum();
//     await getnum();
//     await getnum();
// }


// const h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3) {
//                 reject("Promise rejected with number: " + num);
//             } else {
//                 h1.style.color = color;
//                 console.log(`Color changed to ${color}!`);
//                 resolve(`Color changed to ${color}!`);
//             }
//         }, delay);
//     });
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//     } catch (err) {
//         console.log("Error caught in the async function:");
//         console.error(err); // Use console.error for better visibility
//     }
// }

// // Call the async function to start the demo
// demo();


// APIs - Application Programming Interfaces
// Fetch API - used to make network requests to retrieve resources from a server
// It returns a promise that resolves to the Response object representing the response to the request
// javascript object notation - JSON
// used to transmit data between a server and a web application as text
// It is easy for humans to read and write and easy for machines to parse and generate
// JSON.parse - method that parses a JSON string and converts it into a JavaScript object
// JSON.stringify - method that converts a JavaScript object into a JSON string
// let jsonRes = {"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.", "length":78};
// console.log(jsonRes.fact);

// let jsonRes2 = JSON.parse('{"fact":"Cats have five toes on their front paws, but only four toes on their back paws.","length":76}');
// console.log(jsonRes2.fact);


// Testing APIS requests
// AJAX - Asynchronous JavaScript and XML
// used to send and receive data from a server asynchronously without interfering with the display and behavior of the existing page
// XMLHttpRequest - built-in browser object that allows you to make HTTP requests to a server and load data back into the web page without refreshing it
// Modern alternative to XMLHttpRequest is Fetch API


// Http methods - GET, POST, PUT, DELETE
// GET - used to retrieve data from a server
// POST - used to send data to a server to create a new resource
// PUT - used to update an existing resource on a server
// DELETE - used to delete a resource from a server

//Status codes
// 1xx - Informational
// 2xx - Success
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error

// Adding information to the URL
// Query parameters - used to send additional information to the server in the URL
// They are added to the end of the URL after a question mark (?)
// // one example is shown below
// https://api.example.com/data?param1=value1&param2=value2
// Here, param1 and param2 are the query parameters with their respective values value1 and value2


//headers - used to send additional information with an HTTP request or response
// They are key-value pairs that provide metadata about the request or response
// Common headers include Content-Type, Authorization, User-Agent, etc.
//fetch means to make network requests similar to XMLHttpRequest (XHR)
// It is a modern, promise-based API that provides a more powerful and flexible way to make HTTP requests


// our first API request using fetch
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//         console.log("Cat Fact:", data.fact);
//     });
// })
// .catch((error) => {
//     console.error("Error fetching data:", error);
// });


// Using async-await with fetch
// let url = "https://catfact.ninja/fact";
// async function fetchCatFact(){
//     try {
//         let res = await fetch(url);
//         res = await res.json();
//         console.log("Cat Fact:", res.fact);
//         console.log(res);
//     } catch(e){
//         console.error("Error fetching data:", e);
//     }
// }


//Axios - popular JavaScript library used to make HTTP requests from the browser or Node.js
// It is promise-based and provides an easy-to-use API for making requests and handling responses


// let btn = document.getElementById("btn");
// let url2= "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () =>{
//     let imageUrl  = await getImage();
//     console.log(imageUrl);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", imageUrl);

// });
// async function getImage(){
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(e){
//         console.error("Error fetching data:", e);
//         return "no image found";
//     }
// }

// btn.addEventListener("click", async () =>{
//     let fact  = await fetchCatFact();
//     console.log(fact);
// });
// async function fetchCatFact(){
//     try {
//         let res = await axios.get("https://catfact.ninja/fact");
//         console.log("Cat Fact:", res.data.fact);
//         console.log(res);
//     }
//     catch(e){
//         console.error("Error fetching data:", e);
//     }
// }


// Axion headers example
// const url = "https://icanhazdadjoke.com/";

// async function get(){
//     try {
//         const config = {headers: {Accept : 'application/json'}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }
//     catch(e){
//         console.error("Error fetching data:", e);
//     }
// }


// Activity using query parameters with axios and strings.
// const url = "https://api.agify.io";

// async function getAge(){
//     try {
//         const name = "Michael";
//         const config = {params: {name: name}};
//         let res = await axios.get(url, config);
//         console.log(`Predicted age for the name ${name} is ${res.data.age}`);
//     }
//     catch(e){
//         console.error("Error fetching data:", e);
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getColleges(country);
    console.log(colleges);
    show(colleges);
});

function show(colleges) {
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    colleges.forEach((college) => {
        let li = document.createElement("li");
        li.innerText = college.name;
        ul.appendChild(li);
    });
}


async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}