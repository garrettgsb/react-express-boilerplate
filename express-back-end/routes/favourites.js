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

  router.put("/favourites", (request, response) => {
    // if (process.env.TEST_ERROR) {
    //   setTimeout(() => response.status(500).json({}), 1000);
    //   return;
    // }

    
    console.log("hello");
    db.query(
      `INSERT INTO favourites (user_id, repoName, repoLanguage, repoDescription, gitAvatar)
       VALUES ($1, $2, $3, $4, $5 )
      ;`,
      [1, 'Exercise', 'Javascript','This is a calculator I created to calculate your 1 repetition maximum', 'https://avatars.githubusercontent.com/u/62811480?s=460&u=7fe7a26890fca097c2797c905da718d83c16a48d&v=4']
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