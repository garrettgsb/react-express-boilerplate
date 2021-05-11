import Express, { Request, Response } from "express";
const App = Express();
const PORT = 8080;
import dotenv from 'dotenv';
dotenv.config();

// Setup database for queries
import Pool from 'pg-native';
const connectionString = process.env.DATABASE_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const pool = new Pool({connectionString});
import queries from './db/helpers/queries';
const {
  getCategories,
  getEntryByCategory,
  getEntryByEntryId,
  insertCategory,
  insertEntry,
  insertUser
} = queries(pool)
// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));

// Hardcoded userId for development
const userId = '1';

// Sample GET route
// App.get('/api/data', (req:Request, res:Response) => res.json({
//   message: "Seems to work!",
// }));
App.get('/api/entries', (req: Request, res: Response) => res.json({
  entries: getEntryByCategory({categoryId: null, userId}),
}));
App.get('/api/entries/:id', (req: Request, res: Response) => res.json({
  entry: getEntryByEntryId({entryId: req.params.id, userId}),
  entryId: req.params.id
}));
App.get('/api/categories', (req: Request, res: Response) => res.json({
  categories: getCategories(userId),
}));
App.get('/api/categories/:id', (req: Request, res: Response) => {res.json({
  entries: getEntryByCategory({categoryId: req.params.id, userId}),
  categoryId: req.params.id
})});
App.post('/api/entries', (req: Request, res: Response) => {
  const attributes = {
    title: req.body.title,
    content: req.body.content,
    mood: req.body.mood || null,
    privacy: req.body.privacy,
    userId: userId,
    categoryId: req.body.category || null
  }
  insertEntry(attributes)
});
App.post('/api/categories', (req: Request, res: Response) => {
  insertCategory({userId, name: req.body.name})
});
App.post('/api/users', (req: Request, res: Response) => {
  const attributes = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  insertUser(attributes)
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
