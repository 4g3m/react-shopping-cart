import React, { Component } from 'react';
import store from '../lib/store';
import CartItemList from './CartItemList';

class ShoppingCart extends Component {

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  parseCartContents = () => {
    const cartItems = store.getState().cart;
    const itemNumbers = cartItems.map( item => item.id)
                                 .reduce( (count, item) => {
                                    if (count[item]) {
                                       count[item] += 1;
                                     } else {
                                       count[item] = 1;
                                     }
                                     return count;
                                   }, {});
    const lineItems = Object.keys(itemNumbers).map( id => {
      let product = cartItems.find( item => item.id === id );
      return {...product, quantity: itemNumbers[id] };
    })

    return lineItems;
  }

  renderedCart = ( (input = this.parseCartContents()) => {
    return (input.length > 0) ?
      (
        <CartItemList
          items={input}
        />
      )
    :
      (
        <div>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
        </div>  
      )
  })

  render() {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        {this.renderedCart()}
      </div>
    )
  }
}

export default ShoppingCart;
