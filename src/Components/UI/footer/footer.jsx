import React from "react";

import useStyles from "./footer.styles";
import footerAdornment from "../../../assets/Footer Adornment.svg";
const Footer = () => {
     const classes = useStyles();
     return(
          <React.Fragment>
               <footer className={classes.footer}>
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
