import React from "react";
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";   
import useStyles from "./footer.styles";
import footerAdornment from "../../../assets/Footer Adornment.svg";
const Footer = () => {
     const classes = useStyles();
     return(
          <React.Fragment>
               <footer className={classes.footer}>

                    <Grid
                    className={classes.mainContainer} container justify="center">
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/">
                                        Home
                                   </Grid>
                              </Grid>
                         </Grid>  
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/services">
                                        Services
                                   </Grid>           
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/customsoftware">
                                        Custom Software Development
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/mobileapps">
                                        Mobile App Development
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/websites">
                                        Website Development
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/revolution">
                                        The Revolution
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/revolution">
                                        Vision
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/revolution">
                                        Technology
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/revolution">
                                        Process
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                              <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/about">
                                        About Us
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/about">
                                        History
                                   </Grid>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/about">
                                        Team
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item className={classes.gridItem}>
                              <Grid container direction="column" spacing={2}>
                                   <Grid 
                                   item
                                   className={classes.link} 
                                   component={Link} 
                                   to="/contact">
                                        Contact Us
                                   </Grid>
                              </Grid>
                         </Grid>
                        

                    </Grid>

                    <img
                    className={classes.adornment}
                    src={footerAdornment} 
                    alt="black decorative slash"
                    />
               </footer>
          </React.Fragment>
     )
}
export default Footer;
