# 🎮 Game Deals Explorer

Aplicación web desarrollada con React que permite buscar ofertas reales de videojuegos y comparar su precio normal con el precio actual.

Los datos son obtenidos desde la API pública de [CheapShark](https://www.cheapshark.com/).

## 🌐 Demo

La aplicación será desplegada próximamente.

<!-- Agregar aquí la URL de Render después del despliegue. -->

## ✨ Funcionalidades

- Consulta de ofertas reales de videojuegos.
- Búsqueda por nombre.
- Opción para volver a mostrar todas las ofertas.
- Conteo de resultados encontrados.
- Precio normal y precio de oferta.
- Detección de juegos gratuitos.
- Cálculo del porcentaje de descuento.
- Enlace externo para revisar cada oferta.
- Estados de carga, error y ausencia de resultados.
- Navegación entre páginas con React Router.
- Página personalizada para rutas inexistentes.
- Persistencia de la búsqueda al navegar entre páginas.
- Diseño responsive para escritorio, tablet y móvil.

## 🛠️ Tecnologías

- React
- JavaScript
- Vite
- React Router
- CSS
- CheapShark API
- ESLint

## 🧠 Conceptos aplicados

- Componentes reutilizables.
- Props.
- Estado con `useState`.
- Efectos con `useEffect`.
- Formularios controlados.
- Peticiones con `fetch()`.
- `async/await`.
- Manejo de errores con `try/catch/finally`.
- Renderizado condicional.
- Recorrido de arreglos con `map()`.
- Rutas estáticas y página `NotFound`.
- Navegación con `NavLink`.
- Custom hooks.
- Limpieza de efectos para evitar actualizaciones con respuestas antiguas.
- Diseño responsive con CSS Grid y Flexbox.

## 🗂️ Estructura principal

```text
src/
├── components/
│   ├── DealCard.jsx
│   ├── DealList.jsx
│   └── SearchForm.jsx
├── hooks/
│   └── useOfertas.js
├── pages/
│   ├── About.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🔀 Rutas

| Ruta | Descripción |
|---|---|
| `/` | Buscador y listado de ofertas |
| `/acerca` | Información sobre el proyecto |
| `*` | Página para rutas inexistentes |

## 🚀 Ejecución local

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar en la carpeta

```bash
cd game-deals-explorer
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

## ✅ Verificación

Ejecutar ESLint:

```bash
npm run lint
```

Generar la versión de producción:

```bash
npm run build
```

## 🔌 API

La aplicación utiliza el endpoint de ofertas de CheapShark:

```text
https://www.cheapshark.com/api/1.0/deals
```

Los precios entregados por la API se muestran en dólares estadounidenses.

## 📚 Objetivo del proyecto

Este proyecto fue desarrollado como parte de una ruta de reactivación profesional para reforzar React y practicar:

- Consumo de APIs.
- Manejo de procesos asíncronos.
- Arquitectura de componentes.
- Enrutamiento.
- Separación de lógica mediante custom hooks.
- Manejo de distintos estados de una interfaz.

## 👤 Autor

Paolo Landeros