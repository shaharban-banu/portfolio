import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
