const twilio = require("twilio");

const accountNumber = process.env.TWILIO_ACCTNUM;
const authToken = process.env.TWILIO_TOKEN;
const number = "+12055397732"

const client = new twilio(accountNumber, authToken);

client.messages
.create({
  body: 'hey',
  to: '+15872285886',
  from: '+12055397732'
})
.then(message => console.log(messages.sid));


export default function newUserMessage() {
  client.messages
  .create({
    body: 'Welcome to WeRun! Your account has been created. Join your first run right now and get running.',
    to: [phone],
    from: {number}
  })
  .then(message => console.log(message.sid));
}