const express = require("express");
const ViteExpress = require("vite-express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require('express-session');
const supabase = require("../config/supabaseClient");
const bcrypt = require('bcrypt');

// Express app setup
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'userCookie',
  secret: '123456',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // for development
    maxAge: 1000 * 60 * 60 * 24, //max age of cookie
  }, 
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

const saltRounds = 10;
// this must be used for user sign up

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Received data:', { email, password });

    // Query Supabase for the user with the provided email and password
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email);

    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (users.length === 1) {
      const user = users[0];

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        req.session.userId = user.id;
        const userData = { email: user.email };
        res.status(200).json(userData);
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Login Error: ' + error.message });
  }
});


// Check user authentication
app.get('/api/check-auth', (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ authenticated: true, userId: req.session.userId });
  } else {
    res.status(401).json({ authenticated: false });
  }
});

// Login: SELECT * FROM users WHERE email = 'email'
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

app.post('/api/likes', async (req, res) => {
  try {
    const { userID, project_id } = req.body;
  
    if (!userID || !project_id) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const { data, error } = await supabase.from('likes').insert([{ user_id: userID, project_id }]);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to like the project' });
    }

    res.status(201).json({ message: 'Project liked successfully', like: data });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/likes', async (req, res) => {
  try {
    const { userID, project_id } = req.query;

    // Validate inputs
    if (!userID || !project_id) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Delete a like using Supabase
    const { data, error } = await supabase.from('likes').delete().eq('user_id', userID).eq('project_id', project_id);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to remove like' });
    }

    // Check if any like was deleted
    if (data && data.length === 0) {
      return res.status(404).json({ error: 'Like not found or already removed' });
    }

    // Respond with a success message or any relevant data
    res.status(200).json({ message: 'Project dislike successful', deletedLike: data });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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

// Function to check if the uploaded file is an image
function isImage(file) {
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  return allowedExtensions.includes(fileExtension);
}

// Serve uploaded file statically
app.use('/uploads', express.static('public/uploads'));

app.post('/api/logout', (req, res) => {
  try {
    // Clear the session on the server side
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destruction error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Clear the client-side cookie
      res.clearCookie('userCookie'); // Replace with your actual cookie name
      
      // Respond with a success message
      res.status(200).json({ success: true });
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/* --------------------------------- Routes --------------------------------- */
app.use("/api/projects", require("./routes/projects.js")); // Projects
app.use("/api/users", require("./routes/users.js")); // Users

// Start server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
