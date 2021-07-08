import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./button/button";

import "./navbar.css";

// const Navbar = () => {
//   const [click, setClicker] = useState(false);
//   const [button1, setButton] = useState(true);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);
//   window.addEventListener("resize", showButton);
//   const closeMobileMenu = () => setClicker(false);
//   return (
//     <>
//       <nav classNameName="navbar">
//         <div classNameName="navbar-container">
//           <Link to="/" classNameName="navbar-logo" onClick={closeMobileMenu}>
//             Hofars HR
//             <i className="fas fa-lightbulb ic"></i>
//           </Link>
//           <div classNameName="menu-icon" onClick={() => setClicker(!click)}>
//             <i classNameName={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul classNameName={click ? "nav-menu active" : "nav-menu"}>
            // <li classNameName="nav-item">
            //   <Link
            //     to="/AboutUs"
            //     classNameName="nav-links"
            //     onClick={closeMobileMenu}
            //   >
            //     About Us
            //   </Link>
            // </li>

            // {/* <li classNameName="nav-item">
            //   <Link
            //     to="/Approval"
            //     classNameName="nav-links"
            //     onClick={closeMobileMenu}
            //   >
            //     Apporoval
            //   </Link>
            // </li> */}

            // <li classNameName="nav-item">
            //   <Link
            //     to="/Careers"
            //     classNameName="nav-links "
            //     onClick={closeMobileMenu}
            //   >
            //     Careers
            //   </Link>
            // </li>

            // {/* <li classNameName="nav-item">
            //   <Link
            //     to="/head_approval"
            //     classNameName="nav-links "
            //     onClick={closeMobileMenu}
            //   >
            //     Talent Head Approval
            //   </Link>
            // </li> */}

            // <li classNameName="nav-item">
            //   <Link to="/ATS" classNameName="nav-links" onClick={closeMobileMenu}>
            //     ATS
            //   </Link>
            // </li>
            // <li>
            //   <Link
            //     to="/Login"
            //     classNameName="nav-links-mobile "
            //     onClick={closeMobileMenu}
            //     style={{ textDecoration: "none" }}
            //   >
            //     Login
            //   </Link>
            // </li>
//           </ul>
//           {button1 && (
//             <Button
//               classNameName="float-right"
//               buttonStyle="btn--outline"
//               link="/login"
//               style={{ textDecoration: "none" }}
//             >
//               Login
//             </Button>

//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;






const Navbar = () => {
  const [click, setClicker] = useState(false);
  const [button1, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const closeMobileMenu = () => setClicker(false);
  
  return (
    <>
  <div id="viewport">
  <div id="sidebar">
    {/* <header>
      <a href="#">My App</a>
    </header> */}
    <ul className="nav">
      {/* <li>
        <a href="#">
          <i className="zmdi zmdi-view-dashboard"></i> Dashboard
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-link"></i> Shortcuts
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-widgets"></i> Overview
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-calendar"></i> Events
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-info-outline"></i> About
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-settings"></i> Services
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-comment-more"></i> Contact
        </a>
      </li> */}

<li classNameName="nav-item">
              <Link
                to="/AboutUs"
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li classNameName="nav-item">
              <Link
                to="/Approval"
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                Apporoval
              </Link>
            </li>

            <li classNameName="nav-item">
              <Link
                to="/Careers"
                classNameName="nav-links "
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>

            <li classNameName="nav-item">
              <Link
                to="/head_approval"
                classNameName="nav-links "
                onClick={closeMobileMenu}
              >
                Talent Head Approval
              </Link>
            </li>

            <li classNameName="nav-item">
              <Link to="/ATS" classNameName="nav-links" onClick={closeMobileMenu}>
                ATS
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                classNameName="nav-links-mobile "
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
            </li>
      
    </ul>
  </div>
  <div id="content">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#"><i className="zmdi zmdi-notifications text-danger"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* <div className="container-fluid">
      <h1>Simple Sidebar</h1>
      <p>
        Make sure to keep all page content within the 
        <code>#content</code>.
      </p>
    </div> */}
  </div>
</div>
    </>
  );
};

export default Navbar;