import React from 'react';
import Slide from 'react-reveal/Slide';

const Starwar = () => {
  return   <Slide left>
  <div className='  shadow container text-center u1 '>
      <img className='i1' src='starwar.gif' alt=''/>
     <div className='container text-center '>
        <h1 className='v1' >Starwars</h1>
        <hr />

            <a  href='https://starrwar.netlify.com' className='shadow p2 '>View Live</a>

       <div  >
           <span  className='container shadow l1'>
            <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' ' }}></i>
            First Released
           </span>
           <span  className='container shadow   l1' style={{  fontWeight:'bold' }}>
           13 Jul 2019
           </span>
          <div className='container shadow l2 n1'><i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/StarWar'>https://github.com/at1208/StarWar</a></div>
       </div>
   <div className='r11 col'>
   <h6>Technologies Used</h6>
   <span className='shadow container r100 '> React</span>
   <span className='shadow container r100'> Swapi.co Api</span>
   <span className='shadow container r100'> Bootstrap</span>
   <span className='shadow container r100'> Css</span>

   </div>

      </div>
    </div>
      </Slide>
}
export default Starwar;
