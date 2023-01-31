var HTTP_PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request message to endpoint 127.0.0.1:3000 or localhost:3000
app.get("/", (req, res) => {
    res.send(`<h1>SUCCESS!</h1>`);
});

// Request message to endpoint 127.0.0.1:3000/echo
app.get("/echo", (req, res) => {
    res.send(`<h1>SUCESS! echo</h1>`);
});

// Request message to endpoint 127.0.0.1:3000/foxtrot/kilo
app.get("/foxtrot", (req, res) => {
    var id = req.params.id;
    res.send(`<h1>SUCCESS! Recieved ${id} via foxtrot </h1>`);
});

// Request message to endpoint 127.0.0.1:3000/any other value
app.get("*", (req, res) => {
    res.send(`<h1>FAILED! Fix your URL.</h1>`);
});

const server = app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});