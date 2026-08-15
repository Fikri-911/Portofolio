import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import Documentation from "./components/Documentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Achievements />
        <Documentation />
        <Contact />
      </main>
      <Footer />
      {showTop && (
        <a className="back-top" href="#home" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      )}
    </div>
  );
}
