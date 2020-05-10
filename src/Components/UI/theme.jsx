
import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#3f51b5";
const arcOrange =  "#FFBA60"

export default createMuiTheme({
     palette: {
          common: {
               blue: `${arcBlue}`,
               orange: `${arcOrange}`
          },
          primary: {
               main: `${arcBlue}`,
          },
          secondary: {
               main: `${arcOrange}`
          }
     },
     typography: {
          h3: {
               fontWeight: "300"
          }
     }
});