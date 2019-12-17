import React from "react";
import pagarme from "pagarme/browser";
import mock from "./mock";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

class App extends React.Component {
  componentDidMount() {
    pagarme.client
      .connect({ api_key: process.env.REACT_APP_API_KEY })
      .then(client => client.transactions.all())
      .then(transactions => console.log(transactions))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <Header />
        {mock.length > 0 && mock.map(item => {
          return (
             <ProductCard key={item.productId} product={item}/>
          );
        })}
      </div>
    );
  }
}

export default App;
