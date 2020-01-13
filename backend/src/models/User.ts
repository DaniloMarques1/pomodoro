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
  },
  password: {
    type: String,
    required: true,
  },
  tasks: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
  },
});

UserSchema.pre('save', async function(this: any, next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const UserModel = model<UserInterface>('User', UserSchema);

export default UserModel;
