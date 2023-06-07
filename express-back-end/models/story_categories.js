const createModel = require('../helpers/model-helper')

const name = 'StoryCategories'
const tableName = 'story_categories'

const selectableProps = [
  'story_id'
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