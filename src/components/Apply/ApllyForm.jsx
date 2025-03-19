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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" onChange={handleChange} />
          <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} />
          <input type="text" name="state" placeholder="State" className="full-width mb2" onChange={handleChange} />
        </div>

        {/* About Section */}
        <textarea 
          name="about"
          placeholder="Can you write a bit about yourself? For example, if you are experienced, team-friendly, or prefer working solo."
          onChange={handleChange}
        />

        {/* Checkboxes */}
        <div className="checkbox-section">
          <label>
            <input type="checkbox" name="consentCalls" onChange={handleChange} />
            I hereby consent to receive autodialed and/or pre-recorded calls from AS CARGO LLC.
          </label>
          <label>
            <input type="checkbox" name="consentTexts" onChange={handleChange} />
            By entering my mobile number and checking the box, I consent to receive informational text messages.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="sign-in-btn">Apply for Driver Position</button>
      </form>
    </div>
  );
}
