import { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import './ItemListContainer.scss'
import {products} from "../../productsMock"
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
    
    const {categoryName} = useParams()
    const [items, setItems] = useState([])
    
    useEffect(() => {

      const productosFiltered = products.filter( productos => productos.category === categoryName)
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve( categoryName ? productosFiltered : products)
        }, 100)
      })
  
      task
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          console.log("se rechazo")
        })
    }, [categoryName])
    
    return(
        <div className='containerItems'>
            <h2 className='badge bg-danger text-wrap position-relative top-0 start-50'>{greeting}</h2>
            <ItemList items={items}/>
        </div>
    )
};