import React from "react";
import mock from "../mock";

import { Container } from "@material-ui/core";

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
    return (
      <Container>
        <h1>Detalhes do Produto</h1>
        <ProductDetail product={this.state.product} />
      </Container>
    );
  }
}

export default Detail;
