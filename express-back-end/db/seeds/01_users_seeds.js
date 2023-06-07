const { faker } = require('@faker-js/faker');
const { Users } = require('../../models');

exports.seed = knex => knex(Users.tableName).del()
  .then(() => [
    {
      username: 'admin',
      password: 'password',
      email: 'admin@email.com',
      profile_pic: faker.image.urlPicsumPhotos(),
      bio: faker.person.bio()
    },
    {
      username: 'test',
      password: '123',
      email: 'test@email.com',
      profile_pic: faker.image.urlPicsumPhotos(),
      bio: faker.person.bio()
    }
  ])
  .then(newUsers => Promise.all(newUsers.map(user => Users.create(user))))
  .catch(err => console.log('err: ', err))
