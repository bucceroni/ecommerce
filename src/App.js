import React from "react";
//REACT-ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//CONTAINERS
import Header from "./components/Header";
import Home from "./containers/Home";
import Detail from "./containers/Detail";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import NotFound from "./containers/NotFound";

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
