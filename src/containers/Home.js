import React from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cartActions";
//MATERIAL-UI
import { Container, Grid } from "@material-ui/core";
//API
import mockItems from "../mock/items";
//COMPONENTS
import ProductCard from "../components/ProductCard";

class Home extends React.Component {
  render() {
    const { actions } = this.props;
    return (
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {mockItems.length > 0 &&
            mockItems.map(product => {
              return (
                <Grid key={product.id} item>
                  <ProductCard
                    product={product}
                    addCartItem={() => actions.addCartItem(product)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Home);
