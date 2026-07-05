import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Header
        title="Hi, I'm Asma 👋"
        subtitle="Frontend Developer | React Learner"
      />

      <Profile
        name="Asma Mehraban"
        role="Frontend Developer"
        bio="I enjoy building clean and responsive websites using React and JavaScript."
        image="https://i.pravatar.cc/150?img=47"
      />

      <About
        title="About Me"
        description="I am a frontend developer who enjoys building clean and responsive websites using HTML, CSS, JavaScript, and React. I am continuously learning and improving my web development skills."
      />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;