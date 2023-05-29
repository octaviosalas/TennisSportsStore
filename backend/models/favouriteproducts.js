import mongoose from "mongoose";


const favouriteSchema = mongoose.Schema( { 
    productId: { 
        type: String,
    }, 
    userId: { 
        type: String,
    }

})

const Favs = mongoose.model("Favs", favouriteSchema)

export default Favs;
