import React from "react";
import hero1 from "../image/heroPic1.jpg"
import hero2 from "../image/heroPic2.jpg"
import '../Style/HeroSec.css';


 export default function Home() {
    return (
        <secction>

             <section class="section hero"  aria-label="home">
         <div class="container">
          <div class="hero-content ">
            <h1 class="h1 hero-title pb-2">
              Good <span class="span"> Food,</span> <br/>  Good Mood!
            </h1>
            <p class="hero-text">
            Each meal we serve is comprised of fresh and organic ingredients.We treat all of our customers with utmost care and service.
            </p>
            <div class="hero-btn d-flex pt-3 pb-3">
            <button class="button btn2 ">Our Menu</button>
             <button class="button btn3 ml-3 ">Order</button>
            </div>
          </div>

          <figure class="hero-banner">
            <div class="img-holder one" >
              <img src={hero1}  alt="hero banner" class="img-cover"/>
            </div>

            <div class="img-holder two pt-4">
              <img src={hero2} alt="hero banner" class="img-cover"/>
            </div>
          </figure>

        </div>
      </section>



        </secction>

    );
 }