const { StoryCategories } = require('../../models');

exports.seed = knex => knex(StoryCategories.tableName).del()
  .then(() => [
    {
      story_id: 1,
      category_id: 1
    },
    {
      story_id: 2,
      category_id: 2
    },
    {
      story_id: 3,
      category_id: 3
    },
    {
      story_id: 4,
      category_id: 1
    }
  ])
  .then(sc => Promise.all(sc.map(stories => StoryCategories.create(stories))))
  .catch(err => console.log('err: ', err))
