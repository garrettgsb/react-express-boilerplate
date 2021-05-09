import faker from "faker";
// import fs from 'fs';

const createFakeEntries= (category: number) => {
  return(`
  ('${faker.lorem.sentence()}',
  '${faker.lorem.paragraph()}',
  ${Math.floor(Math.random() * 5)},
  NOW() -  interval '${Math.floor(Math.random() * 40000)} hours',
  ${category},
  1)`)
  };
// const createFakeEntries = () => ({
//   title: faker.lorem.sentence(),
//   content: faker.lorem.paragraph(),
//   mood: Math.floor(Math.random() * 5),
//   date_created: faker.date.past(),
//   category_id: 1,
//   user_id: 1
// });

const generateEntries = () => {
  let fakeEntries = `INSERT INTO entries (title,
                                            content,
                                            mood,
                                            date_created,
                                            category_id,
                                            user_id
                                            ) VALUES `
  const desiredFakeEntries = 5;
  for (let i = 0; i < desiredFakeEntries; i++){
    // fakeEntries.push(createFakeEntries());
    fakeEntries += createFakeEntries(1);
    (i < desiredFakeEntries - 1) ? fakeEntries += ',' : fakeEntries += ';'
  }
  console.log(fakeEntries);
  // fs.writeFile('./db/seeds/01_dev_entries.sql', fakeEntries, (err) => {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // });
}

generateEntries();

