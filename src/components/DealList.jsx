import DealCard from "./DealCard";

function DealList({ ofertas }) {
  return (
    <section
      className="deal-list-section"
      aria-labelledby="results-title"
    >
      <div className="results-header">
        <h2 id="results-title">
          Ofertas encontradas
        </h2>

        <span className="results-count">
          {ofertas.length}
        </span>
      </div>

      {ofertas.length === 0 ? (
        <div className="empty-state">
          <h3>No encontramos ofertas</h3>
          <p>
            Intenta buscar otro juego o vuelve a
            mostrar todas las ofertas.
          </p>
        </div>
      ) : (
        <ul className="deal-grid">
          {ofertas.map((oferta) => (
            <DealCard
              key={oferta.dealID}
              oferta={oferta}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default DealList;