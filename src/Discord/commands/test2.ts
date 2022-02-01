import { Message } from "discord.js"

module.exports = {
    name: 'test2',
    execute(message: Message, args: string[]){
        message.channel.send("TEST@2");
    }
}