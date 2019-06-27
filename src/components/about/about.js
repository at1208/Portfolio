import React from 'react';
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return <div className='container-fluid'>


            <div className='container text-center'>

                    <img className="h3 shadow " src="aman.jpg"  alt='' />

                       <div className='container-fluid card shadow '>

                         <h1 className='r3'>Who is this Guy</h1>
                             <div className='container'>
                                 <a href='www.linkedin.com'><i class="fa fa-github s1" style={{ fontSize:'25px',color:'#211f1f'}}></i></a>
                                 <i class="fa fa-linkedin-square s1" style={{ fontSize:'25px',color:'#0077B5'}}></i>
                                 <i class="fa fa-facebook-official s1" style={{ fontSize:'25px', color:'#3b5998'}} ></i>
                             </div>
                        <br />
                                <div className='container'>
                                   <p>I'm a 2nd year undergraduate engineering student </p>

                                </div>

                                <div className='container c1'>
                    <i className='fa fa-university float-left'style={{fontSize:'25px'}} ></i>
                    <h6 style={{fontSize:'13px'}} >BTech, Computer Science<h6 style={{fontSize:'11px'}} >2018-2022</h6></h6>
                                </div>
                      </div>
            </div>






         <div className='container card shadow j1'>



               <div className="progress h5">
                  <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Html</h1>80%</span></div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Css</h1> 60%</span></div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Bootstrap</h1> 70%</span></div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >JavaScript</h1>60%</span> </div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >React</h1>80%</span> </div>
               </div>

               <div className="progress h5">
                 <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Redux</h1>50%</span> </div>
               </div>


               <div className="progress h5">
                   <div className="progress-bar bg-info rounded" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Node.Js</h1>60%</span> </div>
               </div>

               <div className="progress h5">
                   <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"><span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >Express.Js</h1>50%</span></div>
               </div>

               <div className="progress h5">
                  <div className="progress-bar bg-info rounded " role="progressbar" style={{width: '40%'}} ariaValuenow="40" ariaValuemin="0" ariaaluemax="100"> <span style={{ fontSize:'14px' ,marginTop:'10px'}} ><h1 className='float-left f1'style={{ fontSize:'15px'}} >MongoDB</h1>40%</span> </div>
              </div>

         </div>











         </div>
}
export default About;
