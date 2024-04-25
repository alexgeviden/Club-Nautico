import express from 'express';
import socioRoutes from './routes/socio.route.js';
import barcoRoutes from './routes/barco.route.js';
import patronRoutes from './routes/patron.route.js';


const app = express();

// Middlewares
app.use(express.json());



// Routes
app.use(socioRoutes);
app.use(barcoRoutes);
app.use(patronRoutes);

export default app;