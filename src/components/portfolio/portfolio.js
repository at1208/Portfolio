import React from 'react';
import './portfolio.css'
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


const About = () => {
  return <div className='container-fluid' >
         <div className='row justify-content-center'>
        <Starwar />
        <RailTrack />
        <TechStack />
        <Shopping />
        <Chillax />
        <ChangeLang />
        <Songs />
        <SearchBar />
        <Season />
        <WeatherFinder />
        <Bytebroo />



         </div>
         </div>
}
export default About;
