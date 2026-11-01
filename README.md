# SPA Tienda Online con Vue 3 y Pinia (`spa-crud-pinia`)

Este proyecto es una aplicación de página única (SPA) desarrollada con **Vue 3**, **Pinia** para la gestión de estado global y **Vue Router** para la navegación entre vistas. La interfaz permite gestionar un catálogo de productos (CRUD) y administrar un carrito de compras dinámico.

---

## 📁 Estructura del Proyecto

A continuación se detalla la organización de archivos y carpetas del repositorio:

```text
spa-crud-pinia/
├── public/
│   └── imgs/                  # Imágenes estáticas de productos (.png)
├── src/
│   ├── assets/                # Estilos globales y recursos estáticos
│   ├── components/            # Componentes reutilizables de la interfaz (Navbar, Cards, etc.)
│   ├── router/
│   │   └── index.js           # Definición de rutas de la aplicación (Vue Router)
│   ├── stores/
│   │   ├── useProductStore.js # Gestión del estado de productos (CRUD)
│   │   └── useCartStore.js    # Gestión del estado del carrito de compras
│   ├── views/
│   │   ├── HomeView.vue       # Vista principal / Landing page
│   │   ├── ProductsView.vue   # Vista del catálogo e interfaz CRUD
│   │   └── CartView.vue       # Vista de resumen del carrito de compras
│   ├── App.vue                # Componente raíz de la aplicación
│   └── main.js                # Punto de entrada JavaScript (Montaje de Vue, Pinia y Router)
├── .gitignore                 # Archivos e historial ignorados por Git
├── index.html                 # Plantilla HTML principal
├── package.json               # Dependencias, scripts de construcción y deploy
└── vite.config.js             # Configuración de Vite (incluye base URL para GitHub Pages)
```

---

## ⚙️ Descripción de Áreas y Responsabilidades

### 1. `public/imgs/`
Contiene los archivos de imágenes locales en formato `.png` (`laptop.png`, `mouse.png`, `silla.png`, etc.). Los recursos en esta carpeta se sirven directamente en la raíz de la compilación y se vinculan mediante la propiedad `import.meta.env.BASE_URL` para asegurar su correcta resolución en entornos como **GitHub Pages**.

### 2. `src/stores/` (Gestión de Estado con Pinia)
- **`useProductStore.js`**: Administra el catálogo de productos. Proporciona la lista inicial de elementos y expone las acciones necesarias para crear, editar y eliminar productos del catálogo.
- **`useCartStore.js`**: Controla el estado del carrito. Permite agregar items, modificar cantidades (incremento y decremento uno a uno con eliminación automática al llegar a cero) y calcular totales.

### 3. `src/views/` (Vistas de la Aplicación)
- **`HomeView.vue`**: Presentación inicial de la tienda.
- **`ProductsView.vue`**: Despliega la lista de productos en tarjetas informativas con botones para agregar al carrito o gestionar mediante el CRUD.
- **`CartView.vue`**: Muestra el desglose de productos seleccionados, cálculo de totales y controles para ajustar cantidades.

### 4. `src/router/index.js`
Configura el enrutamiento del lado del cliente utilizando **Vue Router**, mapeando cada URL a su correspondiente componente dentro de la carpeta `views/`.

### 5. `src/App.vue` y `src/main.js`
- **`App.vue`**: Sirve como contenedor principal donde se aloja el menú de navegación (`Navbar`) y el conector de rutas (`<router-view>`).
- **`main.js`**: Inicializa la instancia de Vue 3, registra el enrutador y la instancia de Pinia para que el estado global esté disponible en todos los componentes.

### 6. Configuración de Despliegue (`package.json` y `vite.config.js`)
- **`vite.config.js`**: Incluye el atributo `base: '/spa-crud-pinia/'` indispensable para resolver rutas de assets y rutas de navegación correctamente dentro de subdominios de GitHub Pages.
- **`package.json`**: Incluye el paquete `gh-pages` como dependencia de desarrollo y el script `"deploy": "gh-pages -d dist"` para automatizar la publicación de la carpeta compilada `dist`.

---

## 🚀 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia el servidor de desarrollo local.
- `npm run build`: Compila la aplicación optimizada para producción en la carpeta `dist`.
- `npm run deploy`: Ejecuta la compilación y despliega automáticamente la carpeta `dist` a la rama `gh-pages` del repositorio remoto.