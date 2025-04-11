import { useState } from "react";
import assets from "../assets";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("❌ Error submitting message.");
    }
  };

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb2">
            <input className="contact-input" type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
            <input className="contact-input" type="email" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
          </div>
          <div className="mb2">
            <input className="contact-input" type="text" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleChange} required />
            <input className="contact-input" type="text" name="city" value={formData.city} placeholder="City" onChange={handleChange} required />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="8"
            className="contact-input mb2"
          ></textarea>
          <button type="submit" className="sign-in-btn">Submit Your Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
