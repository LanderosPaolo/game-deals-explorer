import { Link } from "react-router";

function NotFound() {
  return (
    <section className="not-found-page">
      <p className="error-code">404</p>

      <h1>Página no encontrada</h1>

      <p>
        La dirección que intentaste visitar no existe.
      </p>

      <Link
        className="button button-primary"
        to="/"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;