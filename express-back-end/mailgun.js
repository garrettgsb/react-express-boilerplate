const key = process.env.API_KEY_MAILGUN;
const domain = process.env.domain;

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: key});

const messageData = {
  from: 'WeRun <iloverunning@werun.ca>',
  to: 'jane@jane.com',
  subject: 'Hey',
  text: 'test'
};

client.messages.create(domain, messageData)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

