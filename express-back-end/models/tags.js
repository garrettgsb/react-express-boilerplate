const createModel = require('../helpers/model-helper')

const name = 'Tags'
const tableName = 'tags'

const selectableProps = [
  'id',
  'story_id',
  'name',
  'created_at',
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