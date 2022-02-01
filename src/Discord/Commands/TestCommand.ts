import {ICommand} from "../../Interfaces/ICommand";
import {BaseCommandInteraction} from "discord.js";
import {UserService} from "../../Services/UserService";

export function getTestCommand(userService: UserService): ICommand{
    return {
        data: {
            name: "ping",
            description: "returns pong",
            type: "CHAT_INPUT"
        },
        execute(interaction: BaseCommandInteraction) {
            interaction.reply({content: "pong", fetchReply: false})
                .catch(err => console.error(err))
        }
    }
}