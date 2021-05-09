const faker = require("faker");

const createFakeCategories = () => ({
  name: faker.lorem.words(),
  user_id: 1
});

const generateCategories = () => {
  const fakeCategories = [];
  const desiredFakeCategories = 5;
  for (let i = 0; i < desiredFakeCategories; i++){
    fakeCategories.push(createFakeCategories());
  }
  return fakeCategories;
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert(
        generateCategories()
      );
    })
    .catch(err => console.log(err))
};
