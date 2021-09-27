import React from 'react';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Product from './Product';
import Account from './Account';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch,Route,Redirect} from 'react-router-dom';

const App=()=>{
  return(
    <>
       <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;