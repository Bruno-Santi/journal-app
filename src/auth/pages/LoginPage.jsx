import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField label='Email' type='email' placeholder='example@mail.com' fullWidth={true}></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField label='Password' type='password' placeholder='Password' fullWidth={true}></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button variant='contained' color='primary' fullWidth={true}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant='contained' color='primary' fullWidth={true}>
                <Google />
                <Typography marginLeft={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
