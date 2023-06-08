const createModel = require('../helpers/model-helper')

const name = 'StoryCategories'
const tableName = 'story_categories'

const selectableProps = [
  'id',
  'category_id',
  'story_id'
]

const newSelectableProps = [
  'story_categories.id',
  'story_categories.category_id',
  'categories.name',
  'stories.id as story_id',
  'user_id',
  'title',
  'content',
  'status',
  'type',
  'view_count',
  'created_at',
  'published_date',
  'updated_at'
]

module.exports = knex => {
  const model = createModel({
    knex,
    name,
    tableName,
    selectableProps,
    newSelectableProps
  })

  return {
    ...model
  }
}