import pkg from 'pg';
const { Pool } = pkg;

import axios from 'axios';


// Set up PostgreSQL connection

const pool = new Pool({
    user: 'fedamuhammadian',
    host: 'localhost',
    database: 'gas',
    password: 'admin',
    port: 5432,
});

async function geocodeAndInsert() {
    try {
        const gasStationsQuery = 'SELECT id, name, lat, lng FROM gas_stations';
        const gasStationsResult = await pool.query(gasStationsQuery);

        for (const gasStation of gasStationsResult.rows) {
            const { id, name, lat, lng } = gasStation;
            const apiKey = 'AIzaSyD4tdfGXq-CBKyMaMSNmo3U8CMMGEhE0vA';
            const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

            const response = await axios.get(apiUrl);
            const result = response.data.results[0];

            // Extract address components
            const street = result.address_components.find(component =>
                component.types.includes('route')
            )?.long_name;
            const city = result.address_components.find(component =>
                component.types.includes('locality')
            )?.long_name;
            const province = result.address_components.find(component =>
                component.types.includes('administrative_area_level_1')
            )?.long_name;
            const postalCode = result.address_components.find(component =>
                component.types.includes('postal_code')
            )?.long_name;

            // Insert data into the locations table
            const locationsInsertQuery = `
                INSERT INTO locations (gas_station_id, street, city, province, postal_code, lat, lng)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
            `;

            const values = [id, street, city, province, postalCode, lat, lng];
            await pool.query(locationsInsertQuery, values);

            console.log(`Inserted location data for ${name}`);
        }

        console.log('Geocoding and insertion process completed.');
        pool.end(); // Close the database connection
    } catch (error) {
        console.error('Error:', error.message);
    }
}

geocodeAndInsert();


