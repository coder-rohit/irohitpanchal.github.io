var postmark = require('postmark');

console.log(process.env.POSTMARK_SERVER_CLIENT)
// Send an email:
var client = new postmark.ServerClient("186b0da5-4944-4786-b234-cdd33863f7ea");

export default client;
