import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      className='animate__animated animate__fadeIn '
      container
      spacing={0}
      direction='column'
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: `calc(100vh - 120px)`,
        backgroundColor: "primary.main",
        borderRadius: 4,
        p: 4,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color='white' variant='h5'>
          Choose or create a note
        </Typography>
      </Grid>
    </Grid>
  );
};
