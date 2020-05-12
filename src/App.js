import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/UI/header";

import { ThemeProvider } from "@material-ui/core";
import theme from "./Components/UI/theme";
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch> 
          <Route exact path="/" component={() => <div>Home</div>}/>
          <Route exact path="/services" component={() => <div>Services</div>}/>
          <Route exact path="/customsofware" component={() => <div>Custom Software</div>}/>
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>}/>
          <Route exact path="/websites" component={() => <div>Web Sites</div>}/>
          <Route exact path="/revolution" component={() => <div>The Revolution</div>}/>
          <Route exact path="/about" component={() => <div>About Us</div>}/>
          <Route exact path="/contact" component={() => <div>Contact Us</div>}/>
          <Route exact path="/estimate" component={() => <div>Estimates</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  
  );
}

export default App;
