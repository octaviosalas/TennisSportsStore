import React, { createContext, useState, useEffect } from 'react';


const CartContext = createContext({ 
    products: [],
    addProduct: () => {},
    deleteProduct: () => {},
    cleanCart: () => {},
    totalPriceCart: () => {},
    quantityCart: () => {}
})

const CartProvider = ({children}) => { 
   const [products, setProducts] = useState([])

  const addProduct = (prod) => { 
      
    const repeatedProduct = products.findIndex(p => p.id === prod.id) 
    if(repeatedProduct !== -1) { 
      setProducts(products.map(p => p.id === prod.id ? {...p, quantity: p.quantity + prod.quantity} : p)) 
    } else { 
      setProducts([...products, prod])
    }
    console.log(products)
   }

   const cleanCart = () => { 
      setProducts([])
   }

   const quantityCart = (quantity) => { 
      return products.reduce((total, valor) => { 
       return total + valor.quantity

      }, 0)
   }

   const totalPriceCart = () => { 
      return products.reduce((total, value) => { 
         return total + value.price*value.quantity
    }, 0)
   }

   const deleteProduct = (id) => { 
      const productToBeDeleted = products.findIndex(p => p.id === id) //Encuentro con mi Id el producto
   if(products[productToBeDeleted].quantity === 1) { //Si encuentro algo, lo busco en la lista, y si tengo un elemento osea quantity uno
     setProducts(products.filter(i => i.id !== id)) // Filtro el elemento
   } else {  //  Y si no
      setProducts(products.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p)) //En vez de aumentarle le resto uno de la cantidad
   }
   }

  

  


   return ( 
      <CartContext.Provider value={{products: products,  addProduct: addProduct, deleteProduct: deleteProduct, cleanCart: cleanCart, totalPriceCart: totalPriceCart, quantityCart: quantityCart }}>
        {children}
      </CartContext.Provider>
   )

}

export default CartContext;
export {CartProvider}