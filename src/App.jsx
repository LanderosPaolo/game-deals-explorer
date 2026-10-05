import { useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] =
    useState("");

  const buscarOfertas = (termino) => {
    setTerminoBusqueda(termino);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-content">
          <NavLink to="/" className="brand">
            Game Deals
          </NavLink>

          <nav
            className="main-nav"
            aria-label="Navegación principal"
          >
            <NavLink
              to="/"
              end
              className="nav-link"
            >
              Inicio
            </NavLink>

            <NavLink
              to="/acerca"
              className="nav-link"
            >
              Acerca de
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                terminoBusqueda={terminoBusqueda}
                buscarOfertas={buscarOfertas}
              />
            }
          />

          <Route
            path="/acerca"
            element={<About />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>
          Ofertas proporcionadas por CheapShark.
        </p>
      </footer>
    </div>
  );
}

export default App;