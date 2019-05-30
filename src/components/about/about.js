import React from 'react';
import './about.css'

const About = () => {
  return <div className='container-fluid'>
         <div className='container-fluid row col-lg-12'>
         <div class="h1 col-lg-2">
         <img className="h3 shadow card-img-top" src="aman.jpg"  alt='' />
       </div>

         <div className='h2 col-lg-6 card '>

            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100">html 70%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">css 60%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '70%'}} ariaValuenow="70" ariaValuemin="0" ariaaluemax="100">bootstrap 70%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100">React 80%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">Redux 60%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100">NodeJS 50%</div>
             </div>
             <div className="progress h5">
              <div className="progress-bar" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">javascript 60%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '50%'}} ariaValuenow="50" ariaValuemin="0" ariaaluemax="100">ExpressJS 50%</div>
            </div>
            <div className="progress h5">
             <div className="progress-bar" role="progressbar" style={{width: '30%'}} ariaValuenow="30" ariaValuemin="0" ariaaluemax="100">MongoDB 30%</div>
            </div>

         </div>

         </div>
         </div>
}
export default About;
