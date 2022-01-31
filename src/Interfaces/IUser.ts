import {Schema} from "mongoose";

export interface IUser extends Document{
    puuid: string
    discord_id: string
    username: string
    last_match: string
}

export function GetUserSchema() : Schema<IUser>{
    return new Schema<IUser>({
        puuid: {type: "String", required: true, unique: true},
        discord_id: {type: "String", required: true, unique: true},
        username: {type: "String", required: true, unique: true},
        last_match: {type: "String", required: false}
    })
}
