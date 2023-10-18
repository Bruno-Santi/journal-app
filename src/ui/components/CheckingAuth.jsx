import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        p: 4,
      }}
    >
      <Grid item direction='row' justifyContent='center'>
        <CircularProgress color='warning'></CircularProgress>
      </Grid>
    </Grid>
  );
};
