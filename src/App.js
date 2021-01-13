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

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <ProductsPage />
        </Route>

        <Route path='/about'>
          <AboutUsPage />
        </Route>
        
        <Route path='/gallery'>
          <GalleryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
