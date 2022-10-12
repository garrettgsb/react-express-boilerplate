# Welcome to WeRun
## Final Project for Lighthouse Labs
### Created by Sneha Mahajan (@sneham-boop) and Marianne Bourcier (@mariannebourcier)

WeRun is a single page application where users can find running events near them or create new running events for others to join. The goal of this app is to make running more fun and bring together the runners community by having them join events in an interactive way. 
This app uses React and Bootstrap on the front-end and Express, PostgreSQL and Node on the back-end. Multiple packages and APIS were used to make the user experience smoother, such as Recoil, Autocomplete and Google Maps. Twilio is currently being used to send users important information via text messaging. 

## Screenshots

!["name"](link)
This screenshot shows the homepage for WeRun.

!["name"](link)
This screenshot shows the user's profile once they are signed in to their account. 

!["name"](link)
This screenshot shows a map that centers on the user's current location to allow them to find runs near them more easily. 

!["name"](link)
This screenshot shows more information about the selected run, such as the run route, time and date.

!["name"](link)
This screenshot shows the process of creating a new run under a user's account.


## Dependencies
### Front-End:
- axios
- bootstrap
- dotenv
- google-map-react
- react
- react-bootstrap
- react-datepicker
- react-dom
- react-google-autocomplete
- react-router-dom
- react-scripts
- recoil
- recoil-persist

### Back-end:
- bcryptjs
- body-parser
- cookie-session
- dotenv
- express
- nodemon
- pg
- twilio

## Getting Started
1. Git clone project.

### Front-End:
1. Open the react-front-end folder using the ```cd react-front-end``` command in the terminal.
2. Install all dependencies using ```npm install``` in the terminal.
3. Type the ```npm start``` command.

### Database:
1. Create a .env file in the root of the directory like the .env.example file and add your own database credentials for DB_USER, DB_PASS & DB_NAME
2. Next, we will need to create the database itself. Start PostgreSQL by using the ```psql``` command in your CLI.
3. Create the database using ```CREATE DATABASE your-db-name;``` command, but make sure to use the database name you used for the DB_NAME variable in the .env file.
4. Add tables to the database by typing ```\i db/schema/01_schema.sql``` in the terminal.
5. Add seed data to the database by typing ```\i db/seeds/01_seeds.sql``` in the terminal.

If the database credentials are setup properly, you should be able to connect to the db using \c your-db-name
The database must be initialized with new tables and some seed data next.

A few errors that can occur while setting up a PostgreSQL database:
Role mismatch: Check existing roles for your machine with \du. If your-role you used in the .env file does not exist, it will not show up and you will have to create one with the following command CREATE ROLE your-role WITH SUPERUSER;. Note that your current role must be superuser to be able to create a new role.
Password mismatch: Check how you have set up psql on your machine to sort this one.
Missing .env file: You need a .env file with your own credentials to be able to connect to the database. Use the .env.example file to create the .env file.

### Back-end:
1. Open the express-back-end folder using the ```cd express-back-end``` command in the terminal.
2. Install all dependencies using ```npm install``` in the terminal.
3. Type the ```npm start``` command. 
