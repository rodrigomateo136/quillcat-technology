import './ItemDetail.css';
import {Link} from 'react-router-dom'
import Counter from "../counter/counter";
import {useState, useContext} from 'react'
import { cartContext } from '../../App';

const ItemDetail =({name, descripcion, price, id, img })=>{
    let {AddItem} = useContext(cartContext)

    const [quantity, setQuantify]=useState(0)

  const handleOnAdd =(quantity)=>{
  console.log(`la cantidad agregada es: ${quantity}`)
   setQuantify(quantity)
   const productToAdd={
    id, name , quantity , price, 
}
    AddItem=(productToAdd)
}

    return(
        <div className='detalleMarco'>

        <>
       
        <h2 className='itemD'>{name}</h2>
        <img className="imgCelu2" src={img} alt={""} />
        <div className='cardDetalle'>

        <h3 className='detFont' >El precio es ={price} </h3>
        <h5 className='detFont' >{descripcion}</h5>
        </div>
        {
            quantity === 0 ?(
                <Counter stock={10} onAdd={handleOnAdd}/>
                
                ) : (
                    <Link className="FinCompra" to='cart'>Finalizar Compra</Link>
                    )
                }
        </>
                </div>
    )
}

export default ItemDetail