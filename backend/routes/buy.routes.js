import express from "express"
const buyRoutes = express.Router()
import { saveBuy } from "../controllers/buy.controllers.js";



buyRoutes.post("/buy/:userid", saveBuy)


export default buyRoutes;