import assets from "../assets";

function ContactForm() {
  return (
    <div className="contact-main">
        <div className="contact-container">
            <div className="contact-header">
                <div className="header-box">Contact Us</div>
                <h2 className="mb1">Get in touch with us</h2>
                <p className="fs8">
                We're here to assist you! Whether you have a question, need a quote, or want to partner with us, feel free to reach out.
                </p>
            </div>
            <div className="contact-info">
                <div className="info-box"><span><img src={assets.message} alt="icon" /></span> DISPATCH@ASCARGOLLC.COM</div>
                <div className="info-box"><span><img src={assets.call} alt="icon" /></span> 630-686-6569</div>
                <div className="info-box"><span><img src={assets.touchClock} alt="icon" /></span> Mon - Sun 24/7</div>
            </div>
            <form className="contact-form">
                <div className="mb2">
                    <input className="contact-input" type="text" placeholder="Your Name" required />
                    <input className="contact-input"  type="email" placeholder="Your Email" required />

                </div>
                <div className="mb2">
                    <input className="contact-input"  type="text" placeholder="Phone Number" required />
                    <input className="contact-input"  type="text" placeholder="City" required />
                </div>

                <textarea placeholder="Your Message" required rows="8" className="contact-input mb2" ></textarea>
                <button type="submit" className="sign-in-btn">Submit Your Message</button>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;
