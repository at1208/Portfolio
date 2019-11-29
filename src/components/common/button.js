import React from 'react';
import './button.css'
 
const Button = (props) => {
  return <div className=''>
      <button className='r1 btn btn-sm btn-outline-primary'> {props.name} </button>
         </div>
}
export default Button;
