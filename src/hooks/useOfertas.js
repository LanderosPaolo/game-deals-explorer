import { useState, useEffect } from "react";

function useOfertas(terminoBusqueda) {
  const [ofertas, setOfertas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

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

  return { ofertas, cargando, error };
}

export default useOfertas;
