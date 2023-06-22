import mongoose from "mongoose";


const reviewsSchema = mongoose.Schema( { 
    name: { 
        type: String,
    }, 
   userId: { 
        type: String,
    }, 
    review: { 
        type: String,
    },
    punctuation: { 
        type: Number
    },
    productId: { 
        type: Number
    }
   
})

const Reviews = mongoose.model("Reviews", reviewsSchema)

export default Reviews;
