import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logomni.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo Masjid Nurul Islam" className="logo" />
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className='nav-item'>
                <NavLink className="nav-link" to="/">
                  Beranda
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/kegiatan">
                  Kegiatan
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/dokumentasi">
                  Dokumentasi
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/inventaris">
                                Inventaris
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to="/login">
                  Masuk
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
