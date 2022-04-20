import React from 'react';
import ProductListingPage from './pages/ProductListingPage';
import ProductProvider from './ProductProvider';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage';


function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListingPage/>} />
          <Route path="/:productId" element={<ProductDetailsPage/>} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}



export default App;
