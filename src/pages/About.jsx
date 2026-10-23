import React from 'react'
import PrincipalMessage from '../components/aboutus/PrincipalMessage'
import WelcometoOurSchool from '../components/aboutus/WelcometoOurSchool'
import AboutOurSchool from '../components/aboutus/AboutOurSchool'
import SchoolSpecialties from '../components/aboutus/SchoolSpecialties'
import Banner from '../components/aboutus/Banner'
import ContactForm from '../components/aboutus/Contactfrom'


const About = () => {
  return (
    <div>
      <PrincipalMessage/> 
      <WelcometoOurSchool/>
      <AboutOurSchool/>
      <SchoolSpecialties/>
      <Banner/>
      <ContactForm/>
    </div>
  )
}

export default About
