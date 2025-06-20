import { MongoClient } from 'mongodb'

class MongoConnection {

    static client = new MongoClient("mongodb+srv://manu:manu@cluster0.cvbkjim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    static db = this.client.db("tp2")

    static connection = async () => {
        await this.client.connect()
    }
}

export default MongoConnection;
