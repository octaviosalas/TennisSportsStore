import mongoose from "mongoose";


const shippingData = mongoose.Schema( { 
    adress: { 
        type: String,
    }, 
    province: { 
        type: String,
    }, 
    town: { 
        type: String,
    },
    telephone: { 
        type: Number
    },
    userid: { 
        type: String,
        required: true
    }
   
   


})

const ShippingData = mongoose.model("ShippingData", shippingData)

export default ShippingData;
