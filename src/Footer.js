// src/components/Footer.js
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [color, setColor] = useState('white'); // Initial color

  useEffect(() => {
    const colors = ["red", "green"];

    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/kharzatinabyr/';
      };
    const handleMyInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/jeanpaulllm/';
      };
      const handleWhatsappClick = () => {
        window.open('https://wa.me/9613108087', '_blank');
      };
  return (
    <footer className="footer">
      <div className="left">
        <p>&copy; 2023
             <span style={{color:color, cursor:'pointer'}} onClick={handleMyInstagramClick}><FaInstagram style={{paddingTop:'1px',paddingRight:'2px',paddingLeft:'2px', wordSpacing:'2px'}}/>JeanPaulllM</span>. All rights reserved.</p>
      </div>
     
    </footer>
  );
};

export default Footer;
