

import  './ItemDetailContainer.css';
import {useState, useEffect } from "react"
import {  getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ()=>{
const [product, setProduct]=useState()
const [loading, setloading]=useState(true)
const {productId}= useParams()

useEffect(()=>{
getProductById(productId)
.then(response =>{
    setProduct(response)
})
.finally(()=>{
    setloading(false)
})

},[productId])
if(loading){
    return <h1>cargando ....</h1>
}
    return(
        <div >
            <h2 className="detalle">Detalle</h2>
            <ItemDetail {...product}/>
            
        </div>
    )
}

export default ItemDetailContainer