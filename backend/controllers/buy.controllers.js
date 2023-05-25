import Buys from "../models/buys.js"

export const saveBuy = async  (req, res) => { 

  const productos = req.body;
  const {userid} = req.params
  console.log(req.params)

  try {

 
   const mapProducts = productos.map((productos) => { 
    const { quantity, category, name } = productos;
    const compranueva = new Buys( { 
        quantity,
        category,
        name,
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



 /*   const {quantity, name, price, category} = req.body

    console.log(req.body)


    try {
        const newBuy = new Buys( {                                   
            quantity: quantity,
            name: name,
            price: price,
            category: category
        })
        newBuy.save().then((b) => {                                 
            res.json({Mensaje: "Compra Almacenada", b})               
        })

    } catch (err) {
        console.log(err)
    }*/


