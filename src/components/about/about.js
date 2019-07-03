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

            <div className='container justify-content-center text-center shadow  v11'>

              <h1 className='v12'>Who is this Guy</h1>
                  <div className='container'>
                <a href='https://github.com/at1208'><Github /></a>
                <a href='https://www.linkedin.com/in/aman-tiwari-767a09172/'> <Linkedin/> </a>
                  <Facebook />
                  </div>
             <br />
                     <div className='container'>
                        <p>I'm a 2nd year undergraduate engineering student</p>

                     </div>

                     <div className='container c1'>
            <i className='fa fa-university float-left'style={{fontSize:'25px'}} ></i>
            <h6 style={{fontSize:'13px'}} >BTech, Computer Science<h6 style={{fontSize:'11px'}} >2018-2022</h6></h6>
            <h6 className='' style={{fontSize:'13px'}}>New Delhi, India   <img src='india.png' className='m11' alt=''/></h6>
                     </div>


            </div>




         <div className='container shadow j1 v13'>



               <div className="progress h5 ">
                  <div className="progress-bar t1 rounded " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Html</h1>80%</span></div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar t1 rounded " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Css</h1> 60%</span></div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar t1 rounded " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Bootstrap</h1> 70%</span></div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar t1 rounded " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >JavaScript</h1>60%</span> </div>
               </div>

               <div className="progress  h5">
                 <div className="progress-bar t1 rounded " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >React</h1>80%</span> </div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar t1 rounded " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Redux</h1>80%</span> </div>
               </div>


               <div className="progress h5">
                   <div className="progress-bar t1 rounded" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Node.Js</h1>60%</span> </div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar t1 rounded " role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Express.Js</h1>50%</span></div>
               </div>

               <div className="progress h5 ">
                  <div className="progress-bar t1 rounded " role="progressbar" style={{width: '40%'}} ariaValuenow="40" ariaValuemin="0" ariaaluemax="100"> <span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >MongoDB</h1>40%</span> </div>
              </div>

         </div>











         </div>
}
export default About;
