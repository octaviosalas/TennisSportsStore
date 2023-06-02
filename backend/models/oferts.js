import mongoose from "mongoose";


const ofertsSchema = mongoose.Schema( { 
    img: { 
        type: String,
    }


})

const Oferts = mongoose.model("Oferts", ofertsSchema)

export default Oferts;
