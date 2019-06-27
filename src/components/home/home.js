import React from 'react';
import './home.css'
import Button from '../common/button'
import { Link } from 'react-router-dom'

const App = () => {
  return <div className=' '>
           <div className='a2 container-fluid card text-center jumbotron'>
             <h1>Hello, I'm <span className='a1'>Aman Tiwari</span></h1>
             <h1>I'm a full stack web developer</h1>
           </div>
           <div className='a3 conatiner-fluid'>
           <div className='row col-lg-12 justify-content-center'>
           <div className='col-lg-1'>
           <Link to='/'><Button name='Home'/></Link>
           </div>
           <div className='col-lg-1'>
          <Link to='/about'><Button name='About'/></Link>
           </div>
           <div className='col-lg-1'>
          <Link to='/portfolio'><Button name='Portfolio'/></Link>
           </div>
           <div className='col-lg-1'>
          <Link to='/hobbies'> <Button name='Hobbies'/></Link>
           </div>
           <div className='col-lg-1'>
          <Link to='/contact'><Button name='Contact'/></Link>
           </div>
           </div>
           </div>
         </div>
}
export default App;
