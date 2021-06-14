import React from 'react';
import Navbar from './components/elements/Navbar'
import ProductA from './components/Productinfo/ProductA';
import './styles/App.scss';
import {Provider} from 'react-redux';
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddProduct from './components/Productinfo/AddProduct';
import EditProduct from './components/Productinfo/EditProduct';




function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
      <div className="container">
      <div className="py-3"> 
      <Switch>
        <Route exact path="/" component={ProductA} />
        <Route exact path="/create" component={AddProduct} />
        <Route exact path="/edit/:id" component={EditProduct} />
      </Switch>

      </div>
    </div>    
  </div>
      </Router>

    </Provider>
  );
}

export default App;
