const createModel = require('../helpers/model-helper')

const name = 'Stories'
const tableName = 'stories'

const selectableProps = [
  'id',
  'user_id',
  'user_id',
  'title',
  'content',
  'status',
  'type',
  'view_count',
  'created_at',
  'published_date',
  'updated_at',
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