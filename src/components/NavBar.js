import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar position="static" style={{ 
            backgroundColor: '#20322A',
            fontSize: '100px',
            verticalAlign: 'baseline',
            fontFamily: 'Atomic Age',
            color: '#F2E7C9'
            }}><div id="titlebar">The Sewcialist Agenda
            <img src={`https://res.cloudinary.com/dz2jdgus7/image/upload/v1627923558/final%20project%20images/Untitled_design_6_mltc8y.png`} id="logo"
            style={{size: '10px'}}
            /></div>
        <Toolbar> 
            <Link to={'/'}
                style={{ textDecoration: 'none' }}>
                <div className="home">
                <Button
                className = {classes.menuButton}
                variant="contained"
                color="default"
                >Home</Button>
                </div>
            </Link>
            <Link to={'/login'}
              style={{ textDecoration: 'none' }}>
              <div className="login">
              <Button
              className={classes.menuButton}
              variant = "contained"
              color="default"
              >Login</Button>
            </div>  
            </Link>
            <Link to={'/signup'}
              style={{ textDecoration: 'none'}}>
              <div className="signup">
              <Button 
              className={classes.menuButton}
              variant = "contained"
              color="default"
              >Sign Up</Button>
              </div>
            </Link>
            <Link to={'/profile'}
            style={{ textDecoration: 'none'}}>
              <div className="profile">
                <Button 
                className={classes.menuButton}
                variant="contained"
                color="default"
                >Profile</Button>
              </div>
            </Link>
        </Toolbar>
      </AppBar>  
    </div>

  )
};

export default NavBar;
