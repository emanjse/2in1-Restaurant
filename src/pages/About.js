import React from 'react';
import '../Style/About.css';
import about1 from "../image/about1.jpg";
import about2 from "../image/about2.jpg";
import about3 from "../image/about3.jpg";
import about4 from "../image/about4.jpg";


function About() {

  return (
    <section class="about">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-5 align-self-center">
                    <h1 class="pb-3">About us</h1>
                    <p>2IN1 resturant is making it easy for customers to choose between juicy burgers and cheesy pizzas. We are a growing fast food chain committed to delivering each and every customer not just delicious food, but an unforgettable experience. Each meal we serve is comprised of fresh and organic ingredients. Our meat is sourced from America, and our pizza dough straight from Italy.</p>
                </div>
                <div class="col-md-7 pt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-5 pb-3 ">
                            <img src={about2} alt="about1"/>
                        </div>
                        <div class="col-md-6  pb-3">
                            <img src={about1} alt="about2"/>
                        </div>
                    </div>
                    <div class="row mt-2 justify-content-center">
                        <div class="col-md-7 pb-3 ">
                            <img src={about3} alt="about1" />
                        </div>
                        <div class="col-md-4">
                            <img src={about4} alt="about2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
  )
}

export default About;