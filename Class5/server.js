// MVC - MODULAR VIEW CONTROLLER : to make work easier, less messy code, we can divide the code into different files and folders.
import express from "express"; //importing express module
const app = express();
app.use(express.json());
//const data = './database/data.json'; //importing data from data.json file from server.js pov.

import router from './routes/userRoute.js'; //importing router from userRoute.js file

app.use(router); //using router in server.js file

const port = 3000; //port number
app.listen(port, () => {
  console.log(`Server has started on port`, port);
});
