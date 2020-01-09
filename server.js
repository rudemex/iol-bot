const express = require("express");
const bodyParser = require("body-parser");
const TelegramBot = require('node-telegram-bot-api');
const routes = require("./routes/routes");
const config = require('config');
const signale  =  require('signale');
const pjson = require('./package.json');
const cors = require('cors');

//bot settings
const token = config.get("telegram").token;
const bot = new TelegramBot(token, {polling: true});// Create a bot that uses 'polling' to fetch new updates


const app = express();
app.use((req, res, next) => {
    signale.info('Interceptor: REQUEST to ', req.url);
    signale.info('Interceptor: REQUEST HEADERS ', req.headers);
    signale.info('Interceptor: REQUEST BODY ', req.body);
    var whitelist=serverConfig.origins;
    var origin = req.headers.origin;
    if (serverConfig.corsEnabled && whitelist.indexOf(origin) > -1 ) {
        //res.setHeader('Access-Control-Allow-Origin', origin);
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header("Access-Control-Allow-Methods","GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS");//
        res.header("Access-Control-Allow-Headers","Content-Type,Authorization,Set-Cookie,Access-Control-Allow-Origin,Cache-Control,Pragma,id_channel");
        res.header("Access-Control-Allow-Credentials","true");
    }
    // res.header("Access-Control-Allow-Origin", req.headers.origin);

    next();
});

const serverConfig = config.get('server');

const cors_options_enabled = {
    origin:  serverConfig.origins,
    methods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization,Set-Cookie,Access-Control-Allow-Origin,Cache-Control,Pragma,id_channel"
};
const cors_options_disabled = {
    origin:  "*",
    methods: "GET,HEAD,PUT,POST,DELETE,PATCH",
    credentials: false,
    allowedHeaders: "Content-Type,Authorization,Set-Cookie,Access-Control-Allow-Origin,Cache-Control,Pragma,id_channel"
};

signale.info("Using config: ", config);

if(serverConfig.corsEnabled) {
    signale.info("Using cors config: ",cors_options_enabled);
    //app.use(cors(cors_options_enabled));
} else {
    signale.info("Using cors config: ",cors_options_disabled);
    app.use(cors(cors_options_disabled));
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


routes(app,pjson.version);

const port = serverConfig.port || 8008;
const server = app.listen(port,  () => {
    signale.info("App running on port.", server.address().port);
    signale.info("Version: ",pjson.version);
});

/*
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    console.log("msg: ",msg);
    console.log("match: ",match);

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});
 */
