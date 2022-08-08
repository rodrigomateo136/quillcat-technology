import "./counter.css"
import { useState } from "react";

const  Counter =({stock , onAdd})=>{
    const [count , setCount ]= useState(1)

    const increment=()=>{
        if(count < stock) {

            setCount(count +1)
        }
    }

    const decrement=()=>{
        if(count > 1){

            setCount(count - 1)
        }
    }

    return (
        <div className="contador">
            <h1>{count}</h1>
            <button onClick={decrement}>Restar</button>
            <button onClick={increment}>Sumar</button>
            <button onClick ={ () => onAdd(count)}>agregar al carrito</button>
        </div>
    )
}

export default Counter