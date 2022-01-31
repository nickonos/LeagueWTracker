import {ConnectOptions, Model, Mongoose} from "mongoose"
import {GetUserSchema, IUser} from "../Interfaces/IUser"

export class UserData {

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

    public async CreateUser(puuid: string, discord_id: string, username: string): Promise<IUser>{
        return await this._user_model.create({
            puuid,
            discord_id,
            username
        })
    }
}
