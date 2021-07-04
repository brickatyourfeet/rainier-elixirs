import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const customTeal = "#03F9EA"
const customRed = "#8E2B0E" 
const customGrey = "b3b3cc"

export default createMuiTheme({
  palette: { //add more color options in the palette
    common: {
      teal: customTeal,
      red: customRed
    },
    primary: {
      main: customRed
    },
    secondary: {
      main: customTeal
    }
  },
  typography: {  //will change sizes and weights as we change fonts
    tab: {
      fontFamily: 'Ubuntu Condensed',
      //can set textTransform to none to keep all tabs default case, remove for all uppercase
      textTransform: 'none',
       fontWeight: '700',
       fontSize: '1rem',
    },
    consultation: {
      fontFamily: 'Ubuntu Condensed',
      fontSize: '1rem',
      textTransform: 'none',
      // color: ""
    },
    h2: {
      fontFamily: "Helvetica Neue",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: customGrey,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Arial",
      fontSize: "2.5rem",
      color: customGrey
    },
    h4: {
      fontFamily: "Helvetica Neue",
      fontSize: "1.75rem",
      color: customGrey,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Helvetica Neue",
      color: customTeal
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: customGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: customGrey,
      fontWeight: 300
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: customGrey
    },
    learnButton: {
      borderColor: customTeal,
      borderWidth: 2,
      textTransform: "none",
      color: customTeal,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  },
  overrides: { //for overriding all of a default mui component
    MuiInputLabel: {
      root: {
        color: customTeal,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: customGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": { //before clicking on the input
          borderBottom: `2px solid ${customTeal}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${customTeal}`
        }
      }
    }
  }
})



// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });