import React from 'react';
import './about.css'

import Github from './github';
import Linkedin from './linkedin'
import Quora from './quora'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


const About = () => {
  return <div>

 <Slide left>
        <div className='container-fluid text-center col-md-5 float-left ab1'>
        <img className="h3 shadow " src="aman.jpg"  alt='' />
        <div className='container justify-content-center text-center shadow v11 '>
           <h1 className='v12'>Who's this Guy ?</h1>
           <div className='container'>
                  <a href='https://github.com/at1208'><Github /></a>
                  <a href='https://www.linkedin.com/in/aman-tiwari-767a09172/'> <Linkedin /> </a>
                  <a href='https://www.quora.com/profile/Aman-Tiwari-85'> <Quora /> </a>

           </div>
           <div className='container'>
               <p className='c100'>I'm a Senior undergraduate engineering student</p>
               <div className='container c1'>

                  <h6 className='c100' ><i className='fa fa-university   c1000'style={{fontSize:'25px', marginRight:"0px"}} ></i>BTech, Computer Science<h6  className='c101' >    </h6></h6>
                  <img src='india.png' className='m11 float-left' alt=''/>
                  <h6 className='c100'  >New Delhi, India </h6>
               </div>
           </div>
        </div>
        </div>
 </Slide>

 <Slide left>
 <div className='container-fluid'>
         <div className=' shadow j1 j100 col-md-6 float-right'>

               <div className="progress h5 ">
                <Slide left>
                  <div className="progress-bar  " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Html</span></h1><span className='f100'>80%</span></span></div>
                    </Slide>
               </div>


               <div className="progress h5">
                 <Slide left>
                   <div className="progress-bar  " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Css</span></h1><span className='f100'>70%</span></span></div>
                        </Slide>
               </div>

               <div className="progress h5">
                <Slide left>
                   <div className="progress-bar  " role="progressbar" style={{width: '65%'}} ariaValuenow="65" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Bootstrap</span></h1><span className='f100'>65%</span></span></div>
                </Slide>
               </div>

               <div className="progress h5">
               <Slide left>
                 <div className="progress-bar  " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>JavaScript</span></h1><span className='f100'>70%</span></span> </div>
                 </Slide>
               </div>

               <div className="progress  h5">
               <Slide left>
                 <div className="progress-bar   " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>React</span></h1><span className='f100'>80%</span></span> </div>
               </Slide>
               </div>

               <div className="progress h5 ">
               <Slide left>
                  <div className="progress-bar  " role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"> <span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Flutter</span></h1><span className='f100'>50%</span></span> </div>
              </Slide>
              </div>


               <div className="progress h5">
               <Slide left>
                 <div className="progress-bar " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>Redux</span></h1><span className='f100'>70%</span></span> </div>
              </Slide>
               </div>


               <div className="progress h5">
               <Slide left>
                   <div className="progress-bar  " role="progressbar" style={{width: '65%'}} ariaValuenow="65" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>NodeJS</span></h1><span className='f100'>65%</span></span> </div>
               </Slide>
                </div>

               <div className="progress h5">
               <Slide left>
                   <div className="progress-bar  " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:' 6px'}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>ExpressJS</span></h1><span className='f100'>70%</span></span></div>
               </Slide>
               </div>

               <div className="progress h5 ">
               <Slide left>
                  <div className="progress-bar  " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"> <span style={{ fontSize:'14px' ,marginTop:'6px '}} ><h1 className='float-left f1'style={{ fontSize:'14px'}} ><span className='f101'>MongoDB</span></h1><span className='f100'>60%</span></span> </div>
              </Slide>
              </div>







</div>
         </div>

 </Slide>









         </div>
}
export default About;
