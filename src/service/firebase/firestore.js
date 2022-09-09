import { getDocs, collection, query, where } from 'firebase/firestore';
import { baseDato } from './index';


export const getProducts= (categoryId)=>{

        const collectionRef=!categoryId
        ? collection(baseDato , 'products')
        : query(collection(baseDato , 'products'), where('category', '==', categoryId))

        return getDocs(collectionRef).then(response =>{
            const productsAdapted = response.docs.map(doc =>{
                const data= doc.data()
                console.log(data)
                return {id:doc.id,...data}
            })
            return productsAdapted
        }).catch(error=>{
            return error
        })
        }