# Piggy-Financial

Piggy Financial is an app that aims to help users track their financial goals. With a primary focus on vacation.

!['']()
!['']()
!['']()
!['']()
!['']()


## Running the project

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

## Creating the DB

Use the psql -U development command to login to the PostgreSQL server with the username development and the password development. This command MUST be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command CREATE DATABASE piggy;. Run command < \i express-back-end/src/db/schema/create.sql >

Copy the .env.example file to .env and fill in the necessary PostgreSQL configuration. The node-postgres library uses these environment variables by default.
This should look like this below:

```
PGHOST=localhost
PGDATABASE=piggy
PGPORT=8081
```

Run the command < \i express-back-end/src/db/seeds/allinone.sql > to populate the seed data to the tables.

## Dependencies