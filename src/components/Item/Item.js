import "./Item.css";
import {Link} from 'react-router-dom'

const Item =({product})=>{

  
    return (
        

        <li className="card2" >
            <h4>{product.name}</h4>
            <img className="imgCelu" src={product.img} />
            <p className="price">precio={product.price}</p>
            <p>

          <Link className="ButCard" to={`/detail/${product.id}`}>ver detalle</Link>
            </p>
            
            </li>
    
    )
}

export default Item