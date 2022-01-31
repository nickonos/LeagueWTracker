import {Client, ClientOptions} from "discord.js";
import {UserService} from "../Services/UserService";

export class DiscordBot{
    private readonly _client : Client
    private readonly _token : string
    private readonly _userService : UserService

    constructor(Token: string, userService: UserService) {
        const clientOptions : ClientOptions= {
            intents: [],
        }

        this._client = new Client(clientOptions)
        this._token = Token

        this._userService = userService
    }

    public Run(){
        this._client.once('Ready', () => {
            console.log("Discord Bot is Ready")
        })

        this._client.login(this._token)
            .then(res => console.log(res))
    }
}