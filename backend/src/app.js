import express from 'express';
import socioRoutes from './routes/socio.route.js';
import barcoRoutes from './routes/barco.route.js';
import patronRoutes from './routes/patron.route.js';
import salidasRoute from './routes/salidas.route.js';



const app = express();

// Middlewares
app.use(express.json());

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permitir los métodos HTTP especificados
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir los encabezados especificados
  next();
});

// Routes
app.use(socioRoutes);
app.use(barcoRoutes);
app.use(patronRoutes);
app.use(salidasRoute);

export default app;