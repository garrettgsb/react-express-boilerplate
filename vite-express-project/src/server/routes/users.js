const express = require("express");
const router = express.Router();
const supabase = require("../../config/supabaseClient");
const { handleTableInsertion } = require("../db/databaseHelpers");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    console.log("file:", file);
    const ext = path.extname(file.originalname);
    const fileName = `${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });
const type = upload.single("image");

router.post("/upload", type, async (req, res) => {
  try {
    const fileLocation = "/public/uploads/" + req.body.file_name;
    console.log("fileLocation api:", req.body);

    // Logic to store 'fileLocation' in Supabase or update the user profile
    const updateResponse = await supabase
      .from("users")
      .update({ profile_picture: fileLocation })
      .eq("id", req.body.id);

    if (updateResponse.error) {
      console.error("Supabase Update Error:", updateResponse.error);
      return res
        .status(500)
        .send(
          "Error updating user profile picture: " + updateResponse.error.message
        );
    }

    res.status(200).json({ fileLocation }); // Respond with the file location to the client
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
});

router.get("/", async (req, res) => {
  const { offset, limit, sort_attributes } = req.query;

  try {
    const { data, count, error } = await supabase
      .from("users")
      .select(
        "id, name, profile_picture, location",
        offset === "0" ? { count: "exact" } : undefined
      )
      .range(offset, offset + limit);

    if (error) {
      throw error;
    }

    res.status(200).send({
      entities: data,
      totalCount: count,
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
