import Buys from "../models/buys.js"


export const saveBuy =  async  (req, res) => { 

  const productos = req.body;
  const {userid} = req.params
  console.log(req.params)

  try {
    
   const mapProducts = await productos.map((productos) => { 
    const { quantity, category, name, price, id } = productos;
    const compranueva =  new Buys( { 
        quantity,
        category,
        name,
        price,
        userid: userid,
        id: id
    })
       return Buys.insertMany(compranueva) //Uso insertMany para que me permita guardar mas de una vez el mismo producto
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
       
       res.json(userBuys)
    } catch (err) {
        console.log(err)
    }

}
