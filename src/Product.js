import React from 'react';
export default  function Product(props){
    return(
        <div className="single_product">
            <h1>{props.product.title}</h1>
            <p>{props.product.desc}</p>
            <h3>${props.product.price}</h3>
        </div>
    )
};