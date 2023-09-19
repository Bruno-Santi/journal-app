import { AppBar, Toolbar, IconButton, Grid, Typography } from "@mui/material";
import { LoginOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color='inherit' edge='start' sx={{ marginRight: 2, display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems={"center"}>
          <Typography variant='h6' noWrap component='div'>
            Journal App
          </Typography>
          <IconButton color='error'>
            <LoginOutlined></LoginOutlined>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
