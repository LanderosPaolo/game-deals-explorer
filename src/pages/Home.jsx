import { useState } from "react";
import SearchForm from "../components/SearchForm";
import DealList from "../components/DealList";
import useOfertas from "../hooks/useOfertas";

function Home() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const { ofertas, cargando, error } = useOfertas(terminoBusqueda)

  const buscarOfertas = (titulo) => {
    setTerminoBusqueda(titulo);
  };

  return (
    <>
      <h1>Game Deals Explorer</h1>
      <SearchForm buscarOfertas={buscarOfertas} />
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
