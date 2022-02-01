// could add this file to gitignore 
export type BotConfig = {
    prefix: string;

    owners: string[];

    client: string;

    testGuild: string;
    
    testChannel: string;
}

export const config: BotConfig = {
    prefix: "!",
    owners: [
        "536178269427597312", //dave discord user id
        "294145651640500224", //nick discord user id
    ],
    client: "937041532131897464",
    testGuild: "664240820651687966",
    testChannel: "937300126416920647" //test channel id
}