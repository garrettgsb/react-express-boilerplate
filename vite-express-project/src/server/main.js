const express = require("express");
const ViteExpress = require("vite-express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config({
  path: "/Users/sunny/lighthouse/LHL-Final/LHL-Final-Project/vite-express-project/.env.local",
});

const supabaseUrl = process.env.VITE_SUPABASE_URL; 
const supabaseKey = process.env.VITE_SUPABASE_KEY; 

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or key is missing. Check your environment variables."
  );
}

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(supabaseUrl, supabaseKey);


const handleUserInsertion = async (req, res, supabase) => {
  try {
    
    console.log("Request Body:", req.body);

    const { data, error } = await supabase.from("users").insert(req.body);

    if (error) {
      console.error("Supabase Insert Error:", error);
      throw error;
    }

    res.status(200).send("Data sent to Supabase!");
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).send("Server Error: " + error.message);
  }
};

// Express app setup
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ... Other middleware and configurations

// Route handling
app.post("/user", async (req, res) => {
  handleUserInsertion(req, res, supabase);
});

// Start server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
