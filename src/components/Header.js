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
// import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import MoreIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  main: {
    paddingTop: 80
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: theme.spacing(2)
    
  },
  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.white, 0.25)
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto"
  //   }
  // },
  // searchIcon: {
  //   width: theme.spacing(7),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // inputRoot: {
  //   color: "inherit"
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 7),
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: 200
  //   }
  // },
  // sectionDesktop: {
  //   display: "none",
  //   [theme.breakpoints.up("md")]: {
  //     display: "flex"
  //   }
  // },
  // sectionMobile: {
  //   display: "flex",
  //   [theme.breakpoints.up("md")]: {
  //     display: "none"
  //   }
  // }
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
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              to="/"
              component={Link}
            >
              <HomeIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Ecommerce
            </Typography>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Pesquisar"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div> */}
            <div className={classes.grow} />
            {/* <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge
                  badgeContent={cart.cartItems.length}
                  color="secondary"
                  to="/cart"
                  component={Link}
                >
                  <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}> */}
            <IconButton color="inherit">
              <Badge
                badgeContent={cart.cartItems.length}
                color="secondary"
                to="/cart"
                component={Link}
              >
                <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
              </Badge>
            </IconButton>
            {/* </div> */}
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
