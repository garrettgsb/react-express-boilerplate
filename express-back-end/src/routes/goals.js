const express = require('express');
const router = express.Router();

module.exports = db => {
	router.get('/goals', (req, res) => {
		db.query(
			`
    SELECT goals.*, users.username, users.email
    FROM goals
    JOIN users ON user_id = users.id;
    `
		)
			.then(data => {
				const goals = data.rows;
				res.json(goals);
			})
			.catch(error => {
				console.log('The error is: ', error);
			});
	});

	router.put('/goals', (req, res) => {
		db.query(
			`
    UPDATE goals 
    SET goal_name = '${req.body.goals.goal_name}', 
    end_date = '${req.body.goals.date}', 
    amount = ${req.body.goals.totalGoal} 
    WHERE user_id = ${req.body.goals.user_id};
    `
		)
			.then(data => {
				const goals = data.rows;
				res.json(goals);
			})
			.catch(error => {
				console.log('The error is: ', error);
			});
	});

	return router;
};
