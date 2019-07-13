import React from 'react';

const Chillax = () => {
  return   <div className='col-lg-3 shadow container text-center u1 o3'>
      <img className='i1' src='chillax.gif' alt=''/>
     <div className='container text-center k1'>
        <h1 className='v1' >Chillax</h1>
        <hr />
          <div className='shadow p2 o3'>
            <a  href='https://chillax.netlify.com'>Preview</a>
          </div>
       <div className='container'>
           <span  className='container shadow l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' ' }}></i>
            First Released
           </span>
           <span  className='container shadow   l1' style={{  fontWeight:'bold' }}>
           13 May 2019
           </span>
          <div className='container shadow l2 n1'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Chillax'>https://github.com/at1208/Chillax</a></div>
       </div>
   <div className='r11 col'>
   <h6>Technologies Used</h6>
   <span className='shadow container r102 '> React</span>
   <span className='shadow container r102'> Youtube Api</span>
   <span className='shadow container r102'> Css</span>

   </div>

      </div>
    </div>
}
export default Chillax;
