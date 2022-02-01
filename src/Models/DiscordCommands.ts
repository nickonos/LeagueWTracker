import {ICommand} from "../Interfaces/ICommand";
import {BaseCommandInteraction, CacheType, Interaction} from "discord.js";

export const discordCommands: ICommand[] = [
    {
        data: {
            name: "ping",
            description: "returns pong",
            type: "CHAT_INPUT"
        },
        execute(interaction: BaseCommandInteraction) {
            interaction.reply({content: "pong", fetchReply: false})
                .catch(err => console.error(err))
        }
    },
    {
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
            console.log (interaction.options.data)

            interaction.reply({
                content: getnumbers(interaction) ,
                fetchReply: false
            }).catch(err => console.error(err))
        }
    },
]

function getnumbers(interaction: BaseCommandInteraction): string{
    let a = TryGetNumber(interaction,"a")
    let b = TryGetNumber(interaction,"b")

    if (!a || !b)
        return "";

    return (a + b).toString()
}

function TryGetString(interaction: BaseCommandInteraction, name: string) : string | undefined {
    let value = interaction.options.get(name)?.value
    if (value == undefined || typeof (value) == "number" || typeof (value) == "boolean")
        return undefined

    return value
}

function TryGetNumber(interaction: BaseCommandInteraction, name: string) : number | undefined {
    let value = interaction.options.get(name)?.value
    if (value == undefined || typeof (value) == "string" || typeof (value) == "boolean")
        return undefined

    return value
}

function TryGetBoolean(interaction: BaseCommandInteraction, name: string) : boolean | undefined {
    let value = interaction.options.get(name)?.value
    if (value == undefined || typeof (value) == "string" || typeof (value) == "number")
        return undefined

    return value
}


