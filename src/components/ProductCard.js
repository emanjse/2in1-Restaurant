import React from 'react';
import '../Style/ProductCard.css';

const ProductCard = (props)=> {
    const {title,imgUrl,price} =props.item

    return (
        <div className="single__product  ">

          <div className="product__img d-flex align-item-center justify-content-center  ">
            <img src={imgUrl} alt="product"  className="mt-2 " width={170}/>
          </div>
          <h6 className='pt-3'>{title}</h6>
          <div className="product__price pb-2">
            <h6> Price:<span> {price}</span></h6>
         </div>

        </div>
      );
    };


export default ProductCard;