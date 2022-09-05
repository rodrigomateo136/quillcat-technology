import './ItemDetail.css';
import {Link} from 'react-router-dom'
import Counter from "../counter/counter";
import {useState, useContext} from 'react'
import CartContext from '../../context/cartContext';

const ItemDetail =({name, descripcion, price, id, img, stock})=>{
    const {AddItem, getProductQuantity} = useContext(CartContext)

    const [quantity, setQuantify]=useState(0)

  const handleOnAdd =(quantity)=>{
  
   setQuantify(quantity)
   const productToAdd={
    id, name , quantity , price, 
}
    AddItem(productToAdd)
 
}
 
const productQuantity = getProductQuantity(id)
    return(
        <div className='detalleMarco'>

        <>
       
        <h2 className='itemD'>{name}</h2>
        <img className="imgCelu2" src={img} alt={""} />
        <div className='cardDetalle'>

        <h3 className='detFont2' >El precio es ={price} </h3>
        <h5 className='detFont2' >{descripcion}</h5>
        </div>
        {
            quantity === 0 ?(
                <Counter stock={stock} onAdd={handleOnAdd} initial ={productQuantity}/>
                
                ) : (
                    <Link className="FinCompra" to='../cart'>Finalizar Compra</Link>
                    )
                }
        </>
                </div>
    )
}

export default ItemDetail