import "./Item.css"
import { ItemCount } from '../itemCount/itemCount';
import { Link } from "react-router-dom"

export const Item = ({element}) => {
    return(
        <div className="contenedorItem">
            <div className="card">
            <img src={element.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">{element.name}</h5>
                <p className="card-text text-body">${element.price}</p>
                <Link to={`/item/${element.id}`} className="btn btn-light position-absolute bottom-0 start-0 m-3">Ver detalle</Link>
                <div className="cardCount">
                    <ItemCount stock={element.stock} initial={1}/>
                </div>
            </div>
        </div>
        </div>
        
    )   
};