import express from "express"
const shippingDataRoutes = express.Router()
import {saveUserShippingData} from "../controllers/shippingdata.controllers.js"


shippingDataRoutes.post("/saveData/:userid", saveUserShippingData)

export default shippingDataRoutes
