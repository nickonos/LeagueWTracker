import {ICommand} from "../../Interfaces/ICommand";
import {TextChannel, BaseCommandInteraction} from "discord.js";
import { GetWinsEmbed } from "../Embeds/WinsEmbed";

export function GetOldWinsCommand() : ICommand{
    return {
        data: {
            name: "getoldwins",
            description: "gets the wins already achieved from the emoji channel",
            type: "CHAT_INPUT",
            options:[
                {
                    type: "STRING",
                    name: "channel",
                    description: "the channel where the wins are stored",
                    required: true
                },
                {
                    type: "USER",
                    name: "user",
                    description: "the user which the wins belong to",
                    required: true
                }
            ]

        },
        execute: async function (interaction: BaseCommandInteraction) {
            await interaction.reply("Looking for wins...");

            interaction.channel?.send({
                embeds: [await GetWinsEmbed(
                    interaction.user, 
                    interaction.client.channels.cache.get(process.env.WinsChannel ?? "") as TextChannel, 
                    interaction.options.get("user")?.value?.toString() as string
                    )]
            }).then(() => {
                interaction.deleteReply();
            })
        }
    }
}
