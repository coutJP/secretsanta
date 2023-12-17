import React, { useEffect, useState } from 'react';
import { FaGifts } from 'react-icons/fa';
import img from './img.jpg';
import './App.css';
import Footer from './Footer';

function App() {
  const h1Style = {
    display: 'block',
    margin: '5px 0', // Add some spacing between lines if needed
  };

  const words = `FOR ALL MEMORIES WE SHARED TOGETHER`.split(' ');
  const [visibleWordIndex, setVisibleWordIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (visibleWordIndex < words.length) {
      timeoutId = setTimeout(() => {
        setVisibleWordIndex((prevIndex) => prevIndex + 1);
      }, 300);
    } else {
      // Animation is complete
      setAnimationComplete(true);
    }

    return () => clearTimeout(timeoutId);
  }, [visibleWordIndex, words.length]);

  // Helper function to generate colored spans
  const generateColoredSpans = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} style={{ color: index % 2 === 0 ? 'red' : 'green' }}>
        {letter}
      </span>
    ));
  };

  return (
    <div className="App">
      <button 
        onClick={() => window.location.href = 'https://www.crazygames.com/game/winter-clash-3d'}

      style={{display:'flex',cursor:'pointer',flexDirection:'start',backgroundColor:'red',borderRadius:'5px',marginTop:'10px',marginLeft:'10px',color:'white',border:'none',fontWeight:'bold'}}>
        Play Game
        </button>
        <section style={{marginBottom:'800px'}}>
      <h1 style={h1Style}>
        <FaGifts style={{ color: 'red' }} />
        <FaGifts style={{ color: 'green' }} />
        <FaGifts style={{ color: 'red' }} />
        <FaGifts style={{ color: 'green' }} />
        <FaGifts style={{ color: 'red' }} />
        <FaGifts style={{ color: 'green' }} />

        {words.slice(0, visibleWordIndex).map((visibleWord, index) => (
          <div key={index}>{generateColoredSpans(visibleWord)}</div>
        ))}
      </h1>
      </section>
      {animationComplete && (
        <>
                  {/* i need this in a single section */}
          <section style={{marginBottom:'800px'}}>
          <div className="fake-gallery">
            <img className="fake-photo" src={img} alt="Fake Photo" />
          </div>
          </section>
          {/* i need this in a single section */}

          <h1 style={{ color: 'green' }}>{generateColoredSpans("Thanks, that's it!")}</h1>
        </>
      )}
{
    animationComplete &&(
      <Footer/>
      )
}
    </div>
  );
}

export default App;
