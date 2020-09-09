import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const customTeal = "#03F9EA"
const customRed = "#8E2B0E" 


export default createMuiTheme({
  palette: {
    common: {
      teal: `${customTeal}`,
      red: `${customRed}`
    },
    primary: {
      main: `${customRed}`
    },
    secondary: {
      main: `${customTeal}`
    }
  },
  typography: {
    h3: {
      fontWeight: 250
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