var builder = require('botbuilder');

//Create the connector

var connector = new builder.ConsoleConnector().listen();

//Create the bot
var bot = new builder.UniversalBot(connector);

//add in the dialog

// bot.dialog('/', function (session) {
//     // session.send('Hello, bot!');
//     var userMessage = session.message.text;
//
//     session.send('you said: ' + userMessage);
// });

bot.dialog('/', [
   function (session) {
       builder.Prompts.text(session, 'Please enter your name');
   },
    function (session, result) {
        session.send('Hello, ' + result.response);
    }
]);