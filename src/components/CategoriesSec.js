import React from "react";
import burger from "../image/burger.svg";
import pizza from "../image/Pizza.svg";
import drink from "../image/Drink.svg";
import desert from "../image/Fries.svg";
import offer from "../image/Offer.svg";
import '../Style/CategoriesSec.css'
import { NavLink } from "react-router-dom";


function CategoriesSec(){
    return(
        <section>
        <div class="container">

              <div class="section-title text-center">
                <h2 class="fw-bold mb-5"> Explore Our Menu</h2>
              </div>

          <div class="MenuSec__wrapper">
          <NavLink to={"/Menu"}>
          <div class="MenuSec__item" >
              <div class="MenuSec__svg">
              <img src={offer} alt="offer svg"/>
              </div>
              <h6 class="MenuSec__title">
                Offer
              </h6>
            </div>
          </NavLink>

          <NavLink to={"/Menu"}>
          <div class="MenuSec__item"  >
              <div class="MenuSec__svg">
              <img src={burger} alt="burger svg"/>
              </div>
              <h6 class="MenuSec__title">
                Burger
              </h6>
            </div>
          </NavLink>
          <NavLink to={"/Menu"}>
          <div class="MenuSec__item">
              <div class="MenuSec__svg">
              <img src={pizza} alt="pizza svg"/>
              </div>
              <h6 class="MenuSec__title">
                Pizza
              </h6>
            </div>
          </NavLink>


          <NavLink to={"/Menu"}>
          <div class="MenuSec__item">
              <div class="MenuSec__svg">
              <img src={desert} alt="desert svg"/>
              </div>
              <h6 class="MenuSec__title">
                Desert
              </h6>
            </div>
          </NavLink>


          <NavLink to={"/Menu"}>
          <div class="MenuSec__item">
              <div class="MenuSec__svg">
                <img src={drink} alt="drink svg"/>
              </div>
              <h6 class="MenuSec__title">
                Drink
              </h6>
            </div>
          </NavLink>
          </div>
        </div>
      </section>
    );
}



export default CategoriesSec;