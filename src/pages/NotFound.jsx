import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <h1>
        404 Página no encontrada
      </h1>
      <Link to="/">Volver al inicio</Link>
    </>
  );
}

export default NotFound;
