import './CartWidget.scss'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {
    const { cart } = useContext( CartContext )

    return(
        <Link to="/cart">
        <div className="cartWidgetContainer">
            <img className="cartWidget" src="https://res.cloudinary.com/dq2i2t2tz/image/upload/v1670190108/carrito-de-compras_gxoeai.png" alt=""/>
            <p className="cartNum">{cart.lenght}</p>
        </div>
        </Link>
    )
}