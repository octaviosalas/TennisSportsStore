import Buys from "../models/buys.js"

export const saveBuy = async  (req, res) => { 

  const productos = req.body;
  const {userid} = req.params
  console.log(req.params)

  try {

 
   const mapProducts = productos.map((productos) => { 
    const { quantity, category, name, price } = productos;
    const compranueva = new Buys( { 
        quantity,
        category,
        name,
        price,
        userid: userid
    })
       return compranueva.save()
   })
    Promise.all(mapProducts)   
           .then((result) => { 
                res.json({Mensaje: "Compra Guardada", result}) 
                    })
                .catch((error) => console.log(error))
  } catch (error) {
     console.log(error)
  } 

}


export const getBuysOfUser = async (req, res) => { 
    const {userid} = req.params

    try {
       const userBuys = await Buys.find({userid: userid})
       console.log(userBuys)
       res.json(userBuys)
    } catch (err) {
        console.log(err)
    }

}
