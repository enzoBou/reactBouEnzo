import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../itemCount/itemCount'
import "./ItemDetail.scss"

export const ItemDetail = ({product}) => {

  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = (quantity) => {
    addToCart({...product, quantity: quantity})
  };

  const quantity = getQuantityById(product.id)

  return (
    <div>
      <div className="card cardContenedor cardItemDetail">
        <img src={product.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            <div className="cardCount">
              <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity}/>
            </div>
        </div>
      </div>
        <div className='itemDetailDescription'>
          <p>{product.description}</p>
        </div>
    </div>
  )
};

