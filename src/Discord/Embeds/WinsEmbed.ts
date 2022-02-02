import { TextChannel, MessageEmbed, User, MessageReaction } from "discord.js";
import { CreateEmbed, IEmbedConfig } from "../../Interfaces/IEmbed";

export async function GetWinsEmbed(user: User, channel: TextChannel, emoji: string) : Promise<MessageEmbed>{
    let list = await DetermineWins(channel);

    let config: IEmbedConfig = {
        title: "Your Wins:",
        description: "user: " + user.username,
        color: 100, 
        field1: list.toString() //dangerous if no wins are present = bot crash
    }
    
    return CreateEmbed(config);
}

async function DetermineWins(channel: TextChannel): Promise<string[]>{
    let list: string[] = new Array();
    await channel.messages.fetch( {limit: 10}).then((messages) => {
        messages.forEach(message => {
            //console.log(message.reactions.resolve("😈")?.message.content);
            if(message.reactions.resolve("😈")?.message.content){
                console.log(message.content); //champ
                list.push(message.content)
            }
        });
    })
    return list;
}