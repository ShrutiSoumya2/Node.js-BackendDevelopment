import express from "express";

const app = express()

const port = 3000

import morgan from "morgan";


// app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded(
//     { extended: true }
// ))

app.use(morgan('dev'))  
//morgan is a middleware which is used to log the request and response details in the console, it is used for debugging purpose
app.use(middlewarelogger)  //this is a custom middleware which is used to log the request and response details in the console, it is used for debugging purpose+

function middleware1(req,res,next){
    console.log('this is middleware1')
    next()  //for running the next logic we need to call next() function, if we don't call it, the next logic will not run
}
// app.use(middleware1)  if we apply app.use,(global) it will run for all the routes, if we want to run it for specific route we can pass it as a parameter in the route
function middlewarelogger(req,res,next){
    console.log(req.method)
    console.log(req.url)
    console.log(res.statusCode)
    next()
}
app.post('/user',middleware1,middlewarelogger,(req,res)=>{
    console.log('this is main logic')
    // console.log(req.body)  //since we aren't sending any body if we run thi sline it will show undefined, express would be required to run this
    res.send('this is main logic')
}) 


app.get('/about',(req,res)=>{
    console.log('this is about logic')
    res.send('this is about logic')
})

app.listen(port, () => {
    console.log(`Server is running on port`, port)
})