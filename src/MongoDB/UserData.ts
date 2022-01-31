import {ConnectOptions, Model, Mongoose} from "mongoose"
import {GetUserSchema, IUser} from "../Interfaces/IUser"
import {IUserData} from "../Interfaces/IUserData";

export class UserData implements IUserData{

    private readonly _user_model: Model<IUser>

    constructor(connstring : string) {
        let client : Mongoose = new Mongoose()

        let options : ConnectOptions = {
            dbName: "db",
            keepAlive: true
        }

        client.connect(connstring, options)
            .catch(e => console.error(e))


        this._user_model = client.model<IUser>('User', GetUserSchema())
    }

    public async TryCreateUser(puuid: string, discord_id: string, username: string): Promise<boolean>{
        return await this._user_model.create({
            puuid,
            discord_id,
            username
        })
        .then(_ => {
            return true
        })
        .catch(_ => {
            return false
        });
    }

    public async GetUserByName(username: string): Promise<IUser> {
        return await this._user_model.findOne({username: username})
            .then()
    }

    public async GetUserByPuuid(puuid: string): Promise<IUser> {
        return await this._user_model.findOne({puuid: puuid})
            .then()

    }
    public async GetUserByDiscordId(discord_id: string): Promise<IUser> {
        return await this._user_model.findOne({discord_id: discord_id})
            .then()

    }
}
