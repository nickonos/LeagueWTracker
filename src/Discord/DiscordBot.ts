import {Client, ClientOptions, Message, Intents} from "discord.js";
import fs from "fs";
import { config } from "./config";

export class DiscordBot{
    private _client : Client
    private readonly _token : string
    constructor(Token: string) {
        const clientOptions : ClientOptions= {
            intents: [
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILDS,
            ],
        }

        this._client = new Client(clientOptions)
        this._token = Token

        this.loadEvents();
    }

    public Run(){
        this._client.login(this._token)
            .then(res => console.log(res))

        this._client.on("messageCreate", (message: Message) => {
           if(!message.content.startsWith(config.prefix) || message.author.bot) return; // message is not intended for the bot

           console.log(message.author.username);
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
}