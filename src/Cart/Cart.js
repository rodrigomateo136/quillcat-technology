//carrito de compras , componente donde se encuentra la compra a realizar//
import "./cart.css"
import { useContext } from 'react'
import CartContext from '../context/cartContext'
import { Link } from 'react-router-dom'

function Cart() {
    const { cart, removeItem,  } = useContext(CartContext)
    const finalSum = cart.reduce((prev, current) => prev + (current.price*current.quantity),0)
    return (
        <div className='main2'>
            {cart.length ?
                <ol>
                    {cart.map((item, i) => {
                        return(
                        <li className="card2" key={i}>
                            <h4 className="tituCard">{item.name}</h4>
                            <p className="price">Cantitada = {item.quantity}</p>
                            <p className="price">Precio = ${item.price * item.quantity}</p>
                           
                            <button  className="count" onClick ={ () => (removeItem(item.id))}>remover item</button>
                            
                         
                            
                        </li>
                        )
                   
                    })}
                    <h2 className='detalleCart'>Total de compra =${finalSum}</h2>
                    <Link to='/checkout' className='detalleCart'>Checkout</Link>
                </ol>
                :
                <>
                <p className='celu'> NO HAY ITEMS EN EL CARRITO </p>
                <Link className='prodCart' to='/'>Ir a la lista de productos</Link>
                
                
                </>
            }
        </div>
    )
}
export default Cart





// import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import CartContext from '../context/cartContext'

// const Cart =()=>{
//     const {getquantity, cart, clearCart, } = useContext(CartContext)
//     const quantity = getquantity()
//    console.log(quantity)

   
   
   
   
//     return(
//     <>
//     <h1>
//         </h1>
//         {
//             cart.map((i)=>{
//                 return <>
                 
//                  precio total{i.price*i.quantity} 
//                  <h1>{i.name} </h1>
//                  <h1>cantidad {i.quantity}
//                   </h1>

//                 </>
//             })
        
        
//         }
    
//     <Link to='./carrito' >  
//     carrito
//     </Link>
//     <Link to='/'>productos</Link>
//     <button  className="count" onClick ={ () => (clearCart())}>Limpiar Carrito</button>
    
//     </>
// )
// }

//export default Cart