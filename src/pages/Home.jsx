import SearchForm from "../components/SearchForm";
import DealList from "../components/DealList";
import useOfertas from "../hooks/useOfertas";

function Home({
  terminoBusqueda,
  buscarOfertas,
}) {
  const { ofertas, cargando, error } =
    useOfertas(terminoBusqueda);

  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">
          Ofertas reales en videojuegos
        </p>

        <h1>Game Deals Explorer</h1>

        <p className="hero-description">
          Encuentra videojuegos en oferta y compara
          rápidamente su precio normal con el precio
          actual.
        </p>

        <SearchForm
          buscarOfertas={buscarOfertas}
          terminoBusqueda={terminoBusqueda}
        />

        {terminoBusqueda && (
          <p className="search-status">
            Resultados para:{" "}
            <strong>{terminoBusqueda}</strong>
          </p>
        )}
      </section>

      <section
        className="results-area"
        aria-live="polite"
      >
        {cargando ? (
          <div className="status-card">
            <span className="spinner" />
            <p>Cargando ofertas...</p>
          </div>
        ) : error ? (
          <div className="status-card error-card">
            <p>{error}</p>
          </div>
        ) : (
          <DealList ofertas={ofertas} />
        )}
      </section>
    </>
  );
}

export default Home;