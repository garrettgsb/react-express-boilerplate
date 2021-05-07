# run command bash setup_db.sh
dropdb --if-exists Bloom 
createdb Bloom -O labber
psql -U labber Bloom < db/
psql -U labber Bloom < db/