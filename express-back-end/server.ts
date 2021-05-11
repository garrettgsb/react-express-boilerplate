import Express, { Request, Response } from "express";
const App = Express();
const PORT = 8080;

// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));

// Sample GET route
// App.get('/api/data', (req:Request, res:Response) => res.json({
//   message: "Seems to work!",
// }));
App.get('/api/entries', (req: Request, res: Response) => res.json({
  message: "Will query for entries!",
}));
App.get('/api/entries/:id', (req: Request, res: Response) => res.json({
  message: "Will query for that entry!",
  id: req.params.id
}));
App.get('/api/categories', (req: Request, res: Response) => res.json({
  message: "Will query for categories!",
}));
App.get('/api/categories/:id', (req: Request, res: Response) => res.json({
  message: "Will query for entries under that category!",
  id: req.params.id
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
