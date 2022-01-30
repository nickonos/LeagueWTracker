import {RiotAPIClient} from "./RiotAPI/RiotAPIClient";
import {MongoDB} from "./MongoDB/MongoDB"
import * as dotenv from "dotenv"
import {DiscordBot} from "./Discord/DiscordBot";
dotenv.config()

const MongoDBURI: string = process.env.DB_CONNSTRING ?? "";
const RiotAPIKey: string = process.env.RIOT_API_KEY ?? "";
const DiscordToken: string = process.env.Discord_Token ?? "";

if (MongoDBURI == "" || RiotAPIKey == "" || DiscordToken == ""){
    console.error("Some environment variables not set")
    console.error("MongoDBURI:", MongoDBURI)
    console.error("RiotAPIKey:", RiotAPIKey)
    console.error("DiscordToken:", DiscordToken)
}


let db : MongoDB = new MongoDB(MongoDBURI);
db.ConnectToDatabase()
    .then(_ => {})

let apiClient : RiotAPIClient = new RiotAPIClient(RiotAPIKey)

apiClient.GetUser("nickonos")
    .then(res => console.log(res)
    )
    .catch(err => console.error(err))


let discordBot : DiscordBot = new DiscordBot(DiscordToken)
discordBot.Run()

