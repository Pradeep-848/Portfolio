import React, { useState, useEffect } from "react";
import Globe from 'react-globe.gl';
import '../styles/Contacts.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = "pradeepmanikandan84@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setFormStatus("Opening your email client...");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("Form cleared. Please send the email from your client.");
    }, 3000);
  };

  // Sample data for points on the globe
  const pointsData = [
    { lat: 12.9716, lng: 77.5946, size: 8 },  // Bangalore (larger point)
  ];

  return (
    <div className='container'>
      {/* Left Division: Globe */}
      <div className='globeContainer'>
        <Globe
          width={windowSize.width >= 768 ? 500 : 300}
          height={windowSize.width >= 768 ? 500 : 300}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          pointsData={pointsData}
          pointColor={() => '#fff000'}
          pointAltitude={0.2}
          pointRadius={0.5}
          animateIn={true}
        />
      </div>

      {/* Right Division: Contact Form */}
      <div className='formContainer'>
        <h2 className='formTitle'>Get in Touch</h2>
        <form onSubmit={handleSubmit} className='contactForm'>
          <div className='formGroup'>
            <label htmlFor="name" className='formLabel'>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className='formInput'
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="email" className='formLabel'>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='formInput'
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="message" className='formLabel'>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className='formTextarea'
            />
          </div>

          <button
            type="submit"
            className='submitButton'
          >
            Send Message
          </button>

          {formStatus && (
            <p className='formStatus'>{formStatus}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacts;
