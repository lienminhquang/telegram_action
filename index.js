process.env["NTBA_FIX_319"] = 1;
const core = require('@actions/core');
const github = require('@actions/github');
require ('dotenv').config()
const telegram = require('node-telegram-bot-api')

try {
    const chatID = core.getInput('TELEGRAM_TO');
    const parse_mode = core.getInput('PARSE_MODE');
    const bot = new telegram(core.getInput('TELEGRAM_TOKEN'));
    bot.sendMessage(chatID, core.getInput('message'), {
      parse_mode: parse_mode == '' ?  "Markdown" : parse_mode,
    });

    const filePath = core.getInput('file');
    if(filePath != "") {
        bot.sendAudio(chatID, filePath);
    }
    

} catch (error) {
  core.setFailed(error.message);
}
