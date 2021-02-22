import React from "react";
import {Typography, Button, useMediaQuery, Grid} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";

import background from "../../assets/1336599.jpg";
import mobileBackground from "../../assets/tempmobile.jpg";

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit" //this will get rid of parallax (static) bg
    }
  },
  consultationButton: {
    ...theme.typography.consultation,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.red,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}));

export default function CallToAction(props) {
  //refactor to call media queries smallScreen and extraSmallScreen
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              CTA
              <br />
              Here it is
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Some more words
            </Typography>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              <Button
                component={Link}
                to="/herbz"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.teal}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/consultation"
          variant="contained"
          className={classes.consultationButton}
          onClick={() => props.setValue(5)}
        >
          Consultation
        </Button>
      </Grid>
    </Grid>
  );
}