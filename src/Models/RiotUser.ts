export class RiotUser{
    public id: string
    public accountId: string
    public puuid: string
    public name: string
    public profileIconId: number
    public revisionDate: number
    public summonerLevel: number

    constructor(
        id: string,
        accountId :string,
        puuid: string,
        name: string,
        profileIconId: number,
        revisionDate: number,
        summonerLevel: number
        )
    {
        this.id = id
        this.accountId = accountId
        this.puuid = puuid
        this.name = name
        this.profileIconId = profileIconId
        this.revisionDate =revisionDate
        this.summonerLevel = summonerLevel
    }
}
export function EmptyRiotUser(): RiotUser{
    return new RiotUser("", "", "", "", 0, 0, 0)
}