const core = require('@actions/core');
const github = require('@actions/github');
require ('dotenv').config()
const telegram = require('node-telegram-bot-api')

try {

    const bot = new telegram(core.getInput('TELEGRAM_TOKEN'));
    bot.sendMessage(core.getInput('TELEGRAM_TO'), 'Hello im git action');

} catch (error) {
  core.setFailed(error.message);
}