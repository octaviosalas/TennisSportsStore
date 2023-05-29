import express from "express"
const productsRoutes = express.Router()
import { getRackets, getShoes, getTshirts, getProdById, markAsFavourite, favouriteProducts } from "../controllers/products.controllers.js"


productsRoutes.post("/product/:id", getProdById)
productsRoutes.get("/shoes", getShoes)
productsRoutes.get("/rackets", getRackets)
productsRoutes.get("/tshirts", getTshirts)
productsRoutes.put("/favourite", markAsFavourite)
productsRoutes.get("/favouritesProducts/:userId", favouriteProducts)



export default productsRoutes;