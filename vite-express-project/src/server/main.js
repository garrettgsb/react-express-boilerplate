const express = require("express");
const ViteExpress = require("vite-express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require('express-session');
const supabase = require("../config/supabaseClient");
const multer  = require('multer');

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

// app.post("/api/projects", async (req, res) => {
//   try {
//     const { data, error } = await supabase.from("projects").insert(req.body);

//     if (error) {
//       console.error("Supabase Insert Error:", error);
//       throw error;
//     }

//     res.status(200).send("Data sent to Supabase!");
//   } catch (error) {
//     console.error("Server Error:", error);
//     res.status(500).send("Server Error: " + error.message);
//   }
// });

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

    // Query Supabase for the user with the provided email and password
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email);
      // .eq('password', password);

    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (users.length === 1) {
      const user = users[0];

      req.session.userId = user.id;

      const userData = { email: user.email, };
      res.status(200).json(userData);
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

// Set up multer storage and upload
// Uploaded image is saved in 'public/uploads folder'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Function to check if the uploaded file is an image
function isImage(file) {
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  return allowedExtensions.includes(fileExtension);
}

// Serve uploaded file statically
app.use('/uploads', express.static('public/uploads'));

// Handle project submission with static file upload
app.post('/api/projects', upload.single('image'), async (req, res) => {
  try {
    
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    
    const {
      title,
      description,
      type,
      budget,
      location,
    } = req.body;

    const employer_id = req.session.userId;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // artist id is set to 0 as default for now
    const { data, error } = await supabase
      .from('projects')
      .upsert([
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
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Project submission error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

// Start server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
