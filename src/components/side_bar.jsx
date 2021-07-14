import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { react } from "@babel/types";

const Sidebar= () => {
  return(
    <div class="side_bar">
    <div class="title">
      <div class="logo">Hofars</div>
      <label class=" button cancel" for="check"><i class="fas fa-times"></i></label>
    </div>
    <ul>
          <li>
              <Link
                to="/AboutUs"
                // className="nav-links"
                // onClick={closeMobileMenu}
              ><i class="fas fa-question-circle"></i>About Us</Link></li>

        <li>
              <Link
                to="/Approval"
                // className="nav-links"
                // onClick={closeMobileMenu}
              ><i class="fas fa-qrcode"></i>Approval</Link></li>

              <li>
              <Link
                to="/Careers"
                // className="nav-links"
                // onClick={closeMobileMenu}
              ><i class="fas fa-calendar-week"></i>Careers</Link></li>

              <li>
              <Link
                to="/head_aprroval"
                // className="nav-links"
                // onClick={closeMobileMenu}
              ><i class="fas fa-sliders-h"></i>Head Approval</Link></li>

              <li>
              <Link
                to="/ATS"
                // className="nav-links"
                // onClick={closeMobileMenu}
              ><i class="fas fa-phone-volume"></i>ATS</Link></li>

              <li>
              <Link
                to="/Login"
                // className="nav-links"
                // onClick={closeMobileMenu}
              ><i class="fas fa-comments"></i>Login</Link></li>
        </ul>
        

  </div>
    )}

export default Sidebar;