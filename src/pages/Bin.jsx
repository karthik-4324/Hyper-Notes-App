import { Box, Typography, Button } from "@mui/material";

function Bin({ notes, setNotes }) {
  function handleRestore(id) {
    setNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id
          ? { ...note, deleted: false }
          : note
      )
    );
  }

  function handlePermanentDelete(id) {
    setNotes((previousNotes) =>
      previousNotes.filter(
        (note) => note.id !== id
      )
    );
  }

  const deletedNotes = notes.filter(
    (note) => note.deleted
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Bin
      </Typography>

      {deletedNotes.map((note) => (
        <Box
          key={note.id}
          sx={{
            mb: 2,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">
            {note.title}
          </Typography>

          <Typography sx={{ mb: 2 }}>
            {note.content}
          </Typography>

          <Button
            onClick={() => handleRestore(note.id)}
          >
            Restore
          </Button>

          <Button
            color="error"
            onClick={() =>
              handlePermanentDelete(note.id)
            }
          >
            Delete Permanently
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default Bin;