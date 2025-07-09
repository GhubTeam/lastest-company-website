import  { useState } from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeWyJ2jbFqG3wn9I1F8uiFXAT0H6Rn6uoKwVRk5a6BbQ5DyKQ/viewform";

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const openFormInNewTab = () => {
    window.open(formUrl, '_blank');
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="Message icon" />
          </h3>
          <p>
            Feel free to reach out through our contact form or find our contact
            details below. Your feedback, questions, and suggestions are important
            to us as we continuously strive to deliver innovative and exceptional
            tech solutions. We look forward to partnering with you on your digital
            journey.
          </p>
        </div>
        
        <div className="contact-actions">
          <button 
            className="btn-primary contact-btn" 
            onClick={toggleForm}
          >
            {showForm ? 'Hide Form' : 'Show Contact Form'}
          </button>
          
          <button 
            className="btn-secondary contact-btn" 
            onClick={openFormInNewTab}
          >
            Open Form in New Tab
          </button>
          
          <a 
            href={formUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-link contact-btn"
          >
            Direct Link to Form
          </a>
        </div>
      </div>

      {showForm && (
        <div className="form-container">
          <div className="form-header">
            <h4>Contact Form</h4>
            <button 
              className="close-btn" 
              onClick={toggleForm}
              aria-label="Close form"
            >
              ×
            </button>
          </div>
          <div className="iframe-wrapper">
            <iframe 
              src={`${formUrl}?embedded=true`}
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Contact Form"
            >
              Loading contact form...
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;