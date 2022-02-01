import {ICommand} from "../../Interfaces/ICommand";
import {BaseCommandInteraction} from "discord.js";
import {TryGetNumber} from "./DiscordCommands";

export function GetAddCommand() : ICommand{
    return {
        data: {
            name: "add",
            description: "adds the two numbers",
            type: "CHAT_INPUT",
            options:[
                {
                    type: "INTEGER",
                    name: "a",
                    description: " input 1",
                    required: true
                },
                {
                    type: "INTEGER",
                    name: "b",
                    description: "input 2",
                    required: true
                }
            ]


        },
        execute: function (interaction: BaseCommandInteraction) {
            interaction.reply({
                content: getnumbers(interaction) ,
                fetchReply: false
            }).catch(err => console.error(err))
        }
    }
}


function getnumbers(interaction: BaseCommandInteraction): string{
    let a = TryGetNumber(interaction,"a")
    let b = TryGetNumber(interaction,"b")

    if (!a || !b)
        return "";

    return (a + b).toString()
}
