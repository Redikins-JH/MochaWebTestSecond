import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width : '100%',
      minWidth: 1080
    }
})

class NavBarShell extends React.Component {
  render() { 
    const { classes } = this.props;
    return (
        <div>
        <div className={classes.props}>
          <AppBar position="static">
            <Toolbar>
                { <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="ingerit"
                    aria-label="Open drawer"
                >
                  <MenuIcon />
                </IconButton> }
                <Typography className={classes.title} variant="h6" noWrap>
                  네비게이션 입니다!
                </Typography>
                <MenuItem>Home</MenuItem>
                <MenuItem>Second menu</MenuItem>
            </Toolbar>
            </AppBar>
        </div>
        <div id="content" style={{margin: 'auto', martinTop: '20px'}}>
            {React.cloneElement(this.props.children)}
        </div>
        </div>
    )
  }    
}    

export default withStyles(styles)(NavBarShell);