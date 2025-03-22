import Header from '../components/Home/Header';
import Navbar from '../components/ReusableComp/Navbar';
import SetUpForm from '../components/setup/SetUpForm';
import SetupQuestions from '../components/setup/SetupQuestions';
import Footer from '../components/ReusableComp/Footer';


export default function Setup() {
    return <>
        <Navbar />
        <Header id="setup" title="Set Up With Us" text="Set Up" />
        <SetUpForm />
        <SetupQuestions />
        <Footer />
    </>
} 