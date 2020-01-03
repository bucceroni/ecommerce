import React from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cartActions";
//MATERIAL-UI
import { Container, Button, Grid, Typography } from "@material-ui/core";
//COMPONENTS
import ProductCart from "../components/ProductCart";
//UTILS
import formatCurrency from "../utils/formatCurrency";

class Cart extends React.Component {
  componentDidMount() {}

  render() {
    const { actions, cart } = this.props;

    return (
      <Container>
        <Typography variant="h6">Meu Carrinho</Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {cart.cartItems.length > 0 &&
            cart.cartItems.map(product => {
              return (
                <Grid key={product.id} item xs={12}>
                  <ProductCart
                    product={product}
                    addCartItem={() => actions.addCartItem(product)}
                    deleteCartItem={() => actions.deleteCartItem(product)}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12}>
            {cart.cartItems.length > 0 ? (
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={() => actions.cartCheckout(cart.cartItems)}
              >
                Finalizar pedido:{" "}
                {formatCurrency(
                  cart.cartItems.reduce(
                    (acc, cur) => acc + cur.total * cur.price,
                    0
                  ),
                  "BRL"
                )}
              </Button>
            ) : (
              <Typography variant="p">
                Você ainda não escolheu nenhum produto
              </Typography>
            )}
          </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
