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
        {/* Header */}
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <div className="header-box-second">Application Form</div>
          <h2 className="mb2">Start your application</h2>
        </div>

        {/* Input Fields */}
        <input type="text" placeholder="Full Name" className="set-input mb1" />

        <div className="input-group">
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="MC / DOT Number" />
        </div>

        <div className="input-group">
          <input type="text" placeholder="Insurance Information" />
          <input type="text" placeholder="Preferred Shipping Routes" />
        </div>

        <textarea placeholder="Comments / Additional Info:"></textarea>

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