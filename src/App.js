import React from "react";
import Grid from "@material-ui/core/Grid";

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
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
          {mock.length > 0 &&
            mock.map(item => {
              return (
                <Grid item>
                  <ProductCard key={item.productId} product={item} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default App;
