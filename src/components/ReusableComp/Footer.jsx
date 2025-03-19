import assets from "../assets";
import FooterHead from "./FooterHead";

export default function Home() {
    return (
        <>
            <FooterHead />
            {/* <div className="footer container">
                <div className="footer-details">
                    <p>As Cargo LLC – Reliable, efficient, and dedicated to keeping your freight moving seamlessly. Get in touch: </p>
                    <div className="footer-icons">
                        <div className="footer-icon">
                            <img src={assets.call} alt="icon" />
                            <p>630-686-6569</p>
                        </div>
                        <div className="footer-icon">
                            <img src={assets.location} alt="icon" />
                            <p>630-686-6569</p>
                        </div>
                        <div className="footer-icon">
                            <img src={assets.message} alt="icon" />
                            <p>630-686-6569</p>
                        </div>
                        
                    </div>
                </div>
            </div> */}
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section - Company Info */}
                <div className="footer-left">
                <p className="description">
                    As Cargo LLC – Reliable, efficient, and dedicated to keeping your freight moving seamlessly. Get in touch:
                </p>
                <div className="contact-info">
                    <p>📞 630-686-6569</p>
                    <p>📍 800 W 5th Ave #209, Naperville, IL 60563</p>
                    <p>📧 <a href="mailto:DISPATCH@ASCARGOLLC.COM">DISPATCH@ASCARGOLLC.COM</a></p>
                </div>
                </div>

                {/* Middle Section - Pages */}
                <div className="footer-middle">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contacts</a></li>
                    <li><a href="/apply">Apply Now</a></li>
                    <li><a href="/setup">Set Up</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
                </div>

                {/* Right Section - Newsletter */}
                <div className="footer-right">
                <p className="mb2">Be the first to know about our latest updates, special offers, and exclusive content. Subscribe now to stay connected and never miss out on anything exciting!</p>
                <input type="email" placeholder="Your Email*" className="newsletter-input" />
                <button className="sign-in-btn">Sign In / Log In</button>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="footer-bottom">
                <p>Copyright © AS Cargo LLC | Designed by Mukhlisa Tulkinova</p>
            </div>
            </footer>
        </>
    )
}