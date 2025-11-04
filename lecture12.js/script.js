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


const h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise rejected with number: " + num);
            } else {
                h1.style.color = color;
                console.log(`Color changed to ${color}!`);
                resolve(`Color changed to ${color}!`);
            }
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("Error caught in the async function:");
        console.error(err); // Use console.error for better visibility
    }
}

// Call the async function to start the demo
demo();
