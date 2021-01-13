import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import ProductsPage from 'Pages/Products'
import AboutUsPage from 'Pages/AboutUs'
import GalleryPage from 'Pages/Gallery'

function App() {
  return (
    <Router>
      <Switch>
        <Router path='/'>
          <ProductsPage />
        </Router>

        <Router path='/about'>
          <AboutUsPage />
        </Router>
        
        <Router path='/gallery'>
          <GalleryPage />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
