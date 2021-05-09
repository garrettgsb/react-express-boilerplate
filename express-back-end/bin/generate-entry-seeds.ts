import faker from "faker";
import fs from 'fs';

const createFakeEntries= (category: number | null) => {
  return(`
  ('${faker.lorem.sentence()}',
  '${faker.lorem.paragraph()}',
  ${Math.floor(Math.random() * 5)},
  NOW() -  interval '${Math.floor(Math.random() * 40000)} hours',
  ${category},
  1)`)
  };

const generateEntries = () => {
  let fakeEntries = `INSERT INTO entries (
                    title,
                    content,
                    mood,
                    date_created,
                    category_id,
                    user_id
                    ) VALUES `
  const desiredFakeEntries = 600;
  for (let i = 0; i < desiredFakeEntries; i++) {
    // Create half the entries with categories, the other half without
    (i < desiredFakeEntries / 2) 
    // Math.ceil to ensure category is never 0
    ? fakeEntries += createFakeEntries(Math.ceil(Math.random() * 5))
    : fakeEntries += createFakeEntries(null);
    // Add a comma or semi-colon (if last) for syntax
    (i < desiredFakeEntries - 1) ? fakeEntries += ',' : fakeEntries += ';'
  }
  fs.writeFileSync('./db/seeds/01_dev_entries.sql', fakeEntries, { encoding: "utf8" })
}

generateEntries();

