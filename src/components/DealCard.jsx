function DealCard({ oferta }) {

  const descuento = Number(oferta.normalPrice) > 0 ? (100 - (oferta.salePrice * 100) / oferta.normalPrice) : 0;

  return (
    <li>
      <img src={oferta.thumb} alt={oferta.title} />
      <p>Titulo: {oferta.title}</p>
      <p>Precio normal: {oferta.normalPrice}</p>
      {Number(oferta.salePrice) === 0 ? (
        <p>Precio de oferta: Gratis</p>
      ) : (
        <p>Precio de oferta: {oferta.salePrice}</p>
      )}

      {Number(oferta.normalPrice) > 0 && (
        <p>Descuento: {descuento.toFixed()}%</p>
      )}
      <a
        href={`https://www.cheapshark.com/redirect?dealID=${oferta.dealID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver oferta
      </a>
    </li>
  );
}

export default DealCard;
