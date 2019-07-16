import React from 'react';

const Chillax = () => {
  return   <div className='  shadow container text-center u1 '>
      <img className='i1' src=' ' alt=''/>
     <div className='container text-center '>
        <h1 className='v1' >Portfolio</h1>
        <hr />

            <a  href='https://amantiwari.me' className='shadow p3 '>Watching</a>

       <div  >
           <span  className='container shadow l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px' }}></i>
            First Released
           </span>
           <span  className='container shadow   l1' style={{  fontWeight:'bold' }}>
           22 May 2019
           </span>
          <div className='container shadow l2 n1'><i className='fa fa-github' style={{ fontSize: '14px', marginRight:'2px'}}/>Private Repository</div>
       </div>
   <div className='r11 col'>
   <h6>Technologies Used</h6>
   <span className='shadow container r102 '> React</span>
   <span className='shadow container r102'> Bootstrap</span>
   <span className='shadow container r102'> Css</span>

   </div>

      </div>
    </div>
}
export default Chillax;
