import { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
    mc_dot_number: "",
    insurance_info: "",
    preferred_routes: "",
    comments: "",
    consent_calls: false,
    consent_texts: false,
  });

  const [responseMessage, setResponseMessage] = useState("");

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
      const res = await fetch("http://localhost:3001/api/brokers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage("✅ Application submitted successfully!");
        setFormData({
          full_name: "",
          company_name: "",
          email: "",
          phone: "",
          mc_dot_number: "",
          insurance_info: "",
          preferred_routes: "",
          comments: "",
          consent_calls: false,
          consent_texts: false,
        });
      } else {
        setResponseMessage(`❌ Error: ${data.error || "Submission failed"}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setResponseMessage("❌ Network error occurred.");
    }
  };

  return (
    <div className="form-container container mb3">
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <div className="header-box-second">Application Form</div>
          <h2 className="mb2">Start your application</h2>
        </div>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="set-input mb1"
          required
        />

        <div className="input-group">
          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mc_dot_number"
            placeholder="MC / DOT Number"
            value={formData.mc_dot_number}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="insurance_info"
            placeholder="Insurance Information"
            value={formData.insurance_info}
            onChange={handleChange}
          />
          <input
            type="text"
            name="preferred_routes"
            placeholder="Preferred Shipping Routes"
            value={formData.preferred_routes}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="comments"
          placeholder="Comments / Additional Info:"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>

        <div className="checkbox-section">
          <label>
            <input
              type="checkbox"
              name="consent_calls"
              checked={formData.consent_calls}
              onChange={handleChange}
            />
            I hereby consent to receive autodialed and/or pre-recorded calls from AS CARGO LLC.
          </label>
          <label>
            <input
              type="checkbox"
              name="consent_texts"
              checked={formData.consent_texts}
              onChange={handleChange}
            />
            I consent to receive informational text messages.
          </label>
        </div>

        {responseMessage && <p style={{ margin: "1rem 0", color: "green" }}>{responseMessage}</p>}

        <button type="submit" className="sign-in-btn">
          Apply for Broker Position
        </button>
      </form>
    </div>
  );
}
