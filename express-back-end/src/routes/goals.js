const express = require('express');
const router = express.Router();

module.exports = db => {
	router.get('/goals', (req, res) => {
		db.query(
			`
    SELECT goals.*, users.username, users.email
    FROM goals
    JOIN users ON user_id = users.id
		WHERE goals.amount > 0;
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

	router.put('/vacations', (req, res) => {
		db.query(
			`
			SELECT goals.*, users.username AS name 
			FROM goals
			JOIN users ON user_id = users.id
			WHERE goal_name LIKE '%acation%';
    `
		)
			.then(data => {
				const vacations = data.rows;
				res.json(vacations);
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
