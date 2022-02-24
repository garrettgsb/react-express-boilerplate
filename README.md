# beleaf

Welcome to beleaf! 

This is a houseplant app created by [Josue Arevalo](https://github.com/josuevalo), [Julia Gatina](https://github.com/julia-gatina), and [Lucy Shen](https://github.com/lucyshen7) as a final project for Lighthouse Labs Web Development Bootcamp.  

Beleaf lets users track and show off their plant collection, get watering reminders and care tips, share knowledge with other users and much more.

Beleaf is build with Postgres, Docker, Express (back-end), Node, React (front-end), Semantic UI. 

Our README is currently a work in progress as we are preparing for Demo Day. 

Please come back soon to see a finished result!



## Screenshot

!["Screenshot of Landing Page"](https://github.com/julia-gatina/beleaf/blob/master/react-front-end/public/images/landing-page.png?raw=true)



* Stay tuned for more!



## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

In the browser, you can click on the button and see the data get loaded.


## Create DB for local env.
CREATE USER beleaf WITH PASSWORD 'beleaf';
CREATE DATABASE beleaf;
GRANT ALL PRIVILEGES ON DATABASE beleaf to beleaf;