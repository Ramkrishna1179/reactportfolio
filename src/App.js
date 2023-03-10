import React from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/About";
import Services from "./components/services";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Like from "./components/like";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Like />
      <Footer />
    </div>
  );
}
export default App;
