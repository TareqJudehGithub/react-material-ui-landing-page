import React from "react";
import {Link} from 'react-router-dom';

import Grid from "@material-ui/core/Grid";   
import useStyles from "./footer.styles";
import Hidden from "@material-ui/core/Hidden";
import {Instagram, Facebook, Twitter} from "@material-ui/icons/"

import footerAdornment from "../../../assets/Footer Adornment.svg";
// import facebook from "../../../assets/facebook.svg";
// import twitter from "../../../assets/twitter.svg";
// import instagram from "../../../assets/instagram.svg";


const Footer = ({ value, setValue, selectedIndex, setselectedIndex }) => {
     const classes = useStyles();
     return(
          <React.Fragment>
               <footer className={classes.footer}>

                    <Hidden smDown>    
                         <Grid
                    className={classes.mainContainer} container justify="center">
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/"
                                   onClick={() => setValue(0)}
                                   >
                                        Home
                                   </Grid>
                              </Grid>
                         </Grid>  
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                        item
                                        className={classes.link} 
                                        component={Link} to="/services"
                                        onClick={() => {
                                             setValue(1);
                                             setselectedIndex(0) 
                                        }}
                                   >
                                        Services
                                   </Grid>           
                                   <Grid 
                                        item
                                        className={classes.link} 
                                        component={Link} to="/customsoftware"
                                        onClick={() => {
                                             setValue(1);
                                             setselectedIndex(1) 
                                        }}
                                   >
                                        Custom Software Development
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/mobileapps"
                                   onClick={() => {
                                        setValue(1);
                                        setselectedIndex(2) 
                                   }}
                                   >
                                        Mobile App Development
                                   </Grid>
                                   <Grid 
                                        item
                                        className={classes.link} 
                                        component={Link} 
                                        to="/websites"
                                        onClick={() => {
                                             setValue(1);
                                             setselectedIndex(3) 
                                        }}
                                   >
                                        Website Development
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                        item
                                        className={classes.link} 
                                        component={Link} to="/revolution"
                                        onClick={() => setValue(2)}
                                   >
                                        The Revolution
                                   </Grid>
                                   <Grid 
                                        item
                                        className={classes.link} 
                                        component={Link} to="/revolution"
                                        onClick={() => setValue(2)}
                                   >
                                        Vision
                                   </Grid>
                                   <Grid 
                                        item
                                        className={classes.link} 
                                        component={Link} to="/revolution"
                                        onClick={() => setValue(2)}
                                   >
                                        Technology
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/revolution"
                                   onClick={() => setValue(2)}
                                   >
                                        Process
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                              <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/about"
                                   onClick={() => setValue(3)}
                                   >
                                        About Us
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/about"
                                   onClick={() => setValue(3)}
                                   >
                                        History
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/about"
                                   onClick={() => setValue(3)}
                                   >
                                        Team
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} to="/contact"
                                   onClick={() => setValue(4)}
                                   >
                                        Contact Us
                                   </Grid>
                              </Grid>
                         </Grid>
                        

                    </Grid>
                    </Hidden>

                    <img
                    className={classes.adornment}
                    src={footerAdornment} 
                    alt="black decorative slash"
                    />
                    <Grid container 
                    className={classes.socialContainer}
                    justify="flex-end"
                    spacing={2}
                    >
                         <Grid item 
                              component={"a"} href="https://www.facebook.com" 
                              rel="noopener noreferrer"
                              target="_blank"         
                         > 
                              <span className={classes.icon}><Facebook /></span>
                              {/* <img src={facebook} alt="facebook" className={classes.icon}/> */}
                         </Grid>
                         <Grid item 
                              component="a" href="https://www.twitter.com"
                              rel="noopener no referrer"
                              target="_blank"
                         >
                              <span className={classes.icon}><Twitter /></span>
                              {/* <img src={twitter} alt="twitter" className={classes.icon}/> */}
                         </Grid>
                         <Grid item 
                         component="a" href="https://www.instagram.com"
                         rel="noopener noreferrer"
                         target="_blank"
                         >
                              <span className={classes.icon}><Instagram /></span>
                              {/* <img src={instagram} alt="instagram" className={classes.icon}/> */}
                         </Grid>

                    </Grid>
               </footer>
          </React.Fragment>
     )
}
export default Footer;
