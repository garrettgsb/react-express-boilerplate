const express = require("express");
const ViteExpress = require("vite-express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const supabase = require("../config/supabaseClient");

// Express app setup
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Route handling

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
app.get("/users/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
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

// Adds a new user to users table in supabase
app.post("/users", async (req, res) => {
  handleTableInsertion(req, res, supabase, "users");
});

app.put("/users/:id", async (req, res) => {
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

app.delete("/users/:id", async (req, res) => {
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
app.get("/projects", async (req, res) => {
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

app.get("/projects/:id", async (req, res) => {
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

app.post("/projects", async (req, res) => {
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

app.put("/projects/:id", async (req, res) => {
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

app.delete("/projects/:id", async (req, res) => {
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

// Start server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
