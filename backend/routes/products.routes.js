import express from "express"
const productsRoutes = express.Router()
import { getRackets, getShoes, getTshirts, getProdById, markAsFavourite, favouriteProducts, deleteFavourite, getImages} from "../controllers/products.controllers.js"


productsRoutes.post("/product/:id", getProdById)
productsRoutes.get("/shoes", getShoes)
productsRoutes.get("/rackets", getRackets)
productsRoutes.get("/tshirts", getTshirts)
productsRoutes.put("/favourite", markAsFavourite)
productsRoutes.post("/deleteFavourite/:userId", deleteFavourite)
productsRoutes.get("/favouritesProducts/:userId", favouriteProducts)
productsRoutes.get("/getImages/:id", getImages)





export default productsRoutes;