// could add this file to gitignore 
export type BotConfig = {
    prefix: string;

    owners: string[];

    testChannel: string;
}

export const config: BotConfig = {
    prefix: "!",
    owners: [
        "536178269427597312", //dave discord user id
        "294145651640500224", //nick discord user id
    ],
    testChannel: "937300126416920647" //test channel id
}