// Your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC7cab750fc6b060697ee0bb340f066bc9';
var authToken = "3af052c64b9b7fc6c39819c72ff08bd5";
var client = require('twilio')(accountSid, authToken);
 
client.messages.create({
    body: "Downstreams would like to confirm that your river is clean :-)",
    to: "+447884235311",
    from: "+442033895789"
}, function(err, message) {
    process.stdout.write(message.sid);
});
