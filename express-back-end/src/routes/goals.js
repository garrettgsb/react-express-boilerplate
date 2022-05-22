const express = require('express');
const router = express.Router();

module.exports = db => {
	router.get('/goals', (req, res) => {
		db.query(
			`
    SELECT goals.*, users.username, users.email
    FROM goals
    JOIN users ON user_id = users.id
		WHERE goal_name NOT LIKE '%acation%';
    `
		)
			.then(data => {
				const goals = data.rows;
				res.json(goals);
			})
			.catch(error => {
				console.log('This error is inside -> get (\'/goals\') route: ', error);
			});
	});

	router.get('/vacations', (req, res) => {
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
				console.log('This error is inside -> get (\'/vacations\') route: ', error);
			});
	});

	router.put('/goals', (req, res) => {
		db.query(
			`
    UPDATE goals 
    SET goal_name = $1, 
    end_date = $2, 
    amount = $3 
    WHERE id = $4
		AND goals.amount > 0;
    `, [
			req.body.goals.goal_name,
			req.body.goals.date,
			req.body.goals.totalGoals,
			req.body.goals.goal_id
		]
		)
			.catch(error => {
				console.log('This error is inside -> put (\'/goals\') route: ', error);
			});
	});

	router.delete('/goals', (req, res) => {
		db.query(
			`
			DELETE FROM goals
      WHERE id = $1;
    `, [
			req.body.id
		]
		).then(data => {
			console.log('It has sucessfully deleted goal ID!! ', req.body);
			const removed = data.rows;
			res.json(removed);
		})
			.catch(error => {
				console.log('This error is inside -> put (\'/goals\') route: ', error);
			});
	});



	return router;
};
