import path from 'path'
import mongoose from 'mongoose'
import { settings } from '.'

export default class MongoConfig {
    public mongoURL: string
    public constructor() {
        this.buildMongooseURL()
    }
    public connect = async (): Promise<any> => {
        console.log(this.mongoURL)
        const m = await mongoose.connect(this.mongoURL, this.getConnectionOptions())
        return m
    }

    public disconnect = async (): Promise<void> => {
        if (mongoose.connection) {
            await mongoose.connection.close()
        }
    }

    private getConnectionOptions = (): any => {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        return opts
    }
    private buildMongooseURL = (): void => {
        const url = `mongodb://${settings.mongo.url}:${settings.mongo.port}/?directConnection=true&serverSelectionTimeoutMS=2000`
        this.mongoURL = url
    }
}