import express from "express";
import { createUser, readUser, updateUser, deleteUser } from "../controller/user.js";
const router = express.Router()

router.post('/user', createUser)
router.get('/user',readUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

export default router