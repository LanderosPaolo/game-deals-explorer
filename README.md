# 🎮 Game Deals Explorer

Aplicación web desarrollada con **React y JavaScript** que permite explorar ofertas de videojuegos, buscar títulos específicos y visualizar sus descuentos mediante datos obtenidos de la API pública de **CheapShark**.

Este proyecto forma parte de mi proceso de actualización profesional como desarrollador Full Stack, con especial énfasis en el consumo de APIs REST, manejo de estados, componentes reutilizables y buenas prácticas en React.

## 🌐 Demo en vivo

🚀 **[Ver aplicación en Render](https://game-deals-explorer.onrender.com/)**

## ✨ Funcionalidades

- 🔎 Búsqueda de videojuegos por nombre.
- 🎮 Visualización de ofertas reales disponibles en Steam.
- 💰 Comparación entre precio original y precio de oferta.
- 📉 Cálculo automático del porcentaje de descuento.
- 🆓 Identificación de videojuegos gratuitos.
- 🔗 Acceso externo a cada oferta mediante CheapShark.
- 📊 Contador de resultados encontrados.
- 🔄 Opción para restablecer la búsqueda.
- ⏳ Indicadores de carga y manejo de errores.
- 📭 Mensajes cuando no se encuentran resultados.
- 🧭 Navegación con React Router y página personalizada para rutas inexistentes.
- 📱 Diseño responsive adaptable a distintos dispositivos.

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 | Construcción de la interfaz mediante componentes |
| JavaScript | Lógica de la aplicación |
| Vite 8 | Entorno de desarrollo y compilación |
| React Router 8 | Navegación entre páginas |
| CSS3 | Estilos y diseño responsive |
| CheapShark API | Obtención de ofertas de videojuegos |
| ESLint | Análisis estático del código |
| Render | Despliegue de la aplicación |

## 🧠 Conceptos técnicos aplicados

### Gestión de estados y efectos

Uso de `useState` y `useEffect` para administrar búsquedas, resultados, estados de carga y errores.

### Custom hook

Implementación de `useOfertas`, encargado de centralizar las peticiones HTTP y separar la lógica de obtención de datos de los componentes visuales.

### Consumo de API REST

Peticiones asíncronas utilizando `fetch()`, `async/await` y validación de respuestas HTTP.

### Control de peticiones obsoletas

Implementación de una función de limpieza en `useEffect` para evitar que respuestas anteriores actualicen el estado cuando cambia la búsqueda o se desmonta el componente.

### Componentización

Separación de responsabilidades mediante componentes como `SearchForm`, `DealList` y `DealCard`, utilizando props para compartir información.

### Navegación

Implementación de rutas con React Router, incluyendo páginas de inicio, información del proyecto y manejo de rutas inexistentes.

## 📁 Estructura del proyecto

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

## 🔌 API utilizada

La aplicación consume la API pública de CheapShark:

`https://www.cheapshark.com/api/1.0/deals`

Actualmente, las consultas están configuradas para obtener ofertas de **Steam con precios de hasta US$15**.

Los resultados dependen de la disponibilidad y los datos entregados por la API.

## 💻 Instalación y ejecución local

**1. Clonar el repositorio**

```bash
git clone https://github.com/LanderosPaolo/game-deals-explorer.git
```

**2. Acceder al proyecto**

```bash
cd game-deals-explorer
```

**3. Instalar dependencias**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Para generar una versión de producción:

```bash
npm run build
```

## 🎯 Objetivo del proyecto

Fortalecer mis conocimientos en desarrollo frontend con React mediante la construcción de una aplicación funcional que integra información de una API externa.

Durante su desarrollo reforcé conceptos relacionados con componentes reutilizables, programación asíncrona, manejo de estados, navegación, separación de responsabilidades y diseño de interfaces adaptables.

## 👨‍💻 Autor

**Paolo Landeros**

[GitHub](https://github.com/LanderosPaolo)
