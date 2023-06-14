import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiHome, BiCompass, BiBell, BiEnvelope, BiBookmark, BiListUl, BiUser, BiDotsHorizontal } from "react-icons/bi";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const active = pathname.split("/")[2];

  return (
    <div className="list-group">
      <Link to="/tuiter/home" className={`list-group-item ${active === "home" ? "active" : ""}`}>
        <BiHome className="me-2" />
        Home
      </Link>
      <Link to="/tuiter/explore" className={`list-group-item ${active === "explore" ? "active" : ""}`}>
        <BiCompass className="me-2" />
        Explore
      </Link>
      <Link to="/tuiter/notifications" className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
        <BiBell className="me-2" />
        Notifications
      </Link>
      <Link to="/tuiter/messages" className={`list-group-item ${active === "messages" ? "active" : ""}`}>
        <BiEnvelope className="me-2" />
        Messages
      </Link>
      <Link to="/tuiter/bookmarks" className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
        <BiBookmark className="me-2" />
        Bookmarks
      </Link>
      <Link to="/tuiter/lists" className={`list-group-item ${active === "lists" ? "active" : ""}`}>
        <BiListUl className="me-2" />
        Lists
      </Link>
      <Link to="/tuiter/profile" className={`list-group-item ${active === "profile" ? "active" : ""}`}>
        <BiUser className="me-2" />
        Profile
      </Link>
      <Link to="/tuiter/more" className={`list-group-item ${active === "more" ? "active" : ""}`}>
        <BiDotsHorizontal className="me-2" />
        More
      </Link>
    </div>
  );
};

export default NavigationSidebar;
