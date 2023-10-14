import { createTheme } from "@mui/material";
import { blue, pink } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: pink[700],
            dark: pink[900],
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
            default: '#f7f6f3',
            paper: '#ffffff',
        }
    }
});