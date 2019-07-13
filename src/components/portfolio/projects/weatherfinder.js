import React from 'react';

const WeatherFinder = () => {
  return  <div className='col-lg-3  shadow container  text-center u1 o6'>
                  <img className=' i1' src='weatherfinder.gif' alt=''/>
                  <div className='container text-center   k1'>
                    <h1 className='v1'>Weather Finder</h1>
                      <hr />


                      <div className='shadow p2 '>

                      </div>
                      <div className='container'>
                          <span  className='container shadow col-xm l1'>
                           <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                           First Released
                          </span>
                          <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }} >
                          13 Feb 2019
                           </span>
                             <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Weather-finder'>https://github.com/at1208/Weather-finder</a></div>
                      </div>

                      <div className='r11 col'>
                      <h6>Technologies Used</h6>
                      <span className='shadow container r105'> React</span>
                      <span className='shadow container r105'> Bootstrap</span>
                      <span className='shadow container r105'> Css</span>
                      <span className='shadow container r105'> OpenWeatherMap Api</span>


                      </div>

                  </div>
                </div>
}
export default WeatherFinder;
