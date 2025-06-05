import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import profileImage from "./assets/profile-thumbnail.png";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <TestimonialCard
        name="Sarah Dole"
        username="sarahdole"
        testimonial="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        profileImage={profileImage}
        altText="Sarah Dole's profile image"
      />
    </div>
  );
}

export default App;
