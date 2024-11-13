import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./careerBlog.css";

const Blog = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const goBack = () => {
    navigate("/"); // Navigate back to the main website
  };

  return (
    <div className="page-content">
      <button onClick={goBack} className="back-button">
        Go Back to Main Website
      </button>
      <h2>Blog</h2>
      <p>A work in progress.</p>
    </div>
  );
};

export default Blog;
