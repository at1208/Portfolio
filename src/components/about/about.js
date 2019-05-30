import React from 'react';
import './about.css'

const About = () => {
  return <div className='container-fluid'>
         <div className='container-fluid row col-lg-12'>
         <div class="h1 col-lg-2">
         <img className="h3 shadow card-img-top" src="aman.jpg"  alt='' />

       </div>

         <div className='h2 col-lg-6 card shadow '>

               <div className="progress h7 h5">
                <h1 className='h6'>Html</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100">70%</div>
               </div>


            <div className="progress h5">
             <h1 className='h6'>Css</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">60%</div>
            </div>



            <div className="progress h5">
             <h1 className='h6'>Javascript</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">  60%</div>
            </div>

            <div className="progress h5">
             <h1 className='h6'>React</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100"> 80%</div>
            </div>



            <div className="progress h5">
             <h1 className='h6'>Redux</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"> 50%</div>
             </div>


             <div className="progress h5">
              <h1 className='h6'>Node</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">  60%</div>
            </div>


            <div className="progress h5">
             <h1 className='h6'>Express</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100"> 50%</div>
            </div>


            <div className="progress h5">
             <h1 className='h6'>MongoDB</h1><div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} ariaValuenow="20" ariaValuemin="0" ariaaluemax="100">  20%</div>
            </div>

         </div>

         </div>
         </div>
}
export default About;
