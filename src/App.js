import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import ProductDetail from "./containers/ProductDetail";

const App = () => (
  <div>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/product-detail" component={ProductDetail} />
    </Router>
  </div>
);

export default App;
