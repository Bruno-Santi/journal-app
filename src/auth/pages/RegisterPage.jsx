import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const formData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formValidations = {
    displayName: [(value) => value.length >= 1, "This field is required"],
    email: [(value) => value.includes("@"), "@ Missing"],
    password: [(value) => value.length >= 6, "Password too short"],
    confirmPassword: [(value) => value === formData.password, "Passwords do not match"] || [
      (value) => !value.length,
      "This field is required",
    ],
  };
  const {
    displayName,
    email,
    password,

    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,

    displayNameValid,
    formState,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log(formState);
    if (!isFormValid) return;
    console.log(formState);
  };
  console.log(passwordValid);
  return (
    <AuthLayout title='Register'>
      <form onSubmit={handleSubmit} className='animate__animated animate__fadeIn '>
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField
              value={displayName}
              name='displayName'
              onChange={onInputChange}
              label='Full Name (*)'
              type='text'
              placeholder='John Doe'
              fullWidth={true}
              error={displayNameValid && formSubmitted}
              helperText={displayNameValid && formSubmitted}
            ></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField
              value={email}
              name='email'
              onChange={onInputChange}
              label='Email (*)'
              type='email'
              error={emailValid && formSubmitted}
              helperText={emailValid && formSubmitted}
              placeholder='example@mail.com'
              fullWidth={true}
            ></TextField>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField
              value={password}
              name='password'
              onChange={onInputChange}
              label='Password (*)'
              type='password'
              placeholder='Password'
              error={passwordValid && formSubmitted}
              helperText={passwordValid && formSubmitted}
              fullWidth={true}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={12}>
              <Button type='submit' variant='contained' color='primary' fullWidth={true}>
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
