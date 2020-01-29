import { Schema, model } from 'mongoose';
import TaskInterface from '../interfaces/Task';

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
    },
    qtdPomodoros: Number,
    finishedPomodoros: Number,
    active: Boolean,
  },
  { timestamps: true }
);

const TaskModel = model<TaskInterface>('Task', TaskSchema);

export default TaskModel;
