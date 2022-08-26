import { useState, createContext } from "react"

const CartContext = createContext()
export const CartContextProvider= ({children})=> {

    const [cart, setCart] = useState([])
console.log (cart)
    const AddItem= (productToAdd)=>{
      
        if(!isInCart(productToAdd.id)){
     setCart([...cart, productToAdd])
 } else {
     const cartUpdated = cart.map(prod => {
        if(prod.id === productToAdd.id){
        const productUpdated= {
          ...prod,
          quantity: productToAdd.quantity
        }
        
        return productUpdated
      } else {
        return prod
      }
    })
    setCart(cartUpdated)
       
   }
}




const clearCart = () =>{
  setCart([])
}

const removeItem = (id)=>{
    const newCartWitoutProduct = cart.filter(prod => prod.id !== id)
   setCart(newCartWitoutProduct)
}





   const isInCart =(id)=>{
       return cart.some(prod => prod.id === id)
    }
  
  const getquantity= ()=>{
    let accu = 0
    cart.forEach(prod => {
  accu += prod.quantity
    })
      return accu
  }
const getProductQuantity =(id) =>{
  const product  = cart.find(prod => prod.id ===id)

  return  product?.quantity
}
  return (
    <CartContext.Provider value={{cart, AddItem, getquantity, clearCart, isInCart, removeItem, getProductQuantity,   }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext