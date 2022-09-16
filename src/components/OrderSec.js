import React from "react";
import delivery from "../image/order2.jpg";
import talabat from "../image/talabat.jpg";
import toters from "../image/toters.jpg";
import tiptop from "../image/tiptop.jpg";
import lezoo from "../image/lezoo.jpg";
import { Container, Row, Col } from "reactstrap";
import "../Style/OrderSec.css";

const OrderSec = () => {
  return (
    <section id="order">
      <Container>
        <Row>
          <Col lg="5" md="5">
            <img src={ delivery} alt="deliveryPic" className="mb-3" />
          </Col>

          <Col lg="6" md="6">
            <div className="delivery-title pl-4">
                <h2>Order Your Favorite</h2>
              <h4>Quick delivery at your Doorstep,Now you can Order in:</h4>
            </div>

            <div className="delivery">
              <div className="delivery-app1 pl-5 d-flex align-items-center">
                 <a href="https://iraq.talabat.com/">
                    <div className="app">
                     <span>
                       <img src={talabat} alt="talabat"/>
                     </span>
                        <h3>Talabat</h3>
                     </div>
                  </a>

               <a href="https://www.totersapp.com/">
                   <div className="app">
                    <span>
                      <img src={toters} alt="toters" />
                    </span>
                      <h3>Toters</h3>
                   </div>
                </a>
              </div>


              <div className="delivery-app1  pl-5 mt-4 d-flex align-items-center ">

              <a href="https://trytiptop.app/en">
                <div className="app">
                  <span>
                  <img src={tiptop} alt="tiptop"/>
                  </span>
                  <h3>TipTop</h3>
                </div>
              </a>

              <a href="https://lezzoo.com/?fbclid=IwAR0TxPocKMJo7MD2PsdyiR2nUhlvEe9RZWha96OlTPkf3Pl2kn5lceHNYSg">
                <div className="app">
                  <span>
                  <img src={lezoo} alt="lezoo"/>
                  </span>
                  <h3>Lezoo</h3>
                </div>
             </a>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderSec;