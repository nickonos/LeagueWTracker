import {UserService} from "../Services/UserService";

import {
    Client,
    ClientOptions,
    Intents,
    Collection,
    ApplicationCommandDataResolvable, Interaction, CacheType
} from "discord.js";
import {SlashCommandBuilder} from "@discordjs/builders";
import {ICommand} from "../Interfaces/ICommand";
import {discordCommands} from "../Models/DiscordCommands";

const guild_id = "664240820651687966"

export class DiscordBot{
    private _client : Client
    private readonly _token : string
    private readonly _userService : UserService
    private readonly _commands : ICommand[]

    constructor(Token: string, userService: UserService) {
        const clientOptions : ClientOptions= {
            intents: [
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILDS,
            ],
        }

        this._client = new Client(clientOptions)
        this._token = Token

        this._userService = userService
        this._commands = discordCommands
    }

    public Run(){
        this._client.once("ready", () => {
            console.log("Discord Bot is Ready")

            let guild = this._client.guilds.cache.get(guild_id)

            if(guild != undefined){
                this._commands.map((cmd) => {
                    guild?.commands.create(cmd.data)
                        .then(_ => console.log("Created command: ", cmd.data.name))
                        .catch(err => console.error("there was an error creating command: ", cmd.data.name, err))
                })
            }
        })

        this._client.login(this._token)
            .then(_ => {
                console.log("Discord Bot Online")
            })
            .catch(err => console.log("There was a problem Logging in:", err))

        this._client.on("interactionCreate", async (interaction) => {
            if (!interaction.isCommand())
                return

            this._commands.find(x => x.data.name == interaction.commandName)?.execute(interaction)
        })
    }
}