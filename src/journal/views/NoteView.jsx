import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/index";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote, startingUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: activeNote, savedMessage, isSaving } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(activeNote);
  const { imageUrls } = useSelector((state) => state.journal.active);
  console.log(imageUrls);
  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startingUploadingFiles(target.files));
  };
  const fileInputRef = useRef();
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire("Note updated successfully!", "", "success");
    }
  }, [savedMessage]);

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
        <Typography sx={{ fontSize: 36, fontWeight: "light", marginBottom: 2 }}>{dateString}</Typography>
      </Grid>
      <Grid item>
        <input style={{ display: "none" }} ref={fileInputRef} type='file' multiple onChange={onFileInputChange} />

        <IconButton color='primary' disabled={isSaving} onClick={() => fileInputRef.current.click()}>
          <Button>Upload Images</Button>

          <UploadFileOutlined></UploadFileOutlined>
        </IconButton>
        <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{ padding: 2, marginBottom: 2 }}>
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
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        ></TextField>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          label='Whats on your mind?'
          name='body'
          value={body}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
          minRows={5}
        ></TextField>
      </Grid>
      {activeNote && <ImageGallery images={imageUrls} />}
    </Grid>
  );
};
