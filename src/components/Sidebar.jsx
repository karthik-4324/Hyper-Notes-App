import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ArchiveIcon from "@mui/icons-material/Archive";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        minHeight: "calc(100vh - 64px)",
        borderRight: "1px solid #ddd",
      }}
    >
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/archive">
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>

          <ListItemText primary="Archive" />
        </ListItemButton>

        <ListItemButton component={Link} to="/important">
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>

          <ListItemText primary="Important" />
        </ListItemButton>

        <ListItemButton component={Link} to="/bin">
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>

          <ListItemText primary="Bin" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;
