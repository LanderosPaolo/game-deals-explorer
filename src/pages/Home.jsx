import SearchForm from "../components/SearchForm";
import DealList from "../components/DealList";
import useOfertas from "../hooks/useOfertas";

function Home({ terminoBusqueda, buscarOfertas }) {
  const { ofertas, cargando, error } = useOfertas(terminoBusqueda)

  return (
    <>
      <h1>Game Deals Explorer</h1>
      <SearchForm buscarOfertas={buscarOfertas} terminoBusqueda={terminoBusqueda} />
      <p>Búsqueda solicitada: {terminoBusqueda}</p>

      {cargando ? (
        <p>Cargando ofertas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DealList ofertas={ofertas} />
      )}
    </>
  );
}

export default Home;
