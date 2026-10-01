import { Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/acerca">Acerca de</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
