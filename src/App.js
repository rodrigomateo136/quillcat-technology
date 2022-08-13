
import './App.css';
import Navbar from './components/navbar/navbar';
import {useState, createContext} from 'react'
import Mercadolibre from './components/MercadoLibre/mercadolibre';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export const cartContext = createContext()

function App() {

 const [cart, setCart] = useState([])

  const AddItem= (productToAdd)=>{
   setCart([...cart, productToAdd])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-logo' >
          <img className='imgLogo' src="imagenes/logo.webp" alt=""/>
        </div>
        <div>
          <h1 className='titulo'>Quillcat Technology</h1>
          </div>
      </header>
      <section className='section'>

       <Mercadolibre></Mercadolibre> 
      
      </section>
      <div>
      <main className='main'>
        <cartContext.Provider value={{cart, AddItem}}>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Listado de productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Filtrado de productos'/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            </Routes>
            </BrowserRouter>
        </cartContext.Provider>
       
    
      
      
    </main>
<footer className='footer'>
<h3>Quillcat Technology</h3>
<p>Juramento 1544 CABA</p>
<p>Movil: 11-58974455</p>
<p>Quillcat@gmial.com</p>
</footer>
      </div>
    </div>
  )
}   



export default App;
