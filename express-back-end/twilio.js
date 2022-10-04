const twilio = require("twilio");

const accountNumber = "ACf41a5e53a4e0229b3f54a026c607b4bd";
const authToken = "18232f3572c08d6a0823265c0ac9b346";

const client = new twilio(accountNumber, authToken);

client.messages
.create({
  body: 'hey',
  to: '+15872285886',
  from: '+12055397732'
})
.then(message => console.log(messages.sid));