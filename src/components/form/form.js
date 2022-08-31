import './form.css'
import {useState} from 'react'
const Formulario =()=>{

    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [email, setEmil]=useState('')

    const handleChangeNombre=(e)=>{
        setNombre(e.target.value)
    }
    const handleChangeApellido=(e)=>{
        setApellido(e.target.value)
    }
    const handleChangeemail=(e)=>{
        setEmil(e.target.value)
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
    }
console.log(nombre, apellido, email);
 return  (
  <div>
 <h1 className='titulo'>Formulario</h1>
 <form className="boxForm" onSubmit={handleSubmit}>
    <div>
    <input className="form" type="text"  name="nombre" placeholder="nombre" value={nombre} onChange={handleChangeNombre} ></input>
    </div>
    <div>
    <input className="form"  type="text"  name="apellido" placeholder="apellido" value={apellido} onChange={handleChangeApellido}></input>
    </div>
    <div>
    <input className="form" type="text"  name="email" placeholder="email" value={email} onChange={handleChangeemail} ></input>
    </div>
 </form>


    <button className='buttForm' >enviar</button>
 </div>
 )
}
export default Formulario