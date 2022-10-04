import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor:"#f5f5f5"
    //backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    // fontSize: theme.typography.body1.fontSize,
    fontSize: 16,
    padding: 12,
    color: '#013289',
    textTransform: 'capitalize',
    fontfamily: "'Nunito', sans-serif",
    //fontWeight: theme.typography.h6.fontWeight
    fontWeight: 500
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    // openRegisterDialog,
    // openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/about",
      name: "About",
      icon: <HowToRegIcon className="text-white" />
    },
    {
      link: "/services",
      name: "Our Services",
      icon: <HowToRegIcon className="text-white" />
    },
    {
      link: "/portfolio",
      name: "Portfolio",
      icon: <BookIcon className="text-white" />
    },
    {
      link: "/privacypolicy",
      name: "Privacy Policy",
      icon: <HowToRegIcon className="text-white" />
    },
    {
      link: "/contact",
      name: "Contact",
      icon: <HowToRegIcon className="text-white" />
    }
    // {
    //   link: "/Terms/condition",
    //   name: "Terms & Condition",
    //   icon: <HowToRegIcon className="text-white" />
    // },
    // {
    //   link: "/careers",
    //   name: "Careers",
    //   icon: <HowToRegIcon className="text-white" />
    // },
    // {
    //   link: "/blog",
    //   name: "Blog",
    //   icon: <BookIcon className="text-white" />
    // },

    // {
    //   name: "Register",
    //   onClick: openRegisterDialog,
    //   icon: <HowToRegIcon className="text-white" />
    // },
    // {
    //   name: "",
    //   onClick: openLoginDialog,
    //   icon: <LockOpenIcon className="text-white"
    //   />
    // }
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div >
            <a href="/">
            <img src={`${process.env.PUBLIC_URL}/logo.jpg`} style={{ height: 45, width: 250, marginTop:10 , marginLeft:50 }}
             alt="RandomTechie"/></a>
            {/* <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Random
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              Techie
            </Typography> */}
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large">
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="small"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="primary"
                    size="small"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string
  // openRegisterDialog: PropTypes.func.isRequired,
  // openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
