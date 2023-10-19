import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components/ImageGallery";
export const NoteView = () => {
  return (
    <Grid
      className='animate__animated animate__fadeIn '
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ marginBottom: 2 }}
    >
      <Grid item>
        <Typography sx={{ fontSize: 39, fontWeight: "light", marginBottom: 2 }}>August 28, 2023</Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ padding: 2, marginBottom: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Insert a title'
          label='Title'
          sx={{ border: "none", mb: 1 }}
        ></TextField>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          label='Whats on your mind?'
          sx={{ border: "none", mb: 1 }}
          minRows={5}
        ></TextField>
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
