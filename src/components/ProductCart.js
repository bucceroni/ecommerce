import React from "react";
//REACT-ROUTER
// import { Link } from "react-router-dom";
//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import Divider from "@material-ui/core/Divider";
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
  card: {
    width: "100%",
  },
  info: {
    marginLeft: 20
  },
  total: {
    fontFamily: "Roboto",
    margin: 20
  }
}));

const ProductCart = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card} raised={true}>
      <Grid
        className={classes.spacing}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item md={4} xs={12}>
          <CardMedia
            className={classes.img}
            component="img"
            alt={props.product.name}
            height="210"
            image={formatImage(props.product.image)}
            title={props.product.name}
          />
        </Grid>

        <Grid className={classes.info} item md={4} xs={12}>
          <Typography
            className={classes.spacing}
            component="p"
            gutterBottom
            variant="h5"
          >
            {props.product.name}
          </Typography>
          <Typography component="p" variant="body1">
            {props.product.brand} | {props.product.store}
          </Typography>
          <Typography component="p" variant="subtitle2" color="textSecondary">
            Valor unitário:{" "}
            {formatCurrency(props.product.price, props.product.currency)}
          </Typography>
          <Typography component="p" variant="subtitle2" color="textSecondary">
            Valor total:{" "}
            {formatCurrency(
              props.product.price * props.product.total,
              props.product.currency
            )}
          </Typography>

          <Button
            className={classes.spacing}
            variant="contained"
            color="primary"
            onClick={props.addCartItem}
          >
            +
          </Button>
          <span className={classes.total}>{props.product.total}</span>
          <Button
            className={classes.spacing}
            variant="contained"
            color="secondary"
            onClick={props.deleteCartItem}
          >
            -
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCart;
