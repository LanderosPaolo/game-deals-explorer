import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import DealList from "../components/DealList";

function Home() {
  const [ofertas, setOfertas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  useEffect(() => {
    const obtenerOfertas = async () => {
      setCargando(true);
      setError("");

      try {
        const urlBase =
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

        const url = terminoBusqueda
          ? `${urlBase}&title=${encodeURIComponent(terminoBusqueda)}`
          : urlBase;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        setOfertas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerOfertas();
  }, [terminoBusqueda]);

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
