import {Client, ClientOptions, Message, Intents} from "discord.js";

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
    }

    public Run(){
        this._client.once("ready", () => {
            console.log("Discord Bot is Ready")
        })

        this._client.login(this._token)
            .then(res => console.log(res))

        this._client.on("messageCreate", (message: Message) => {
            if(message.content === "ping"){
                console.log(message.guild)
                message.reply("pong");
            }
        });
    }
}