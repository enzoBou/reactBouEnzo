import React from 'react'
import { products } from '../../productsMock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.scss"
import { ItemDetail } from '../itemDetail/ItemDetail'

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.id === +id )
    setProduct(productSelected)
  }, [id])
  
  return (
    <div className='cardContainer'>
       <ItemDetail product={product}/>
    </div>
  )
}

