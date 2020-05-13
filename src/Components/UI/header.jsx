import React, { useState, useEffect } from "react";
// import useStyles from "./styles";
import Logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//floating scroll template
function ElevationScroll(props) {

     const { children } = props;
     const trigger = useScrollTrigger({
       disableHysteresis: true,
       threshold: 0
     });
   
     return React.cloneElement(children, {
       elevation: trigger ? 8 : 0   
     });
   }

const useStyles = makeStyles(theme => ({
     toolbarMargin: {    
          ...theme.mixins.toolbar,
          marginBottom: "3em"
     },
     logoContainer: {
          padding: 0,
          "&:hover": {
               backgroundColor: "transparent"
          }
     },
     logo: {
          height: "5em"
     },
     tabContainer: {
          marginLeft: "auto"
     },
     tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px"
     },
     button: {
          ...theme.typography.button,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px"
     }
}));

const Header =() => {
     const classes = useStyles();
     //tabs state:
     const [value,setValue] = useState(0);
     
//menu state:
     const [anchorEL, setAnchorEL] = useState(null);
     const [open, setOpen] = useState(false);


//methods:
     //change Tab method:
     const handleChange = (e, value) => {
          setValue(value);
     };   
//menu method(s):
  
     const handleClick = (event) => {
          setAnchorEL(event.currentTarget);
          setOpen(true); 
     };
     //closing menu even handler:
     const handleClose = (event) => {
          setAnchorEL(null);
          setOpen(false);
     };

     useEffect(() => {
          if (window.location.pathname === "/" && value !== 0) {
               setValue(0)
          }
          else if (window.location.pathname === "/services" && value !== 1) {
               setValue(1)
          }
          else if (window.location.pathname === "/revolution" && value !== 2) {
               setValue(2)
          }
          else if (window.location.pathname === "/about" && value !== 3) {
               setValue(3)
          }
          else if (window.location.pathname === "/contact" && value !== 4) {
               setValue(4)
          }
          else if (window.location.pathname === "/estimate" && value !== 5) {
               setValue(5)
          }
                     
     }, [value]);
     return (
          <React.Fragment>
               <ElevationScroll>
                    <AppBar position="fixed" color="primary">
                         <ToolBar disableGutters>   
                              <Button 
                              onClick={() => setValue(0)}
                              className={classes.logoContainer}
                              disableRipple //to disable click effect
                              component={Link} to="/">
                                   <img
                                   src={Logo} 
                                   alt="Company Logo"
                                   className={classes.logo}
                                   />
                              </Button>
                              <Tabs 
                              className={classes.tabContainer} 
                              onChange={handleChange}
                              value={value}
                              indicatorColor="secondary"
                              > 
                                   <Tab 
                                        className={classes.tab} 
                                        component={Link} to="/" 
                                        label="Home"/>
                                   <Tab 
                                        className={classes.tab} 
                                        component={Link} to="/services" 
                                        label="Services"
                                   //menu 
                                        onMouseOver={event => handleClick(event)}
                                        aria-owns={anchorEL ? "simple-menu" : undefined}
                                        aria-haspopup={anchorEL ? "true" : undefined}
                                        />
                                   <Tab 
                                        className={classes.tab} 
                                        component={Link} to="/revolution" 
                                        label="Revolution"/>
                                   <Tab 
                                        className={classes.tab} 
                                        component={Link} to="/about" 
                                        label="About Us"/>
                                   <Tab 
                                        className={classes.tab} 
                                        component={Link} to="/contact" 
                                        label="Contact Us"/>
                              </Tabs>
                              <Button 
                              variant="contained" 
                              color="secondary" 
                              className={classes.button} component={Link} to="estimate">
                                   Free Estimate
                                   </Button>

                              {/*The Menu */}                                   
                              <Menu
                              id="simple-menu" 
                              anchorEl={anchorEL}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{onMouseLeave: handleClose}}
                              >
                                   <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                   component={Link} to="/services"
                                   >Services</MenuItem>
                                   <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                   component={Link} to="/customsoftware"
                                   >Custom Software Development</MenuItem>
                                   <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                   component={Link} to="/mobileapps"
                                   >Mobile App Development</MenuItem>
                                   <MenuItem onClick={() => {handleClose(); setValue(1)}}
                                   component={Link} to="/websites"
                                   >Website Development</MenuItem>
                              </Menu>
                         </ToolBar>
                    </AppBar>
               </ElevationScroll>
               <div className={classes.toolbarMargin}/> 
          </React.Fragment>
     );
}
export default Header;