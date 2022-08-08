
import './App.css';
import Navbar from './components/navbar/navbar';
import Counter from './components/counter/counter';
import Mercadolibre from './components/MercadoLibre/mercadolibre';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
const handleOnAdd =(quantity)=>
 console.log(`la cantidad agregada es: ${quantity}` )
  
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
      <Counter className="contador" stock={10} onAdd={handleOnAdd}/> 
      </section>
      <div>
<BrowserRouter>
      <Navbar></Navbar>
</BrowserRouter>
      <main className='main'>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting='Listado de productos'/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Filtrado de productos'/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </main>
<footer className='footer'>
<h3>quillcat Technology</h3>
<p>Juramento 1544 CABA</p>
<p>movil: 11-58974455</p>
<p>quillcat@gmial.com</p>
</footer>
      </div>
    </div>
  )
}   



export default App;
