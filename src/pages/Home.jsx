import Header from '../components/Home/Header';
import Navbar from '../components/ReusableComp/Navbar';
import Title from '../components/ReusableComp/Title';
import Safe from '../components/Home/Safe';
import Transportation from '../components/Home/Transportation';
import Opportunity from '../components/Home/Opportunity';
import Contact from '../components/Home/Contact';
import Cards from '../components/ReusableComp/Cards';
import Clients from '../components/ReusableComp/Clients';
import Cargo from '../components/ReusableComp/Cargo';
import Footer from '../components/ReusableComp/Footer';
import ChatWidget from '../components/Chat/ChatWidget';
import { useEffect } from 'react';


export default function Home() {
    const users = localStorage.getItem('user') || [];
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the component mounts
      }, []);
      
    return <>
        <Navbar />
        <Header id="home" title="Logistics & Supply Chain Solutions" text="AS Cargo LLC corporation is a transportation company that was established in Naperville, IL in 2018. Our company acknowledges the strong potential of the trucking industry to make a big impact on business and society. Our management team with 15 years of transportation experience and professional drivers work to meet your needs and provide excellent customer service." />
        <Title title="Safe and Reliable Cargo Solutions:" />
        <Safe />
        <Title title="Transportation Across The USA" />
        <Transportation />
        <Opportunity />
        <Contact />
        <div className='card-container'>
            <Cards />
        </div>
        <Clients />
        <Cargo />
        <Footer />
        {/* Users */}
        {users.length > 0 && <ChatWidget />}
    </>
} 