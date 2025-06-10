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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  // Backend email service function
  const sendEmailToBackend = async (formData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'pradeepmanikandan84@gmail.com',
          subject: `Portfolio Contact from ${formData.name}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        }),
      });

      if (response.ok) {
        return { success: true };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending message...");

    // Try backend email service first
    const backendResult = await sendEmailToBackend(formData);

    if (backendResult.success) {
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      // Fallback to mailto if backend fails
      setFormStatus("Backend unavailable. Opening email client...");
      const recipientEmail = "pradeepmanikandan84@gmail.com";
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus("Please send the email from your client.");
      }, 3000);
    }

    setIsSubmitting(false);
  };

  // Sample data for points on the globe
  const pointsData = [
    { lat: 11.0168, lng: 76.9558, size: 8, label: 'Coimbatore' },  // Coimbatore coordinates
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
          pointAltitude={0.1}
          pointRadius={0.5}
          animateIn={true}
          // Disable zoom and pan controls
          enableZoomInteraction={false}
          enablePanInteraction={false}
          // Set initial view
          pointOfView={{ lat: 11.0168, lng: 76.9558, altitude: 2 }}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="message" className='formLabel'>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className='formTextarea'
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className='submitButton'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {formStatus && (
            <p className={`formStatus ${formStatus.includes('successfully') ? 'success' : ''}`}>
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacts;