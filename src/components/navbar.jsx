import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./side_bar";


import "./navbar.css";
import { react } from "@babel/types";

const Navbar= () => {
  return(
    <>
    {/* <input type="checkbox" id="check"/>
    <label class="button bars" for="check"><i class="fas fa-bars"></i></label> */}
    <Sidebar/>
    </>
  )
}
export default Navbar;