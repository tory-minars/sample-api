import app from './app'
import { MongoConfig, settings } from './config'
console.log(settings)
const mongo = new MongoConfig()
app.listen(settings.apiPort, () => {
    mongo.connect().catch(err => console.log(err))
    console.log(`App Connected on port ${settings.apiPort}`)
})