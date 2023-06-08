const { Tags } = require('../../models');

exports.seed = knex => knex(Tags.tableName).del()
  .then(() => [
    {
      story_id: 1,
      name: 'humour'
    },
    {
      story_id: 1,
      name: 'life'
    },
    {
      story_id: 3,
      name: 'happiness'
    },
    {
      story_id: 4,
      name: 'peace'
    }
  ])
  .then(tags => Promise.all(tags.map(tag => Tags.create(tag))))
  .catch(err => console.log('err: ', err))
