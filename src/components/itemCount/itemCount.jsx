import { useState } from "react"
import "./itemCount.scss"

export const ItemCount = ({stock, initial, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if(counter > initial) {
      setCounter(counter - 1)
    }
  }



  return (
    <div className="countContainer">
      <h2 className="countNum">{counter}</h2>
      <button className="countButtonA btn btn-light" onClick={increment}>+</button>
      <button className="countButtonB btn btn-light" onClick={decrement}>-</button>
      <button className="countButtonC btn btn-light" onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
}
