import express from "express"
const reviewsRoutes = express.Router()
import { saveReview, getReviews } from "../controllers/reviews.controllers.js";

reviewsRoutes.post("/saveReview", saveReview)

reviewsRoutes.get("/getReviews/:productId", getReviews)


export default reviewsRoutes;