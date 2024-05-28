import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        // secondary: {
        //     main: '#543884'
        // },
        secondary:{
            main: "#4F58C6"
        },
        error: {
            main: red.A400
        }
    },
    typography: {
        // Tell Material UI what the font-size on the html element is.
        subtitle1:{
            fontSize:12,
        }
      },
})