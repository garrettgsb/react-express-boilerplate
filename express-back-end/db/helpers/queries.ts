import { Pool } from 'pg';
export default function queries(pool: Pool) {

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
    WHERE todos.user_id = $1`;
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

  return {
    getCategories,
    getEntryByCategory,
    getEntryByEntryId,
    insertCategory,
    insertEntry,
    insertUser
  };
};
