import { Box, Typography } from "@mui/material";
import NoteCard from "../components/NoteCard";

function Archive({ notes, setNotes }) {
  function handleUnarchive(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, archived: false } : note,
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

  function handleToggleImportant(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id ? { ...note, important: !note.important } : note,
      ),
    );
  }

  const archivedNotes = notes.filter((note) => note.archived && !note.deleted);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Archive
      </Typography>

      {archivedNotes.map((note) => (
        <Box key={note.id} sx={{ mb: 2 }}>
          <NoteCard
            note={note}
            onToggleImportant={handleToggleImportant}
            onArchive={handleUnarchive}
            onDelete={handleDelete}
            archiveLabel="Unarchive"
            onEdit={handleEdit}
          />
        </Box>
      ))}
    </Box>
  );
}

export default Archive;
