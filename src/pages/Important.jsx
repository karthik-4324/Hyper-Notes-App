import { Box, Typography } from "@mui/material";
import NoteCard from "../components/NoteCard";

function Important({ notes, setNotes }) {
  function handleToggleImportant(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, important: !note.important } : note,
      ),
    );
  }

  const importantNotes = notes.filter(
    (note) => note.important && !note.archived && !note.deleted,
  );
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
  function handleArchive(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, archived: true } : note,
      ),
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Important
      </Typography>

      {importantNotes.map((note) => (
        <Box key={note.id} sx={{ mb: 2 }}>
          <NoteCard
            note={note}
            onToggleImportant={handleToggleImportant}
            onEdit={handleEdit}
            onArchive={handleArchive}
          />
        </Box>
      ))}
    </Box>
  );
}

export default Important;
