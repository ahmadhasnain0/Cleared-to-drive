"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../public/images/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-green fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container px-0">
        <a className="navbar-brand" href="#">
          <Image src={logo} alt='logo' className='object-fit-contain text-white' quality={100} />
        </a>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
          <div className="d-flex align-self-end">
            <button className="btn bg-language b-header__language_en" type="submit">
              <p className='b-header__language-text mb-0'>EN</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
