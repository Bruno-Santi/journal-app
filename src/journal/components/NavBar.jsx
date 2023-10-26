import { AppBar, Toolbar, IconButton, Grid, Typography, Button } from "@mui/material";
import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { startLogOut } from "../../store/auth/thunks";
export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(startLogOut());
  };

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
          <Button>
            <IconButton color='error'>
              <LoginOutlined onClick={() => handleLogOut()}></LoginOutlined>
            </IconButton>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
