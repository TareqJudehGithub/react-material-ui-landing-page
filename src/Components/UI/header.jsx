import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
// import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles"

import Logo from "../../assets/logo.svg"

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
     logo: {
          height: "7em"
     }
}));

const Header =() => {

     const classes = useStyles()

     return(
          <React.Fragment>
               <ElevationScroll>
                    <AppBar position="fixed" color="primary">
                         <ToolBar disableGutters>
                              <img
                              src={Logo} 
                              alt="Company Logo"
                              className={classes.logo}
                              />

                              {/* <Typography variant="h3" color="secondary">
                              Arc Development
                              </Typography> */}
                         </ToolBar>
                    </AppBar>
               </ElevationScroll>
               <div className={classes.toolbarMargin}/> 
          </React.Fragment>
     );
}

export default Header;