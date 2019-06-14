import React from 'react'
import client from '../lib/client'
import store from '../lib/store'

class EditProductForm extends React.Component {

    state = {
      product: this.props.product
    }

    handleEditInputChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      this.setState({
        product: Object.assign({}, this.state.product, {[name]: value}),
      })
    }

    handleEditSubmit = () => {
      client.put(`/api/products/${this.props.id}`, {...this.state.product})
      .then((product) => {
        store.dispatch({product, type:'UPDATE_PRODUCT'})
        });
      this.props.onEditFormToggleClick()
    }

    handleEditCancel = () => {
      this.props.onEditFormToggleClick()
    }

    render() {
        return (
            <div className="edit-form">
            <h3>Edit Product</h3>
            <form>
              <div className="input-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name='title' onChange={this.handleEditInputChange} value={this.state.product.title} />
              </div>

              <div className="input-group">
                <label htmlFor="product-price">Price</label>
                <input type="text" id="product-price" name='price' onChange={this.handleEditInputChange} value={this.state.product.price} />
              </div>

              <div className="input-group">
                <label htmlFor="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" name='quantity'onChange={this.handleEditInputChange} value={this.state.product.quantity} />
              </div>

              <div className="actions form-actions">
                <a className="button" onClick={this.handleEditSubmit} >Update</a>
                <a className="button" onClick={this.handleEditCancel}>Cancel</a>
              </div>
            </form>
          </div>
        )
    }
}

export default EditProductForm
