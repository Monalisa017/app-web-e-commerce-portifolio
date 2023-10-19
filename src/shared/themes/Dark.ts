import { createTheme } from "@mui/material";
import { blue, pink } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary:{
            main: pink[600],
            dark: pink[800],
            light: pink[500],
            contrastText: '#ffffff',
        },
        secondary:{
            main: blue[700],
            dark: blue[900],
            light: blue[500],
            contrastText: '#ffffff',
        },
        background:{
            default: '#0D214F',
            paper: '#303134 ',
        }
    }
});