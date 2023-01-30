import React from "react";
import {
  HomeOutlined,
  DarkModeOutlined,
  AppsOutlined,
  NotificationsOutlined,
  EmailOutlined,
  PersonOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul className="nav-links">
          <Link to="/" className="nav-links__logo">
            <span>
              <strong>Social Media</strong>
            </span>
          </Link>
          <Link>
            <HomeOutlined />
          </Link>
          <Link>
            <DarkModeOutlined />
          </Link>
          <Link>
            <AppsOutlined />
          </Link>
          <span className="nav-links__search">
            <SearchOutlined />
            <input aria-label="text" type="text" placeholder="Search" />
          </span>
        </ul>
        <ul className="nav-links">
          <Link>
            <PersonOutlined />
          </Link>
          <Link>
            <EmailOutlined />
          </Link>
          <Link>
            <NotificationsOutlined />
          </Link>
          <Link>
            {" "}
            <div className="nav-links__user">
              <img
                src="https://images.pexels.com/photos/7884720/pexels-photo-7884720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>John Doe</span>
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
