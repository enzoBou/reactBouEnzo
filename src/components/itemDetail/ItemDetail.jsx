import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../itemCount/itemCount'

export const ItemDetail = ({product}) => {

  const { addToCart } = useContext( CartContext )

  const onAdd = (quantity) => {
    addToCart({...product, quantity: quantity})
    
  }

  return (
    <div>
      <div className="card cardContenedor">
            <img src={product.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <div className="cardCount">
                    <ItemCount onAdd={onAdd} stock={product.stock} initial={1}/>
                </div>
            </div>
        </div>
        <div className='itemDetailDescription'>
          <p>{product.description}</p>
        </div>
    </div>
  )
}

