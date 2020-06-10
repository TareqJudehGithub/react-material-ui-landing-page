import {makeStyles} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
     
     toolbarMargin: {    
          ...theme.mixins.toolbar,
          marginBottom: "3em",
          [theme.breakpoints.down("md")]: {
               marginBottom: "2em"
          },
          [theme.breakpoints.down("sm")]: {
               marginBottom: "1em"
          },
          [theme.breakpoints.down("xs")]: {
               marginBottom: "1em"
          }
     },
     logoContainer: {
          padding: 0,
          "&:hover": {
               backgroundColor: "transparent"
          }
     },
     logo: {
          height: "6em",
          [theme.breakpoints.down("md")]: { //responsive logo size for size mid and below:
               height: "5em"
          },
          [theme.breakpoints.down("sm")]: {
               height: "4em"
          },
          [theme.breakpoints.down("xs")]: {
               height: "3.5em"
          },
          
     },
     tabContainer: {
          marginLeft: "auto",
     },
     tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px",
          "&:hover": {
              textShadow : `0 0 5px ${theme.palette.common.orange}`
               
          }
     },
     button: {
          ...theme.typography.button,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px"
     },
     menu: {
          backgroundColor: theme.palette.common.blue,
          borderRadius: "10px",
          color: "white",
          // boxShadow: "1 1px 2px black",
          marginTop: "60px"
     },
     menuItem : {
          ...theme.typography.tab,
          ...theme.typography.menuItem,
          opacity: 0.7,
          "&:hover": {
               opacity: 1,
               backgroundColor: "transparent"
          }
     },
     drawerIcon: {
          [theme.breakpoints.down("md")]: {
               height: "40px",
          width: "40px"
          },
          [theme.breakpoints.down("sm")]: {
               height: "30px",
          width: "30px"
          },
          [theme.breakpoints.down("xs")]: {
               height: "20px",
          width: "20px"
          }
     },
     drawerIconContainer: {
          marginLeft: "auto",
          "&:hover": {
               backgroundColor: "transparent"
          }
     },
     drawer: {
          backgroundColor: theme.palette.common.blue
     },
     drawerItem: {
          ...theme.typography.tab,
          color: "white",
          opacity: 0.7
     },
     drawerItemEstimate: {
          // backgroundColor: theme.palette.common.orange,
          borderRadius: "25px",
          border: "2px solid #FFBA60"
     },
     drawerItemSelected: {
          //styles for each list item.
          "& .MultiListItemText-root":{ 
               opacity: 1,
               color: "#FFBA60"
          }
         
     },
     appbar: {
          zIndex: theme.zIndex.modal + 1 //which element appears on top of other element. 
     }
}));

export default useStyles;