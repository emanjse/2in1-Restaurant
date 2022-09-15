import React,  {useState, useEffect } from "react";
import {burgerProducts,pizzaProducts,desertProducts,drinkProducts,offerProducts} from "../components/Data";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "reactstrap";
import '../Style/Menu.css';


const Menu = () => {

   const [filter, setFilter] = useState('burger')
  const [products, setPrducst] = useState(offerProducts)

  useEffect(()=>{
   if(filter === 'burger'){
      setPrducst(burgerProducts)
   }
   if(filter === 'pizza'){
      setPrducst(pizzaProducts)
   }
   if(filter === 'desert'){
      setPrducst(desertProducts)
   }
   if(filter === 'drink'){
      setPrducst(drinkProducts)
   }
   if(filter === 'offer'){
      setPrducst(offerProducts)
   }
  },[filter]);



  return (
   <section>
     <Container>

<div class="Menu">
    <h3>Our Menu</h3>
</div>


       <Row>

         <Col lg="12" className="text-center my-5 ">
           <button className={`filter-btn ${ filter === 'offer' ? 'active__btn' : ""}`}onClick={() => setFilter("offer")}>Offer </button>
           <button className={`filter-btn ${filter === "burger" ? "active__btn" : ""}`}onClick={() => setFilter("burger")}>Burger</button>
           <button className={`filter-btn ${filter === "pizza" ? "active__btn" : ''}`}onClick={() => setFilter("pizza")}>Pizza</button>
           <button className={`filter-btn ${filter === "desert" ? "active__btn" : ""}`}onClick={() => setFilter("desert")}>Desert</button>
           <button className={`filter-btn ${ filter === "drink" ? "active__btn" : ""}`}onClick={() => setFilter("drink")}>Drink</button>
         </Col>

         {products.map((item) => (
           <Col lg="3"  md='4' sm='6' xs='6' key={item.id} className="mb-4 ">
             {" "}
             <ProductCard item={item} />
           </Col>
         ))}
       </Row>
     </Container>
   </section>
 );
};





































export default Menu;

