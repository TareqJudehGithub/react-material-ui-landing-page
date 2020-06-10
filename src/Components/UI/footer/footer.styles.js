//To access styles from Material-UI library
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
     footer: {
          backgroundColor: theme.palette.common.blue,
          width: "100%",
          //In order to land the footer on top of the SideDrawer, as the header does.
          zIndex: 1302, 
          position: "relative"
     },
     adornment: {
          width: "25em",
          verticalAlign: "bottom",
          [theme.breakpoints.down("md")]: {
               width: "21em"
          },
          [theme.breakpoints.down("sm")]: {
               width: "18em"
          },
          [theme.breakpoints.down("xs")]: {
               width: "15em"
          }

     },
     mainContainer: {
          position: "absolute"
     },
     link: {
          color: "white",
          fontFamily: "Arial",
          fontSize: "0.75rem",
          fontWeight: "bold",
          textDecoration: "none"
     },
     gridItem: {
          margin: "3em"
     },
     icon: {
          height: "3em",
          width: "3em",
          [theme.breakpoints.down("md")]: {
               height: "2em",
               width: "2em",
          },
          [theme.breakpoints.down("sm")]: {
               height: "1.5em",
               width: "1.5em",
          },
          [theme.breakpoints.down("xs")]: {
               height: "1.25em",
               width: "1.25em",
          }
     },
     socialContainer: {
          position: "absolute",
          marginTop: "-6em",
          right: "1.5em",
          [theme.breakpoints.down("md")]: {
               marginTop: "-4em",
               right: "1.4em"
          },
          [theme.breakpoints.down("sm")]: {
               marginTop: "-3em",
               right: "1.3em"
          },
          [theme.breakpoints.down("xs")]: {
               marginTop: "-2.5em",
               right: "1.3em"
          }
     },

}))

export default useStyles;