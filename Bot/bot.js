const { Telegraf } = require('telegraf')
const TOKEN = "6852098925:AAEbvMLf31rczz3WQwmDeO9P4MImoyjlBdQ"
const bot = new Telegraf(TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))

bot.launch()