import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./styles.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Games, Home, Highscores } from "./pages/index";

const App = () => (
  <Theme
    appearance="light"
    accentColor="grass"
    panelBackground="solid"
    scaling="110%"
  >
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/games" exact element={<Games />} />
        <Route path="/highscores" exact element={<Highscores />} />
      </Routes>
    </BrowserRouter>
    {/* <ThemePanel /> */}
  </Theme>
);

export default App;
