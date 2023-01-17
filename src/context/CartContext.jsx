import { createContext, useState } from "react"
import React from 'react'

export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {
    
    const [cart, setCart] = useState([])

    const addToCart = ( element ) =>{

        if(isInCart(element)){
            let newArray = cart.map( (product) => {
                if(product.id === element.id){
                    let newProduct = {
                        ...product,
                        quantity: element.quantity
                    }
                    return newProduct
                }else{
                    return product
                }
            })
            setCart(newArray)
        }else{
            setCart( [ ...cart, element] )
        }
        
    }

    const isInCart = ( item ) => {
        return cart.some( (elemento) => elemento.id === item.id)
    }
    const clearCart = () => {
        setCart([])
    }

    const getQuantityById = (id)=>{
        const product = cart.find(elemento => elemento.id === id)
        return product?.quantity
    }

    const getTotalPrice = ()=>{
        const total = cart.reduce((acc, element) =>{
            return acc + (element.price * element.quantity)
        }, 0)
        return total
    }

    const deleteProductById = (id)=>{
        const newArray = cart.filter( product => product.id !== id )
        setCart( newArray )
      }
    
    const data = {
        cart,
        addToCart,
        clearCart,
        getQuantityById,
        getTotalPrice,
        deleteProductById
    }

    return (
    
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
  )
}
