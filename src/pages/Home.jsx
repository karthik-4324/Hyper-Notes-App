import { Box, Typography } from "@mui/material";

import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

function Home({ notes, setNotes }) {
  function handleEdit(id, updatedData) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updatedData,
            }
          : note,
      ),
    );
  }
  function handleAddNote(newNote) {
    setNotes((previousNotes) => [...previousNotes, newNote]);
  }

  function handleToggleImportant(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, important: !note.important } : note,
      ),
    );
  }

  function handleArchive(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, archived: true } : note,
      ),
    );
  }

  function handleDelete(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, deleted: true } : note,
      ),
    );
  }

  const activeNotes = notes.filter((note) => !note.archived && !note.deleted);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        My Notes
      </Typography>

      <NoteForm onAddNote={handleAddNote} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
        }}
      >
        {activeNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onToggleImportant={handleToggleImportant}
            onArchive={handleArchive}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
