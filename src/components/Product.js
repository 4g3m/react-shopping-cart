import React from 'react';
import client from '../lib/client';
import store from '../lib/store';

const Product = (props) => {

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (props.quantity === 0) {
      alert('Item is out of stock');
      return;
    }

    let product  = { id: props.id, title: props.title, price: props.price };
    store.dispatch({product, type: 'ADD_PRODUCT_TO_CART'});
  };

  const handleDeleteFromList = (e) => {
    e.preventDefault()
    let id = props.id
    client.delete(`/api/products/${id}`)
    .then(() => {
      store.dispatch({id, type: 'DELETE_PRODUCT'})
    });
  }

  const handleEditClick = (e) => {
    e.preventDefault()
    props.onEditClick()
  }

  return (
    <div className="product-details">
      <h3>{props.title}</h3>
      <p className="price">${props.price}</p>
      <p className="quantity">{props.quantity} Left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart"
           onClick={handleAddToCart}>
          Add to Cart
        </a>
        <a className="button edit"
           onClick={handleEditClick}>
          Edit
        </a>
      </div>
      <a className="delete-button"
         onClick={handleDeleteFromList} >
        <span>X</span>
      </a>
    </div>
  );
};

export default Product;
