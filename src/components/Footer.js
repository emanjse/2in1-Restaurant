import React from 'react';
import fpic1 from '../image/footerPic1.jpg';
import fpic2 from '../image/footerPic2.jpg';
import fpic3 from '../image/footerPic3.jpg';
import fpic4 from '../image/footerPic4.jpg';
import '../Style/Footer.css';
import {GoLocation} from 'react-icons/go';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

function Footer() {
  return (
    <footer class="footer">
      <div class="container">


        <div class="row">

          <div class="col-md pr-md-5 mb-4 mb-md-0">
            <h3>2in1 Kurdistan</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde facere repellendus, odio et iste voluptatum aspernatur</p>
            <ul class=" quick-info mb-4">
              <li><a href="/" class="d-flex align-items-center "> <span class="pr-2"><BsTelephone/> </span> 0750 555 60 70</a></li>
              <li><a href="/" class="d-flex align-items-center"> <span class="pr-2"><AiOutlineMail/> </span> 2in1@gmail.com</a></li>
            </ul>
          </div>

          <div class="col-md mb-4 mb-md-0">
            <h3>LOCATIONS</h3>
            <ul class=" locations">
              <li class="d-flex">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/BmYB3hAYQZk5FooP7'>Erbil,IRAQ English Village Next to Ethno Gym</a>
              </li>
              <li class="d-flex ">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/VPqawDT7Cc5oDt298'>Erbil,Ankawa, Gigantic Avenue Close to Apaya Cafe</a>
              </li>
              <li class="d-flex ">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/UxF9JYhnTaFW1HT6A'>Erbil,Pirmam District Close to Korek Telecom Office</a>
              </li>
              <li class="d-flex ">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/ziKPKdzR18gY2LBP8'>Erbil,Esporta Building On 100 meter Road, near Family Mall</a>
              </li>
              <li class="d-flex ">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/YaLCudLRcL338RMb7'>Erbil,Park View next to Wissam Argi</a>
              </li>
              <li class="d-flex ">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/SS4jso2QHoma2y9H9'>Al SULEYMANIYAH,Magma Square</a>
              </li>
              <li class="d-flex ">
              <div class="mr-4"> <GoLocation/> </div>
                <a href='https://goo.gl/maps/79ih1SNdXAWYLvhb9'>Baghdad,Mansour Mall</a>
              </li>
            </ul>
          </div>


          <div class="col-md-3 mb-4 mb-md-0">
            <h3>INSTAGRAM</h3>
            <div class="row Footer-pic">
              <div class="col-6">
                <a href="https://www.instagram.com/2in1kurdistan/"><img src={fpic1} alt="Image1" class="img-fluid"/></a>
                <a href="https://www.instagram.com/2in1kurdistan/"><img src={fpic2} alt="Image2" class="img-fluid "/></a>
              </div>
              <div class="col-6">
                <a href="https://www.instagram.com/2in1kurdistan/"><img src={fpic3} alt="Image3" class="img-fluid"/></a>
                <a href="https://www.instagram.com/2in1kurdistan/"><img src={fpic4} alt="Image4" class="img-fluid "/></a>
              </div>
            </div>
          </div>

        </div>
      </div>
  </footer>

  )
}

export default Footer