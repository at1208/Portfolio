import React from 'react';

const Routine = () => {
  return <div className='col-lg-3 shadow container   text-center u1 o2'>
                  <img className='     i1' src='routine.gif' alt=''/>
                  <div className='container text-center  k1'>
                   <h1 className='v1'>Routine</h1>
                     <hr />

                     <div className='container'>
                         <span  className='container shadow col-xm l1'>
                          <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                          First Released
                         </span>
                         <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
                         16 Feb 2019
                          </span>
                            <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Routine'>https://github.com/at1208/Routine</a></div>
                     </div>

                     <div className='r11 col'>
                     <h6>Technologies Used</h6>
                     <span className='shadow container r101 '> Html</span>
                     <span className='shadow container r101 '> Css</span>

                     </div>


                  </div>
                </div>

}
export default Routine;
