import mongoose, { Schema } from 'mongoose';
import connection from './connection.db';

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
