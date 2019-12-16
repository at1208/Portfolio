import React from 'react';


const Calculator = () => {
  return     <div className='  card  shadow container  text-center u1 '>
                                <img className='  card   i1' src='calculator.gif' alt=''/>
                                <div className='container text-center    '>
                                  <h1 className='v1'>Calculator</h1>
                                    <hr />

                                     <a  href='https://calcyy.netlify.com'  className='shadow p2 '>View Live</a>

                                    <div className='l3'>
                                        <span  className='container   col-xm l1'>
                                         <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                                         First Released
                                        </span>
                                        <span  className='container   col-xm l1' style={{  fontWeight:'bold' }}>
                                        2 Oct 2019
                                         </span>
                                           <div className='container   n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Calculator'>https://github.com/at1208/Calculator</a></div>
                                    </div>

                                    <div className='r11 col'>
                                    <h6>Technologies Used</h6>
                                    <span className='shadow container r108 '> React</span>
                                    <span className='shadow container r108'> Css</span>
                                    <span className='shadow container r108'> Bootstrap</span>

                                    </div>


                                </div>
                              </div>

}
export default Calculator;
