import React from 'react';

const RailTrack = () => {
  return  <div className='col-lg-3  shadow container  text-center u1 o3'>
             <img className='i1' src='indianrailway.gif' alt=''/>
             <div className='container text-center   k1'>
               <h1 className='v1'>RailTrack</h1>
                 <hr />

                 <div className='container'>
                     <span  className='container shadow col-xm l1'>
                      <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                      First Released
                     </span>
                     <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
                     9 Jul 2019
                      </span>
                        <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/IndianRailway'>https://github.com/at1208/IndianRailway</a></div>
                 </div>

                 <div className='r11 col'>
                 <h6>Technologies Used</h6>
                 <span className='shadow container r108 '>React</span>
                 <span className='shadow container r108'>IndianRailApi</span>
                 <span className='shadow container r108'> Css</span>
                 <span className='shadow container r108'> Bootstrap</span>

                 </div>


             </div>
           </div>

}
export default RailTrack;
