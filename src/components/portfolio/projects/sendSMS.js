import React from 'react';


const SendSMS = () => {
  return   <div className='  shadow container   text-center u1 '>
      <img className='     i1' src='sendSMS.gif' alt=''/>
      <div className='container text-center   '>
      <h1 className='v1'>Send SMS</h1>
        <hr />

        <a   href='https://sendy.netlify.com' className='shadow p2 '>View Live</a>

        <div  >
            <span  className='container shadow col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
            29 Oct 2019
             </span>
               <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/sendSMS'>https://github.com/at1208/sendSMS</a></div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>
        <span className='shadow container r105 '> React</span>
        <span className='shadow container r105'> NodeJS</span>
        <span className='shadow container r105'>Twilio</span>
        <span className='shadow container r105 '> CSS</span>
        <span className='shadow container r105 '>Bootstrap</span>

        </div>


      </div>
    </div>


}
export default SendSMS;
