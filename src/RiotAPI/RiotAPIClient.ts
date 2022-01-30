import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {EmptyRiotUser, RiotUser} from "../Models/RiotUser";

export class RiotAPIClient{
    private readonly _httpClient : AxiosInstance;

    constructor(api_key : string) {
        let config : AxiosRequestConfig = {
            timeout: 10000,
            baseURL: "",
            params: {
                api_key
            }
        }
        this._httpClient = axios.create(config)
    }

    public async GetUser(username : string) : Promise<RiotUser>{
        return await this._httpClient.get("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + username)
            .then(res => {
                if (res.status < 400) {
                    return new RiotUser(
                        res.data.id,
                        res.data.accountId,
                        res.data.puuid,
                        res.data.name,
                        res.data.profileIconId,
                        res.data.revisionDate,
                        res.data.summonerLevel
                    )
                }
                return EmptyRiotUser()
            })
    }
}