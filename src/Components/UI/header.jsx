import React, { useState, useEffect } from "react";
// import useStyles from "./styles";
import Logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";
//material-ui/core imports:
import { useScrollTrigger,makeStyles, 
          AppBar, Tabs, Tab,
          Menu, MenuItem,
          Button, IconButton, SwipeableDrawer, 
          List, ListItem, ListItemText 
     } from "@material-ui/core";
import ToolBar from "@material-ui/core/ToolBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//material-ui/styles imports:
import {useTheme} from "@material-ui/core/styles"

//material-ui/icons imports:
import MenuIcon from "@material-ui/icons/Menu";

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
          }
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
     },
     menu: {
          backgroundColor: theme.palette.common.blue,
          borderRadius: "10px",
          color: "white",
          // boxShadow: "1 1px 2px black",
          // marginTop: "60px"
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

const Header =() => {

//access to default styles in our component:
     const classes = useStyles();
//access to default themes in our component:
     const theme = useTheme();
//to test mobile device responsivness:
const iOS = process.browser && /iPad|iPhone|iPod/
.test(navigator.userAgent);
//to select medium and below to return true:
     const matches = useMediaQuery(theme.breakpoints.down("md"));

//drawer state:
     const [openDrawer, setOpenDrawer] = useState(false);
//tabs state:
     const [value,setValue] = useState(0);   
//menu state:
     const [anchorEL, setAnchorEL] = useState(null);
     const [openMenu, setOpenMenu] = useState(false);
     //1. menu selection states:
     const [selectedIndex, setselectedIndex] = useState(0);
     
//methods:
     //change Tab method:
     const handleChange = (e, newValue) => {
          setValue(newValue);
     };   
//menu method(s):
     const handleClick = (event) => {
          setAnchorEL(event.currentTarget);
          setOpenMenu(true); 
     };
     //closing menu even handler:
     const handleClose = (event) => {
          setAnchorEL(null);
          setOpenMenu(false);
     };
     //2. menu selection handler:
     const menuOptions = [
          {
               name: "Services",
               link: "/services",
               activeIndex: 1,
               selectedIndex: 0
          },
          {
               name: "Custom Software Development",
               link: "/customsoftware",
               activeIndex: 1,
               selectedIndex: 1
          },
          {
               name: "Mobile App Development",
               link: "/mobileapps",
               activeIndex: 1,
               selectedIndex: 2
          },
          {
               name: "Website Development",
               link: "websites",
               activeIndex: 1,
               selectedIndex: 3
          }
     ]

     const routes = [
          { name: "Home", link: "/", activeIndex: 0},
          { 
               name: "Services",
               link: "/services", 
               activeIndex: 1,
               ariaOwns: anchorEL ? "simple-menu" : undefined,
               ariaPopup: anchorEL ? "true" : undefined,
               mouseOver: event => handleClick(event)
          },
          { name: "Revolution", link: "/revolution", activeIndex: 2},
          { name: "About Us", link: "/about", activeIndex: 3},
          { name: "Contact Us", link: "/contact", activeIndex: 4}
     ]

     //3. menu selection click handler
     const handleMenuItemClick = (event, index) => {
          setAnchorEL(null);
          setOpenMenu(false);
          setselectedIndex(index) //index item (menuitem) we're clicking
     }

     useEffect(() => {
          //combining menuOptions and routes:
          [...menuOptions, ...routes].forEach(route => {

               switch(window.location.pathname) {
                    case `${route.link}`:
                         //checking teh current value by checking the active tab in routes array.
                         if(value !== route.activeIndex) { //if the correct page value is not set?
                              setValue(route.activeIndex) //then set the correct value for that page.
                              if(route.selectedIndex &&   
                              //to determine which menuItem is selected:
                                 route.selectedIndex !== selectedIndex){
                                      setselectedIndex(route.selectedIndex) //if not, set it correctly.
                                 }
                         }
                         break;
                    default:
                         break;
               };            
          } );   
     }, [value, menuOptions, selectedIndex, routes]);

const tabs = (
     <React.Fragment>
          <Tabs 
               className={classes.tabContainer} 
               onChange={handleChange}
               value={value}
               indicatorColor="secondary"
               > 
                    {
                         routes.map(route => {
                              return(
                                   <Tab 
                                   key={route.activeIndex}
                                   className={classes.tab}
                                   component={Link} to={route.link}
                                   label={route.name}
                                   aria-owns={route.ariaOwns}
                                   aria-haspopup={route.ariaPopup}
                                   onMouseOver={route.mouseOver}
                                   />
                              )
                         })
                    }
                  
               </Tabs>
               <Button 
               variant="contained" 
               color="secondary" 
               className={classes.button} component={Link} to="estimate">
                    Free Estimate
                    </Button>

               {/*The Menu */}                                   
               <Menu
               style={{zIndex: 1302}}
               id="simple-menu" 
               anchorEl={anchorEL}
               open={openMenu}
               onClose={handleClose}
               //1. to edit menu BG color:
               classes={{paper: classes.menu}}
               elevation={0}
               MenuListProps={{onMouseLeave: handleClose}}
               keepMounted //all menu items are always mounted on the DOM.
               >
                    {
                         menuOptions.map((option, index) => {
                              return(
                                   <MenuItem
                                   key={index}
                                   classes={{root: classes.menuItem}}
                                   onClick={(event) => {
                                        handleMenuItemClick(event,
                                        index); 
                                        setValue(1); 
                                        handleClose();
                                   }}
                                   component={Link} to={option.link}
                                   //applies styling when this menuItem is selected
                                   selected={index === selectedIndex && value === 1} 
                                   
                                   >
                                   {option.name}
                                   </MenuItem>
                              )
                         })
                    }
                  
               </Menu>
     </React.Fragment>
)
const drawer = (
     <React.Fragment>
          <SwipeableDrawer 
               classes={{paper: classes.drawer}} //to override Material-UI basic styling.
               disableBackdropTransition={!iOS} 
               disableDiscovery={iOS}
               open={openDrawer}
               onOpen={() =>setOpenDrawer(true)}
               onClose={() => setOpenDrawer(false)}
               
               >
               <div className={classes.toolbarMargin} />          
               <List disablePadding>
               {
                    routes.map(route => {
                         return (
                              <ListItem 
                              key={route.activeIndex}
                              divider
                              button
                              component={Link} to={route.link}
                              selected={value === route.activeIndex}
                              classes={{selected: classes.drawerItemSelected,}}
                              onClick={() => {
                                   setOpenDrawer(false);
                                   setValue(route.activeIndex);
                              }
                              }
                              >
                                   <ListItemText
                                   disableTypography
                                   className={classes.drawerItem}            
                                   >
                                        {route.name}
                                   </ListItemText>
                              </ListItem>
                         )
                    })
               }
                  
                    <ListItem
                         classes={{
                              root: classes.drawerItemEstimate,
                              selected: classes.drawerItemSelected
                         }}
                         button
                         component={Link} to="/estimate"
                         onClick={() => {
                              setOpenDrawer(false);
                              setValue(5)
                         }}
                         selected={value === 5}>
                         <ListItemText 
                              disableTypography
                              className={classes.drawerItem}
                         >
                              Free Estimate
                         </ListItemText>
                    </ListItem>
               </List>
          </SwipeableDrawer>
          <IconButton
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
          >
               <MenuIcon className={classes.drawerIcon}/>
             
          </IconButton>
     </React.Fragment>
);

     return (
          <React.Fragment>
               <ElevationScroll>
                    <AppBar
                    className={classes.appbar}
                    position="fixed" 
                    color="primary"
                    >
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

                              {/* If we are at medium size or smaller ? null : render larger size (1280+)*/}
                              {
                              matches
                              ?
                              drawer  //render the Drawer for med size or below.
                              :
                              tabs
                              }
                         </ToolBar>
                    </AppBar>
               </ElevationScroll>
               <div className={classes.toolbarMargin}/> 
          </React.Fragment>
     );
}
export default Header;