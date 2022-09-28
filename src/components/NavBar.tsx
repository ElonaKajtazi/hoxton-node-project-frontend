import { AppBar, IconButton, Toolbar } from "@mui/material";
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';

export function NavBar () {
    return (
     <AppBar position="static">
        <Toolbar>
            <IconButton size= "large" edge= "start" color="inherit" aria-label="logo">
                <AutoStoriesSharpIcon></AutoStoriesSharpIcon>
            </IconButton>
        </Toolbar>
     </AppBar>
    )
}