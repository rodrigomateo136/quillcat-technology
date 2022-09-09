//listado principal de todos los productos, vienen de firebase//
//desde la collections products//

import  './ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import {useState, useEffect} from 'react';

import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import { baseDato } from '../../service/firebase';


const ItemListContainer =({greeting}) =>{
    
    const [products, setProducts]=useState([])
    const [loading , setLoading]=useState(true)
    const {categoryId} = useParams()

    useEffect( ()=>{
        setLoading(true)

        const collectionRef=!categoryId
        ? collection(baseDato , 'products')
        : query(collection(baseDato , 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response =>{
            const productsAdapted = response.docs.map(doc =>{
                const data= doc.data()
                console.log(data)
                return {id:doc.id,...data}
            })
            setProducts(productsAdapted)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })


      
    }, [categoryId])
    if(loading) {
        return <h1>cargando....</h1>
    }

    return(
        <div className='main2'>
        <h2>{greeting}</h2>
 

    <ItemList  productos={products}/>

    
    
        </div>
    
    )
}
export default ItemListContainer
