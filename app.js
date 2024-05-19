require('dotenv').config();
const express = require('express');
const connectDB = require('./Config/database');
const beneficiarioRoutes = require('./Routes/beneficiarioRoutes');
const ayudanteRoutes = require('./Routes/ayudanteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/beneficiarios', beneficiarioRoutes);
app.use('/ayudantes', ayudanteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error de conexión a la base de datos:', error);
});
