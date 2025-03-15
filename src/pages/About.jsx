import React from 'react'
import Navbar from '../components/ReusableComp/Navbar'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/About/WhoWeAre'
import OurMission from '../components/About/OurMission'
import LogisticsServices from '../components/About/LogisticsServices'
import DispatchTeam from '../components/About/DispatchTeam'
import Footer from '../components/ReusableComp/Footer'


export default function About() {
    

    return (
        <>
            <Navbar />
            <Header id="about" title="About Us" text="About Our Logistics" /> 
            <WhoWeAre />
            <OurMission />
            <LogisticsServices />
            <DispatchTeam />
            <Footer />
        </>
    )
}
