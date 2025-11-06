const express = require('express');
const app = express();
const PORT = 3000;

console.log(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//ports are like doors to your computer that allow different applications to communicate over the internet or a local network. Each port is identified by a number, ranging from 0 to 65535. Common ports include 80 for HTTP and 443 for HTTPS. When you run a server, you specify a port number so that clients know where to connect.
//listen method is used to bind and listen for connections on the specified host and port. It sets up the server to accept incoming requests.
// In this example, the server listens on port 3000 and logs a message when it starts successfully.
// To run this code, save it in a file named "index.js" and execute it using the command: node index.js
// Make sure you have Express installed in your project by running: npm install express
// You can then access the server by navigating to http://localhost:3000 in your web browser.
// You can stop the server by pressing Ctrl + C in the terminal where it's running.


// app.use() method in Express.js is used to mount middleware functions at a specified path. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. They can execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function.
// The app.use() method can be used to set up middleware for all routes or for specific routes. When a request is made to the server, the middleware functions are executed in the order they were added using app.use().
// Example:
//res.send() method in Express.js is used to send a response back to the client. It can send various types of responses, such as strings, objects, arrays, or even HTML content. When res.send() is called, it automatically sets the appropriate headers and ends the response process.
// app.use((req,res) => {
//     console.log("Request received at:", new Date());
//     // res.send("Hello from Express.js!");
//     res.send('<h1>fruits</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>');
// }); 


//routing in express.js
// Routing refers to how an application’s endpoints (URIs) respond to client requests. In Express.js, routing is handled using methods of the app object that correspond to HTTP methods (GET, POST, PUT, DELETE, etc.).
// Example:
app.get('/hello', (req, res) => {
    res.send('you contacted the root path /hello with GET method');
});

app.get('/about', (req, res) => {
    res.send('you contacted the /about path with GET method');
});

// app.get ("*", (req, res) => {
//     res.send('404 Not Found! The requested resource does not exist.');
// });

// * is a wildcard character that matches any path not explicitly defined in the routes above it. This is commonly used to handle 404 errors for undefined routes.
// To test the routes, you can use a web browser or tools like Postman or curl to send GET requests to the specified paths (e.g., http://localhost:3000/hello and http://localhost:3000/about).
// You can add more routes for different HTTP methods (POST, PUT, DELETE) as needed using app.post(), app.put(), and app.delete() respectively.

app.post('/submit', (req, res) => {
    res.send('you contacted the /submit path with POST method');
});

// nodemon
// Nodemon is a utility that automatically restarts your Node.js application whenever it detects changes in the source files. It is particularly useful during development, as it eliminates the need to manually stop and restart the server each time you make a change to your code.
// To use nodemon, you first need to install it globally or as a development dependency in your project using npm:
// npm install -g nodemon


// app.get ("/users", (req, res) => {
//     const users = [
//         { id: 1, name: 'Alice' },
//         { id: 2, name: 'Bob' },
//         { id: 3, name: 'Charlie' }
//     ];
//     res.json(users);
// });


//path parameters in express.js
app.get("/:username/:id", (req, res) => {
    const { username, id } = req.params;
    res.send(`User Profile\nUsername: ${username}\nID: ${id}`);
});


// Query Strings in Express.js
app.get("/search", (req, res) => {
    console.log(req.query);
    const { q, page } = req.query;
    res.send(`Search Results for: ${q}\nPage: ${page}`);
});
// To test this route, you can navigate to a URL like: http://localhost:3000/search?q=express&page=2
// This will output:
// Search Results for: express
// Page: 2