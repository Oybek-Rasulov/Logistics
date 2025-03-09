import assets from '../assets';
import { NavLink } from 'react-router-dom'
export default function Header() {
    return <div className="header mb3">
        <div className="menu">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About Us</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/apply'>Apply Now</NavLink></li>
                <li><NavLink to='/setup'>Set Up</NavLink></li>
                <li><NavLink to='/policy'>Privacy Policy</NavLink></li>
            </ul>
            <div className="menu-social">
                <NavLink to='/instagram'><img className='icon' src={assets.instagram} alt="social" /></NavLink>
                <NavLink to='/facebook'><img className='icon' src={assets.facebook} alt="social" /></NavLink>
                <NavLink to='/linkedin'><img className='icon' src={assets.linkedin} alt="social" /></NavLink>
                <NavLink to='/contact'><img className='icon' src={assets.telephone} alt="social" /></NavLink>
            </div>
        </div>

        <div className='header-content'>
            <div className='header-box'>Logistics & Supply Chain Solutions</div>
            <p className='title-content'>AS Cargo LLC corporation is a transportation company that was established in Naperville, IL in 2018. Our company acknowledges the strong potential of the trucking industry to make a big impact on business and society. Our management team with 15 years of transportation experience and professional drivers work to meet your needs and provide excellent customer service.</p>
        </div>

    </div>
}