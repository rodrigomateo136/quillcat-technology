//componente del detalle del producto. que se trae de la base de datos firebase//

import  './ItemDetailContainer.css';
import {useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
import { baseDato } from '../../service/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = ()=>{
const [product, setProduct]=useState()
const [loading , setLoading]=useState(true)
const {productId}= useParams()

useEffect( ()=>{
   

 getDoc(doc(baseDato, 'products', productId)).then(response=>{

    const data= response.data()
    const productAdapted= {id: response.id,...data}
    setProduct(productAdapted)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    setLoading(false)
})
},[productId])
 if(loading){
    return <h1>cargando ....</h1>
 }
    return(
        <div >
            <h2 className="detalle">Detalle</h2>
         <ItemDetail  {...product}/>
            
        </div>
    )
}

export default ItemDetailContainer