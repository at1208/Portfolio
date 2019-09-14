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
import MyTutor247 from './projects/mytutor247'


const About = () => {
  return <div className='container-fluid' >
         <div className='row justify-content-center'>

         <Slide left>
           <MyTutor247 />
         </Slide>

          <Slide left>
            <Starwar />
          </Slide>

          <Slide left>
            <RailTrack />
          </Slide>

          <Slide left>
            <TechStack />
          </Slide>

          <Slide left>
            <Shopping />
          </Slide>

          <Slide left>
            <Chillax />
          </Slide>

          <Slide left>
            <ChangeLang />
          </Slide>

          <Slide left>
            <Portfolio />
          </Slide>

          <Slide left>
            <Songs />
          </Slide>

          <Slide left>
            <SearchBar />
          </Slide>

          <Slide left>
            <Season />
          </Slide>

          <Slide left>
            <DailyNews />
          </Slide>

          <Slide left>
            <MusicAlbums />
          </Slide>

          <Slide left>
            <Routine />
          </Slide>

          <Slide left>
            <WeatherFinder />
          </Slide>

          <Slide left>
            <Bytebroo />
          </Slide>


         </div>
         </div>
}
export default About;
