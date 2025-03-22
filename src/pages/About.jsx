import Navbar from '../components/ReusableComp/Navbar'
import Header from '../components/Home/Header'
import WhoWeAre from '../components/About/WhoWeAre'
import OurMission from '../components/About/OurMission'
import LogisticsServices from '../components/About/LogisticsServices'
import DispatchTeam from '../components/About/DispatchTeam'
import Footer from '../components/ReusableComp/Footer'
import { useEffect } from 'react'


export default function About() {
        useEffect(() => {
          window.scrollTo(0, 0); // Scroll to top when the component mounts
        }, []);

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
