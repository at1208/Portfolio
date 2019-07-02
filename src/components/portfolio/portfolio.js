import React from 'react';
import './portfolio.css'

const About = () => {
  return <div className='container-fluid' >
         <div className='row justify-content-center '>

              <div className='col-lg-3 shadow container text-center u1'>
                <img className='i1' src='chillax.png' alt=''/>
               <div className='container text-center shadow k1'>
                  <h1 className='v1' >Chillax</h1>
                  <hr />
                </div>
              </div>
              <div className='col-lg-3 shadow container  text-center u1'>
                <img className='   i1' src='searchbar.png' alt=''/>
                <div className='container text-center shadow k1'>
                 <h1 className='v1'>SearchBar</h1>
                   <hr />
                </div>
              </div>
              <div className='col-lg-3 shadow container  text-center u1'>
                <img className='    i1' src='shopnow.png' alt=''/>
                <div className='container text-center shadow k1'>
                <h1 className='v1'>Shopping</h1>
                  <hr />
                </div>
              </div>
              <div className='col-lg-3 shadow container   text-center u1'>
                <img className='      i1' src='changelang.png' alt=''/>
                <div className='container text-center shadow k1'>
                 <h1 className='v1'>Change Lang</h1>
                   <hr />
                </div>
              </div>
              <div className='col-lg-3 shadow container   text-center u1'>
                <img className='     i1' src='winsum.png' alt=''/>
                <div className='container text-center shadow k1'>
                <h1 className='v1'>Season</h1>
                  <hr />
                </div>
              </div>

              <div className='col-lg-3  shadow container  text-center u1'>
                <img className='    i1' src='weather.png' alt=''/>
                <div className='container text-center shadow k1'>
                  <h1 className='v1'>Weather</h1>
                    <hr />
                </div>
              </div>
         </div>
         </div>
}
export default About;
