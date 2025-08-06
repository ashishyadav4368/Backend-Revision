const express = require("express");
require('dotenv').config();
const app = express();



app.get("/", (req, res) => {
    res.send("hello ashish")
})

app.get("/home", (req, res) => {
    res.send("home page ")
})

app.get("/login", (req, res) => {
    res.send("<h1>Hello Ashish Yadav</h1>")
})


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})