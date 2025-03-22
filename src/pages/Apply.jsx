import Navbar from '../components/ReusableComp/Navbar'
import Header from '../components/Home/Header'
import ApplyForm from '../components/Apply/ApllyForm'
import ApplyQuestions from "../components/Apply/ApplyQuestions"
import Footer from '../components/ReusableComp/Footer'
import { useEffect } from 'react'


export default function Apply() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts
      }, []);

    return (
        <>
            <Navbar />
            <Header id="apply" title="Apply Now" text="Apply Now & Work with Us!" /> 
            <ApplyForm />
            <ApplyQuestions />
            <Footer />
        </>
    )
}