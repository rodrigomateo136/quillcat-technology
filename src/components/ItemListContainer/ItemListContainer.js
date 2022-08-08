import  './ItemListContainer.css';

import {useState, useEffect} from 'react';
import {getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'

const ItemListContainer =({greeting}) =>{
    
    const [products, setProducts]=useState([])
    
    const {categoryId} = useParams()
console.log(categoryId)
    useEffect( ()=>{

        const AsyncFuntion = categoryId ? getProductsByCategory : getProducts

        AsyncFuntion(categoryId).then(products =>{
            setProducts(products)
        }).catch(error =>{
            console.log(error)
        })
        // if(!categoryId){
        // getProducts().then(products =>{
        //        setProducts(products)
        //     })
        // }else{
        //     getProductsByCategory(categoryId).then(products =>{
        //         setProducts(products)
        //      })
        //     }
    }, [categoryId])


    return(
        <div className='main2'>
        <h2>{greeting}</h2>
 

    <ItemList  productos={products}/>

    
    
        </div>
    
    )
}
export default ItemListContainer
