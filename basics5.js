//js objects and object literals
// used to store multiple values in a single variable 
//used to store key value pairs & more complex entities
// const student = {
//     name : "yash kalbhute",
//     age: 21,
//     isEnrolled: true,
//     courses: ['maths', 'science', 'history'],
// };

// const post ={
//     username: "yash_kalbhute",
//     content : "This is my first class",
//     likes : 100,
//     posts : 5,
//     tags : ['welcome', 'firstpost', 'class'],
// };
// console.log(post);

// get values  from object 1} post["someKey"] 2} post.someKey
// java script converts the key to string while using bracket notation
// console.log(post.username);
// console.log(post['content']);

// add and update values in object

// const post ={
//     username: "yash_kalbhute",
//     content : "This is my first class",
//     likes : 100,
//     posts : 5,
//     tags : ['welcome', 'firstpost', 'class'],
// };

// post.likes = 200; // update
// post.username = "Disha"; // update
// post.comments = 10; // add new key value pair
// console.log(post);

// // delete key value pair from object
// delete post.posts;
// console.log(post);

// // object of the objects
// const users = {
//     user1 : {
//         username : "yash_kalbhute",
//         email : "yashk.gmail.com",
//     },
//     user2 : {
//         username : "disha_sonawane",
//         email : "disha.gmail.com",
//     },
// };
// console.log(users);
// // access user2's email
// console.log(users.user2.email);

// //array of thee objects
// const posts = [
//     {
//         username : "yash_kalbhute",
//         content : "This is my first post",
//     },
//     {
//         username : "disha_sonawane",
//         content : "Hello everyone!",
//     },
// ];
// console.log(posts);
// console.log(posts[1].username) // access disha_sonawane


//maths object
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045
// console.log(Math.sqrt(16)); // 4
// console.log(Math.abs(-7.5));
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.min(3, 1, 4, 2)); // 1

// // Math.random() - generates a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random()); // e.g., 0.123456789
// // To generate a random integer  from 1 to 10

// // let num = Math.random();
// // num = num * 10;
// // num = Math.floor(num);
// // num = num + 1;
// // console.log(num);

// console.log(Math.floor(Math.random() * 10) + 1); // generates a random number between 1 and 10


// // guessing game

const randomNum = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess a number between 1 and 10 (or type 'quit' to exit):");

while (guess !== "quit") {
  let num = Number(guess);

  if (num === randomNum) {
    console.log("🎉 Congratulations! You guessed the correct number.");
    break;
  } else if (num < randomNum) {
    guess = prompt("Too low! Try again (or type 'quit' to exit):");
  } else if (num > randomNum) {
    guess = prompt("Too high! Try again (or type 'quit' to exit):");
  } else {
    guess = prompt("Invalid input! Enter a number between 1 and 10:");
  }
}

if (guess === "quit") {
  console.log("Game exited. Thanks for playing!");
}

