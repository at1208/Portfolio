import React from 'react';


const InstagramUI = () => {
  return   <div className='  card shadow container   text-center u1 '>
      <img className='  card    i1' src='instagramUI.gif' alt=''/>
      <div className='container text-center   '>
      <h1 className='v1'>InstagramUI</h1>
        <hr />


        <div  className='l3'>
            <span  className='container   col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container   col-xm l1' style={{  fontWeight:'bold' }}>
            21 June 2019
             </span>
               <div className='container   n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/instagramUI'>https://github.com/at1208/instagramUI</a></div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>
        <span className='shadow container r105 '>Flutter</span>
        </div>


      </div>
    </div>


}
export default InstagramUI;
