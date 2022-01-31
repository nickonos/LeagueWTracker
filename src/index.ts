import {RiotAPIClient} from "./RiotAPI/RiotAPIClient";
import {UserRepository} from "./MongoDB/UserRepository"
import * as dotenv from "dotenv"
import {DiscordBot} from "./Discord/DiscordBot";
import {UserService} from "./Services/UserService";

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

    let userData : UserRepository = new UserRepository(MongoDBURI);
    let riotApi : RiotAPIClient = new RiotAPIClient(RiotAPIKey)

    let discordBot : DiscordBot = new DiscordBot(DiscordToken, new UserService(userData, riotApi))
    discordBot.Run()

}

