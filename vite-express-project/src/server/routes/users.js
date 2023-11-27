const express = require('express');
const router = express.Router();
const supabase = require("../../config/supabaseClient");
const { handleTableInsertion } = require("../db/databaseHelpers");

router.get('/', async (req, res) => {
  const { offset, limit, sort_attributes } = req.query;

  try {
    const { data, count, error } = await supabase
      .from("users")
      .select("id, name, profile_picture, location", offset === '0' ? { count: 'exact' } : undefined)
      .range(offset, offset + limit);

    if (error) {
      throw error;
    }

    res.status(200).send({
      entities: data,
      totalCount: count
    });
  } catch (error) {
    res.status(500).send("Server Error: " + error.message);
    console.error("Supabase Select Error:", error);
  }
});

// gets user by id from users table in supabase
router.get("/:id", async (req, res) => {

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
router.post("/", async (req, res) => {
  handleTableInsertion(req, res, supabase, "users");
});

router.put("/:id", async (req, res) => {
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

router.patch("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

module.exports = router;