// node create-place-seeds.js >> ../seeds/02_places.sql
// this transfers objects into psql inserts in a separate file
const data = require('./seedData');

for (let i = 0; i < data.length; i++) {
  console.log(
    `INSERT INTO places(type, name, full_name, country_code, country) 
     VALUES (${data[i].place ? `'${data[i].place.place_type}'` : null}, ${data[i].place ? `'${data[i].place.name}'` : null}, ${data[i].place ? `'${data[i].place.full_name}'` : null}, ${data[i].place ? `'${data[i].place.country_code}'` : null}, ${data[i].place ? `'${data[i].place.country}'` : null});
     `
  )
}
