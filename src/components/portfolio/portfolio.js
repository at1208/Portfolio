import React from 'react';
import './portfolio.css'

const About = () => {
  return <div className='container-fluid' >
         <div className='row'>
              <div className='col-lg-3 card  container  u1'>
                <img className='container card-img-top i1' src='chillax.png' alt=''/>
              </div>
              <div className='col-lg-3  card container u1'>
                <img className='container  card-img-top i1' src='searchbar.png' alt=''/>
              </div>
              <div className='col-lg-3 card container u1'>
                <img className='container  card-img-top i1' src='shopnow.png' alt=''/>
              </div>
              <div className='col-lg-3 card container-fluid u1'>
                <img className='container  card-img-top i1' src='changelang.png' alt=''/>
              </div>
              <div className='col-lg-3 card container-fluid u1'>
                <img className='container  card-img-top i1' src='winsum.png' alt=''/>
              </div>
              <div className='col-lg-3 card container-fluid u1'>
                <img className='container  card-img-top i1' src='dailynews.png' alt=''/>
              </div>
              <div className='col-lg-3  card container-fluid  u1'>
                <img className='container card-img-top i1' src='weather.png' alt=''/>
              </div>
         </div>
         </div>
}
export default About;
