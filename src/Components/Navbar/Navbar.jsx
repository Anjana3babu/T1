import React, { useState, useEffect } from 'react'
import Logo from '../../assets/23.png'
import './Navbar.css'
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const yOffset = -navbarHeight - 10;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='navbarcontainer'>
      <div className='navbar flex-row'>
        <div className="lnav">
          <img className='logo' src={Logo} alt="" />
        </div>
        <div className="rnav flex-row">
          <p className={activeSection === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>HOME</p>
          <p className={activeSection === 'services' ? 'active' : ''} onClick={() => handleClick('services')}>SERVICES</p>
          <button className={`learn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>Contact Us</button>
        </div>
        <div className="mnav" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='x' /> : <Menu className='menu' />}
        </div>
      </div>
      {isOpen && (
        <div className='navbar2 flex-col'>
          <p className={activeSection === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>HOME</p>
          <p className={activeSection === 'services' ? 'active' : ''} onClick={() => handleClick('services')}>SERVICES</p>
          <button className={`learn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>Contact Us</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
