import React from 'react';

const DailyNews = () => {
  return   <div className='col-lg-3 shadow container text-center u1 o3'>
      <img className='i1' src='dailynews.gif' alt=''/>
     <div className='container text-center k1'>
        <h1 className='v1' >DailyNews</h1>
        <hr />

       <div className='container'>
           <span  className='container shadow l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' ' }}></i>
            First Released
           </span>
           <span  className='container shadow   l1' style={{  fontWeight:'bold' }}>
           21 March 2019
           </span>
          <div className='container shadow l2 n1'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/DailyNews'>https://github.com/at1208/DailyNews</a></div>
       </div>
   <div className='r11 col'>
   <h6>Technologies Used</h6>
   <span className='shadow container r102'> Newsapi.org Google-Api</span>
   <span className='shadow container r102 '> React Native</span>



   </div>

      </div>
    </div>
}
export default DailyNews;
