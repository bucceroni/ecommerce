import React from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cartActions";
//MATERIAL-UI
import { Container, Grid } from "@material-ui/core";
//COMPONENTS
import ProductCart from "../components/ProductCart";

class Cart extends React.Component {
  componentDidMount() {}

  render() {
    const { actions, cart } = this.props;

    return (
      <Container>
        Carrinho
        {cart.cartItems.length > 0 &&
          // [...new Set(cart.cartItems)].map(product => {
          cart.cartItems.map(product => {
            return (
              <Grid key={product.id} item>
                <ProductCart
                  product={product}
                  addCartItem={() => actions.addCartItem(product)}
                  deleteCartItem={() => actions.deleteCartItem(product)}
                />
              </Grid>
            );
          })}
        {/* {JSON.stringify(cart)} */}
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
