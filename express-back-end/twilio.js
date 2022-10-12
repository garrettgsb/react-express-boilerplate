require('dotenv').config();


const twilio = require("twilio");

const accountNumber = process.env.TWILIO_ACCTNUM;
const authToken = process.env.TWILIO_TOKEN;


const sendUserText = (phone, message) => {
  const client = new twilio(accountNumber, authToken);
  client.messages
  .create({
    body: message,
    to: phone,
    from: process.env.TWILIO_PHONENUM
  })
  .then(message => console.log("A message was sent to the user's phone number, message.sid is:",message.sid));
};

module.exports = sendUserText;

