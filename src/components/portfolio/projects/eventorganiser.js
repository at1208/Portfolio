import React from 'react';


const EventOrganiser = () => {
  return   <div className='  shadow container   text-center u1 '>
      <img className='     i1' src='eventorganiser.gif' alt=''/>
      <div className='container text-center   '>
      <h1 className='v1'>Event Organiser</h1>
        <hr />

        <a   href='https://eventorg.netlify.com' className='shadow p2 '>View Live</a>

        <div  >
            <span  className='container shadow col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
            21 May 2019
             </span>
               <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/EventOrganiser'>https://github.com/at1208/EventOrg</a></div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>
        <span className='shadow container r105 '> React</span>
          <span className='shadow container r105'>MongoDB</span>
        <span className='shadow container r105'> NodeJS</span>

              <span className='shadow container r105'> Bootstrap</span>
                  <span className='shadow container r105'> Css</span>



        </div>


      </div>
    </div>


}
export default EventOrganiser;
