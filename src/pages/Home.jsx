import React from 'react'
import WelcometoGurudevSchool from '../components/Home/WelcometoGurudevSchool'
import OurCommitmenttoExcellence from '../components/Home/OurCommitmenttoExcellence'
import QualityEducationServices from '../components/Home/QualityEducationServices'
import VibrantMoments from '../components/Home/VibrantMoments'
import GetinTouch from '../components/Home/GetinTouch'
import Videogrid from '../components/Home/Videogrid'

const Home = () => {
  return (
    <div>
      <WelcometoGurudevSchool/>
      <OurCommitmenttoExcellence/>
      <QualityEducationServices/>
      <VibrantMoments />
      <GetinTouch/>
      <Videogrid/>
    </div>
  )
}

export default Home
