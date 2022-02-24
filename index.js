const core = require('@actions/core');
const github = require('@actions/github');
require ('dotenv').config()
const telegram = require('node-telegram-bot-api')
process.env.NTBA_FIX_319 = 1;

try {
    const chatID = core.getInput('TELEGRAM_TO');
    const bot = new telegram(core.getInput('TELEGRAM_TOKEN'));
    bot.sendMessage(chatID, core.getInput('message'));

    const filePath = core.getInput('file');
    if(filePath != "") {
        await bot.sendAudio(chatID, filePath);
    }
    

} catch (error) {
  core.setFailed(error.message);
}