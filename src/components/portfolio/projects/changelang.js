import React from 'react';

const ChangeLang = () => {
  return <div className=' shadow container   text-center u1 '>
                  <img className='     i1' src='changelang.gif' alt=''/>
                  <div className='container text-center '>
                   <h1 className='v1'>Change Lang</h1>
                     <hr />

                      <a  href='https://changelang.netlify.com' className='shadow p2 '>Preview</a>

                     <div  >
                         <span  className='container shadow col-xm l1'>
                          <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                          First Released
                         </span>
                         <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
                         24 May 2019
                          </span>
                            <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/LangSelector'>https://github.com/at1208/LangSelector</a></div>
                     </div>

                     <div className='r11 col'>
                     <h6>Technologies Used</h6>
                     <span className='shadow container r101 '> React</span>
                     <span className='shadow container r101 '> Redux</span>
                     <span className='shadow container r101'> Css</span>
                     <span className='shadow container r101'> Bootstrap</span>

                     </div>


                  </div>
                </div>

}
export default ChangeLang;
