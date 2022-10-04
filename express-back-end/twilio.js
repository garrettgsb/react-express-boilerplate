const twilio = require("twilio");

const accountNumber = process.env.TWILIO_ACCTNUM;
const authToken = process.env.TWILIO_TOKEN;

const client = new twilio(accountNumber, authToken);

client.messages
.create({
  body: 'hey',
  to: '+15872285886',
  from: '+12055397732'
})
.then(message => console.log(messages.sid));