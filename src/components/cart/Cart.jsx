import React from 'react'
import Swal from "sweetalert2"
import { Button } from "@mui/material"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Error404 } from '../error404/Error404'
import { CartItem } from "../cartItem/CartItem"
import { useState, useEffect } from 'react'
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { Form } from '../form/Form'
import { Link } from 'react-router-dom'
import { Orders } from '../orders/Orders'
import "./Cart.scss"

export const Cart = () => {
  
  const { cart, clearCart, getTotalPrice } = useContext( CartContext )

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [order, setOrder] = useState({})

  const openForm = () => {
    if( cart.length > 0){
      setBuy(true)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    } 
  ;}

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data()
        })
      })
    }
  }, [orderId]);

  const limpiar = () => {
    Swal.fire({
      title: 'Deseas vaciar el carrito?',
      text: "El carrito se eliminara!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vaciar carrito!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Carrito vacio!',
          'Vuelve al home para volver a comprar',
          'success'
        )
        clearCart()
      }
    })
  };

  if(orderId){
    return(
    <div className='cart-order position-absolute top-50 start-50 translate-middle'>
      <div className="card">
        <h5 className="card-header text-light">Comprobante de pago</h5>
        <div className="card-body">
          <h5 className="card-title text-light"><Orders order={order}/></h5>
          <p className="card-text text-light"><h2>Tu orden de compra es: {orderId}</h2><h3>Muchas gracias por su compra!</h3></p>
          <Button variant="outlained"><Link to={"/"} >Volver a comprar</Link></Button>
        </div>
      </div>
    </div>
  )};

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))};  
        {cart.length < 1 && <Error404 />}
      </div>

      <div className="cart-info">
        <h2>Descripcion del carrito:</h2>
        <h3>Cantidad de productos: {cart.length} </h3>
        <h3>Precio total: {getTotalPrice() > 0 ? getTotalPrice() : "No hay items"}</h3>

        {buy ? (
          <Form
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        ) : (
          cart.length > 0 && (
            <div className="btn-cart">
              <Button variant="contained" onClick={openForm}>
                Comprar
              </Button>
              <Button onClick={() => limpiar()} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          )
        )};
      </div>
    </div>
  )
}
