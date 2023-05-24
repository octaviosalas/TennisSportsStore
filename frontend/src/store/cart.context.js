import React, { createContext, useState, useEffect } from 'react';


const CartContext = createContext({ 
    products: [],
    addProduct: () => {},
    deleteProduct: () => {},
    cleanCart: () => {},
    totalPriceCart: () => {}
})

export const CartProvider = ({children}) => { 
   const [products, setProducts] = useState([])

   const addProduct = (prod) => { 
      setProducts(prod)
   }

   const deleteProduct = () => { 
    
   }

   const cleanCart = () => { 
      setProducts([])
   }

   const totalPriceCart = () => { 
    
   }


   return ( 
      <CartContext.Provider value={{products: products,  addProduct: addProduct, deleteProduct: deleteProduct, cleanCart: cleanCart, totalPriceCart: totalPriceCart }}>
        {children}
      </CartContext.Provider>
   )

}

export default CartContext;