import React from "react";
import logo from "../image/logo.png";
import {Link} from "react-router-dom";





 const Navbar = () => {
    return (
<nav class="navbar navbar-expand-md fixed-top ">
        <div class="container">
          <a class="navbar-brand" href="/">
          <img
              src={logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </a>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>

    </button>

          <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto  text-center">
              <li class="nav-item ">
                <a class="nav-link  active" aria-current="page" href="/">Home</a>
              </li>

              <Link to="/menu">
              <li class="nav-item">
                <a class="nav-link " href="/menu">Menu</a>
              </li>
              </Link>

              <Link to="/about">
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              </Link>

               <Link to="/contact">
               <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
               </Link>

            </ul>

            <ul class="navbar-nav  ml-auto text-center">

            <Link to="/booktable">
                <li><button  class="button btn1" >BookTable</button></li>
            </Link>

            </ul>


          </div>

        </div>
      </nav>

    );
 }
 export default Navbar;
