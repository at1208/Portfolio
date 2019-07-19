import React from 'react';


const MusicAlbums = () => {
  return <div className='  shadow container   text-center u1 '>
      <img className='     i1' src='musicalbums.gif' alt=''/>
      <div className='container text-center  '>
      <h1 className='v1'>MusicAlbums</h1>
        <hr />

        <div  >
            <span  className='container shadow col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
            19 Mar 2019
             </span>
               <div className='container shadow n1 l2'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/Albums-ReactNative'>https://github.com/at1208/Albums-ReactNative</a></div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>

        <span className='shadow container r105 '> React Native</span>
        <span className='shadow container r105'> HerokuHostedApi</span>



        </div>


      </div>
    </div>
 

}
export default MusicAlbums;
