import {MongoClient} from "mongodb";

export class MongoDB{
    private readonly _client : MongoClient
    constructor(connstring : string) {
        this._client = new MongoClient(connstring);
    }

    public async ConnectToDatabase(){

        await this._client.connect()
            .catch(e => console.log("error:" + e))

        let collection = await this._client.db("db").collection("champions")

        collection.find().forEach(item => {
            console.log(item)
        })
    }
}
