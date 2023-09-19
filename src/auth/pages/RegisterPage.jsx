import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField label='Full Name' type='text' placeholder='John Doe' fullWidth={true}></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField label='Email' type='email' placeholder='example@mail.com' fullWidth={true}></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField label='Password' type='password' placeholder='Password' fullWidth={true}></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField label='Confirm Password' type='password' placeholder='Password' fullWidth={true}></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={12}>
              <Button variant='contained' color='primary' fullWidth={true}>
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography marginRight={1}>Already have an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
