import {
  AppBar,
  Box,
  Button,
  IconButton,
  // Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
// import { SearchBar } from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../App.css";
import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to={"/home"}>
        <IconButton size="large" color="inherit" aria-label="logo" edge="end">
          <AutoStoriesSharpIcon />
        </IconButton>
        </Link>

        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          BookStore
        </Typography>
     
        <Box px={{ xs: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={7}
          >
            <Link to={"/home"}>
              <Button color="inherit">HOME</Button>
            </Link>

            <Link to={"/categories"}>
              <Button color="inherit">CATEGORIES</Button>
            </Link>
            <Link to={"/authors"}>
              <Button color="inherit">AUTHORS</Button>
            </Link>
          </Stack>
        </Box>
        {/* <SearchBar/> */}
        <Box px={{ xs: 4 }}>
          <IconButton size="large" edge="end" color="inherit" aria-label="logo">
            <ShoppingCartCheckoutSharpIcon />
          </IconButton>
        </Box>
        <Box px={{ xs: 4 }}>
          <Link to="/profile">
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="logo"
            >
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
