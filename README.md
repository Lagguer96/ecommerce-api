# Carrito de Compras con React, Vite y Node.js

Este proyecto es un carrito de compras desarrollado con React y Vite, y una API Node.js/Express para manejar productos.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona este repositorio:

   ```bash
   git clone [URL_del_repositorio_de_GitHub]
   cd carrito-react-vite

2. Navega a la carpeta del backend y instala las dependencias:
   ```bash
   cd ecommerce-api
   npm install
   

3. Inicia el servidor de la API:


   npm start

4. Navega a la carpeta del frontend y instala las dependencias:

   ```bash
   cd ../carrito-react-vite
   npm install

## Uso

1. Para iniciar el servidor de desarrollo del frontend, ejecuta:

   ```bash
   npm run


El frontend estará corriendo en http://localhost:3000 y el backend en http://localhost:3001.

## Rutas de la API

* GET /api/products: Obtiene la lista de productos.
* POST /api/products: Añade un nuevo producto. El cuerpo de la petición debe ser JSON con el siguiente formato:


   ```Json
  {
    "id": "number",
    "name": "string",
    "price": "number",
    "image": "string"
  }


* R. Lagguer96 *
