import React, { Component } from "react";
import "./sidebar.css";
import img from "../../images/img.png";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav id="navbar">
          <ul class="navbar-items flexbox-col">
            <li class="navbar-logo flexbox-left">
              <a class="navbar-item-inner flexbox">
                <img src={img} id="hofarslogo"></img>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 1438.88 1819.54"
                >
                  <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
                  <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
                </svg> */}
              </a>
            </li>
            <li class="navbar-item flexbox-left">
              <a class="navbar-item-inner flexbox-left">
                <div class="navbar-item-inner-icon-wrapper flexbox">
                  <i class="fas fa-table"></i>
                  {/* <ion-icon name="search-outline"></ion-icon> */}
                </div>
                <span class="link-text">DashBoard</span>
              </a>
            </li>
            <li class="navbar-item flexbox-left">
              <a class="navbar-item-inner flexbox-left">
                <div class="navbar-item-inner-icon-wrapper flexbox">
                  <i class="fas fa-address-book"></i>
                  {/* <ion-icon name="home-outline"></ion-icon> */}
                </div>
                <span class="link-text">Candidates</span>
              </a>
            </li>
            <li class="navbar-item flexbox-left">
              <a class="navbar-item-inner flexbox-left">
                <div class="navbar-item-inner-icon-wrapper flexbox">
                  <i class="fas fa-suitcase"></i>
                  {/* <ion-icon name="folder-open-outline"></ion-icon> */}
                </div>
                <span class="link-text">Jobs</span>
              </a>
            </li>
            <li class="navbar-item flexbox-left">
              <a class="navbar-item-inner flexbox-left">
                <div class="navbar-item-inner-icon-wrapper flexbox">
                  <i class="fas fa-envelope"></i>
                  {/* <ion-icon name="pie-chart-outline"></ion-icon> */}
                </div>
                <span class="link-text">MailBox</span>
              </a>
            </li>
            <li class="navbar-item flexbox-left">
              <a class="navbar-item-inner flexbox-left">
                <div class="navbar-item-inner-icon-wrapper flexbox">
                  <i class="fas fa-chart-bar"></i>
                  {/* <ion-icon name="people-outline"></ion-icon> */}
                </div>
                <span class="link-text">Reports</span>
              </a>
            </li>
            <li class="navbar-item flexbox-left ">
              <a class="navbar-item-inner flexbox-left ">
                <div class="navbar-item-inner-icon-wrapper flexbox bottom">
                  {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
                  <i class="fas fa-question-circle"></i>
                </div>
                <span class="link-text">Support</span>
              </a>
            </li>
            <li class="navbar-item flexbox-left ">
              <a class="navbar-item-inner flexbox-left ">
                <div class="navbar-item-inner-icon-wrapper flexbox bottom">
                  {/* <ion-icon name="settings-outline"></ion-icon> */}
                  <i class="fas fa-cog"></i>
                </div>
                <span class="link-text">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default SideBar;
