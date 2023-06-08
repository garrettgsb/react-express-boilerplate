const createModel = require('../helpers/model-helper')

const name = 'SavedStories'
const tableName = 'saved_stories'

const selectableProps = [
  'id',
  'story_id',
  'user_id'
]

const newSelectableProps = [
  'saved_stories.id',
  'saved_stories.story_id',
  'saved_stories.user_id',
  'stories.title',
  'stories.content',
  'stories.status',
  'stories.type',
  'stories.view_count',
  'stories.published_date',
  'stories.updated_at',
  'stories.created_at',
  'saved_stories.created_at'
]

module.exports = knex => {
  const model = createModel({
    knex,
    name,
    tableName,
    selectableProps
  })

  return {
    ...model
  }
}