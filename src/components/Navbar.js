import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-icons/fa'
import './styles/Navbar.css'
import Button from './Button'
import { navItems } from './NavItems.js'
import { UserAuth } from '../components/context/AuthContext'

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const {user} = UserAuth();

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaSpider/>
            Petshop Web
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {!mobile && <typography className="navbar-user">{user && user.email}</typography>}
        {!mobile && <Button />}

        {mobile && (
          <div className="sidebar-toggle">
            <typography className="sidebar-user">{user && user.email}</typography>
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  <div id='icon'>{item.icon}</div>
                  <div id='title'>{item.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button onClick={() => setSidebar(false)} />
      </div>
    </>
  );
}

export default Navbar;