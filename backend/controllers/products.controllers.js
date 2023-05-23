import rackets from "../products/rackets.js"
import shoes from "../products/shoes.js"
import tshirts from "../products/tshirts.js"
import { allProducts } from "../products/allProducts.js";

export const getRackets = (req, res) => { 
    res.send(rackets)
}

export const getShoes = (req, res) => { 
    res.send(shoes)
}

export const getTshirts = (req, res) => { 
    res.send(tshirts)
}



export const getProdById = async (req, res) => { 
    const {id} = req.params
    console.log(req.params)

    try {
        const searchProd = allProducts.find((product) => product.id == id);
        res.json( searchProd );
    } catch (err) {
        res.send(err)
    }
}