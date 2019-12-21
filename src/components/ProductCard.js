import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import formatCurrency from "../utils/formatCurrency";
import formatImage from "../utils/formatImage";

const useStyles = makeStyles({
  card: {
    width: 345
  },
  img: {
    objectFit: "contain"
  }
});

const ProductCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          alt={props.product.name}
          height="200"
          image={formatImage(props.product.image)}
          title={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {formatCurrency(props.product.price, props.product.currency)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" to="/product-detail" component={Link}>
          Detalhes
        </Button>
   
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
