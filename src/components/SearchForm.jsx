import { useState } from "react";

function SearchForm({
  buscarOfertas,
  terminoBusqueda,
}) {
  const [busqueda, setBusqueda] =
    useState(terminoBusqueda);

  const [error, setError] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") {
      setError("Ingresa el nombre de un juego.");
      return;
    }

    setError("");
    buscarOfertas(busqueda.trim());
  };

  const verTodo = () => {
    setBusqueda("");
    setError("");
    buscarOfertas("");
  };

  return (
    <div className="search-panel">
      <h2>Buscar ofertas</h2>

      <form
        className="search-form"
        onSubmit={manejarSubmit}
      >
        <div className="form-field">
          <label htmlFor="juego">
            Nombre del juego
          </label>

          <input
            id="juego"
            type="text"
            value={busqueda}
            placeholder="Ejemplo: Batman"
            autoComplete="off"
            aria-describedby={
              error ? "search-error" : undefined
            }
            onChange={(e) =>
              setBusqueda(e.target.value)
            }
          />
        </div>

        <div className="form-actions">
          <button
            className="button button-primary"
            type="submit"
          >
            Buscar
          </button>

          <button
            className="button button-secondary"
            type="button"
            onClick={verTodo}
          >
            Ver todas
          </button>
        </div>
      </form>

      {error && (
        <p
          id="search-error"
          className="form-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default SearchForm;