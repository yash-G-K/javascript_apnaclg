// node.js is the JavaScript runtime built on Chrome's V8 JavaScript engine
// It allows developers to run JavaScript code outside of a web browser, enabling server-side development and building scalable network applications.
// node repl - read-eval-print loop
// console.log("Welcome to the Node.js REPL! Type .exit to quit.");
// console.log(process.argv);
// To run this code, save it in a file named "app.js" and execute it using the command: node app.js arg1 arg2
// This will print the command-line arguments passed to the script, including "arg1" and "arg2".

//process and process.argv
// The process object is a global object in Node.js that provides information about, and control over, the current Node.js process.
// One of its properties, process.argv, is an array that contains the command-line arguments passed when the Node.js process was launched.
// The first element is the path to the Node.js executable, the second element is the path to the JavaScript file being executed, and any subsequent elements are the additional command-line arguments provided by the user.


// module.exports and require
// In Node.js, each file is treated as a separate module. The module.exports object is used to define what a module exports and makes available for other files to import using the require function.
// This allows for code modularity and reuse across different parts of an application.
// const math = require('./math');
// console.log("Sum:", math.sum(5, 10));
// console.log("Product:", math.multiply(5, 10));

// const example = require('./example');
// console.log(example);


// NPM (Node Package Manager)
// NPM is the default package manager for Node.js. It allows developers to install, share, and manage dependencies (libraries and packages) for their Node.js applications.
// With NPM, developers can easily add third-party packages to their projects, manage versioning, and handle package dependencies efficiently.


//package.json defination
// The package.json file is a crucial component of a Node.js project. It serves as a manifest that contains metadata about the project, including its name, version, description, author, license, and dependencies.
// This file is used by NPM to manage the project's dependencies and scripts, making it easier to share and distribute the application.

// import {sum, multiply, subtract, divide} from './math.js';

// console.log("Sum:", sum(15, 5));
// console.log("Multiply:", multiply(15, 5));
// console.log("Subtract:", subtract(15, 5));
// console.log("Divide:", divide(15, 5));

// require vs import/export
// In Node.js, require is the traditional way to import modules using the CommonJS module system, while import/export is part of the ES6 module system.
// require is synchronous and can be used anywhere in the code, whereas import/export is asynchronous and must be used at the top level of the module.
// ES6 modules (import/export) offer better support for static analysis and tree shaking, making them more suitable for modern JavaScript development.
