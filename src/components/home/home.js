import React from 'react';
import './home.css'
import Button from '../common/button'
import { Link } from 'react-router-dom'

const App = () => {
  return <div>
              <div className='a2 container-fluid  text-center jumbotron'>
                   <h1 className='a222'>Hello, I'm <span className='a1'>Aman Tiwari</span></h1>
                   <h1 className='a222'>I'm a full stack web developer</h1>
              </div>

           <div className='a3 container-fluid'>
             <div className='row justify-content-center'>
                     <div className=''>
                        <Link to='/about'  ><Button name='About'/></Link>
                     </div>
                     <div className=''>
                        <Link to='/portfolio'><Button name='Portfolio'/></Link>
                     </div>
                     <div className=''>
                        <Link to='/contact'><Button name='Contact'/></Link>
                     </div>
              </div>
            </div>
         </div>
}
export default App;
