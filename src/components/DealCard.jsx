function DealCard({ oferta }) {
  const precioNormal =
    Number(oferta.normalPrice);

  const precioOferta =
    Number(oferta.salePrice);

  const descuento =
    precioNormal > 0
      ? 100 -
        (precioOferta * 100) / precioNormal
      : 0;

  return (
    <li className="deal-card">
      <div className="deal-image-container">
        <img
          className="deal-image"
          src={oferta.thumb}
          alt={`Portada de ${oferta.title}`}
          loading="lazy"
        />

        {descuento > 0 && (
          <span className="discount-badge">
            -{descuento.toFixed()}%
          </span>
        )}
      </div>

      <div className="deal-content">
        <h3>{oferta.title}</h3>

        <div className="price-container">
          {precioNormal > 0 && (
            <p className="normal-price">
              US${precioNormal.toFixed(2)}
            </p>
          )}

          <p className="sale-price">
            {precioOferta === 0
              ? "Gratis"
              : `US$${precioOferta.toFixed(2)}`}
          </p>
        </div>

        <a
          className="deal-link"
          href={`https://www.cheapshark.com/redirect?dealID=${oferta.dealID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver oferta
        </a>
      </div>
    </li>
  );
}

export default DealCard;