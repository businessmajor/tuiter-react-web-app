import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiHome, BiCompass, BiBell, BiEnvelope, BiBookmark, BiListUl, BiUser, BiUserPlus, BiDotsHorizontal } from "react-icons/bi";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navigation-sidebar.css";

const NAV_LINKS = [
  { to: 'home', Icon: BiHome, label: 'Home' },
  { to: 'explore', Icon: BiCompass, label: 'Explore' },
  { to: 'notifications', Icon: BiBell, label: 'Notifications' },
  { to: 'messages', Icon: BiEnvelope, label: 'Messages' },
  { to: 'bookmarks', Icon: BiBookmark, label: 'Bookmarks' },
  { to: 'lists', Icon: BiListUl, label: 'Lists' },
  { to: 'more', Icon: BiDotsHorizontal, label: 'More' }
];

const NavigationSidebar = () => {
  const { user: { currentUser } } = useSelector((state) => state);
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];

  return (
    <div className="list-group navigation-sidebar">
      {NAV_LINKS.map(({ to, Icon, label }) => (
        <Link to={`/tuiter/${to}`} className={`list-group-item ${active === to ? "active" : ""}`} key={to}>
          <Icon className="me-2" />
          <span className="sidebar-text">{label}</span>
        </Link>
      ))}

      {!currentUser && (
        <>
          <Link to="/tuiter/login" className={`list-group-item ${active === "login" ? "active" : ""}`}>
            <BiUser className="me-2" />
            <span className="sidebar-text">Login</span>
          </Link>
          <Link to="/tuiter/register" className={`list-group-item ${active === "register" ? "active" : ""}`}>
            <BiUserPlus className="me-2" />
            <span className="sidebar-text">Register</span>
          </Link>
        </>
      )}

      {currentUser && (
        <Link to="/tuiter/profile" className={`list-group-item ${active === "profile" ? "active" : ""}`}>
          <BiUser className="me-2" />
          <span className="sidebar-text">Profile</span>
        </Link>
      )}
    </div>
  );
};

export default NavigationSidebar;
