import { Schema, model } from 'mongoose';
import TaskInterface from '../interfaces/Task';

const TaskSchema = new Schema(
  {
    title: String,
    qtdPomodoros: Number,
    finishedPomodoros: Number,
    active: Boolean,
  },
  { timestamps: true }
);

const TaskModel = model<TaskInterface>('Task', TaskSchema);

export default TaskModel;
