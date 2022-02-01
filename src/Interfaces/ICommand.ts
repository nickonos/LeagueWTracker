import {ApplicationCommandDataResolvable, BaseCommandInteraction} from "discord.js";

export interface ICommand {
    data: ApplicationCommandDataResolvable
    execute(interaction : BaseCommandInteraction): void
}