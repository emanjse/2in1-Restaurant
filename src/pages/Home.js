import React from "react";
import heroPic from "../image/heroPic.png";

 export default function Home() {
    return (
<section>
  <div class="container-fluid heroSection ">
    <div class="container hero-title">
        <div class="row align-items-center align-content-center  ">
            <div class="col-sm-6 info mb-5 ">
                <h1 class="mb-4 ">Good <span>Food,</span> <br></br> Good Mood!</h1>
                <p class="p">Each meal we serve is comprised of fresh and organic ingredients.We treat all of our customers with utmost care and service.</p>
                <button class="button">Order</button>
            </div>
            <div class="col-sm-6 pb-4 pb-lg-0    ">
                <img class="pr-5" src={heroPic} alt="heroPic"/>
            </div>


        </div>
    </div>
  </div>
 </section>


    );
 }