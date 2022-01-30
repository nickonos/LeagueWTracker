import {Client, ClientOptions} from "discord.js";

export class DiscordBot{
    private readonly _client : Client
    private readonly _token : string
    constructor(Token: string) {
        const clientOptions : ClientOptions= {
            intents: [],
        }

        this._client = new Client(clientOptions)
        this._token = Token
    }

    public Run(){
        this._client.once('Ready', () => {
            console.log("Discord Bot is Ready")
        })

        this._client.login(this._token)
            .then(res => console.log(res))
    }
}