import { useState, } from "react"


const Mercadolibre = ()=>{

    const [product, setProducts]= useState([])
    const [input, setInput]=useState("")
    const [cargando, setCargando]=useState(false)
    // useEffect(()=>{
        // fetch("https://api.mercadolibre.com/sites/MLA/search?q=celular")
        // .then(response =>response.json())
        // .then(json =>{
                // setProducts(json.results)
            // })
        

    // }, [])

const handleOnSubmit= (e)=>{
    e.preventDefault()
    setCargando(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response =>response.json())
        .then(json =>{
                setProducts(json.results)
                    }).catch(error =>{
                        console.log(error)
                    }).finally(()=>{
                        setCargando(false)
                    })

}

if(cargando){
   return <h3>cargando...</h3>
}
return(
    <>
<h2>Compara precios en Mercadolibre</h2>
<form onSubmit={handleOnSubmit}>
    <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
    <button type="submit">buscar</button>
    
</form>
<div>
    {product.map(prod =>{
        return (
            <div key={prod.id}>
                <p>{prod.title}</p>
                <p>{prod.price}</p>
                <img src={prod.thumbnail} alt={prod.title} />
            </div>
        )
    })}
</div>
    </>
)
    
}

    

export default Mercadolibre