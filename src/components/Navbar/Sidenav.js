import React, { useState } from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";
import SideNavLink from "./SideNavLink";

export function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function Sidenav() {
  const [Search, setSearch] = useState("");

  return (
    <div className="main-sidenav">
      <div id="mySidenav" className="sidenav">
        <Link to="" className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        {/* hidden until screen size is smaller than 650px */}
        <div className="sidenav-searchbar Profile">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <SideNavLink
            to={`/SearchResult/${Search === "" ? "books" : Search}`}
            iconClass="fas fa-search"
          />
        </div>
        {/* ends here */}
        <SideNavLink to="/" label="Home" iconClass="fas fa-home" />
        {/* hidden until screen size is smaller than 650px */}
        <SideNavLink
          to="/UserProfile"
          label="Profile"
          iconClass="fas fa-user-circle"
          isProfile={true}
        />
        <SideNavLink
          to="/Cart"
          iconClass="fas fa-shopping-cart"
          isProfile={true}
        />
        {/* ends here */}
        <SideNavLink to="/Categories" iconClass="fas fa-angle-right" />
        <SideNavLink to="/Contribute" iconClass="fas fa-hands-helping" />
        <SideNavLink to="/Blog" iconClass="fab fa-blogger" />
        <SideNavLink to="/Contact" iconClass="fas fa-headset" />
        <SideNavLink to="/About" iconClass="fas fa-info-circle" />
      </div>
    </div>
  );
}

export default Sidenav;
