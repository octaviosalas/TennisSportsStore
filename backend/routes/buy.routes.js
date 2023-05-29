import express from "express"
const buyRoutes = express.Router()
import { saveBuy, getBuysOfUser } from "../controllers/buy.controllers.js";



buyRoutes.post("/buy/:userid", saveBuy)
buyRoutes.get("/getBuys/:userid", getBuysOfUser)


export default buyRoutes;