import React, { Component } from 'react';
import store from '../lib/store';
import client from '../lib/client';

class ToggleableAddProduct extends Component {

  state = {
      title: '',
      price: '',
      quantity: '',
  }

  resetState = () => {
    this.setState({
      title: '',
      price: '',
      quantity: '',
    })
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    let newProduct = {...this.state };

    client.post('/api/products', newProduct)
      .then(product => {
        store.dispatch({product, type: 'ADD_PRODUCT'})
    })

    this.resetState();
  }


  onValueChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    this.setState({
      [ name ]: value,
    })
  }

  render() {
   return (
     <div className="add-form visible">
       <p><a className="button add-product-button">Add A Product</a></p>
       <h3>Add Product</h3>
       <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input name="title" type="text" id="product-name" 
            value={this.state.title}
            onChange={this.onValueChange}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input name="price" type="text" id="product-price" 
            value={this.state.price}
            onChange={this.onValueChange} />
           </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input name="quantity" type="text" id="product-quantity" 
            value={this.state.quantity}
            onChange={this.onValueChange}/>
        </div>

        <div className="actions form-actions">
          <a className="button"
            id='add'
            onClick={this.onFormSubmit} >
            Add</a>
          <a className="button"
             onClick={this.resetState} >
            Cancel</a>
        </div>
      </form>
    </div>
    )
  }
 }

export default ToggleableAddProduct;
