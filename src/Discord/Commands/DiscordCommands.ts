import {ICommand} from "../../Interfaces/ICommand";
import {BaseCommandInteraction} from "discord.js";
import {UserService} from "../../Services/UserService";
import {getTestCommand} from "./TestCommand";
import {GetAddCommand} from "./AddCommand";
import { GetStartCommand } from "./StartCommand";
import { GetOldWinsCommand } from "./GetOldWins";

export function GetDiscordCommands(userService: UserService) : ICommand[]{
    return [
        getTestCommand(userService),
        GetAddCommand(),
        GetStartCommand(),
        GetOldWinsCommand()
    ]
}



export function TryGetString(interaction: BaseCommandInteraction, name: string) : string | undefined {
    let value = interaction.options.get(name)?.value
    if (value == undefined || typeof (value) == "number" || typeof (value) == "boolean")
        return undefined

    return value
}

export function TryGetNumber(interaction: BaseCommandInteraction, name: string) : number | undefined {
    let value = interaction.options.get(name)?.value
    if (value == undefined || typeof (value) == "string" || typeof (value) == "boolean")
        return undefined

    return value
}

export function TryGetBoolean(interaction: BaseCommandInteraction, name: string) : boolean | undefined {
    let value = interaction.options.get(name)?.value
    if (value == undefined || typeof (value) == "string" || typeof (value) == "number")
        return undefined

    return value
}


