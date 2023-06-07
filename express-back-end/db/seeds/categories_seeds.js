const { Categories } = require('../../models');

exports.seed = knex => knex(Categories.tableName).del()
  .then(() => [
    { name: 'Fiction' },
    { name: 'Non-fiction' },
    { name: 'Mystery' },
    { name: 'Romance' },
    { name: 'Science Fiction' },
    { name: 'Fantasy' },
    { name: 'Biography' },
    { name: 'Historical' },
    { name: 'Thriller' },
    { name: 'Horror' }
  ])
  .then(newCategory => Promise.all(newCategory.map(category => Categories.create(category))))
  .catch(err => console.log('err: ', err))
