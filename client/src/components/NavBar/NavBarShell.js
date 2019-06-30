import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
      width : '100%',
      minWidth: 1080
    },
    menuButton: {
      marginRight: 'auto',
    }
})

class NavBarShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle:false
    }
  }

  handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
  
  render() { 
    const { classes } = this.props;
    return (
        <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
                 <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="secondary"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton> 
                <Typography className={classes.title} variant="h6" noWrap>
                  네비게이션 입니다!
                </Typography>
            </Toolbar>
            </AppBar>
            <Drawer open={this.state.toggle}>
              <MenuItem onClick={this.handleDrawerToggle}>Home</MenuItem>
              <MenuItem onClick={this.handleDrawerToggle}>About</MenuItem>
            </Drawer>
        </div>
        <div id="content" style={{margin: 'auto', martinTop: '20px'}}>
            {React.cloneElement(this.props.children)}
        </div>
        </div>
    )
  }    
}    

export default withStyles(styles)(NavBarShell);