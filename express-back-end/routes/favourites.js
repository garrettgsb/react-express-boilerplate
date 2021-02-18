const router = require("express").Router();

module.exports = (db) => {
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

  router.get("/favourites", (request, response) => {
    db.query(
      `SELECT * FROM favourites
      ORDER BY favourites.id;`
    )
      .then(res => console.log(res.rows));
  });

  router.put("/favourites", (request, response) => {
    // if (process.env.TEST_ERROR) {
    //   setTimeout(() => response.status(500).json({}), 1000);
    //   return;
    // }

    const { username, repoName, repoLanguage, repoDescription, gitAvatar} = request.body;
    
    console.log(username);
    db.query(
      `INSERT INTO favourites (user_id, repoName, repoLanguage, repoDescription, gitAvatar)
       VALUES ($1, $2, $3, $4, $5 )
      ;`,

      [username, repoName, repoLanguage, repoDescription, gitAvatar]

    )
      .then(response => {
        console.log("success");
      })
      .catch(error => console.log(error));
  });

  // router.delete("/appointments/:id", (request, response) => {
  //   if (process.env.TEST_ERROR) {
  //     setTimeout(() => response.status(500).json({}), 1000);
  //     return;
  //   }

  //   db.query(`DELETE FROM interviews WHERE appointment_id = $1::integer`, [
  //     request.params.id
  //   ]).then(() => {
  //     setTimeout(() => {
  //       response.status(204).json({});
  //       updateAppointment(Number(request.params.id), null);
  //     }, 1000);
  //   });
  // });

  return router;
};