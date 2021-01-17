import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, useScrollTrigger, Typography, SwipeableDrawer, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery, IconButton, List, ListItem, ListItemText} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

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
  },
  drawer: {
    backgroundColor: theme.palette.common.teal,

  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemSelected: {
    opacity: 1
  },
  drawerItemConsultation: {
    backgroundColor: theme.palette.common.red
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  }

}))

export default function Header(props){

  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setMenuOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setMenuOpen(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setMenuOpen(false)
  }

  const menuOptions = [
    {name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0},
    {name: 'service1', link: '/service1', activeIndex: 1, selectedIndex: 1},
    {name: 'service2', link: '/service2', activeIndex: 1, selectedIndex: 2},
    {name: 'service3', link: '/service3', activeIndex: 1, selectedIndex: 3},
  ]

  const routes = [
    {name: "Home", link: '/', activeIndex: 0}, 
    {name: "Services", link: '/services', activeIndex: 1},
    {name: "Herbz", link: '/herbz', activeIndex: 2},
    {name: "About", link: '/about', activeIndex: 3},
    {name: "Contact", link: '/contact', activeIndex: 4}
  ]

  

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname){
        case `${route.link}`:
          if(value !== route.activeIndex){
            setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== selectedIndex){
              setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        default:
          break;
      }
    })
  }, [value, menuOptions, selectedIndex, routes])


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
        open={menuOpen} 
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

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        onOpen={() => setDrawerOpen(true)}
        classes={{paper: classes.drawer}}
      >
       <List disablePadding>
        <ListItem selected={value===0} onClick={()=> {setDrawerOpen(false); setValue(0)}} divider button component={Link} to='/'>
          <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>Home</ListItemText>
        </ListItem>
        <ListItem selected={value===1} onClick={()=> {setDrawerOpen(false); setValue(1)}} divider button component={Link} to='/services'>
          <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>Services</ListItemText>
        </ListItem>
        <ListItem selected={value===2} onClick={()=> {setDrawerOpen(false); setValue(2)}} divider button component={Link} to='/herbz'>
          <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>Herbz</ListItemText>
        </ListItem>
        <ListItem selected={value===3} onClick={()=> {setDrawerOpen(false); setValue(3)}} divider button component={Link} to='/about'>
          <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>About</ListItemText>
        </ListItem>
        <ListItem selected={value===4} onClick={()=> {setDrawerOpen(false); setValue(4)}} divider button component={Link} to='/contact'>
          <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>Contact</ListItemText>
        </ListItem>
        <ListItem selected={value===5} className={classes.drawerItemConsultation} onClick={()=> {setDrawerOpen(false); setValue(5)}} divider button component={Link} to='/consultation'>
          <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>Schedule Consultation</ListItemText>
        </ListItem>
       </List>
      </SwipeableDrawer>
       
      <IconButton className={classes.drawerIconContainer} onClick={()=> setDrawerOpen(!drawerOpen)}>
        <MenuIcon className={classes.drawerIcon}>
        </MenuIcon>
      </IconButton>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.headerMargin} />
    </React.Fragment>
  )
}