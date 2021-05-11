import Express from "express";
const App = Express();
const PORT = 8080;
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));
App.get('/api/entries', (req, res) => res.json({
    message: "Will query for entries!",
}));
App.get('/api/entries/:id', (req, res) => res.json({
    message: "Will query for that entry!",
    id: req.params.id
}));
App.get('/api/categories', (req, res) => res.json({
    message: "Will query for categories!",
}));
App.get('/api/categories/:id', (req, res) => res.json({
    message: "Will query for entries under that category!",
    id: req.params.id
}));
App.listen(PORT, () => {
    console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
