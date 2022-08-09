import "./Item.css";
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Counter from "../counter/counter";
const Item =({product})=>{
const [quantity, setQuantify]=useState(0)
console.log(quantity)

  const handleOnAdd =(quantity)=>{
  console.log(`la cantidad agregada es: ${quantity}` )
   setQuantify(quantity)
  }
    return (
        

      <li className="card2" >
            <h4>{product.name}</h4>
            <img className="imgCelu" src={product.img} />
            <p className="price">Precio = ${product.price}</p>
            <p>

          <Link className="ButCard" to={`/detail/${product.id}`}>ver detalle</Link>
            </p>
           
          {
            quantity === 0 ?(
              <Counter stock={10} onAdd={handleOnAdd}/>
              
              ) : (
                    <Link className="FinCompra" to='cart'>Finalizar Compra</Link>
              )
            }

            
            
            </li>
    
    )
}

export default Item