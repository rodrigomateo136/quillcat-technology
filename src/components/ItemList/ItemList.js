import Item from "../Item/Item";

const ItemList =({productos})=>{
    return(
        <ol>
            {productos.map(prod=> <Item key={prod.id} product={prod}/>)}
        </ol>
    )
}
export default ItemList