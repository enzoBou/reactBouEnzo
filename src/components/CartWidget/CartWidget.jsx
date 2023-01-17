import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'


export const CartWidget = () => {
    const { cart } = useContext( CartContext )

    return(
        <Link to="/cart">
        <div className="cart-widget-container">
            <img className="cart-widget" src="https://res.cloudinary.com/dq2i2t2tz/image/upload/v1670190108/carrito-de-compras_gxoeai.png" alt=""/>
            <p className="cart-num">{cart.length}</p>
        </div>
        </Link>
    )
}