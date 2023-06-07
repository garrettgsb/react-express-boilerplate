'use strict'

const { Stories, Users } = require('../../models');
const { faker } = require('@faker-js/faker');

exports.seed = knex => knex(Stories.tableName).del()
  .then(() => Users.findAll())
  .then(users => {
    if (users.length <= 0) throw 'No users found'

    return users[0].id
  })
  .then(userId => [
    {
      user_id: userId,
      title: faker.word.words(2),
      content: faker.lorem.paragraph(1) ,
      status: 'published',
      type: 'public',
      view_count: 200,
      created_at: knex.fn.now(),
      published_date: knex.fn.now(),
      updated_at: knex.fn.now()
    },
    {
      user_id: userId,
      title: faker.word.words(2),
      content: faker.lorem.paragraph(1) ,
      status: 'draft',
      type: 'private',
      view_count: 0,
      created_at: knex.fn.now(),
      published_date: null,
      updated_at: knex.fn.now()
    },
    {
      user_id: userId,
      title: faker.word.words(2),
      content: faker.lorem.paragraph(1) ,
      status: 'draft',
      type: 'private',
      view_count: 0,
      created_at: knex.fn.now(),
      published_date: null,
      updated_at: knex.fn.now()
    },
    {
      user_id: userId,
      title: faker.word.words(2),
      content: faker.lorem.paragraph(1) ,
      status: 'draft',
      type: 'private',
      view_count: 0,
      created_at: knex.fn.now(),
      published_date: null,
      updated_at: knex.fn.now()
    }
  ])
  .then(newStories => Promise.all(newStories.map(story => Stories.create(story))))
  .catch(err => console.log('err: ', err))