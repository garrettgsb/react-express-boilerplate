const express = require("express");
const router = express.Router();
const supabase = require("../../config/supabaseClient");
const handleTableInsertion = require("../db/databaseHelpers");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require('bcrypt');

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

router.get('/', async (req, res) => {
  const {
    offset: _offset,
    limit: _limit,
    // default
    sort_attribute = 'id',
    sort_direction = 'asc',
    selected_type_ids = [],
    value_under: _value_under, // default just to include everything when not given
    search_word = ''
  } = req.query;

  // query params come in as strings. conver them into numbers when necessary
  const offset = Number(_offset) || 0;
  const limit = Number(_limit) || 0;
  const value_under = Number(_value_under) || 1000000;

  const selectedTypeIds = typeof selected_type_ids === 'string' ? [selected_type_ids] : selected_type_ids;

  try {
    const { data, count, error } = await supabase
      .from("users")
      .select("id, name, profile_picture, location, artist_type, wage, images, email", offset === 0 ? { count: 'exact' } : undefined)
      .filter('artist_type', selectedTypeIds.length ? 'in' : 'not.in', `(${selectedTypeIds.join(',')})`)
      .filter('wage', 'lt', value_under === 25100 ? 10000000 : value_under)
      .or(`name.ilike.%${search_word}%,location.ilike.%${search_word}%`)
      .range(offset, offset + limit)
      .order(sort_attribute, { ascending: sort_direction === 'asc' });

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
  try {
    console.log("Request Body:", req.body);

    // Check if the email already exists
    const existingUser = await supabase
      .from("users")
      .select("id")
      .eq("email", req.body.email)
      .single();

    if (existingUser) {
      // If the email already exists, return an error
      return res.status(400).send("User with this email already exists.");
    }

    // Hash the password before inserting it into the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Replace the plain password with the hashed one in the request body
    const requestBodyWithHashedPassword = {
      ...req.body,
      password: hashedPassword,
    };

    const { data, error } = await supabase.from("users").insert(requestBodyWithHashedPassword);

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
