const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let products = [];

// Ruta GET para obtener los productos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Ruta POST para añadir un nuevo producto
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
