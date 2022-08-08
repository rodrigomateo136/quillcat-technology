import  './ItemDetailContainer.css';
import {useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
const ItemDetailContainer = ()=>{
const [product, setProduct]=useState()

const {productId}= useParams()

useEffect(()=>{
getProductById(productId)
.then(product =>{
    setProduct(product)
})
.catch(error =>{
    console.log(error)
})
},[])

    return(
        <div >
            <h2 className="detalle">Detalle</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer