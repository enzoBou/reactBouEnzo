import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.scss"

export const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  return (
    <div key={item.id} className="cart-item">
      <div className="cart-item-info">
        <img className="cart-img" src={item.img} alt=""/>
        <h2>{item.name}</h2>
        <h2>${item.price}.-</h2>
        <h2>Unidades: {item.quantity}</h2>
      </div>
      <button variant="contained" className="btn btn-light w-25" onClick={()=>deleteProductById(item.id)}>Quitar</button>
    </div>
  )
};

