import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

app.post('/user/:id', (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)  //only in post and put request,not in get request
    console.log(req.params) //in post and put request   
    console.log(req.headers)
    console.log(req.headers.host)  //gives domain name
    console.log(req.query) //in post and put request
    // res.json({
    //     message: "api is calling"
    // })
    res.status(201).send({
        message: "api is calling"
    })
    // res.send("api is calling")
    
})  

app.listen(port, () => {
  console.log(`Server is running on port`, port)
})