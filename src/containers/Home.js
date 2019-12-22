import React from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cartActions";
//MATERIAL-UI
import Grid from "@material-ui/core/Grid";

import pagarme from "pagarme/browser";
import mock from "../mock";

import ProductCard from "../components/ProductCard";

class Home extends React.Component {
  componentDidMount() {
    pagarme.client
      .connect({ api_key: process.env.REACT_APP_API_KEY })
      .then(client => client.transactions.all())
      .then(transactions => console.log("transactions", transactions))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {mock.length > 0 &&
            mock.map(product => {
              return (
                <Grid key={product.id} item>
                  <ProductCard
                    product={product}
                    setCartItem={() => actions.setCartItem(product)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(mapDispatchToProps)(Home);
