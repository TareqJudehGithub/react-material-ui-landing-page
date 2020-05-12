import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
     toolbarMargin: {    
          ...theme.mixins.toolbar,
          marginBottom: "3em"
     },
     logo: {
          height: "5em"
     },
     tabContainer: {
          marginLeft: "auto"
     },
     tab: {
          ...theme.typography.tab
     }
}));

export default useStyles;