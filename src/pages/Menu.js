import React,  {useState, useEffect } from "react";
import {burgerProducts,pizzaProducts,desertProducts,drinkProducts,offerProducts} from "../components/Data";
import ProductCard from "../components/ProductCard";
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
     <div class="container">

<div class="Menu">
    <h3>Our Menu</h3>
</div>


       <div class="row">

         <div className="col-lg-12 text-center my-5 ">
           <button className={`filter-btn ${ filter === 'offer' ? 'active__btn' : ""}`}onClick={() => setFilter("offer")}>Offer </button>
           <button className={`filter-btn ${filter === "burger" ? "active__btn" : ""}`}onClick={() => setFilter("burger")}>Burger</button>
           <button className={`filter-btn ${filter === "pizza" ? "active__btn" : ''}`}onClick={() => setFilter("pizza")}>Pizza</button>
           <button className={`filter-btn ${filter === "desert" ? "active__btn" : ""}`}onClick={() => setFilter("desert")}>Desert</button>
           <button className={`filter-btn ${ filter === "drink" ? "active__btn" : ""}`}onClick={() => setFilter("drink")}>Drink</button>
         </div>

         {products.map((item) => (
           <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4 ">
             {" "}
             <ProductCard item={item} />
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};





































export default Menu;

