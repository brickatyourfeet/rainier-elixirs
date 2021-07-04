import React, {useEffect} from "react";
import {Typography, Button, useMediaQuery, Grid} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";
import { Link, useLocation} from "react-router-dom";
import _ from 'lodash'

import background0 from "../../assets/ctabg0.jpg";
import background1 from "../../assets/ctabg1.jpg";
import background2 from "../../assets/ctabg2.jpg";
import background3 from "../../assets/ctabg3.jpg";
import services from "../../assets/1336599.jpg";
import service1 from "../../assets/1336599.jpg";
import service2 from "../../assets/1336599.jpg";
import service3 from "../../assets/1336599.jpg";
import landing from "../../assets/tempmobile.jpg";
import herbz from "../../assets/berrybasket.png";
import about from "../../assets/1336599.jpg";
import contact from "../../assets/1336599.jpg";
import consultation from "../../assets/1336599.jpg";
import mobileBackground from "../../assets/tempmobile.jpg";


//could do other or random ways for CTA background:
//use math.rand with set numbers of background images / names
//or use hooks (useState) for dynamic bgs

//const location = window.location.pathname.slice(1) !== '' || !backgroundEnum.hasOwnProperty(window.location.pathname.slice(1)) ? window.location.pathname.slice(1) : landing
//const location = useLocation()

const doTheBackground = () => {
  //const backgroundEnum = Object.freeze({service1, service2, service3, landing})
  const bgs = [background0, background1, background2, background3]
  console.log(bgs)
  console.log('service 1 ? ' + bgs[0])
  const rando = _.random(0, bgs.length - 1)
  console.log('rando = ' + rando)

  const currentBg = bgs[rando]
  console.log(currentBg)
  return `url(${currentBg})`
}

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
    //backgroundImage: `url(${background0})`
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
      style={{
        //backgroundImage: `url(${background0})`
        backgroundImage: `${doTheBackground()}` //this works, but should be done differently 
      }}
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