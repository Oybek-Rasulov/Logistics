import assets from '../assets';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return <>
        <nav className="navbar">
            <img className='logo' src={assets.logo} alt="logo" />
            <div className='navbar-main'> 
                <div className='navbar-content'>
                    <img className='icon' src={assets.clock} alt="clock" />
                    <p className='second-title'>Mon-Sun</p>
                </div>
                <div className='navbar-content'>
                    <img className='icon' src={assets.mail} alt="email" />
                    <Link to="/gmail.com" className='second-title link'>DISPATCH@ASGARGOLL.COM</Link>
                </div>
                <div className='navbar-content'>
                    <img className='icon' src={assets.location} alt="location" />
                    <p className='second-title'>800 W 5TH AVE #209, NAPERVILLE, IL 60563</p>
                </div>
            </div>
        </nav>
    </>
} 