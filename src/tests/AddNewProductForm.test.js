import React from 'react';
import { shallow } from 'enzyme';
import ToggleableAddProduct from '../components/ToggleableAddProduct';

describe('ToggleableAddProduct', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ToggleableAddProduct />);
  });
  
  it('renders on the page', () => {
    let addForm = wrapper.find('.add-form');

    expect(addForm.length).toEqual(1);
  });

  it('renders title input', () => {
    let nameInput = wrapper.find("[name='title']");
    expect(nameInput.length).toEqual(1);
  });

  it('renders quantity input', () => {
    let quantityInput = wrapper.find("[name='quantity']");
    expect(quantityInput.length).toEqual(1);
  });

  it('renders price input', () => {
    let priceInput = wrapper.find("[name='price']");
    expect(priceInput.length).toEqual(1);
  });

  it('changes the value in the inputs as user types', () => {
    let titleInput = wrapper.find("[name='title']");
    
    titleInput.simulate('change', {target: {name: 'title', value: 'car'}});
    expect(wrapper.state().title).toEqual('car');
  });

  it('calls the onSubmit callblack when user submits the add product form', () => {
    // const func = jest.fn();
    // let wrapper = shallow(<ToggleableAddProduct onClick={func} />);
    // let addProductButton = wrapper.find("#add");

    // addProductButton.simulate('click', {preventDefault: () => {}});

    // expect(func.mock.calls.length).toEqual(1);
  });

  it('on form submit is called with a new product object', () => {
    // let func = jest.fn();
    // let wrapper = shallow(<ToggleableAddProduct onClick={func} />);

    // let titleInput = wrapper.find("[name='title']");
    // titleInput.simulate('change', {target: {name: 'title', value: 'car'}});
    
    // let quantityInput = wrapper.find("[name='quantity']");
    // quantityInput.simulate('change', {target: {name: 'quantity', value: '45'}});
    
    // let priceInput = wrapper.find("[name='price']");
    // priceInput.simulate('change', {target: {name: 'price', value: 'free'}});
    
    // const addProductButton = wrapper.find("#add");
    // addProductButton.simulate('click', {preventDefault: () => {}});
    
    // expect(func.mock.calls[0][0]).toEqual({title: 'car', quantity: '45', price: 'free'});
  });

  it('onSubmit resets the input fields to blank fields', () => {
    // let wrapper = shallow(<ToggleableAddProduct onAddProduct={Function.prototype} />);

    // let titleInput = wrapper.find("[name='title']");
    // titleInput.simulate('change', {target: {name: 'title', value: 'car'}});

    // const addProductButton = wrapper.find("#add");
    // addProductButton.simulate('click', {preventDefault: () => {}});

    // expect(wrapper.state().title).toEqual('');
  });
});
