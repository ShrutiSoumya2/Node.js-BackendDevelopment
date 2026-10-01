import express from "express";

const app = express();

const port = 3000;

app.get('/user',(req,res)=>{
    try{
        res.json({
        message : 'this is user routes..'
    })
    } catch (error) {
        res.json({ 
            message: 'something went wrong',
            error: error.message
         });
    }
})

function checkroutes(req,res){  
    res.json({
        message : 'this routes is not found..'
    })
}
app.use(checkroutes);  //runs in order of declaration therefore this should be declared at the end of all routes
app.listen(port, () => {
    console.log(`Server is running on port`, port);
})
