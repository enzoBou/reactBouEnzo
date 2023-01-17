import './NavBar.scss'
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <nav className="nav-bar">
            <div className="container">
                <Link to="/" className='container-title'><img src='https://res.cloudinary.com/dq2i2t2tz/image/upload/c_scale,w_174/v1670189092/logokohler_hhmywo.png'/></Link>
            </div>
            <div className="container-right">
                <a href='' className="container-right-a">Home</a>
                <a href='' className="container-right-a">Actividades</a>
                <a href='' className="container-right-a">Nosotros</a>
                <CartWidget/>
            </div>
            <div className='container-title-right'>
                <h2 className='productos-title'>Productos</h2>
            </div>
            <h4 className="container-left-b">
                <Link to="/" className="container-left-b-child">Todos</Link>
                <Link to="/category/proteina" className="container-left-b-child">Proteina</Link>
                <Link to="/category/prework" className="container-left-b-child">PreWork</Link>
                <Link to="/category/creatina" className="container-left-b-child">Creatina</Link>
            </h4>
        </nav>
    )
}