import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/index";
import { useEffect, useMemo, useRef } from "react";
import { clearActiveNote, setActiveNote, setLastNoteActive } from "../../store/journal/journalSlice";
import { startDeletingNote, startSavingNote, startingUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: activeNote, savedMessage, isSaving, notes } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(activeNote);
  const { imageUrls } = useSelector((state) => state.journal.active);
  console.log(savedMessage);
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
  const onDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingNote()).then(() => {
          Swal.fire(
            `  Note deleted successfully!
        `,
            "",
            "success"
          );
        });
      }
    });
  };
  useEffect(() => {
    if (savedMessage === "Note updated successfully!") {
      Swal.fire(`${savedMessage}`, { savedMessage }, "success");
    }
  }, [savedMessage]);
  useEffect(() => {
    notes.length ? dispatch(setLastNoteActive()) : dispatch(clearActiveNote());
  }, [notes]);

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

        <Button sx={{ mb: 2 }} color='primary' disabled={isSaving} onClick={() => fileInputRef.current.click()}>
          <Typography sx={{ m: "auto", mt: 0.5, mr: 0.5 }}>Upload Images</Typography>

          <UploadFileOutlined></UploadFileOutlined>
        </Button>
        <Button disabled={isSaving} onClick={onSaveNote} color='primary' sx={{ padding: 1, marginBottom: 2 }}>
          <Typography sx={{ m: "auto", mt: 0.5, mr: 0.5 }}>Save</Typography>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
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

      <Grid container justifyContent='end'>
        <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
          <Typography sx={{ m: "auto", mt: 0.3, mr: 0.5 }}> Delete Note</Typography>
          <DeleteOutline></DeleteOutline>
        </Button>
      </Grid>

      {activeNote && <ImageGallery images={imageUrls} />}
    </Grid>
  );
};
