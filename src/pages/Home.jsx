import Header from '../components/Home/Header';
import Navbar from '../components/ReusableComp/Navbar';
import Title from '../components/ReusableComp/Title';
import Safe from '../components/Home/Safe';
import Transportation from '../components/Home/Transportation';
import Opportunity from '../components/Home/Opportunity';
import Contact from '../components/Home/Contact';


export default function Home() {
    return <>
        <Navbar />
        <Header />
        <Title title="Safe and Reliable Cargo Solutions:" />
        <Safe />
        <Title title="Transportation Across The USA" />
        <Transportation />
        <Opportunity />
        <Contact />

    </>
} 