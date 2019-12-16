import React from 'react';


const Chillax = () => {
  return  <div className=' card  shadow container text-center u1 '>
      <img className=' card i1' src='chillax.gif' alt=''/>
     <div className='container text-center '>
        <h1 className='v1' >Chillax</h1>
        <hr />

            <a  href='https://chillax.netlify.com' className='shadow p2 '>View Live</a>

       <div  className='l3'>
           <span  className='container   l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px' }}></i>
            First Released
           </span>
           <span  className='container     l1' style={{  fontWeight:'bold' }}>
           13 May 2019
           </span>
          <div className='container   l2 n1'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Chillax'>https://github.com/at1208/Chillax</a></div>
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
