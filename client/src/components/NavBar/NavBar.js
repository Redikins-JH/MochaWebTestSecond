import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBarShell from './NavBarShell';
import Home from '../../Pages/Home';
import About from '../../Pages/About';

class NavBar extends React.Component {
  render() {
    return (
        <Router>
            <NavBarShell>
                <div>
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="/About" Component={About}/>
                </div>
            </NavBarShell>
        </Router>
    )
  }    
}    

export default NavBar;