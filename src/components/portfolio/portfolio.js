import React from 'react';
import './portfolio.css'
import Slide from 'react-reveal/Slide';

import RailTrack from './projects/railtrack'
import Chillax from './projects/chillax'
import Shopping from './projects/shopping'
import SearchBar from './projects/searchbar'
import ChangeLang from './projects/changelang'
import Season from './projects/season'
import WeatherFinder from './projects/weatherfinder'
import Songs from './projects/songs'
import Bytebroo from './projects/bytebroo'
import TechStack from './projects/techstack'
import Starwar from './projects/starwar'
import DailyNews from './projects/dailynews'
import Routine from './projects/routine'
import MusicAlbums from './projects/musicalbums'
import Portfolio from './projects/portfolio'
import EventOrganiser from './projects/eventorganiser'
import MyTutor247 from './projects/mytutor247'
import Calculator from './projects/calculator'
import CustomerManager from './projects/customermanager'
import SendSMS from './projects/sendSMS'
import SendMail from './projects/sendmail';
import InstagramUI from './projects/instagramUI'

import Button from '../common/button'
import { Link } from 'react-router-dom'

const About = () => {

  return   <div>
             <div className='a3 container-fluid'>
               <div className='row justify-content-center'>
                       <div className=''>
                          <Link to='/'  ><Button name='About'/></Link>
                       </div>

                       <div className=''>
                          <Link to='/portfolio'><Button name='Portfolio'/></Link>
                       </div>


                       <div className=''>
                          <Link to='/contact'><Button name='Contact'/></Link>
                       </div>

                </div>
              </div>

         <div className='container-fluid xxx' >
                 <h1 className='text-center z11'>PROJECTS</h1>
                      <hr />
         <div className='row justify-content-center'>

         <Slide bottom>
           <SendMail />
         </Slide>


          <Slide bottom>
            <SendSMS />
          </Slide>


         <Slide bottom>
           <CustomerManager />
         </Slide>

         <Slide bottom>
           <Calculator />
         </Slide>


         <Slide bottom>
           <MyTutor247 />
         </Slide>


          <Slide bottom>
            <Starwar />
          </Slide>

          <Slide bottom>
            <RailTrack />
          </Slide>

          <Slide bottom>
            <InstagramUI />
          </Slide>

          <Slide bottom>
            <TechStack />
          </Slide>

          <Slide bottom>
            <Shopping />
          </Slide>

          <Slide bottom>
            <Chillax />
          </Slide>

          <Slide bottom>
            <ChangeLang />
          </Slide>

          <Slide bottom>
            <Portfolio />
          </Slide>

          <Slide bottom>
            <EventOrganiser />
          </Slide>

          <Slide bottom>
            <Songs />
          </Slide>

          <Slide bottom>
            <SearchBar />
          </Slide>

          <Slide bottom>
            <Season />
          </Slide>

          <Slide bottom>
            <DailyNews />
          </Slide>

          <Slide bottom>
            <MusicAlbums />
          </Slide>

          <Slide bottom>
            <Routine />
          </Slide>

          <Slide bottom>
            <WeatherFinder />
          </Slide>

          <Slide bottom>
            <Bytebroo />
          </Slide>

     </div>
         </div>
         </div>
}
export default About;
