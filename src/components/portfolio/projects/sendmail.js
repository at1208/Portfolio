import React from 'react';


const SendMail = () => {
  return    <div className=' card shadow container text-center u1 '>
      <img className='i1 card' src='sendmail.gif' alt=''/>
     <div className='container text-center '>
        <h1 className='v1' >Send Mail</h1>
        <hr />

            <a  href='https://sendymail.netlify.com/' className='shadow p2 '>View Live</a>

       <div  className='l3'>
           <span  className='container  l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' ' }}></i>
            First Released
           </span>
           <span  className='container     l1' style={{  fontWeight:'bold' }}>
           01 Nov 2019
           </span>
          <div className='container   l2 n1'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/sendMail'>https://github.com/at1208/sendMail</a></div>
       </div>
   <div className='r11 col'>
   <h6>Technologies Used</h6>
   <span className='shadow container r100 '> React</span>
   <span className='shadow container r100'> NodeJS</span>
   <span className='shadow container r100'> SendGrid</span>
   <span className='shadow container r100'> Bootstrap</span>
   <span className='shadow container r100'> Css</span>
   <span className='shadow container r100'> Ant Design</span>

   </div>

      </div>
    </div>

}
export default SendMail;
