import { createContext, useState } from "react"
import React from 'react'

export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {
    
    const [cart, setCart] = useState([])

    const addToCart = ( element )=>{

        if(isInCart(element)){
            let newArray = cart.map( item => {
                if(item.id === element.id){
                    let newProduct = {
                        ...item,
                        quantity: item.quantity + element.quantity
                    }
                    return newProduct
                }else{
                    return item
                }
            })
            setCart(newArray)
        }else{
            setCart( [ ...cart, element] )
        }
        
    }

    const isInCart = ( item ) => {
        return cart.some( elemento => elemento.id === item.id)
    }

    
    const data = {
        cart,
        addToCart
    }

    return (
    
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
  )
}
