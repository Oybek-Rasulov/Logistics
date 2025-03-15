import assets from '../assets';
import { NavLink } from 'react-router-dom'
export default function Header({id, title, text}) {
    return <div className="header mb3" id={id} >
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
            <div className='header-box'>{title}</div>
            <p className='title-content'> {text}</p>
        </div>

    </div>
}