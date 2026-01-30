import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import Skills from "./components/Skills.tsx";
import Education from "./components/Education.tsx";
import Gallery from "./components/Gallery.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="min-h-screen bg-luxury-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
