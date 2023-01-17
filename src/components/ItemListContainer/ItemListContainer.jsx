import { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../firebaseConfig';
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {
    
  const {categoryName} = useParams()
  const [items, setItems] = useState([])
  
  useEffect(() =>{

  const itemColletion = collection( db, "products")

  if(categoryName){

    const q = query( itemColletion, where("category", "==" , categoryName) )

    getDocs(q)
    .then((res) =>{
      const products = res.docs.map( product => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setItems(products);
    })
    .catch((err) => console.log(err))

  }else{

    getDocs(itemColletion)
    .then((res) =>{
      const products = res.docs.map( product => {
        return {
          ...product.data(),
          id: product.id
        }
      } )
      setItems(products);
    })
    .catch((err) => console.log(err))
    }}
  , [categoryName])
  
  return(
      <div className='container-items'>
          <h2 className='badge bg-danger text-wrap position-relative top-0 start-50'>{greeting}</h2>
          <ItemList items={items}/>
      </div>
  )
};