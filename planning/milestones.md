## setup basic pages (titles, divs etc)
[✔] home page
[✔] maps
[✔] meetups
[✔] profile
[✔] settings
[✔] messages (group or personal)
[✔] navbar

## add twilio api data to pages
[✔] safety messages to phone number
[ ] messaging to other meetup members
## northern lights api - major key
[✔] KP index strength
[ ] (stretch) weather forecast (separate api?)
[ ] (stretch) location specific forecast
## meetups
[✔] create form for meetups
[ ] edit / delete meetups
[ ] adding yourself to a public event
[ ] show meetups on a calendar
[ ] send meetup details as invite to friends (email invite? / twilio invite?)
[ ] separate meetups into 3 lists: public, user created, attending
[✔] group chats / personal chats: https://www.youtube.com/watch?v=tBr-PybP_9c https://guide.meteor.com/methods.html
[ ] (stretch) show /filter public meetups on a map
[ ] (stretch) set meetups to public/private
[ ] (stretch) show list of past events
## profile
[ ] add a profile pic
[ ] add name
[ ] add showcased/best 3 photos
[ ] add email / trusted contact details to profile
[ ] hide personal information from public / only show to user
[ ] (stretch) camera settings
[ ] (stretch) endorsements
[ ] (stretch) equipment
## styling (last priority)
[ ] looking fly
## (stretch) google maps api
[ ] connect to DB
[ ] get map to show on page
[ ] add pins to map
[ ] edit / delete pins
[ ] show custom info when you click on pin (ie photo or description)

### GUIDELINES & 
* work on branches at all times
* branch name format: feature/blah
* request to merge to master (no merges without group approval)
* commit regularly, approx1+ times / hour
* group checkins: first thing in morning, midday, evening

### GIT WORKFLOW
git checkout -b <branch_name>
git pull
git add . / filename
git commit -m "message"
  ??git push -u origin <branch_name>
Create a pull request on github
git checkout master
on approval: git merge <branch_name>