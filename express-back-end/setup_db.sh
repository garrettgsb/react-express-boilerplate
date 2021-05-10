# run command bash setup_db.sh
dropdb --if-exists Bloom 
createdb Bloom -O labber
psql -U labber Bloom < db/schema/01_users.sql
psql -U labber Bloom < db/schema/02_vegetables.sql
psql -U labber Bloom < db/schema/03_plots.sql
psql -U labber Bloom < db/schema/04_plots_vegs.sql

psql -U labber Bloom < db/seeds/01_users.sql
psql -U labber Bloom < db/seeds/02_vegetables.sql
psql -U labber Bloom < db/seeds/03_plots.sql
psql -U labber Bloom < db/seeds/04_plots_vegs.sql