import React from 'react';


const WeatherFinder = () => {
  return  <div className=' card  shadow container  text-center u1 '>
                  <img className='  card i1' src='weatherfinder.gif' alt=''/>
                  <div className='container text-center    '>
                    <h1 className='v1'>Weather Finder</h1>
                      <hr />

          <a  href='https://weatherfinderr.netlify.com/' className='shadow p2 '>View Live</a>
                      <div className='l3'>
                          <span  className='container   col-xm l1'>
                           <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                           First Released
                          </span>
                          <span  className='container  col-xm l1' style={{  fontWeight:'bold' }} >
                          13 Feb 2019
                           </span>
                             <div className='container   n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Weather-finder'>https://github.com/at1208/Weather</a></div>
                      </div>

                      <div className='r11 col'>
                      <h6>Technologies Used</h6>
                      <span className='shadow container r103'> React</span>
                      <span className='shadow container r103'> Bootstrap</span>
                      <span className='shadow container r103'> Css</span>
                      <span className='shadow container r103'> OpenWeatherMap Api</span>


                      </div>

                  </div>
                </div>

}
export default WeatherFinder;
