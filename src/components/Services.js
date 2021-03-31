import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "./ui/ButtonArrow";
import service1Icon from "../assets/tincture.svg";
import service2Icon from "../assets/tea-bag.svg";
import service3Icon from "../assets/green-tea.svg";


const useStyles = makeStyles(theme => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  }
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em"
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
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
        style={{marginTop: matchesSM ? "1em" : "5em"}}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            width: matchesSM ? undefined : "35em"
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
            width="250em"
          />
        </Grid>
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
            width="250em"
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
        justify={matchesSM ? "center" : "flex-end"}
        className={classes.serviceContainer}
        style={{marginBottom: "10em"}}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
            marginTop: matchesSM ? "1em" : "5em"
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
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img
            className={classes.icon}
            alt="service 3 icon"
            src={service3Icon}
            width="250em"
          />
        </Grid>
      </Grid>

      </Grid>
    </Grid>
  );
}







