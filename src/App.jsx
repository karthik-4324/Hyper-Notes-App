import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Important from "./pages/Important";
import Bin from "./pages/Bin";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("hyper-notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  useEffect(() => {
    localStorage.setItem("hyper-notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1, padding: 3 }}>
          <Routes>
            <Route
              path="/"
              element={<Home notes={notes} setNotes={setNotes} />}
            />

            <Route
              path="/archive"
              element={<Archive notes={notes} setNotes={setNotes} />}
            />

            <Route
              path="/important"
              element={<Important notes={notes} setNotes={setNotes} />}
            />

            <Route
              path="/bin"
              element={<Bin notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
