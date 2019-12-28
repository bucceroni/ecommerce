import React from "react";
//REACT-ROUTER
import { Link } from "react-router-dom";
//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//UTILS
import formatCurrency from "../utils/formatCurrency";
import formatImage from "../utils/formatImage";

const useStyles = makeStyles(theme => ({
  img: {
    objectFit: "contain"
  },
  spacing: {
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    margin: 10,
    minWidth: 210
  }
}));

const ProductDetail = props => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.spacing}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item md={6} xs={12}>
        <CardMedia
          className={classes.img}
          component="img"
          alt={props.product.name}
          height="210"
          image={formatImage(props.product.image)}
          title={props.product.name}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography
          className={classes.spacing}
          component="p"
          gutterBottom
          variant="h5"
        >
          {props.product.name}
        </Typography>
        <Typography component="p" variant="body1">
          {props.product.brand}
        </Typography>
        <Typography component="p" variant="subtitle2" color="textSecondary">
          {formatCurrency(props.product.price, props.product.currency)}
        </Typography>
        <Typography component="p" variant="body1">
          {props.product.store}
        </Typography>
        <Typography component="p" variant="subtitle2" color="textSecondary">
          {props.product.description}
        </Typography>
        <Divider className={classes.spacing} />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              to={`/cart`}
              component={Link}
              onClick={props.setCartItem}
            >
              Comprar Agora
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={props.setCartItem}
            >
              Adicionar ao Carrinho
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
