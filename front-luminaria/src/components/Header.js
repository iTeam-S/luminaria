import React, { useRef, useState } from 'react';
import { faBars, faLock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './respoHead.css';

function Header() {
  const menubar = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBar = () => {
    setIsMenuOpen(true);
    menubar.current.classList.toggle("HashNav");
  }
  const maskBar = () => {
    setIsMenuOpen(false);
    menubar.current.classList.toggle("HashNav");
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logoluminaria.jpeg" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
            luminaria
          </a>
          <div className="menu-bars">{!isMenuOpen ? (<FontAwesomeIcon icon={faBars} onClick={() => handleBar()}/>) : (<FontAwesomeIcon icon={faXmark} onClick = {() => maskBar()}/>)}</div>  
          </div>
          <div data-aos="fade-left" className="HashNav navbar-collapse" ref={menubar} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ABOUT US
                </a>
                <ul className="dropdown-menu modif-drop">
                  <li><a className="modif-drop-item" href="#">HISTORY</a></li>
                  <li><a className="modif-drop-item" href="#">TEAM</a></li>
                  <li><a className="modif-drop-item" href="#">FINANCIAL</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OUR WORK
                </a>
                <ul className="dropdown-menu modif-drop">
                  <li><a className="modif-drop-item" href="#">APPROCH</a></li>
                  <li><a className="modif-drop-item" href="#">PUBLICATION</a></li>
                  <li><a className="modif-drop-item" href="#">BLOG</a></li>
                  <li><a className="modif-drop-item" href="#">DOCUMENTS</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">CONTACT</a>
              </li>
            </ul>
            <form className="d-flex" style={{alignItems: 'center', flexDirection: 'column'}} role="search">        
              <button className="btn btn-outline-dark mx-3 shadow-merch" type="submit">MERCH <FontAwesomeIcon icon={faLock} /></button>
            </form>
          </div>
      </nav>
    </header>
  );
}

export default Header;
