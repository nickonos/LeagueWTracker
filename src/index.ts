import {RiotAPIClient} from "./RiotAPI/RiotAPIClient";
import {UserData} from "./MongoDB/UserData"
import * as dotenv from "dotenv"
import {DiscordBot} from "./Discord/DiscordBot";
import {IUser} from "./Interfaces/IUser";
dotenv.config()

main()
    .then()

async function main(){

    const MongoDBURI: string = process.env.DB_CONNSTRING ?? "";
    const RiotAPIKey: string = process.env.RIOT_API_KEY ?? "";
    const DiscordToken: string = process.env.Discord_Token ?? "";

    if (MongoDBURI == "" || RiotAPIKey == "" || DiscordToken == ""){
        console.error("Some environment variables not set")
        console.error("MongoDBURI:", MongoDBURI)
        console.error("RiotAPIKey:", RiotAPIKey)
        console.error("DiscordToken:", DiscordToken)
    }


    let db : UserData = new UserData(MongoDBURI);

    db.CreateUser("6", "5", "nickonos1")
        .then(_ => {})
        .catch(err => console.error(err))

    /*
    let apiClient : RiotAPIClient = new RiotAPIClient(RiotAPIKey)

    apiClient.GetUser("nickonos")
        .then(res => console.log('test')
        )
        .catch(err => console.error(err))


    let discordBot : DiscordBot = new DiscordBot(DiscordToken)
    discordBot.Run()
    */
}

