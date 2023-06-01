import ShippingData from "../models/shippingdata.js"

export const saveUserShippingData = async (req, res) => { 
       const {userid} = req.params
       const {adress, location, province, telephone} = req.body
       console.log(req.body)

       try {
           const checkIfDataExist = await ShippingData.findOne({userid: userid}) //Fijate si ya existe en la coleccion de direcciones, alguna direc almacenada con ese ID que te llego
           if(checkIfDataExist) { 
            console.log("Los datos del usuario ya existen")
           } else { 
            const newDataForShipping = new ShippingData({ //si no existe, si, guardala.
              adress: adress,
              location: location,
              province: province,
              telephone: telephone,
              userid: userid
            })
             await newDataForShipping.save()
             res.send("Almacenado")
           }
           
       
       } catch (err) {
          console.log(err)
       }
}

export const getUserShippingData = async (req, res) => { 
  const {userid} = req.params
  try {
     const getDataUserToShippping = await ShippingData.find({userid: userid}) //Si existe en la coleccion de direcciones una direc de ese usuario, devolvela!
     if(getDataUserToShippping) { 
        res.send(getDataUserToShippping)
     } else { 
      res.send("No hay datos de envio") //Si no existe no.
     }
     
  } catch (err) {
     console.log(err)
  }
}