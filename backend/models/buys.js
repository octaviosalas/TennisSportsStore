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
    },
    img: { 
        type: [String]
    },
    id: { 
        type: Number
    }
   


})

const Buys = mongoose.model("Buys", buysSchema)

export default Buys;
