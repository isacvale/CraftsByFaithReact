import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom'
import ProductsPage from 'Pages/Products'
import ProductList from 'Pages/ProductList'
// import AboutUsPage from 'Pages/AboutUs'
// import GalleryPage from 'Pages/Gallery'
// import HomePage from 'Pages/Home'

const App = () => {  
  return (
      <Router>
        <Switch>

          <Route path='/products'>
            <ProductsPage />
          </Route>

          <Route path='/'>
            <ProductList />
          </Route>

          {/* <Route path='/about'>
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
          </Route> */}
          
        </Switch>
      </Router>
  );
}

export default App;
