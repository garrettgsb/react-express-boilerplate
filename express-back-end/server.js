import express from 'express';
import cors from 'cors';
import settingsRouter from './routes/settingsRoutes.js';
import historyRouter from './routes/historyRoutes.js'; 
import favoritesRouter from './routes/favoritesRoutes.js'; 

const app = express();
app.use(cors());
app.use(express.json());

// Use routers
app.use('/api/settings', settingsRouter);
app.use('/api/history', historyRouter); // Use the history router
app.use('/api/favorites', favoritesRouter); // Use the favorites router

const PORT = 8080; 
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
