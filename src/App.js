import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom'
import ProductsPage from 'Pages/Products'
import AboutUsPage from 'Pages/AboutUs'
import GalleryPage from 'Pages/Gallery'
import HomePage from 'Pages/Home'
import ProductList from 'Pages/ProductList'

const App = () => {  
  return (
      <Router>
        <Switch>
          <Route path='/about'>
            <AboutUsPage />
          </Route>
          
          <Route path='/gallery'>
            <GalleryPage />
          </Route>

          <Route path='/products'>
            <ProductsPage />
          </Route>

          <Route path='/category/:alias'>
            <ProductList />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>
          
        </Switch>
      </Router>
  );
}

export default App;
