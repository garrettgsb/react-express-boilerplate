const router = require("express").Router();

module.exports = (db) => {
  router.get("/favourites/", (request, response) => {
    
    const { userId } = request.query;
    db.query(
      `SELECT * FROM favourites
      WHERE user_id = $1
      ;`
      ,[Number(userId)])
      .then((res) => {
        console.log(typeof response.json(res.rows));
      });
  });
  // router.get("/appointments", (request, response) => {
  //   db.query(
  //     `
  //     SELECT
  //       appointments.id,
  //       appointments.time,
  //       CASE WHEN interviews.id IS NULL
  //       THEN NULL
  //       ELSE json_build_object('student', interviews.student, 'interviewer', interviews.interviewer_id)
  //       END AS interview
  //     FROM appointments
  //     LEFT JOIN interviews ON interviews.appointment_id = appointments.id
  //     GROUP BY appointments.id, interviews.id, interviews.student, interviews.interviewer_id
  //     ORDER BY appointments.id
  //   `
  //   ).then(({ rows: appointments }) => {
  //     response.json(
  //       appointments.reduce(
  //         (previous, current) => ({ ...previous, [current.id]: current }),
  //         {}
  //       )
  //     );
  //   });
  // });

  // router.get("/favourites", (request, response) => {
  //   db.query(
  //     `SELECT * FROM favourites
  //     ORDER BY favourites.id;`
  //   )
  //     .then(res => console.log(res.rows));
  // });

  router.put("/favourites", (request, response) => {
    

    const { username, repoName, repoLanguage, repoDescription, gitAvatar, repoOwner } = request.body;
    
    db.query(
      `INSERT INTO favourites (user_id, repoName, repoLanguage, repoDescription, gitAvatar, repoOwner)
       VALUES ($1, $2, $3, $4, $5, $6 )
      ;`,

      [username, repoName, repoLanguage, repoDescription, gitAvatar, repoOwner]

    )
      .then(res => {
        response.json(res);
      })
      .catch(error => console.log(error));
  });

  router.delete("/favourites/:owner/:name/:user_id", (request, response) => {
    const param = [request.params.owner, request.params.name, request.params.user_id]
    db.query(`DELETE FROM favourites
    WHERE repoOwner = $1
    AND repoName = $2
    AND user_id = $3`,param).then(() => {
        response.status(204).json({});
    });
  });

  return router;
};