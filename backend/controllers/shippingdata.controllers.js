import ShippingData from "../models/shippingdata.js"

export const saveUserShippingData = async (req, res) => { 
       const {userid} = req.params
       const {adress, location, province, telephone} = req.body
       console.log(req.body)

       try {
           const newDataForShipping = new ShippingData({ 
             adress: adress,
             location: location,
             province: province,
             telephone: telephone,
             userid: userid
           })
            await newDataForShipping.save()
            res.send("Almacenado")
       
       } catch (err) {
          console.log(err)
       }
}

export const getUserShippingData = async (req, res) => { 
   
}