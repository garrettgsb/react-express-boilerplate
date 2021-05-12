import faker from "faker";
import fs from 'fs';
const createFakeEntries = (category) => {
    return (`
  ('${faker.lorem.sentence()}',
  '${faker.lorem.paragraph()}',
  ${Math.floor(Math.random() * 5)},
  NOW() -  interval '${Math.floor(Math.random() * 40000)} hours',
  ${category},
  1)`);
};
const generateEntries = () => {
    let fakeEntries = `INSERT INTO entries (
                    title,
                    content,
                    mood,
                    date_created,
                    category_id,
                    user_id
                    ) VALUES `;
    const desiredFakeEntries = 5;
    for (let i = 0; i < desiredFakeEntries; i++) {
        fakeEntries += createFakeEntries(1);
        (i < desiredFakeEntries - 1) ? fakeEntries += ',' : fakeEntries += ';';
    }
    console.log(fakeEntries);
    fs.writeFileSync('./db/seeds/01_dev_entries.sql', fakeEntries, { encoding: "utf8" });
};
generateEntries();
