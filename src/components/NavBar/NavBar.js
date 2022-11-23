import './NavBar.scss'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return(
        <nav className="navBar">
            <div className="container">
                <h1 className='containerTitle'>KOHLER GYM</h1>
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
            <form className="containerLeft">
                <select className="containerLeftB">
                    <option className="containerLeftBChild">Proteina</option>
                    <option className="containerLeftBChild">PreWork</option>
                    <option className="containerLeftBChild">Creatina</option>
                </select>
            </form>
        </nav>
    )
}