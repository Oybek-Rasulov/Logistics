import Navbar from "../components/ReusableComp/Navbar";
import Header from "../components/Home/Header";
import ContactForm from "../components/Contact/ContactForm";
import Cards from "../components/ReusableComp/Cards";
import FaqSection from "../components/Contact/FaqSection";
import Map from "../components/Contact/Map";
import Footer from "../components/ReusableComp/Footer";


export default function Contact() {
    

    return (
        <>
            <Navbar />
            <Header id="contact" title="Contacts" text="Contact Us" />
            <ContactForm />
            <Cards />
            <FaqSection />
            <Map />
            <Footer />
        </>
    )
}
