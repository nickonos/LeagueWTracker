import {IUser} from "./IUser";

export interface IUserData {
    TryCreateUser(puuid: string, discord_id: string, username: string): Promise<boolean>

    GetUserByPuuid(puuid: string): Promise<IUser>

    GetUserByName(username: string): Promise<IUser>

    GetUserByDiscordId(discord_id: string): Promise<IUser>
}