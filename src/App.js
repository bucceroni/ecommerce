import React from "react";
import pagarme from "pagarme/browser";
import mock from "./mock";
import "./App.css";

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
      <div className="App">
        <header className="App-header">
          {mock.map(item => {
            return (
              <div key={item.productId}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
