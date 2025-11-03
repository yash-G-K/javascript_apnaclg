//onclick,onmouseenter,onmouseleave,onmouseover,onmouseout

// let btn = document.querySelectorAll('button');
// console.dir(btn);

// btn.onclick = function() {
//     console.log('You clicked the button!');
// };

// btn.forEach(function(button) {
//     button.onmouseenter = function() {
//         console.log('You clicked the button!');
//     };
// });


//Event Listeners defination
//1. You can add multiple event listeners to a single element
// let btn = document.querySelectorAll('button');
// console.dir(btn);
// for (let button of btn) {
//     button.addEventListener('click', sayhello);
// }
        
// function sayhello() {
//         console.log('You clicked the button!');
//     };

//practice 
// let btn = document.querySelector('button'); // Only one button
// console.dir(btn);

// btn.addEventListener('click', function() {
//     let h4 = document.querySelector('h4');
//     let color = randomColor(); // Don't reuse function name
//     h4.innerText = color;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = color;

//     console.log(color);
// });

// function randomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);  
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }


// // this keyword in event listeners
// let btns = document.querySelector('button'); // Only one button
// console.dir(btn);
// btns.addEventListener('click', function() {
//     console.log(this.innerText); // this refers to the element that received the event
//     this.style.backgroundColor = "blue";
// });


// keyboard events
// let input = document.querySelector('input');
// input.addEventListener('keydown', function(e) {
//     console.log('Key down event!');
//     console.log(e.key);
//     console.log(e.code);
//     console.log(e);
// });


// event .preventDefault()
// let form = document.querySelector('form');
// form.addEventListener('click', function(event) {
//     e.preventDefault();
//     console.dir(event);
//     alert('You clicked the link!');
// }
// );


// // Extracting data from event object
// let input = document.querySelector('input');
// input.addEventListener('keydown', function(e) {
//     console.log(`You pressed the "${e.key}" key`);
//     console.log(`Key code is: ${e.code}`);
// });


// change event and input event

let user = document.querySelector('#username');

// Triggered when the user leaves the input (after editing)
user.addEventListener('change', function(e) {       
    console.log("Input changed!");
    console.log("Current value:", this.value);
});

// Triggered on every keystroke
user.addEventListener('input', function(e) {
    let p = document.querySelector('p');
    p.innerText = this.value;
    console.log("Typing:", this.value);
});

