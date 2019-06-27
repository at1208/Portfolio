import React from 'react';
import './about.css'

const About = () => {
  return <div className='container-fluid'>


            <div className='container text-center'>

                    <img className="h3 shadow " src="aman.jpg"  alt='' />

                       <div className='container card shadow r2'>

                          <h1>Who is this Guy</h1>
                             <div className='container'>
                                 <i class="fa fa-facebook-official s1" style={{ fontSize:'25px', color:'#3b5998'}} ></i>
                                 <i class="fa fa-linkedin-square s1" style={{ fontSize:'25px',color:'#0077B5'}}></i>
                                 <i class="fa fa-github s1" style={{ fontSize:'25px',color:'#211f1f'}}></i>
                             </div>
                          <li>I'm a 2nd year undergraduate student in Computer Science Engineering</li>

                       </div>
            </div>






         <div className='h2 col-lg-7 card shadow '>

               <div className="progress h7 h5">
                <h1 className='h6 text-center'>Html</h1>
                  <div className="progress-bar bg-info rounded" role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100">80%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>Css</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">60%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>Bootstrap</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100">  70%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>Javascript</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">  60%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>React</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"> 80%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>Redux</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"> 50%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>ReactNative</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '20%'}} ariaValuenow="20" ariaValuemin="0" ariaaluemax="100"> 20%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>Node</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">  60%</div>
               </div>

               <div className="progress h5">
                  <h1 className='h6 text-center'>Express</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"> 50%</div>
               </div>

               <div className="progress h5">
                 <h1 className='h6 text-center'>MongoDB</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '20%'}} ariaValuenow="20" ariaValuemin="0" ariaaluemax="100">  20%</div>
              </div>

         </div>











         </div>
}
export default About;
