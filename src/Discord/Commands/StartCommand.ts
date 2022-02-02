import { ICommand } from "../../Interfaces/ICommand";
import {BaseCommandInteraction} from "discord.js";

export function GetStartCommand() : ICommand {
    return {
        data: {
            name: "start",
            description: "Starts your league W tracking.",
            type: "CHAT_INPUT",
        },
        execute: function (interaction: BaseCommandInteraction) {
            interaction.reply({
                content: interaction.member?.user.id ,
                fetchReply: false
            }).catch(err => console.error(err))
        }
    }
}