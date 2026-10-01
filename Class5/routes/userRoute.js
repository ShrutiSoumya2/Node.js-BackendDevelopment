import express from "express";
import {getuser, createuser, updateuser, deleteuser} from '../controllers/user.js';

const router = express.Router();

router.get('/getuser', getuser); 
 //rest API : do not use names such as get/post in the endpoint name.
router.post('/createuser', createuser);
router.put('/updateuser/:id', updateuser) //:id is a parameter, we can send id in api endpoint to update specific user data
router.delete('/deleteuser/:id', deleteuser) //:id is a parameter, we can send id in api endpoint to delete specific user data

export default router;

//Api work to get the logic running