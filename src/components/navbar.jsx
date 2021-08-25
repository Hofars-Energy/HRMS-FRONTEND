import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./side_bar";
import notifimg from "../images/navbarimg/notif.jpeg";
import globeimg from "../images/navbarimg/globe.jpeg";
import avatarimg from "../images/navbarimg/avatar.jpeg";

import "./navbar.css";
import { react } from "@babel/types";

const Navbar = () => {
  return (
    <>
      {/* <Sidebar/> */}
      <div className="row" style={{textAlign:"right" ,  marginRight:"10px"}}>
          <input type="text" name="search" placeholder="Search.." />
          <button type="button" className="btn btn-primary">
            {" "}
            + Add New
          </button>
          <a href="#" className="globe">
            <img src={globeimg} className="globeimg" alt="nn" />
          </a>
          <a href="#" className="notification" >
            <img src={notifimg} alt="nn"  className="notifimg"/>
            {/* <span className="badge">2</span> */}
          </a>
          <img src={avatarimg} alt="Avatar" className="avatar"/>
        </div>
    </>
  );
};
export default Navbar;
