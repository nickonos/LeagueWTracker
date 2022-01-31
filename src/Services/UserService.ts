import {IUserData} from "../Interfaces/IUserData";
import {RiotAPIClient} from "../RiotAPI/RiotAPIClient";

export class UserService {
    private readonly _userData: IUserData;
    private readonly _riotApi: RiotAPIClient;

    constructor(userdata: IUserData, riotApi: RiotAPIClient) {
        this._userData = userdata
        this._riotApi = riotApi
    }
}