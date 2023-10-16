import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const { email, password, onInputChange, formState } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(startLoginWithEmailAndPassword(formState));
    console.log(email, password);
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label='Email'
              type='email'
              placeholder='example@mail.com'
              fullWidth={true}
              name='email'
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth={true}
            ></TextField>
          </Grid>
          <Grid container sx={{ mt: 1 }} fullWidth={true} display={errorMessage ? "" : "none"}>
            <Grid item fullWidth={true}>
              <Alert severity='error'>Invalid Email or Password</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button
                disabled={status === "checking"}
                variant='contained'
                color='primary'
                fullWidth={true}
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                color='primary'
                fullWidth={true}
                onClick={onGoogleSignIn}
              >
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
