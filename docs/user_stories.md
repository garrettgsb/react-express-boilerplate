# User Stories

### User comes to log in page (/)
### User can login if they signed up
- user authenication (email and pass match)
- cookies

### User is redirected to "/index" which is basically swiping section

### User can like or pass on profiles on home page (/index)
- Start with buttons, swiping as stretch

### Matches will be shown in shuffle mode
- After any preferences that are set
- User won't see profiles that they passed on, previously matched or blocked(stretch)

### Match logic: if user.liked.includes(user.id) = the user you liked, will show up in msg/match section.
- This should also show some kind of sign on nav button to indicate new change(stretch)

### User has access to preferences, msgs/matches, and dropdown for user specific actions (edit profile, settings, sign out)

### Matches page: user can see list of matches
- matchListItem has: thumbnail, name, msg preview, and last update time

### Matches page: user can select a matchListItem and start messaging
- If user clicks on the name of currentMessageItem, they can see the match's profile
- Messages will have time sent and its content (styling like smartphone)
- User can click on phone and video call optins beside match's name
- User can click to block besides ^ buttons
- User can select emojis
- User can select gifs (GIPHY API) - stretch

### User will see preferences page when clicked on
- User can select gender, age, distance, any user properties (if applicable)
- If user clicks on one of the properties, new screen will follow where user can change their preferences and save or cancel which will go back to preferences page 

### User can click on Profile link and will see its own profile and have a button to edit
- User can switch between view and edit mode. user will have to save if any changes are made to see the change reflected on view mode and other matches.
- Images will be stored via URLs - maybe for stretch we can have them stored in cloud

### User will see settings page when clicked on 
- On settings page, user can see user's account details such as their email. 
- User will see links for privacy, ToS, Tips, Code of conduct etc. STRETCH - these details can be filled for stretch

### User can click on sign out button and sign out, will be redirected to (/) home page which is a login page.
- Basically no access to any of the sites for visitors.


## Stretch
- "Premium" User has another page where they can see (one at a time, like in the swiping section) who has liked their profile and swipe based on the list

- User can swipe left to pass or right to like a profile

- More Stretch to come....




