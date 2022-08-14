
import Cartwidget from '../../cartwidget/cartwidget';
import './navbar.css';
import {Link} from 'react-router-dom'


const Navbar = ()=>{
   
    return(
        <nav className="Navbar">
            <div className='navbutton'>
            <div className='celu'>
            <Link to='/' className="button">Home</Link>
            </div> 
             <div className='celu'>
            <Link to='/category/celular' className="button">Celulares</Link>
            </div>  
            <div className='celu'>
            <Link to='/category/tablet'className="button"  >Tablet</Link>
                </div>  
                <div className='celu'>
                <Link className="button" to='/category/notebook'>Notebook</Link>
                </div>  
            
                 <Cartwidget  />
            </div>
        </nav>
    )
}
export default Navbar