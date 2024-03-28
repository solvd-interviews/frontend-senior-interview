import { CssBaseline } from "@mui/material";
import SolvdLogo from "../assets/solvd.png";

const HomePage = () => {
  return (
    <div style={{ }}>
      <div
        className="App"
        style={{
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: '100px',
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>
            <a href="https://www.solvd.com/">
              <img
                style={{ maxWidth: "200px", height: "auto", margin: "0 auto" }}
                src={SolvdLogo}
                alt="Solvd Logo"
              />
            </a>
          </h1>
          <h1 style={{ textAlign: "center" }}>Star Wars App</h1>
          <p style={{ paddingTop: "2em", textAlign: "center", opacity: ".8" }}>
            Made with ❤️ by Solvd Team.
          </p>
        </div>
      </div>
      <CssBaseline />
    </div>
  )
}

export default HomePage