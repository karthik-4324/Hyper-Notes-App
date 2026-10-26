import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
          }}
        >
          Hyper Notes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;