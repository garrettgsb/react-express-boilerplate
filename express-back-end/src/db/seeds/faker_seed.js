const faker = require('faker');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'fedamuhammadian',
  password: 'admin',
  host: 'localhost',
  database: 'fuelbuddy',
  port: 5432,
});

pool.connect().then(() => {
  console.log("Connected to Database!!");
});

const entries = [];

for (let i = 1; i <= 2000; i++) {
  const entry = {
    id: i,  
    title: faker.company.companyName(),
    reguler: faker.commerce.price(),
    premium: faker.commerce.price(),
    deisel: faker.commerce.price(),
    payment_method: faker.payment_method(),
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    postalCode: faker.address.zipCode(),
    state: faker.address.state(),
    countryCode: "CA",
    rating: faker.rating(),
    phone: faker.phone.phoneNumber(),
    lat: faker.address.latitude(), 
    long: faker.address.longitude(),
  };
  entries.push(entry);
}

for (const entry of entries) {
  const sql = `INSERT INTO gas_stations 
    (id, title, reguler, premium, deisel, payment_method, street, city, postalCode, state, countryCode, rating, phone, lat, long) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;

  const values = [
    entry.id,
    entry.title,
    parseFloat(entry.reguler),
    parseFloat(entry.premium),
    parseFloat(entry.deisel),
    entry.payment_method,
    entry.address,
    entry.street,
    entry.city,
    entry.postalCode,
    entry.state,
    entry.countryCode,
    entry.rating,
    entry.phone,
    entry.lat,
    entry.long,
  ];

  pool.query(sql, values, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Inserted row with ID ${entry.id}`);
    }
  });
}
