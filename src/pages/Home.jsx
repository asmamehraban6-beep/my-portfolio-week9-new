import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;