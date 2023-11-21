const express = require("express");
const ViteExpress = require("vite-express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require('express-session');
const supabase = require("../config/supabaseClient");
const { handleTableInsertion } = require("./db/databaseHelpers");

// Express app setup
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: false 
}));

// Route handling

//testing routes

app.get('/test/set-session-id', (req, res) => {
  req.session.userId = '3'; // Set a custom user ID to the session for testing
  res.send('Session ID set for testing');
});

app.get('/api/myprofile', (req, res) => {
  res.send(req.session.userId);
});

//Route handling for users

// gets all users from users table in supabase
app.get("/user", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

// gets user by id from users table in supabase
app.get("/api/users/:id", async (req, res) => {

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", req.params.id );

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

// Adds a new user to users table in supabase
app.post("/api/users", async (req, res) => {
  handleTableInsertion(req, res, supabase, "users");
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .update(req.body)
      .eq("id", req.params.id);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send("Data sent to Supabase!");
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .delete()
      .eq("id", req.params.id);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send("Data sent to Supabase!");
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

// Route handling for projects
app.get("/api/projects", async (req, res) => {
  try {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

app.get("/api/projects/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", req.params.id);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

app.post("/api/projects", async (req, res) => {
  try {
    const { data, error } = await supabase.from("projects").insert(req.body);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send("Data sent to Supabase!");
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

app.put("/api/projects/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .update(req.body)
      .eq("id", req.params.id);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send("Data sent to Supabase!");
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

app.delete("/api/projects/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", req.params.id);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send("Data sent to Supabase!");
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = { email }

    req.session.userId = userData.id;

    res.status(200).json(userData);
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).send('Login Error:' + error.message)
  }
});

app.get('/api/supabase/users', async (req, res) => {
  try {
    const { email } = req.query;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email);

    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Supabase error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route handling for likes

app.get("/api/likes", async (req, res) => {
  try {
    const { data, error } = await supabase.from("likes").select("*");

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
}
);

app.get("/api/likes/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("likes")
      .select("*")
      .eq("user_id", req.params.id);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json("Server Error: " + error.message);
  }
}
);


// Start server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
