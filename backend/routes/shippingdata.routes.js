import express from "express"
const shippingDataRoutes = express.Router()
import {saveUserShippingData, getUserShippingData} from "../controllers/shippingdata.controllers.js"


shippingDataRoutes.post("/saveData/:userid", saveUserShippingData)

shippingDataRoutes.get("/getUserData/:userid", getUserShippingData)

export default shippingDataRoutes
