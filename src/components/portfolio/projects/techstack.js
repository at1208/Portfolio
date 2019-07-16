import React from 'react';

const TechStack = () => {
  return   <div className='   shadow container  text-center u1 '>
                                <img className='    i1' src='techstack.gif' alt=''/>
                                <div className='container text-center    '>
                                  <h1 className='v1'>Techstack</h1>
                                    <hr />

                                     <a  href='https://techstack.netlify.com'  className='shadow p2 '>Preview</a>

                                    <div>
                                        <span  className='container shadow col-xm l1'>
                                         <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                                         First Released
                                        </span>
                                        <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
                                        4 Jun 2019
                                         </span>
                                           <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Techstack'>https://github.com/at1208/Techstack</a></div>
                                    </div>

                                    <div className='r11 col'>
                                    <h6>Technologies Used</h6>
                                    <span className='shadow container r108 '> React</span>
                                    <span className='shadow container r108'> Redux</span>
                                    <span className='shadow container r108'> Css</span>
                                    <span className='shadow container r108'> Bootstrap</span>

                                    </div>


                                </div>
                              </div>
}
export default TechStack;
