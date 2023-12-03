const express = require("express");
const router = express.Router();
const supabase = require("../../config/supabaseClient");
const { upload } = require("./utils");

router.get("/", async (req, res) => {
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
      .from("projects")
      .select(
        "id, title, images, type, budget, location, employer_id",
        offset === 0 ? { count: "exact" } : undefined
      )
      .filter('type', selectedTypeIds.length ? 'in' : 'not.in', `(${selectedTypeIds.join(',')})`)
      .filter('budget', 'lt', value_under === 5000100 ? 1000000000 : value_under)
      .or(`title.ilike.%${search_word}%,location.ilike.%${search_word}%`)
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id);

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

router.patch("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const updateData = req.body;

    console.log("Update Project Request:", {
      projectId,
      updateData,
    });

    const { data, error } = await supabase
      .from("projects")
      .update(updateData)
      .eq("id", projectId);

    if (error) {
      console.error("Supabase Update Error:", error);
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

// Handle project submission with static file upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const { title, description, type, budget, location } = req.body;

    const employer_id = req.session.userId;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // artist id is set to 0 as default for now
    const { data, error } = await supabase.from("projects").upsert([
      {
        title,
        description,
        type,
        budget,
        location,
        images: imageUrl ? [imageUrl] : [],
        employer_id,
        artist_id: 0,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Project submission error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
