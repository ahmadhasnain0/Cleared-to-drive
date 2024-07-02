"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../public/images/logo.svg";
import logosm from "../../public/images/logo-sm.svg";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the width according to your breakpoint
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg bg-green fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid px-0">
        <a className="navbar-brand" href="#">
          <Image
            src={isSmallScreen ? logosm : logo}
            alt='logo'
            className='object-fit-contain text-white ms-3 ms-md-0'
            quality={100}
          />
        </a>
        <div className=" d-flex justify-content-end e" id="navbarTogglerDemo02">
          <div className="d-flex align-self-end px-2 px-md-5">
            <button className="btn bg-language b-header__language_en" type="submit">
              <p className='b-header__language-text mb-0'>EN</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
