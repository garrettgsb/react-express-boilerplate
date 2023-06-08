const { SavedStories } = require('../../models');

exports.seed = knex => knex(SavedStories.tableName).del()
  .then(() => [
    {
      story_id: 1,
      user_id: 2
    }
  ])
  .then(ss => Promise.all(ss.map(stories => SavedStories.create(stories))))
  .catch(err => console.log('err: ', err))
