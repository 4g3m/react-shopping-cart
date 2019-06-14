import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductsList from '../components/ProductsList';
import store from '../lib/store';

describe('ProductsList', () => {
  let editableProducts;
  let wrapper; 

  beforeEach( () => {
    editableProducts  = store.getState().products;
    wrapper = shallow(
      <ProductsList products={editableProducts} />
    );
  });

  it('has a <div> `product-listing` element', () => {
    let div = wrapper.find('div.product-listing').first()
    expect(
      div.length
      ).toEqual(1);
  });

  it('EditableProduct count agrees with number of `products`', () => {
  let editableProducts = store.getState().products;
    expect(
      wrapper.find('EditableProduct').length
    ).toEqual(editableProducts.length)
  });
});
