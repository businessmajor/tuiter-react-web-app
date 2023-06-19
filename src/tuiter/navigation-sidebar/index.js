import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiHome, BiCompass, BiBell, BiEnvelope, BiBookmark, BiListUl, BiUser, BiUserPlus, BiDotsHorizontal } from "react-icons/bi";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./navigation-sidebar.css"; // Import the CSS file for styling

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];

  return (
    <div className="list-group navigation-sidebar">
      <Link to="/tuiter/home" className={`list-group-item ${active === "home" ? "active" : ""}`}>
        <BiHome className="me-2" />
        <span className="sidebar-text">Home</span>
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item ${active === "explore" ? "active" : ""}`}>
        <BiCompass className="me-2" />
        <span className="sidebar-text">Explore</span>
      </Link>
      <Link to="/tuiter/notifications" className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
        <BiBell className="me-2" />
        <span className="sidebar-text">Notifications</span>
      </Link>
      <Link to="/tuiter/messages" className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <BiEnvelope className="me-2" />
        <span className="sidebar-text">Messages</span>
      </Link>
      <Link to="/tuiter/bookmarks" className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
        <BiBookmark className="me-2" />
        <span className="sidebar-text">Bookmarks</span>
      </Link>
      <Link to="/tuiter/lists" className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <BiListUl className="me-2" />
        <span className="sidebar-text">Lists</span>
      </Link>
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
      <Link to="/tuiter/more" className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <BiDotsHorizontal className="me-2" />
        <span className="sidebar-text">More</span>
      </Link>
    </div>
  );
};

export default NavigationSidebar;
