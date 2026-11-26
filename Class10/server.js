import express from "express";
const app = express();
import connectDB from'./database/mongodb.js';
import router from "./routes/userRoutes.js";
connectDB();
app.use(express.json())  //json to object conversion. 
app.use(router)
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 