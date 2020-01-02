import React from "react";
//REACT-ROUTER
import { Link } from "react-router-dom";
//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//UTILS
import formatCurrency from "../utils/formatCurrency";
import formatImage from "../utils/formatImage";

const useStyles = makeStyles({
  card: {
    width: 345
  },
  img: {
    paddingTop: 20,
    objectFit: "contain"
  }
});

const ProductCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised={true}>
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
        <Button
          size="small"
          color="primary"
          to={`/detail/${props.product.id}`}
          component={Link}
        >
          Detalhes
        </Button>
        <Button size="small" color="primary" onClick={props.addCartItem}>
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
