import { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    zipCode: "",
    state: "",
    about: "",
    consentCalls: false,
    consentTexts: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/drivers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Application submitted successfully!');
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          city: "",
          zipCode: "",
          state: "",
          about: "",
          consentCalls: false,
          consentTexts: false,
        });
      } else {
        alert(`❌ Submission failed: ${data.message}`);
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="form-container container mb3">
      <form className="application-form" onSubmit={handleSubmit}>
        {/* Header */}
        <div className="form-header">
          <div className="header-box-second">Application Form</div>
          <h2 className="mb2">Start your application</h2>
        </div>

        {/* Input Fields */}
        <div className="form-grid">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" value={formData.state} className="full-width mb2" onChange={handleChange} required />
        </div>

        {/* About Section */}
        <textarea 
          name="about"
          placeholder="Can you write a bit about yourself? For example, if you are experienced, team-friendly, or prefer working solo."
          value={formData.about}
          onChange={handleChange}
        />

        {/* Checkboxes */}
        <div className="checkbox-section">
          <label>
            <input type="checkbox" name="consentCalls" checked={formData.consentCalls} onChange={handleChange} />
            I hereby consent to receive autodialed and/or pre-recorded calls from AS CARGO LLC.
          </label>
          <label>
            <input type="checkbox" name="consentTexts" checked={formData.consentTexts} onChange={handleChange} />
            By entering my mobile number and checking the box, I consent to receive informational text messages.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="sign-in-btn">Apply for Driver Position</button>
      </form>
    </div>
  );
}
