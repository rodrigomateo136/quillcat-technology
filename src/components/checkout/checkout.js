import Formulario from "../form/form"
import CartContext from "../../context/cartContext"
import { useContext, useState } from "react"
import { baseDato } from '../../service/firebase'
import { addDoc, collection, doc, updateDoc, getDocs, query, where , documentId , writeBatch } from "firebase/firestore"
//import { async } from "@firebase/util"
import { useNavigate } from "react-router-dom"

const Checkout =()=>{
const [loading, setLoading]= useState(false)
    const {  cart , getquantity , finalSum, clearCart}= useContext(CartContext)
const navigate= useNavigate()

    const totalQuantity= getquantity()
    const total=finalSum

    const createOrder = async ()=>{
        setLoading(true)
try{
    const ordenCompra ={
        buyer:{
        nombre: 'rodrigo',
        apellido: 'mateo',
        celular: '123455666',
        direccion: 'pedrito 1234',
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
    const orderRef = collection(baseDato, 'orders')
    const orderAdded = await addDoc(orderRef, ordenCompra)
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
        <Formulario/>
        <button onClick={createOrder}>crear orden</button>
        </>
    )
}

export default Checkout
//date: new date(),

    // const orderRef = collection(baseDato, 'orders')
    // addDoc( orderRef, ordenCompra).then(response =>{
    //     console.log(response);
    // })

    // const sumStock = doc(baseDato, 'products', 'S9j7BgKKMHg7PzbLi3LW')
    // updateDoc(sumStock, {stock:50}).then(response=>{
    //     console.log(response);
    // })