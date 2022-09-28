import {
  AppBar,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
// import { SearchBar } from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AutoStoriesSharpIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 0.2 }}>
          BookStore
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={7}
        >
          <Button color="inherit">Classics</Button>
          <Button color="inherit">Romance</Button>
          <Button color="inherit">Poetry</Button>
          <Button color="inherit">Novel</Button>
          <Button color="inherit">Youg Adults</Button>
        </Stack>
        {/* <SearchBar/> */}

        <IconButton size="large" edge="end" color="inherit" aria-label="logo">
          <ShoppingCartCheckoutSharpIcon />
        </IconButton>

        <IconButton size="large" edge="end" color="inherit" aria-label="logo">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
