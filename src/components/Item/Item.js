//carta con el producto segun id, tienen un boton donde se puede //
//ir al detalle del producto con el boton correspondiene//

import "./Item.css";
import {Link} from 'react-router-dom'

const Item =({product})=>{
  

    return (
        

      <li className="card2" >
            <h4 className="tituCard">{product.name}</h4>
            <img className="imgCelu" src={product.img} alt={""}/>
            <p className="price">Precio = ${product.price}</p>
            <>
               <Link className="ButCard" to={`/detail/${product.id}`}>ver detalle</Link>
            </>
      </li>
    
    )
}

export default Item