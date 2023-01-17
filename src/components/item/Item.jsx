import { Link } from "react-router-dom"
import "./Item.scss"

export const Item = ({element}) => {
    return(
        <div className="contenedor-item">
            <div className="card card-item">
            <img src={element.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">{element.name}</h5>
                <p className="card-text text-body">${element.price}</p>
                <Link to={`/item/${element.id}`} className="btn btn-light position-absolute bottom-0 start-0 m-3">Ver detalle</Link>
            </div>
        </div>
        </div>
    )   
};
