import './cartwidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/cartContext'
import Cart from '../Cart/Cart'
const Cartwidget=()=>{
    const {getquantity} = useContext(CartContext)
    const quantity = getquantity()
    console.log(quantity)


    return (
            <>
            <div className='carrito'>
                <Link to='./cart' className='carrito2'>
                <img  className="carrito3" src='imagenes/carrito.jpg' alt='cartwidget'/>{quantity}
                </Link>
  
            </div>
           
            </>
            )
        }

export default Cartwidget 
