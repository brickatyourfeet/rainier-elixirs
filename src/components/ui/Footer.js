import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import etsy from "../../assets/etsy.svg";
//will need to add newer etsy vector of same size

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.teal,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {  //will restructure this based on how many icons
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {   //for down to cell phone size
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {   //getting close to edge down to cell size
      right: "0.6em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/service1"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Service 1
              </Grid>
              <Grid
                item
                component={Link}
                to="/service2"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Service 2
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="/service3"
                className={classes.link}
              >
                Service 3
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                Herbz?
              </Grid>
              <Grid
                item
                component={Link}
                to="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                herbz1
              </Grid>
              <Grid
                item
                component={Link}
                to="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                herbz2
              </Grid>
              <Grid
                item
                component={Link}
                to="/herbz"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                herbz3
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About 2?
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About 3?
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="black footer slash"
        src={footerAdornment}
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.etsy.com/shop/rainierelixirs/"
          rel="noopener noreferrer"
          target="_blank" 
        >
          <img alt="etsy logo" src={etsy} className={classes.icon} />
        </Grid>
{/*
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
*/}
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com/rainierelixirs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}