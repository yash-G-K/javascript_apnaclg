//DOM Manipulation
// The DOM (Document Object Model) represents the structure of a document in a tree format.
// Each node is an object that represents a part of the document.
// Nodes can be elements, text, attributes, comments, etc.
// The DOM allows us to manipulate the content and structure of web pages dynamically.

// get element by ID
// let header = document.getElementById('header');
// header.style.color = 'blue'; // change text color to blue

// // get elements by class name
// let items = document.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold'; // make text bold
// }

// // get elements by tag name
// let paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.fontSize = '18px'; // change font size
// }


// query selector
// let firstItem = document.querySelector('.item'); // selects the first element with class 'item'
// firstItem.style.backgroundColor = 'yellow'; // change background color

// document.querySelector('h1').innerText = 'Updated Header'; // change header text

// document.querySelector('#header').style.textAlign = 'center'; // center align header text

// document.querySelector('.item').style.border = '2px solid red'; // add border to first item

// // query selector all

// console.log(document.querySelectorAll('div a')); // selects all anchor elements within divs


//innerHTML
// let contentDiv = document.getElementById('content');
// contentDiv.innerHTML = '<h2>New Content</h2><p>This content was added using innerHTML.</p>';

//innerText
// let textDiv = document.getElementById('text');
// textDiv.innerText = '<h2>This will be displayed as plain text, not HTML.</h2>';
// textDiv.style.color = 'green';

//innercontent
// let infoDiv = document.getElementById('info');
// infoDiv.innerContent = '<p>This is innerContent.</p>'; // treated as plain text
// infoDiv.style.fontStyle = 'italic';

// getAttribute and setAttribute
// let link = document.getElementById('myLink');
// console.log(link.getAttribute('href')); // get href attribute
// link.setAttribute('href', 'https://www.example.com'); // set new href attribute
// link.innerText = 'Go to Example.com'; // change link text

// style manipulation
// let box = document.getElementById('box');
// box.style.width = '200px';
// box.style.height = '200px';

// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = 'red'; // change link colors to red
// }


// class list property
// let myElement = document.getElementById('myElement');
// myElement.classList.add('newClass'); // add a class
// myElement.classList.remove('oldClass'); // remove a class
// myElement.classList.toggle('activeClass'); // toggle a class
// my = myElement.classList.contains('newClass'); // check if class exists
// console.log(my); // true or false


// Navigation properties
// parent Element, children, firstChild, lastChild, nextSibling, previousSibling


// Adding elements from page
// let list = document.getElementById('myList');
// let newItem = document.createElement('li'); // create a new list item
// newItem.innerText = 'New Item'; // set text for the new item
// list.appendChild(newItem); // add the new item to the list
// // list.removeChild(list.firstElementChild); // remove the first item from the list

// appendChild ,append, prepend,insertAdjacentElement.


//removing elements
// remove child , remove 




// just practice
// let p = document.createElement('p');
// p.innerText = 'This is red color';
// let body =document.querySelector('body');
// body.appendChild(p);
// p.style.color = 'red';