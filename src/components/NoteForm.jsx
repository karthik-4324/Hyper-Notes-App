import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() && !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      important: false,
      archived: false,
      deleted: false,
    };

    onAddNote(newNote);

    setTitle("");
    setContent("");
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 600,
      }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="Content"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button type="submit" variant="contained">
        Add Note
      </Button>
    </Box>
  );
}

export default NoteForm;