const express = require('express');
const app = express();
const path = require('path'); // lowercase "path" is conventional
const PORT = 8080;


// static files middleware
app.use(express.static(path.join(__dirname,'/public/css')));

// Setting up EJS as the templating engine
// ✅ Correct key: should be 'view engine', not 'vie'
app.set('view engine', 'ejs');

// ✅ Correctly set the views directory
app.set('views', path.join(__dirname, '/views'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('home'); // This will render views/home.ejs
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

// To run this code, save it in a file named "index.js" and execute it using the command: node index.js
// Make sure you have Express installed in your project by running: npm install express
// You can then access the server by navigating to http://localhost:3000 in your web browser.
// You can stop the server by pressing Ctrl + C in the terminal where it's running.

//views in EJSDir folder
// Create a folder named "views" in the same directory as this "index.js" file.
// Inside the "views" folder, create a file named "home.ejs" with the following content:


//Interpolation Syntax in EJS
//

//passing data to EJS template
app.get('/rolldice', (req, res) => {
    let dicecal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceValue: dicecal }); 
    // You can later enhance this route to render an EJS template and pass data to it.
});


//instagram user profile route
// Route for Instagram profile
// app.get("/ig/:username", (req, res) => {
//     const followers = ["yash", "ajay", "sachin", "rahul"];
//     const { username } = req.params;
//     res.render("instagram.ejs", { username , followers});
//     console.log(`Instagram user profile requested for username: ${username}`);
// });
// This route captures the 'username' parameter from the URL and logs it to the console.
// You can later enhance this route to fetch and display user profile information based on the username.


// Instagram profile route
app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    const instadata = require('./data.json');
    const data = instadata[username];

    if (data) {
        // If user exists in data.json
        res.render("data", { data });
        console.log(`✅ Profile loaded for: ${username}`);
    } else {
        // Handle user not found
        res.status(404).send(`<h1>User "${username}" not found</h1>`);
    }
});