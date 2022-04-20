import React from 'react'
import ProductContext from './ProductContext'

export default class AddProduct extends React.Component {
    // set which context to use
    static contextType = ProductContext;

    state = {
        product_name: "",
        cost: 0
    }

    onUpdateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddProduct = () => {
        this.context.addProduct(this.state.product_name, this.state.cost);
    }

    render() {
        return <React.Fragment>
            <div>
                <label>Product Name:</label>
                <input type="text" onChange={this.onUpdateFormField} name="product_name" value={this.state.product_name} />
            </div>
            <div>
                <label>Cost:</label>
                <input type="text" onChange={this.onUpdateFormField} name="cost" value={this.state.value} />
            </div>
            <button onClick={this.onAddProduct}>Add Product</button>
        </React.Fragment>
    }
}