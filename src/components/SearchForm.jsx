import { useState } from "react";

function SearchForm({ buscarOfertas, terminoBusqueda }) {
  const [busqueda, setBusqueda] = useState(terminoBusqueda);
  const [error, setError] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") {
      setError("Este campo no puede estar vacío...");
      return;
    }

    setError("");
    buscarOfertas(busqueda.trim());
  };

  const verTodo = () => {
    setBusqueda("");
    setError("");
    buscarOfertas("");
  }

  return (
    <>
      <p>Buscar ofertas</p>

      <form onSubmit={manejarSubmit}>
        <label htmlFor="juego">Juego</label>
        <input
          id="juego"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit">Buscar</button>
        <button type="button" onClick={verTodo}>Ver todas</button>
      </form>

      {error && <p>{error}</p>}
    </>
  );
}

export default SearchForm;
