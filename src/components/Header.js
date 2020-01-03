import React from "react";
//REDUX
import { connect } from "react-redux";
//REACT ROUTER
import { Link } from "react-router-dom";
//MATERIAL-UI
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  main: {
    paddingTop: 80
  },
  title: {
    color: "#FFFFFF",
    textDecoration: "none"
  }
});

class Header extends React.Component {
  render() {
    const { classes, cart } = this.props;

    return (
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              to="/"
              component={Link}
            >
              <HomeIcon />
            </IconButton>
            <Typography
              variant="h6"
              to="/"
              className={classes.title}
              component={Link}
            >
              Ecommerce
            </Typography>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <Badge
                badgeContent={cart.cartItems.reduce(
                  (acc, cur) => acc + cur.total,
                  0
                )}
                color="secondary"
                to="/cart"
                component={Link}
              >
                <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.main} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
