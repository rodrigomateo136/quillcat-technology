import "./counter.css"
import { useState, useEffect } from "react";

const  Counter =({stock=0, initial =1, onAdd})=>{
    const [count , setCount ]= useState(initial)

    useEffect(()=>{
        setCount(initial)
    },[initial])

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
            <button className="count" onClick={decrement}>-</button>
            <button className="count" onClick={increment}>+</button>
            <button className="count" onClick ={ () => onAdd(count)}>agregar al carrito</button>
        </div>
    )
}

export default Counter