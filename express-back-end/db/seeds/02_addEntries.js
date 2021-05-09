const faker = require("faker");

const createFakeEntries = () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph(),
  mood: Math.floor(Math.random() * 5),
  date_created: faker.date.past(),
  category_id: 1,
  user_id: 1
});

const generateEntries = () => {
  const fakeEntries = [];
  const desiredFakeEntries = 5;
  for (let i = 0; i < desiredFakeEntries; i++){
    fakeEntries.push(createFakeEntries());
  }
  // console.log("%%%", fakeEntries);
  return fakeEntries;
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert(
        generateEntries()
      );
    })
    .catch(err => console.log(err))

};
