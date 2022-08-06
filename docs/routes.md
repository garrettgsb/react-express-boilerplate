## Routes and states

### all after login

props.matches = map = create chatrooms
current view = chat with id 5
filter api/users/:id/messages (props.messages) to_id: 5 

#### url : / 
api: api/users, api/users/:id, api/users/:id/messages, api/user/:id/matching/, ??api/user/:id/matching/:id/messages?? (from_user_id)
states:  -->
const [state, setState] = useState({
  user: you
  users: []
  messages: [{your messages}]
  likedBy: [5] get: api/user/:id/matching/ -> select * from matching where to_id = your id
  matches: [5] put/patch: api/user/:id/matching/ -> update columns in matching where your_id 
  blocked: [id1, id2, id3]
  matching: []
})
const [like, setLike] = useState()

matching = {
  id,
  from_user_id - always your id
  to_id
  like_value
  seen
}

see a user (id: 3)
<!-- you swipe left - setLike({user[dislikedUserID]: like})
you swipe right - setLike({user[likedUserID]: like}) -->

you swipe left ==> matching[seen]: true // matching[like_value] :false
you swipe right ==> matching[seen]: true // matching[like_value] :true


displayed: users[] - this is where swiping happens


#### url: /matches (api/users/:id/messages)
api: Websockets function 
states: props.user, props.matches, props.messages
feature: emoji table, GIPHY(stretch)

#### urls: /preferences (can be accessed from /matches and /profile)
api: none needed
states: props.user  
*need to pass it back up after saves

#### url: /profile
api: none needed atm
states: props.user
*need to pass it back up after saves

#### Stretch: external APIs
Video call: WebRTC?
GIPHY API: feature in chat
Spotify: allow user to set a song AND/OR list top fav listend artists (shown in their profile)
Location: Start with hardcode -> maybe maps api after


<!-- params id

axios.get('/api/data')



states:  -->




<!-- / api to users -->