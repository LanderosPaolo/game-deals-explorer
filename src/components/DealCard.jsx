function DealCard({ oferta }) {
  const descuento = 100 - (oferta.salePrice * 100) / oferta.normalPrice;

  return (
    <li>
      <img src={oferta.thumb} alt={oferta.title} />
      <p>Titulo: {oferta.title}</p>
      <p>Precio normal: {oferta.normalPrice}</p>
      <p>Precio de oferta: {oferta.salePrice}</p>
      <p>Descuento: {descuento.toFixed()}%</p>
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
