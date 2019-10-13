import React from 'react';


const  CustomerManager = () => {
  return    <div className='  shadow container  text-center u1'>
      <img className='    i1' src='customerman.gif' alt=''/>
      <div className='container text-center  '>
      <h1 className='v1'>Customer Manager</h1>
        <hr />

        <a   href='https://customerman.netlify.com'  className='shadow p2' >View Live</a>

        <div >
            <span  className='container shadow col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
            12 Oct 2019
             </span>
               <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/CustomerManager'>https://github.com/at1208/CustomerMan</a></div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>
        <span className='shadow container r107 '> React</span>
        <span className='shadow container r107 '> Css</span>
        <span className='shadow container r107'> Bootstrap</span>
        <span className='shadow container r107'>MongoDB</span>
        <span className='shadow container r107 '>NodeJS</span>


        </div>

      </div>
    </div>

}
export default CustomerManager;
