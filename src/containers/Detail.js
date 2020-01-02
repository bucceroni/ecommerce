import React from "react";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cartActions";
//MATERIAL-UI
import { Container, Typography } from "@material-ui/core";
//API
import mock from "../mock";
//COMPONENTS
import ProductDetail from "../components/ProductDetail";

class Detail extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    let getProduct = mock.filter(
      product => product.id === parseInt(this.props.match.params.id)
    );
    this.setState({
      product: getProduct[0]
    });
  }

  render() {
    const { product } = this.state;
    const { actions } = this.props;
    return (
      <Container>
        {product ? (
          <ProductDetail
            product={product}
            addCartItem={() => actions.addCartItem(product)}
          />
        ) : (
          <Typography gutterBottom variant="h5">
            Produto não encontrado
          </Typography>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Detail);
