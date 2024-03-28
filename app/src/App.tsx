import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";

export const App = () => {
  return (
    <>
      <Router>
        <AppBar style={{}}>
          <Toolbar>
            <Typography variant="h6">Solvd Star Wars App</Typography>
            <Link
              to="/"
              style={{
                color: "white",
                marginLeft: "20px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/characters"
              style={{
                color: "white",
                marginLeft: "20px",
                textDecoration: "none",
              }}
            >
              Characters
            </Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;