import React from 'react'

export const Orders = ( {order} ) => {
  return (
    <div className='order-container'>
        <h3>Nombre: {order?.buyer?.name}</h3>
    </div>
  )
}

