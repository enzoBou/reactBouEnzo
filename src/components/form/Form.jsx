import React from 'react'
import Swal from "sweetalert2"
import { useState } from 'react'
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { TextField, Button, Grid } from '@mui/material'

export const Form = ({cart, getTotalPrice, setOrderId, clearCart}) => {

    const [userData, setUserData] = useState({name:"", email:"", phone:""})


    const total = getTotalPrice()
    
    const handleSubmit = ( event )=>{
        
        event.preventDefault()
        const order = {
            buyer: userData,
            items: cart,
            total: total,
            date: serverTimestamp()
        }
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)
        .then(res => setOrderId(res.id))

        cart.map(product => {
            updateDoc(doc(db, "products", product.id), {stock: product.stock - product.quantity})
        })

        clearCart()
    };

    const buyFinish = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su compra se efectuo con exito',
            showConfirmButton: false,
            timer: 1500
          })
    };

    return (

    <div className='form-container'>     
        <form action="" onSubmit={handleSubmit}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
        <TextField
            type="text" 
            placeholder='Ingrese su nombre' 
            name='name' 
            value={userData.name} 
            onChange={(event)=> setUserData({...userData, name: event.target.value})}
            id="filled-basic" label="Nombre" variant="filled"
            />
        </Grid>
        <Grid item xs={12}>
        <TextField 
            type="text" 
            placeholder='Ingrese su email' 
            name='email' 
            value={userData.email} 
            onChange={(event)=> setUserData({...userData, email: event.target.value})}
            id="filled-basic" label="Email" variant="filled"
            />
        </Grid>
        <Grid item xs={12}>
        <TextField 
            type="text" 
            placeholder='Ingrese su numero de telefono' 
            name='phone' 
            value={userData.phone} 
            onChange={(event)=> setUserData({...userData, phone: event.target.value})}
            id="filled-basic" label="Telefono" variant="filled"
            />
        </Grid>
        <Grid item xs={12}>
        <Button
            variant="contained" 
            type="submit" 
            onClick={() => buyFinish()}>Finalizar compra
        </Button>
        </Grid>
        </Grid>
        </form>
    </div>
  )
};

