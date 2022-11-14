import mongoose, { Mongoose } from 'mongoose';
import config from '../config/app';

class Connection {
  private uri: string;
  client: Mongoose;
  constructor() {
    // Connection String
    this.uri = `mongodb+srv://${config.dbUserName}:${config.dbPassword}@nodeapp2.rloalnf.mongodb.net/?retryWrites=true&w=majority`;

    this.client = mongoose;
  }

  // Makes a connection to the database.
  async init() {
    console.log('🔌 [database] Connecting to db...');
    try {
      await this.client.connect(this.uri, { dbName: 'sheetmetal' });
      console.log('🤝 [database] Connection complete!');
    } catch (e) {
      console.log('😿 [database] Error: ' + e);
    }
  }
}
const connection = new Connection();
export default connection;
