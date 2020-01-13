import { Document } from 'mongoose';
export default interface TaskInterface extends Document {
  id: string;
  title: string;
  qtdPomodoros: number;
  finishedPomodoros: number;
  active: boolean;
}
