import DealCard from "./DealCard";

function DealList({ ofertas }) {
  return (
    <>
      <p>Ofertas encontradas: {ofertas.length}</p>
      {ofertas.length === 0 ? (
        <p>No existen ofertas</p>
      ) : (
        <ul>
          {ofertas.map((oferta) => (
            <DealCard key={oferta.dealID} oferta={oferta} />
          ))}
        </ul>
      )}
    </>
  );
}

export default DealList;
