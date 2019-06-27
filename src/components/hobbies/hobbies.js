import React from 'react';
import './hobbies.css'

const About = () => {
  return <div className='container shadow card'>
         <div className='row'>

          <div className='container card shadow g1 col-lg'>
            <img className='img-card-top g2' src='music.jpg' alt='' />
            <h1 className='card-body text-center' >Music</h1>
          </div>

         

          <div className='container card shadow g1 col-lg'>
          <img className='img-card-top g2' src='book_reading.jpg' alt='' />
            <h1 className='card-body text-center' >Book Reading</h1>
          </div>

          <div className='container card shadow g1 col-lg'>
          <img className='img-card-top g2' src='travelling.jpg' alt='' />
            <h1 className='card-body text-center' >Travelling</h1>
          </div>

       </div>
         </div>
}
export default About;
