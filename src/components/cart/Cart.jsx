import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
  
    const { cart, addToCart } = useContext( CartContext )


    return (
    <div>
      {cart.map(item=>{
        <h2 key={item.id}>{item.name}</h2>
      })}
    </div>
  )
}
