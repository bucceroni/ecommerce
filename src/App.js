import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";
import Detail from "./containers/Detail";
import Cart from "./containers/Cart";

const App = () => (
  <div>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route exact path="/cart" component={Cart} />
    </Router>
  </div>
);

export default App;
