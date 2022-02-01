import {Client, ClientOptions, Message, Intents} from "discord.js";
import fs from "fs";
import { config } from "./config";

export class DiscordBot{
    private _client : Client
    private readonly _token : string
    private _commands: any[]; //name: string, execute: void
    constructor(Token: string) {
        const clientOptions : ClientOptions = {
            intents: [
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILDS,
            ],
        }

        this._client = new Client(clientOptions)

        this._token = Token
        this._commands = [];

        this.loadEvents();
        this.loadCommands();
    }

    public Run(){
        this._client.login(this._token)
            .then(res => console.log(res))

        this._client.on("messageCreate", (message: Message) => {
            if (!message.content.startsWith(config.prefix) || message.author.bot) return; // message is not intended for the bot

            const args = message.content.slice(config.prefix.length).split(/ +/);
            const commandName = args.shift()?.toLowerCase();


            this._commands.forEach(element => { //could be done better
                if (element.name === commandName) {
                    const command = element;
                    command.execute(message, args);
                }
            });
        });
    }

    private loadEvents(): void{ // loads events from ./events and calls on them when emitted
        const eventFiles = fs.readdirSync('./src/Discord/events').filter(file => file.endsWith('.ts'));
        for (const file of eventFiles) {
            const event = require(`./events/${file.replace('.ts', '.js')}`); // after build files are .js
            if (event.once) {
                this._client.once(event.name, (...args) => event.execute(...args));
            } else {
                this._client.on(event.name, (...args) => event.execute(...args));
            }
        }
    }

    private loadCommands(): void {
        const commandFiles = fs.readdirSync('./src/Discord/commands').filter(file => file.endsWith('.ts'));

        for (const file of commandFiles) {
            const command = require(`./commands/${file.replace('.ts', '.js')}`);
            this._commands.push(command.name, command);
        }
    }
}
