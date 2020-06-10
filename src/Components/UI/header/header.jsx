import React, { useState, useEffect } from "react";
import useStyles from "./header.styles";
import Logo from "../../../assets/logo.svg";
import {Link} from "react-router-dom";

//material-ui/core imports:
import { useScrollTrigger, 
          AppBar, Tabs, Tab,
          Menu, MenuItem,
          Button, IconButton, SwipeableDrawer, 
          List, ListItem, ListItemText 
     } from "@material-ui/core";
import ToolBar from "@material-ui/core/ToolBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//material-ui/styles imports:
import {useTheme} from "@material-ui/core/styles";

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

const Header =({ value, setValue, selectedIndex, setselectedIndex }) => {

     const classes = useStyles();
     const theme = useTheme();

//to test mobile device responsivness:
     const iOS = process.browser && /iPad|iPhone|iPod/
     .test(navigator.userAgent);
//MediaQuery for medium and below devices:
     const matches = useMediaQuery(theme.breakpoints.down("md"));

     const [openDrawer, setOpenDrawer] = useState(false); //drawer state
    
     const [anchorEL, setAnchorEL] = useState(null); //menu state
     const [openMenu, setOpenMenu] = useState(false);//menu state
     
     
//methods:
     
     const handleChange = (e, newValue) => { //change Tab method
          setValue(newValue);
     };   

     const handleClick = (event) => {        //menu method(s)
          setAnchorEL(event.currentTarget);
          setOpenMenu(true); 
     };
     
     const handleClose = (event) => {        //closing menu even handler
          setAnchorEL(null);
          setOpenMenu(false);
     };
     
     const handleMenuItemClick = (e, index) => { //menu selection handler
          setAnchorEL(null);
          setOpenMenu(false);
          setselectedIndex(index) //index item (menuitem) we're clicking
     }
     
     const menuOptions = [ //menu selection
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
     
     const routes = [ //tabs routes
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
     }, [value, setValue, menuOptions, selectedIndex, setselectedIndex, routes]);

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
                                   disableRipple
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
                              classes={{selected: classes.drawerItemSelected}}
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

                              {
                              matches
                              ?
                              drawer  //render the Drawer for md/sm/xs
                              :
                              tabs    //render lg/xl size
                              }

                         </ToolBar>
                    </AppBar>
               </ElevationScroll>
               <div className={classes.toolbarMargin}/> 
          </React.Fragment>
     );
}
export default Header;