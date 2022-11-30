import { Schema } from 'mongoose';
import connection from './connection.db';
import IUser from '../types/custom';

const userSchema = new Schema<IUser>({
  identifer: String,
  email: String,
  givenName: String,
  familyName: String,
  locale: String,
  picture: String,
});

const User = connection.client.model('User', userSchema);

export default User;
