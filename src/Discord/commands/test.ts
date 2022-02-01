import { Message } from "discord.js"

module.exports = {
    name: 'test',
    execute(message: Message, args: string[]){
        message.channel.send(args[1]);
    }
}