import Express, { Request, Response } from "express";
const App = Express();
const PORT = 8080;
import dotenv from 'dotenv';
dotenv.config();

// Setup database for queries
import pg from 'pg';
const connectionString = process.env.DATABASE_URL ||
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const pool = new pg.Pool({connectionString});
pool.connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

interface IUser {
  id?: string | number;
  username: string;
  email: string;
  password: string;
  backgroundHex?: string;
  accentHex?: string;
  textHex?: string;
  prompts?: boolean;
  private?: boolean;
  dateCreated?: string;
  bodyFontId?: string | number;
  titleFontId?: string | number;
  
}
interface IEntry {
  id?: string | number;
  title: string;
  content: string;
  mood?: string | number;
  privacy?: boolean;
  dateCreated?: string;
  dateUpdated?: string;
  categoryId?: string | number | null;
  userId: string | number;
}
interface ICategory {
  id?: string | number;
  name: string;
  userId: string | number;
}

const getEntryByCategory = (attributes: { categoryId: string | null; userId: string; }) => {
  const { categoryId, userId } = attributes;
  const queryParams = [userId];
  let query = `SELECT * FROM entries
  WHERE user_id = $1`;
  if (categoryId !== 'all') {
    query += ' AND category_id ';
    if (categoryId) {
      query += `= $2`;
      queryParams.push(categoryId);
    } else {
      query += `IS NULL`
    }
  }
  return pool.query(query, queryParams);
};

const getEntryByEntryId = (attributes: { entryId: string; userId: string; }) => {
  const { entryId, userId } = attributes;
  const query = `SELECT * FROM entries
  WHERE user_id = $1 AND id = $2;`;
  const queryParams = [userId, entryId];
  return pool.query(query, queryParams);
};

const getCategories = (userId: string) => {
  const query = `SELECT * FROM categories
  WHERE user_id = $1`;
  const queryParams = [userId];
  return pool.query(query, queryParams);
};

const insertIntoDatabase = (attributes: IEntry | IUser | ICategory, table: string) => {
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

const insertCategory = (attributes: ICategory) => {
  insertIntoDatabase(attributes, 'categories')
}
const insertEntry = (attributes: IEntry) => {
  insertIntoDatabase(attributes, 'entries')
}
const insertUser = (attributes: IUser) => {
  insertIntoDatabase(attributes, 'users')
}

// Express Configuration
App.use(Express.urlencoded({ extended: false }));
App.use(Express.json());
App.use(Express.static('public'));

// Hardcoded userId for development
const userId = '1';

App.get('/api/entries', (req: Request, res: Response) => {
  getEntryByCategory({categoryId: null, userId})
  .then((data) => {
    res.json({
      body: data.rows
    })
  })
});
App.get('/api/entries/:id', (req: Request, res: Response) => {
  getEntryByEntryId({entryId: req.params.id, userId})
  .then((data) => {
    res.json({
      body: data.rows
    })
  })
});
App.get('/api/categories', (req: Request, res: Response) => {

  getCategories(userId)
  .then((data) => {
    res.json({
      body: data.rows
    })
  });
});
App.get('/api/categories/:id', (req: Request, res: Response) => {
   getEntryByCategory({categoryId: req.params.id, userId})
   .then((data) => {
    res.json({
      body: data.rows
    })
  })
});
App.post('/api/entries', (req: Request, res: Response) => {
  const attributes = {
    title: req.body.title,
    content: req.body.content,
    mood: req.body.mood || null,
    privacy: req.body.privacy,
    userId: userId,
    categoryId: req.body.category || null
  }
  insertEntry(attributes)
});
App.post('/api/categories', (req: Request, res: Response) => {
  insertCategory({userId, name: req.body.name})
});
App.post('/api/users', (req: Request, res: Response) => {
  const attributes = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  insertUser(attributes)
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
