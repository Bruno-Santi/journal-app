import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { creatingNewNote, startNewNote } from "../../store/journal";
export const JournalPage = () => {
  const { isSaving, active, notes } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(creatingNewNote());
    setTimeout(() => dispatch(startNewNote()), 3000);
  };
  return (
    <JournalLayout className='animate__animated animate__fadeIn '>
      {active ? <NoteView /> : <NothingSelectedView /> || notes.length ? <NothingSelectedView /> : <NoteView />}

      <IconButton
        disabled={isSaving}
        size='large'
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} onClick={onClickNewNote} />
      </IconButton>
    </JournalLayout>
  );
};
