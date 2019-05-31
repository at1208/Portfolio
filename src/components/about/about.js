import React from 'react';
import './about.css'

const About = () => {
  return <div className='container-fluid'>
         <div className='container-fluid row col-lg-12'>

         <div className="h1 col-lg-2 ">
         <img className="h3 shadow card-img-top" src="aman.jpg"  alt='' />

       </div>

         <div className='h2 col-lg-7 card shadow '>

               <div className="progress h7 h5">
                <h1 className='h6 text-center'>Html</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '80%'}} ariaValuenow="80" ariaValuemin="0" ariaaluemax="100">80%</div>
               </div>


            <div className="progress h5">
             <h1 className='h6 text-center'>Css</h1><div className="progress-bar bg-info rounded" role="progressbar" style={{width: '60%'}} ariaValuenow="60" ariaValuemin="0" ariaaluemax="100">60%</div>
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

         <div className='container-fluid float-left h9 col-lg-5'>

         <div className='card shadow text-center h10 '>

                <p className='h12'>Aman Kumar Tiwari</p>

                <p>I'm a Second year undergraduate student <br /> in Computer Science Engineering</p>
                <li>Delhi, India</li>
               <h1 className='h13'>Who is this Guy ?</h1>
         </div>

         </div>
         </div>
}
export default About;
