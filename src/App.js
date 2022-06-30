import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContainerTitle from './components/ContainerTitle';
import Container from './components/Container';
import Wordaily from './components/Wordaily';
import Wallsdrobe from './components/Wallsdrobe';
import Sivasspor from './components/Sivasspor';
import Sponsors from './components/Sponsors';
import HomeContact from './components/HomeContact';
import JoinDiscord from './components/JoinDiscord';
import Footer from './components/Footer';

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <ContainerTitle />
      <Container />
      <Wordaily />
      <Wallsdrobe />
      <Sivasspor />
      <HomeContact />
      <JoinDiscord />
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </>
  )
}

export default App