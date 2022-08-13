const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const cookieSession = require("cookie-session");
// const PORT = 8080;
const { Server } = require("socket.io");

////// SOCKET IO

const server = require("http").createServer(App);
const http = App.listen(8080, () => {
  console.log(`Server running at port: 8080`);
});

const clients = {};

const io = new Server(http);

io.on("connection", (client) => {
   console.log("A Connection has been made", client.id);
 

  client.on("user", (user) => {
    client.broadcast.emit('userConnect', user)
    user.socket_id = client.id;
    client.user = user;
    clients[user.id] = user;
    console.log("clients from server", clients)
  });

  client.on("ping", () => {
    console.log("ping");
    client.emit("pong");
  });

  client.on("disconnect", () => {
    console.log("Client Disconnected!", client.user);
    client.broadcast.emit('userDisconnect', client.user)
    delete clients[client.user.id];
 
  });

  client.on("sendMessage", (data) => {
    
    

    const query = `
  INSERT INTO messages
      (from_user_id, to_user_id, message, message_seen)
    VALUES 
      ($1, $2, $3, $4)
    RETURNING *;
  `;

    return (
      db
        .query(query, [
          data.from_user_id,
          data.to_user_id,
          data.message,
          data.message_seen,
        ])
        .then((newMsgData) => io.sockets.emit("message", newMsgData.rows[0]))
        .catch((error) => console.log("error", error))
    );
  });
});
////////

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(
  cookieSession({
    name: "session",
    keys: ["12345"],
    httpOnly: false,
  })
);

// DB queries
const db = require("./db/database");

// Mount all /api resources
const apiRoutes = require("./routes/api-routes");
App.use("/api", apiRoutes);

// return session.user_id value for checking log in state
App.get("/loggedIn", (req, res) => {
  res.json(req.session.user_id);
});

// POST REQUEST FOR LOGIN
// Helper - move this to helpers.js later
const validateUser = (email, pass) => {
  const query = `SELECT id, email, password FROM users;`;
  return db
    .query(query)
    .then(({ rows: users }) => {
      for (const user of users) {
        if (email === user.email && pass === user.password) {
          return user.id;
        }
      }
      return false;
    })
    .catch((error) => console.log("err:", error));
};

App.post("/login", (req, res) => {
  const { username, password } = req.body;
  validateUser(username, password).then((response) => {
    console.log("login response", response);
    if (!response) {
      res.redirect("/login");
    } else {
      req.session.user_id = response;
      res.redirect("/");
    }
  });
});
// END OF POST REQ FOR LOGIN

// POST REQUEST FOR LOG OUT
App.post("/logout", (req, res) => {
  req.session = null;
  res.json(req.session);
});
// END OF LOG OUT
