import React from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cartActions";
//MATERIAL-UI
import {
  Container,
  CircularProgress,
  Grid,
  Typography
} from "@material-ui/core";
//UTILS
import formatCurrency from "../utils/formatCurrency";
//API
import mockRecipients from "../mock/recipients";

class Home extends React.Component {
  render() {
    const { cart, classes } = this.props;
    return (
      <Container>
        <Typography variant="h6">Checkout</Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {cart.payables.length > 0 ? (
            <div>
              <Typography
                style={{ marginTop: 30 }}
                component="p"
                gutterBottom
                variant="h6"
              >
                Produtos
              </Typography>
              {cart.checkout.items.map(item => {
                return (
                  <div>
                    <Typography component="p" variant="body1">
                      {item.title}
                    </Typography>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      {item.quantity} X{" "}
                      {formatCurrency(item.unit_price / 100, "BRL")}
                    </Typography>
                  </div>
                );
              })}
              <Typography
                style={{ marginTop: 30 }}
                component="p"
                gutterBottom
                variant="h6"
              >
                Recebedores
              </Typography>
              {cart.payables.map(item => {
                return (
                  <div>
                    <Typography component="p" variant="body1">
                      {mockRecipients[item.recipient_id]}
                    </Typography>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      {formatCurrency(item.amount / 100, "BRL")}
                    </Typography>
                  </div>
                );
              })}
              <Typography
                style={{ marginTop: 30 }}
                component="p"
                gutterBottom
                variant="h6"
              >
                Total {formatCurrency(cart.checkout.paid_amount / 100, "BRL")}
              </Typography>
            </div>
          ) : (
            <CircularProgress style={{ marginTop: 30 }} />
          )}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
