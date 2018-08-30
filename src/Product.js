import React from 'react';

const Product = props => (
  <div className="inner">
    <img alt={props.product.name} src={props.product.img} />
    <h3>{props.product.name}</h3>
    <p>{props.product.price}</p>
  </div>

);

export default Product;