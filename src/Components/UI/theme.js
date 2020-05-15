
import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = "#2175BF";
const arcOrange =  "#FFBA60"

export default createMuiTheme({
     palette: {
          common: {
               blue: `${arcBlue}`,
               orange: `${arcOrange}`
          },
          primary: {
               main: `${arcBlue}`
          },
          secondary: {
               main: `${arcOrange}`
          }
     },
     typography: {
          tab: {
               fontFamily: "Raleway",
               textTransform: "none",
               fontWeight: "700",
               fontSize: "1rem"
          },
          button: {
               fontFamily: "Pacifico",
               fontSize: "1rem",
               textTransform: "none",
               color: "white",
               
          },
          menuItem: {
               fontSize: "0.95rem"
          },
          // "&:hover": {
          //      fontWeight: "bolder",
          //      color: arcOrange
          // }
          
     }
});