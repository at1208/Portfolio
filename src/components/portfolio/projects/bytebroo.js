import React from 'react';


const Bytebroo = () => {
  return  <div className=' shadow container  text-center u1 '>
      <img className='    i1' src=' ' alt=''/>
      <div className='container text-center '>
        <h1 className='v1'>Bytebroo</h1>
          <hr />

          <div >
              <span  className='container shadow col-xm l1'>
               <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
               First Released
              </span>
              <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
              31 Jan 2019
               </span>
                 <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/bytebroo.com'>https://github.com/at1208/bytebroo.com</a></div>
          </div>

          <div className='r11 col'>
          <h6>Technologies Used</h6>
          <span className='shadow container r100 '>Express</span>
          <span className='shadow container r100'> MongoDB</span>
          <span className='shadow container r100'> PassportJS</span>
          <span className='shadow container r100'> Html</span>
          <span className='shadow container r100'> Css</span>
          <span className='shadow container r100'> Bootstrap</span>
          </div>

      </div>
    </div>


}
export default Bytebroo;
