import React from 'react';
import './about.css'
import Facebook from './facebook'
import Github from './github';
import Linkedin from './linkedin'
import { Link } from 'react-router-dom'


const About = () => {
  return <div >
            <div className='container-fluid text-center'>
                    <img className="h3 shadow " src="aman.jpg"  alt='' />
            </div>

            <div className='container justify-content-center text-center shadow v11 '>

              <h1 className='v12'>Who's this Guy ?</h1>
                  <div className='container'>
                <a href='https://github.com/at1208'><Github /></a>
                <a href='https://www.linkedin.com/in/aman-tiwari-767a09172/'> <Linkedin/> </a>
                  <Facebook />
                  </div>
             <br />
                     <div className='container'>
                        <p className='c100'>I'm a 2nd year undergraduate engineering student</p>

                     </div>

                     <div className='container c1'>
            <i className='fa fa-university float-left'style={{fontSize:'25px'}} ></i>
            <h6 className='c100' >BTech, Computer Science<h6  className='c101' >2018-2022</h6></h6>
            <h6 className='c100'  >New Delhi, India   <img src='india.png' className='m11' alt=''/></h6>
                     </div>


            </div>




         <div className='container shadow j1 '>



               <div className="progress h5 ">
                  <div className="progress-bar  " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Html</span></h1><span className='f100'>80%</span></span></div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar  " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Css</span></h1><span className='f100'>60%</span></span></div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar  " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Bootstrap</span></h1><span className='f100'>70%</span></span></div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar  " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>JavaScript</span></h1><span className='f100'>60%</span></span> </div>
               </div>

               <div className="progress  h5">
                 <div className="progress-bar   " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>React</span></h1><span className='f100'>80%</span></span> </div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Redux</span></h1><span className='f100'>80%</span></span> </div>
               </div>


               <div className="progress h5">
                   <div className="progress-bar  " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Node.Js</span></h1><span className='f100'>60%</span></span> </div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar  " role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:' 6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Express.Js</span></h1><span className='f100'>50%</span></span></div>
               </div>

               <div className="progress h5 ">
                  <div className="progress-bar  " role="progressbar" style={{width: '40%'}} ariaValuenow="40" ariaValuemin="0" ariaaluemax="100"> <span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>MongoDB</span></h1><span className='f100'>40%</span></span> </div>
              </div>

         </div>











         </div>
}
export default About;
