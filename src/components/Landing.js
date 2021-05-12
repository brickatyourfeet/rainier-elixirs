import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {Grid, Button, Typography, useMediaQuery, Card, CardContent, CardMedia}  from "@material-ui/core";
import ButtonArrow from "../components/ui/ButtonArrow";

import CallToAction from "./ui/CallToAction";

import service1Icon from "../assets/tincture.svg";
import service2Icon from "../assets/tea-bag.svg";
import service3Icon from "../assets/green-tea.svg";
import leaf1Icon from "../assets/leaf1.svg"
import pongTemp from "../assets/pongtemp.svg"
import herbzBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles(theme => ({
  animation: {   //can use lottie or a gif, or just an image/svg
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  consultationButton: {
    ...theme.typography.consultation,
    backgroundColor: theme.palette.common.red,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.red
  },
  subtitle: {
    marginBottom: "1em"
  },
  //may need to change margin bottom XS for icons / text
  //may need to make margin changes when updating different svgs
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  herbzBackground: {
    backgroundImage: `url(${herbzBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  herbzCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%"
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
}));

export default function Landing(props) {
  const classes = useStyles();
  const theme = useTheme();
  //media query variables for checking screen size
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {" "}
        {/*-----Hero-----*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Line 1 is longer than line 2 maybe?
              <br />
              Line 2
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/consultation"
                  className={classes.consultationButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}  //5 will clear the highlight since there isn't a 5th
                >
                  Consultation
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/herbz"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.teal}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        {/*-----
          <Grid sm item className={classes.animation}>
            <img
              className={classes.icon}
              alt="leaf 1 icon"
              src={pongTemp}
              height="100%"
              width="100%"
            />
          </Grid>
          -----*/}
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Service 1-----*/}
        {/*--grid container on left, center when small--*/}
        <Grid
          container
          direction="row" 
          justify={matchesSM ? "center" : undefined} 
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }}
          >         {/*-----1 grid item for text-----*/}
            <Typography variant="h4">Service 1</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Service 1
            </Typography>
            <Typography variant="subtitle1">
              Service 1 description{" "}
              <span className={classes.specialText}>special text.</span>
            </Typography>
            <Button
              component={Link}
              to="/service1"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);         //setValue in the navbar
                props.setSelectedIndex(1); //selected index for the dropdown as well
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.teal}
              />
            </Button>
          </Grid>
          <Grid item> {/*-----1 grid item for image-----*/}
            <img
              className={classes.icon}
              alt="service 1 icon"
              src={service1Icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Service 2-----*/}
        {/*--grid container on right (flex-end), center when small--*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">Service 2</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Service 2 description
            </Typography>
            <Typography variant="subtitle1">
              Service 2 part 2 desc
              {matchesSM ? null : <br />}with a break if necessary.
            </Typography>
            <Button
              component={Link}
              to="/service2"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.teal}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="service 2 icon"
              src={service2Icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Service 3-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">Service 3</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Service 3 descript
            </Typography>
            <Typography variant="subtitle1">
              service 3 description 2
            </Typography>
            <Button
              component={Link}
              to="/service3"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.teal}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="service 3 icon"
              src={service3Icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Herbz-----*/}
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          {/*-----Card content is the top portion, actions is the buttons etc-----*/}
          <Card className={classes.herbzCard}>
          {/*--https://material-ui.com/components/cards/--*/}
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    Herbz
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Herbz descript 1
                  </Typography>
                  <Button
                    component={Link}
                    to="/herbz"
                    className={classes.learnButtonHero}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.teal}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.herbzBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Information Block-----*/}
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit"
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About
                </Typography>
                <Typography variant="subtitle2">About descript 1</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right"
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact
                </Typography>
                <Typography variant="subtitle2">
                  Say hiya buddy!{" "}
                  <span role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    className={classes.learnButton}
                    onClick={() => props.setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----CTA-----*/}
        <CallToAction setValue={props.setValue} setBgImgNum={props.setBgImgNum} bgImg0000={props.bgImg0000}/>
      </Grid>
    </Grid>
  );
}