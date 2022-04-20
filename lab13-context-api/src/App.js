import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';

// using context in function based component
function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "Brown Rice Cookies",
      cost: 9.99
    },
    {
      id: 2,
      product_name: "Soya Bean Milkshake",
      cost: 12.50
    },
    {
      id: 3,
      product_name: "Mock Meat Burger",
      cost: 15.00
    }
  ])

  const context = {
    // all functions in the context must be arrow function

    // an accessor function that allows us to get all products
    products: () => {
      return products;
    },

    // mutator function allows to change the state
    addProduct: (productName, cost) => {
      let id = Math.floor(Math.random() * 100000 + 999999);
      // this.setState({
      //   products: [...this.state.products, {
      //     'id': id,
      //     'product_name': productName,
      //     'cost': cost
      //   }]
      // })

      setProducts([
        ...products,
        {
          'id': id,
          'product_name': productName,
          'cost': cost
        }
      ])
    }
  }

  return (
    <ProductContext.Provider value={context}>
      <div>
        <h1>My Catalog</h1>
        <ProductListing />
        <AddProduct />
      </div>

    </ProductContext.Provider>
  );
}



export default App;
