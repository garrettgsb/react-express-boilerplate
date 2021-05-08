import Express from "express";
const App = Express();
const PORT = 8080;
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));
App.get('/api/data', (req, res) => res.json({
    message: "Seems to work!",
}));
App.listen(PORT, () => {
    console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
