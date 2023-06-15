import express from "express"
const usersRoutes = express.Router()
import { registerUser, loginUser, getUserById, changeUserData } from "../controllers/users.controllers.js"

usersRoutes.get("/user/:userId", getUserById)
usersRoutes.post("/register", registerUser)
usersRoutes.post("/login", loginUser)
usersRoutes.put("/changeUserData", changeUserData)



export default usersRoutes;