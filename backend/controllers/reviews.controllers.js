import Reviews from "../models/reviews.js";

export const saveReview = async (req, res) => { 

       
        try {
          const {userId, name, punctuation, review, productId} = req.body
          console.log(req.body)
          const newOpinion = new Reviews ( { 
                userId: userId,
                name: name,
                punctuation: punctuation,
                review: review,
                productId: productId
             })

                const saveTheOpinion = await newOpinion.save()
                res.json(saveTheOpinion)
                console.log(saveTheOpinion)

        } catch (err) {
           console.log("Hubo errores para guardar la opinion", err)
        }
       
       

   

}

export const getReviews = async (req, res) => { 

   const {productId} = req.params
   console.log("El ID que me esta llegando para buscar opiniones es: " + productId)

   try {
        const getOpinions = await Reviews.find({productId: productId})
        res.send(getOpinions)
   } catch (err) {
        console.log("No puedo encontrarlo de esta forma", err)
   }

}