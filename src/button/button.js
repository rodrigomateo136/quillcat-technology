const Button=(props)=>{
    return <button onClick={props.handleclick} style={{color:props.color}}>{props.label}</button>
}
export default Button