
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./careerBlog.css";

const Career = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const goBack = () => {
    navigate("/"); // Navigate back to the main website
  };

  return (
    <div className="page-content">
      <button onClick={goBack} className="back-button">
        Go Back to Main Website
      </button>
      <h2>Career</h2>
      <p>No career available at the moment.</p>
    </div>
  );
};

export default Career;
