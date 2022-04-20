// this shows how to create our own custom context provider
import React, { useState } from 'react'
import ProductContext from './ProductContext'

export default function ProductProvider(props) {
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
    
        getProductByID: (productId) => {
            return products.filter(p => p.id === productId)[0];
        },

        // mutator function allows to change the state
        addProduct: (productName, cost) => {
          let id = Math.floor(Math.random() * 100000 + 999999);
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

      // HIGHER ORDER COMPONENT
      return <ProductContext.Provider value={context}>
          {/* render all the children components */}
          {props.children}
      </ProductContext.Provider>
}