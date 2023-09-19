import {
  Box,
  Divider,
  ListItemIcon,
  Drawer,
  Toolbar,
  Typography,
  List,
  Grid,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent'
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Bruno Santimaria
          </Typography>
        </Toolbar>
        <Divider></Divider>
        <List>
          {["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio", "Agosto"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={"asdasnfdkfndsnkfdsnkfdnsdfks"} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
