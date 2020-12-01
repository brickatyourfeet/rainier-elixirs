import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Link } from 'react-router-dom'

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
  headerMargin: { //these will need to change as logos do
    ...theme.mixins.toolbar,
    marginBottom: "4.5em", //offsetting from logo
    [theme.breakpoints.down('md')] : {
      marginBottom: "2em",
    },
    [theme.breakpoints.down('xs')] : {
      marginBottom: ".85em",
    }
  },
  logo: {  //these will need to change as logos do
    height: "9em",
    marginTop: "0.3em",
    marginBottom: "-1em",
    [theme.breakpoints.down('md')] : {
      height: '6em'
    },
    [theme.breakpoints.down('xs')] : {
      height: '5em'
    }
  },
  logoContainer: {
    //to get rid of default button padding
    //padding: 0 
    //to get rid of opacity when hovering over logo
    // "&:hover": {
    //   backgroundColor: 'transparent'
    // }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
     minWidth: 10,
     marginLeft: '25px'
  },
  button: {
    ...theme.typography.consultation,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    fontHeight: '45px',
  },
  menu: {
    backgroundColor: theme.palette.common.red,
    color: 'white',
    //borderRadius: '0px'  //can do this to make edges of menu sharp
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
      // backgroundColor: 'white'
    }
  }

}))

export default function Header(props){

  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const menuOptions = [
    {name: 'Services', link: '/services'},
    {name: 'service1', link: '/service1'},
    {name: 'service2', link: '/service2'},
    {name: 'service3', link: '/service3'},
  ]

  useEffect(() => {
    if(window.location.pathname === '/' && value !== 0){
      setValue(0)
    } else if(window.location.pathname === '/services' && value !== 1){
      setValue(1)
    } else if(window.location.pathname === '/herbz' && value !== 2){
      setValue(2)
    } else if(window.location.pathname === '/about' && value !== 3){
      setValue(3)
    } else if(window.location.pathname === '/contact' && value !== 4){
      setValue(4)
    } else if(window.location.pathname === '/consultation' && value !== 5){
      setValue(5)
    } 

    switch(window.location.pathname) {
      case '/': if(value !== 0) {setValue(0)} break;
      case '/services': if(value !== 1) {setValue(1); setSelectedIndex(0);} break;
      case '/service1': if(value !== 1) {setValue(1); setSelectedIndex(1);} break;
      case '/service2': if(value !== 1) {setValue(1); setSelectedIndex(2);} break;
      case '/service3': if(value !== 1) {setValue(1); setSelectedIndex(3);} break;
      case '/herbz': if(value !== 2) {setValue(2);} break;
      case '/about': if(value !== 3) {setValue(3);} break;
      case '/contact': if(value !== 4) {setValue(4);} break;
      case '/consultation': if(value !== 5) {setValue(5);} break;
      default: break;
    }

  }, [value])


  const tabs = (
    <React.Fragment>
      <Tabs 
      value={value} 
      onChange={handleChange} 
      className={classes.tabContainer}
      //can set indicator color to primary to get rid of underline
      // indicatorColor="primary" 
      >
        <Tab className={classes.tab} component={Link} to='/' label="Home"/>
        <Tab 
          className={classes.tab} 
          component={Link} to='/services' 
          label="Services"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          onMouseOver={event => handleClick(event)}
        />
        <Tab className={classes.tab} component={Link} to='/herbz' label="Herbz?"/>
        <Tab className={classes.tab} component={Link} to='/about' label="About"/>
        <Tab className={classes.tab} component={Link} to='/contact' label="Contact Us"/>
      </Tabs>
      <Button variant='contained' color='secondary' className={classes.button}>
      Schedule a Consultation?
      </Button>
      <Menu 
        id='simple-menu' 
        anchorEl={anchorEl} 
        open={open} 
        onClose={handleClose}
        classes={{paper: classes.menu}}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
      >
      {menuOptions.map((option, index) => (
        <MenuItem 
          key={option}
          component={Link} 
          to={option.link} 
          classes={{root: classes.menuItem}} 
          onClick={(event) => {
            handleMenuItemClick(event, index); setValue(1); handleClose()
          }}
          selected={index === selectedIndex && value === 1}
        >
          {option.name}
        </MenuItem>
      ))}
      </Menu> 
    </React.Fragment>
  )


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar>
          <Button 
            component={Link} 
            to='/' 
            className={classes.logoContainer} 
            onClick={()=> setValue(0)}
            // disableRipple  //can disable ripple on click 
          >
            <img className={classes.logo} src={logo} alt="rainier elixirs logo" />
          </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.headerMargin} />
    </React.Fragment>
  )
}