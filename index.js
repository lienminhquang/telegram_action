const core = require('@actions/core');
const github = require('@actions/github');
require ('dotenv').config()
const telegram = require('node-telegram-bot-api')
process.env.NTBA_FIX_319 = 1;

try {

    const bot = new telegram(core.getInput('TELEGRAM_TOKEN'));
    bot.sendMessage(core.getInput('TELEGRAM_TO'), core.getInput('message'));

} catch (error) {
  core.setFailed(error.message);
}