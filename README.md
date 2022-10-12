# Welcome to WeRun
## Final Project for Lighthouse Labs
### Created by Sneha Mahajan (@sneham-boop) and Marianne Bourcier (@mariannebourcier)

WeRun is a single page application where users can find running events near them or create new running events for others to join. The goal of this app is to make running more fun and bring together the runners community by having them join events in an interactive way. 
This app uses React and Bootstrap on the front-end and Express, PostgreSQL and Node on the back-end. Multiple packages and APIS were used to make the user experience smoother, such as Recoil, Autocomplete and Google Maps. Twilio is currently being used to send users important information via text messaging. 

## Screenshots

!["homepage"](https://github.com/mariannebourcier/werun/blob/master/docs/images/homepage.png?raw=true)
This screenshot shows the homepage for WeRun.

!["map"](https://github.com/mariannebourcier/werun/blob/master/docs/images/joinARun.png?raw=true)
This screenshot shows a map that centers on the user's current location to allow them to find runs near them more easily. 

<img src="https://github.com/mariannebourcier/werun/blob/master/docs/images/markerHoverInfo.png?raw=true" alt="marker-hover" width="50%">

This screenshot shows the marker for a run and details of the run.

!["run-join"]()
This screenshot shows what happens when a user hits the join button for a run. The user will also receive a text message confirming their attendance to the event.

!["available-runs"](https://github.com/mariannebourcier/werun/blob/master/docs/images/availableRuns.png?raw=true)
This screenshot shows which runs are available to join.

!["createrun"](https://github.com/mariannebourcier/werun/blob/master/docs/images/createRunAutocomplete.png?raw=true)
This screenshot shows the run creation page where users can find the exact location for their run.

!["run"](https://github.com/mariannebourcier/werun/blob/master/docs/images/runCreated.png?raw=true)
This screenshot shows the new run that was created under the user's profile planned tab.

!["run-details"](https://github.com/mariannebourcier/werun/blob/master/docs/images/runCreatedDetails.png?raw=true)
This screenshot shows the new run's additional details such as the exact route, time and date.

!["profile"](https://github.com/mariannebourcier/werun/blob/master/docs/images/fullProfile.png?raw=true)
This screenshot shows the user's profile with their running statistics as well as a planned and attended tab for them to keep track of their events.

<img src="https://github.com/mariannebourcier/werun/blob/master/docs/images/signIn.png?raw=true" width="50%" alt="signin">

This screenshot shows the sign in page.

<img src="https://github.com/mariannebourcier/werun/blob/master/docs/images/signUp.png?raw=true" width="50%" alt="signin">

This screenshot shows the sign up page.


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




### Future Features
- A button on the planner tab to notify runners of any changes related to the running event, such as cancelation or time change.
- A way for runners to record and track their time, possibly using an API from Fitbit, Strava or Apple Health.
- Allowing users to change their profile picture.

### Known Issues
- The profile picture is a static image from the server.
- The location selection for runs does not calculate automatically the distance between point A and point B yet.
- This application hasn't been tested on other browsers besides Google Chrome yet. 

