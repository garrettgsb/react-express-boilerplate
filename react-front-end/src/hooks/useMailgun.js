// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
const mailgun = require("mailgun-js");
const DOMAIN = process.env.DOMAIN_MAILGUN;
console.log(process.env.API_KEY_MAILGUN)
export const mg = mailgun({
  apiKey: process.env.API_KEY_MAILGUN,
  domain: DOMAIN,
});

// export { mg }

// const data = {
// 	from: 'Excited User <me@samples.mailgun.org>',
// 	to: 'snehakm.art@gmail.com',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });