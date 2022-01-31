import dotenv from 'dotenv'
const settings = {
    apiPort: '8080',
  
    mongo: {
        url: '127.0.0.1',
        port: '27017'
    }

}
dotenv.config()
export default settings