import React from 'react';


const Season = () => {
  return   <div className=' card  shadow container   text-center u1 '>
      <img className='   card   i1' src='season.gif' alt=''/>
      <div className='container text-center   '>
      <h1 className='v1'>Season</h1>
        <hr />

        <a   href='https://winsum.netlify.com' className='shadow p2 '>View Live</a>

        <div  className='l3'>
            <span  className='container   col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container   col-xm l1' style={{  fontWeight:'bold' }}>
            18 May 2019
             </span>
               <div className='container   n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Geolocation'>https://github.com/at1208/Geolocation</a></div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>
        <span className='shadow container r105 '> React</span>
        <span className='shadow container r105'> Css</span>
        <span className='shadow container r105'> Bootstrap</span>
        <span className='shadow container r105'> Geolocation</span>


        </div>


      </div>
    </div>


}
export default Season;
