import './ItemDetail.css';



const ItemDetail =({name, descripcion,  })=>{
    return(
        <>
       
        <h1 className='itemD'>{name}</h1>
        <h2 className='itemD' >{descripcion}</h2>
        </>
    )
}

export default ItemDetail