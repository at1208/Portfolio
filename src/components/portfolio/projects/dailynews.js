import React from 'react';


const DailyNews = () => {
  return <div className=' card  shadow container text-center u1 '>
      <img className=' card i1' src='dailynews.gif' alt=''/>
     <div className='container text-center '>
        <h1 className='v1' >DailyNews</h1>
        <hr />

       <div  className='l3'>
           <span  className='container   l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px' }}></i>
            First Released
           </span>
           <span  className='container     l1' style={{  fontWeight:'bold' }}>
           21 March 2019
           </span>
          <div className='container   l2 n1'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/DailyNews'>https://github.com/at1208/DailyNews</a></div>
       </div>
   <div className='r11 col'>
   <h6>Technologies Used</h6>
   <span className='shadow container r102'> Newsapi.org GoogleApi</span>
   <span className='shadow container r102 '> React Native</span>



   </div>

      </div>
    </div>

}
export default DailyNews;
