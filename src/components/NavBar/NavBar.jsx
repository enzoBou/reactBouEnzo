import './NavBar.scss'
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <nav className="navBar">
            <div className="container">
                <Link to="/" className='containerTitle'><img src='https://res.cloudinary.com/dq2i2t2tz/image/upload/c_scale,w_174/v1670189092/logokohler_hhmywo.png'/></Link>
            </div>
            <div className="containerRight">
                <a href='' className="containerRightA">Home</a>
                <a href='' className="containerRightA">Actividades</a>
                <a href='' className="containerRightA">Nosotros</a>
                <CartWidget/>
            </div>
            <div className='containerTitleRight'>
                <h2 className='productosTitle'>Productos</h2>
            </div>
            <h4 className="containerLeftB">
                <Link to="/" className="containerLeftBChild">Todos</Link>
                <Link to="/category/proteina" className="containerLeftBChild">Proteina</Link>
                <Link to="/category/prework" className="containerLeftBChild">PreWork</Link>
                <Link to="/category/creatina" className="containerLeftBChild">Creatina</Link>
            </h4>
        </nav>
    )
}