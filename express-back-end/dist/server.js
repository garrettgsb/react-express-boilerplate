import Express from "express";
const App = Express();
const PORT = 8080;
import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const connectionString = process.env.DATABASE_URL ||
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const pool = new pg.Pool({ connectionString });
pool.connect()
    .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));
const getEntryByCategory = (attributes) => {
    const { categoryId, userId } = attributes;
    const queryParams = [userId];
    let queryStart = 'SELECT ';
    let queryMid = ' FROM entries';
    let queryEnd = ' WHERE entries.user_id = $1';
    if (categoryId === '0') {
        queryStart += '*';
        queryEnd += ` AND category_id IS NULL`;
    }
    else {
        queryStart += 'entries.*, categories.name as category_name';
        queryMid += ' JOIN categories ON entries.category_id = categories.id';
        if (categoryId) {
            queryEnd += ' AND category_id = $2';
            queryParams.push(categoryId);
        }
    }
    let query = queryStart + queryMid + queryEnd;
    return pool.query(query, queryParams);
};
const getEntryByEntryId = (attributes) => {
    const { entryId, userId } = attributes;
    const query = `SELECT * FROM entries
  WHERE user_id = $1 AND id = $2;`;
    const queryParams = [userId, entryId];
    return pool.query(query, queryParams);
};
const getCategories = (userId) => {
    const query = `SELECT * FROM categories
  WHERE user_id = $1`;
    const queryParams = [userId];
    return pool.query(query, queryParams);
};
const getUserByUserId = (id) => {
    const query = `
  SELECT users.*,
  fonts.script as body_script,
  title.script as title_script
  FROM users 
  JOIN fonts ON users.body_font_id = fonts.id 
  JOIN (
    SELECT fonts.*, users.id as user_id
    FROM users 
    JOIN fonts ON users.title_font_id = fonts.id 
    WHERE users.id = $1
  ) as title
  ON users.id = title.user_id
    WHERE users.id = $1;`;
    const queryParams = [id];
    return pool.query(query, queryParams);
};
const getUsers = () => {
    const query = 'SELECT * FROM users';
    return pool.query(query);
};
const getFontByFontId = (id) => {
    const query = `SELECT * FROM fonts
  WHERE id = $1;`;
    const queryParams = [id];
    return pool.query(query, queryParams);
};
const getFonts = () => {
    const query = 'SELECT * FROM fonts';
    return pool.query(query);
};
const insertIntoDatabase = (attributes, table) => {
    const queryParams = [];
    let queryStart = `INSERT INTO ${table} (`;
    let queryMid = ') VALUES (';
    let queryEnd = ') RETURNING id';
    for (const [attribute, value] of Object.entries(attributes)) {
        if (queryParams.length) {
            queryMid += ', ';
        }
        queryParams.push(value);
        queryStart += `${attribute}`;
        queryMid += `$${queryParams.length}`;
    }
    if (table === 'users') {
        queryEnd += ', user_id';
    }
    const queryString = queryStart + queryMid + queryEnd;
    return pool.query(queryString, queryParams);
};
const insertCategory = (attributes) => {
    insertIntoDatabase(attributes, 'categories');
};
const insertEntry = (attributes) => {
    insertIntoDatabase(attributes, 'entries');
};
const insertUser = (attributes) => {
    insertIntoDatabase(attributes, 'users');
};
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));
const userId = '1';
App.get('/api/entries', (req, res) => {
    getEntryByCategory({ categoryId: null, userId })
        .then((data) => res.json(data.rows));
});
App.get('/api/entries/:id', (req, res) => {
    getEntryByEntryId({ entryId: req.params.id, userId })
        .then((data) => res.json(data.rows));
});
App.get('/api/categories', (req, res) => {
    getCategories(userId)
        .then((data) => res.json(data.rows));
});
App.get('/api/categories/:id', (req, res) => {
    getEntryByCategory({ categoryId: req.params.id, userId })
        .then((data) => res.json(data.rows));
});
App.get('/api/users', (req, res) => {
    getUsers()
        .then((data) => res.json(data.rows));
});
App.get('/api/users/:id', (req, res) => {
    getUserByUserId(req.params.id)
        .then((data) => res.json(data.rows));
});
App.get('/api/fonts', (req, res) => {
    getFonts()
        .then((data) => res.json(data.rows));
});
App.get('/api/fonts/:id', (req, res) => {
    getFontByFontId(req.params.id)
        .then((data) => res.json(data.rows));
});
App.post('/api/entries', (req, res) => {
    const attributes = {
        title: req.body.title,
        content: req.body.content,
        mood: req.body.mood || null,
        privacy: req.body.privacy,
        userId: userId,
        categoryId: req.body.category || null
    };
    insertEntry(attributes);
});
App.post('/api/categories', (req, res) => {
    insertCategory({ userId, name: req.body.name });
});
App.post('/api/users', (req, res) => {
    const attributes = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    insertUser(attributes);
});
App.listen(PORT, () => {
    console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
