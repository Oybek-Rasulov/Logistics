import assets from "../assets"

function Contact() {
    return (
        <div className="contact container">
             <div className="contact-content">
                <div className="contact-content-details">
                    <h3 className="sub-title">Get in touch with us</h3>
                    <p className="fs8">Need a trusted logistics partner? Contact us today for seamless shipping solutions!</p>
                    <div className="touch-main">
                        <div className="touch-content">
                            <div className="touch-list">

                                <div className="touch-icon"><img src={assets.message} alt="icon" /></div>
                                <p className="touch-list">DISPATCH@ASCARGOLLC.COM</p>
                            </div>
                            <div className="touch-list">
                                <div className="touch-icon"><img src={assets.call} alt="icon" /></div>
                                <p className="touch-list">Call Us <span>630-686-6569</span></p>
                            </div>
                            <div className="touch-list">
                                <div className="touch-icon"><img src={assets.touchClock} alt="icon" /></div>
                                <p className="touch-list">Mon - Sun <span>24/7</span></p>
                            </div>
                        </div>
                        <div className="contact-content-input">
                        <form>
                            <input type="text" placeholder="Your Email" className="mb1" />
                            <textarea name="message" id="message" cols="30" rows="6" placeholder="Your message"></textarea>
                            <button>Submit Your Message</button>
                        </form>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Contact
