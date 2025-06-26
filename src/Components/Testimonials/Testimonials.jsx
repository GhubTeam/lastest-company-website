import { useState, useEffect } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import TestimonialData from "./TestimonialData";
import "./Testimonials.css";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialData.length) % TestimonialData.length
    );
  };

  return (
    <div className="Testimonials">
      <p className="testimony-subtitle">
        <span className="white-text bigger-text">
          Real Stories, Real Impact:
        </span> Hear from Our Satisfied Clients
      </p>
      <div className="testimonial-section">
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <img
              key={TestimonialData[currentIndex].img}
              src={TestimonialData[currentIndex].img}
              alt={TestimonialData[currentIndex].name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <h3>{TestimonialData[currentIndex].name}</h3>
              <p className="location">
                {TestimonialData[currentIndex].location}
              </p>
              <p className="testimonial-text">
                {TestimonialData[currentIndex].Testimony}
              </p>
            </div>
          </div>
        </div>

        <div className="arrows-container">
          <button className="arrow-btn" onClick={prevTestimonial}>
            <BsArrowLeftCircleFill />
          </button>
          <button className="arrow-btn" onClick={nextTestimonial}>
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
