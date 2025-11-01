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
let input = document.querySelector('input');
input.addEventListener('keypress', function(e) {
    console.log('Key down event!');
    console.log(e.key);
});
