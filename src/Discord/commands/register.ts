import { Message } from "discord.js"

module.exports = {
    name: 'register',
    execute(message: Message, args: string[]){
        //other code to actually add the user
        message.channel.send("You have been added to the tracker");
    }
}