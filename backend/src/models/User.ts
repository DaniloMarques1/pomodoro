import { Schema, model } from 'mongoose';
import UserInterface from '../interfaces/User';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

const UserModel = model<UserInterface>('User', UserSchema);

export default UserModel;
