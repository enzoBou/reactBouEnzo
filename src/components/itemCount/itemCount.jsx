import { useEffect, useState } from "react"
import "./itemCount.scss"

export const ItemCount = ({stock, initial = 0, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  useEffect(()=>{
    setCounter(initial)
  },[initial]);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  };

  const decrement = () => {
    if(counter > 1) {
      setCounter(counter - 1)
    }
  };
  
  return (
    <div className="count-container">
      <h2 className="count-num">{counter}</h2>
      <button className="count-button-a btn btn-light" onClick={increment}>+</button>
      <button className="count-button-b btn btn-light" onClick={decrement}>-</button>
      <button className="count-button-c btn btn-light" onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
};
