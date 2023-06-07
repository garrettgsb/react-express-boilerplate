const createModel = require('../helpers/model-helper')

const name = 'Categories'
const tableName = 'categories'

const selectableProps = [
  'id',
  'name',
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