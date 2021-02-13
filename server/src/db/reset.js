if (process.env.NODE_ENV  === "development" || process.env.NODE_ENV  === "test") {
  const router = require("express").Router();
  const fs = require("fs");
  const path = require("path");

  module.exports = (db) => {

    read = (file) => {
      return new Promise ((resolve, reject) => {
        fs.readFile(file, {encoding: "utf-8"} ,(err, data) => {
          err ? reject(err) : resolve (data)
      });
      });
    };

  Promise.all([
    read(path.resolve(__dirname, `../../db/create.sql`)),
    read(path.resolve(__dirname, `../../db/development.sql`))
  ])
    .then(([create, seed]) => {
      router.get("/reset", (req, res) => {
        db.query(create)
          .then(() => db.query(seed))
          .then(() => {
            console.log("Database has 'bean' reset");
            res.status(200).send("Database Reset");
          })
          .catch((err) => {
            console.log(`Error resetting the database: ${err}`)
            res.status(500).send("Database Reset Error")
          })
      });
    })
    .catch((err) =>{
      console.log("Reset database files cannot be read", err)
    })

    return router;
  }
}

  