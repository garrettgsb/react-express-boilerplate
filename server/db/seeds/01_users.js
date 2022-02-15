const { faker } = require('@faker-js/faker');
const { Pool } = require("pg");


const pool = new Pool({
  user: 'development',
  password: 'development',
  host: 'localhost',
  database:'daytrip'
});

for (let i = 0; i < 20; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const pic = faker.image.avatar();
  const about = `Hi I'm ${firstName} and I love adventure.`;

  

  pool.query(
    `INSERT INTO users(first_name, last_name,email,password,pic,about)
    VALUES($1, $2, $3, $4, $5, $6)`, [firstName, lastName,email, password, pic, about],
    (err, res) => {
      console.log(err, res);
    }
  );

}

