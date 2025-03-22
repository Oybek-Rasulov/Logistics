import Header from '../components/Home/Header';
import Navbar from '../components/ReusableComp/Navbar';
import Rules from '../components/Policy/Rules';
import Footer from '../components/ReusableComp/Footer';


export default function Policy() {
    return <>
        <Navbar />
        <Header id="policy" title="Privacy Policy" text="Privacy Policy" />
        <Rules />
        <Footer />
    </>
} 