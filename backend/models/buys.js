import mongoose from "mongoose";


const buysSchema = mongoose.Schema( { 
    quantity: { 
        type: Number,
    }, 
    name: { 
        type: String,
    }, 
    price: { 
        type: Number,
       
    },
    category: { 
        type: String
    },
    userid: { 
        type: String,
        required: true
    }
   


})

const Buys = mongoose.model("Buys", buysSchema)

export default Buys;
