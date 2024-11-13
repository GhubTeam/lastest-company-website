
import { useNavigate } from "react-router-dom"; 
import "./careerBlog.css"; 

const Faq = () => {
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="page-content">
      <button onClick={goBack} className="back-button">
        Go Back to Main Website
      </button>
      <h2>FAQ</h2>
      <p>Frequently Asked Questions will be here soon!</p>
    </div>
  );
};

export default Faq;
