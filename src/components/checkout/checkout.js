//componente donde se define el formulario del comprador y los componentes del carrito,//
//al hacer click se sube a la base de datos la compra y se descuenta el stock//
//al final hay una funcion que suma osaca stock segun necesite el usuario para
//usarla hay que descomentar la funcion y su import


import "./checkout.css"
import CartContext from "../../context/cartContext"
import { useContext, useState } from "react"
import { baseDato } from '../../service/firebase'
import { addDoc, collection, getDocs, query, where , documentId , writeBatch } from "firebase/firestore"
//import { doc, updateDoc} from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const Checkout =()=>{
const [loading, setLoading]= useState(false)
    const {  cart , getquantity , finalSum, clearCart}= useContext(CartContext)
const navigate= useNavigate()

    const totalQuantity= getquantity()
    const total=finalSum

    const valorInicial ={
        nombre:"",
        apellido:"",
        email:"",
    }

    const [user, setUser]=useState(valorInicial)

    const capturarImputs =(e)=>{
        const {name, value}=e.target
        setUser({...user,[name]:value})
    }
    const guardarDatos=(e)=>{
        e.preventDefault();
        console.log(user);
        setUser(valorInicial)
    }
    const comprador=user.nombre
    const Apellido=user.apellido
    const correo=user.email
    const createOrder = async ()=>{
        
        setLoading(true)
try{
    const ordenCompra ={
        
       buyer:{
            
        comprador,
        Apellido,
        pago:"efectivo",
        correo,
    },
    items: cart,
    totalQuantity ,
    total,
    
}


const ids= cart.map(prod => prod.id)

const productsRef = collection(baseDato, 'products')

const prodDesdeFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids )))

const {docs} = prodDesdeFirestore

const fueraStock = []

const batch= writeBatch(baseDato)

docs.forEach(doc =>{
    const dataDoc = doc.data()
    const stockBaseDato= dataDoc.stock
    
    const prodAgrCarr= cart.find(prod => prod.id === doc.id)
    const prodQuantity = prodAgrCarr?.quantity
    
    if(stockBaseDato >= prodQuantity )  {
        batch.update(doc.ref, { stock: stockBaseDato - prodQuantity})  
    }
    else{
        fueraStock.push({id : doc.id, ...dataDoc})
    }
    
})
if(fueraStock.length === 0){
    await batch.commit()
    const orderRef = collection(baseDato, 'orden de Compra')
    const orderAdded = await addDoc(orderRef, ordenCompra, capturarImputs )
    console.log(` el id de su orden es ${orderAdded.id}`)
    clearCart()
    navigate('/')
} else {
    console.log('estan sin stock en este momento');
}
} catch (error){
console.log(error);
} finally {
    setLoading(false)
}


}
if(loading){
    return <h1>Se esta generando tu orden....</h1>
}

return(
    <>
        <h1 className="titulo2">checkout</h1>
    <h1 className='titulo2'>Formulario</h1>
 <form className="boxForm" onSubmit={guardarDatos} >
        <div>
    <input className="form" type="text"  name="nombre" placeholder="nombre" value={user.nombre} onChange={capturarImputs} ></input>
    </div>
    <div>
    <input className="form"  type="text"  name="apellido" placeholder="apellido" value={user.apellido} onChange={capturarImputs} ></input>
    </div>
    <div>
    <input className="form" type="text"  name="email" placeholder="email" value={user.email} onChange={capturarImputs} ></input>
    </div>
    
    </form>
        <button className="bt-order" onClick={createOrder}>crear orden</button>
        </>
    )
}

export default Checkout

//Importante
//con esta funcion podra sumarle o restar stock a su base de datos de firebase//
//lo unico que debe hacer es cambiar el id del poducto Ej "S9j7BgKKMHg7PzbLi3LW" ,//
//cambiarlo por el id del producto a cambiar y luego poner la cantidad de stock en en lugar 
//correspondiente ej"{stock:50}"//

   

    //   const sumStock = doc(baseDato, 'products', 'S9j7BgKKMHg7PzbLi3LW')
    //   updateDoc(sumStock, {stock:50}).then(response=>{
    //       console.log(response);
    //   })