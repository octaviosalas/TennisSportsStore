import express from "express"
const productsRoutes = express.Router()
import { getRackets, getShoes, getTshirts, getProdById } from "../controllers/products.controllers.js"


productsRoutes.post("/product/:id", getProdById)
productsRoutes.get("/shoes", getShoes)
productsRoutes.get("/rackets", getRackets)
productsRoutes.get("/tshirts", getTshirts)

export default productsRoutes;