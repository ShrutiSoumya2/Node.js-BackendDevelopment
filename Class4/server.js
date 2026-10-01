// FRAMEWORK OF NODEJS IS EXPRESS, before express http server is created using get/post request and req, res.
// REACT IS LIBRARY FOR JAVASCRIPT
// const express = require("express"); //commonjs module system
import express from "express"; //es module system  //express is function

const app = express(); //app is object of express
app.use(express.json()); //middleware to parse json data from request body

app.get("/", (req, res) => {  //API work : logic and function of backend ko call karna
  res.json({ message: "Welcome to express Backend" });  //api calling to run logic of backend, use postman to test api calling, since frontend is not yet created
});
app.get("/about", (req, res) => {
  res.json({ message: "Welcome to about page" });
});
let user = ["Rahul", "Ramesh", "Suresh"];
// user[0] = "Rahul Singh";
app.get("/user", (req, res) => {
  res.status(200).json({
    message:'data fetched...',
    sucess:true,
    user
  })
});
app.post("/createuser", (req, res) => {
    let name = req.body.name;
    if (!name) {
      return res.status(404).json({
        message: "Name is required",
        success: false
      });
    }
    user.push(name);
    res.status(200).json({
      message: "User created successfully",
      success: true,
      user
    });
});
app.put('/updateuser', (req, res) => {  //api endpoint and function
  let name = req.body.name
  let newname = req.body.newname
  let index = user.indexOf(name)
  user[index] = newname
  res.status(200).json({
    message: "User updated successfully",
    success: true,
    user
  });
});
app.delete('/deleteuser', (req, res) => {
  let name = req.body.name
  let index = user.indexOf(name)
  user.splice(index, 1)
  res.status(200).json({
    message: "User deleted successfully",
    success: true,
    user
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
// MBC - MODULAR BACKEND DEVELOPMENT:to make work easier, less messy code, we can divide the code into different files and folders.
