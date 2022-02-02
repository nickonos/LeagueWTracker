import { MessageEmbed } from "discord.js";

export interface IEmbedConfig {
    title: string,
    description: string,
    color: number, 
    field1: string,
}

export function CreateEmbed(config: IEmbedConfig) : MessageEmbed {
    let embed : MessageEmbed = new MessageEmbed();
    embed.title = config.title;
    embed.description = config.description;
    embed.color = config.color;
    embed.setTimestamp();
    embed.addField("Champs: ", config.field1)

    return embed;

}