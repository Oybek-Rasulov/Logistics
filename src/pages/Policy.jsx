import Header from '../components/Home/Header';
import Navbar from '../components/ReusableComp/Navbar';
import Rules from '../components/Policy/Rules';
import Footer from '../components/ReusableComp/Footer';
import { useEffect } from 'react';


export default function Policy() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts
      }, []);
    return <>
        <Navbar />
        <Header id="policy" title="Privacy Policy" text="Privacy Policy" />
        <Rules />
        <Footer />
    </>
} 