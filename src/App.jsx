import { Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const buscarOfertas = (termino) => {
  setTerminoBusqueda(termino);
};

  return (
    <>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/acerca">Acerca de</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home terminoBusqueda={terminoBusqueda} buscarOfertas={buscarOfertas} />} />
        <Route path="/acerca" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
