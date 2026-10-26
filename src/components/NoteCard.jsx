import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function NoteCard({
  note,
  onToggleImportant,
  onArchive,
  onDelete,
  archiveLabel = "Archive",
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  function handleSave() {
    if (!title.trim() && !content.trim()) {
      return;
    }

    onEdit(note.id, {
      title: title.trim(),
      content: content.trim(),
    });

    setIsEditing(false);
  }

  function handleCancel() {
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(false);
  }

  return (
    <Card>
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Content"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </>
        ) : (
          <>
            <Typography variant="h6">{note.title}</Typography>

            <Typography>{note.content}</Typography>
          </>
        )}
      </CardContent>

      <CardActions>
        {isEditing ? (
          <>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>

            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>

            <Button onClick={() => onToggleImportant(note.id)}>
              {note.important ? "Unimportant" : "Important"}
            </Button>

            <Button onClick={() => onArchive(note.id)}>{archiveLabel}</Button>

            <Button color="error" onClick={() => onDelete(note.id)}>
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default NoteCard;
