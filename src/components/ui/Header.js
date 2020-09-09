import React from 'react'
import {AppBar, Toolbar, useScrollTrigger, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  headerMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em" //offsetting from logo
  },
  logo: {
    height: "8em",
    marginTop: "0.3em",
    marginBottom: "-1em"
  }
}))

export default function Header(props){

  const classes = useStyles()

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <img className={classes.logo} src={logo} alt="rainier elixirs logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.headerMargin} />
    </React.Fragment>
  )
}