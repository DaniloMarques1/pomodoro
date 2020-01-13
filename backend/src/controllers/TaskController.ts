import { Request, Response } from 'express';
import TaskModel from '../models/Task';
import Utils from '../utils/util';
import UserModel from '../models/User';

export default abstract class TaskController {
  static async store(req: Request, res: Response): Promise<Response> {
    const { title, qtdPomodors } = req.body;
    const { token } = req.headers;
    const payload = Utils.getUserFromToken(<string>token);
    const task = await TaskModel.create({
      title,
      qtdPomodors,
      finishedPomodoros: 0,
      active: true,
    });
    const user = await UserModel.findById(payload.id);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }
    user?.tasks.push(task.id);
    await user?.save();

    return res.status(201).json(task);
  }

  static async index(req: Request, res: Response): Promise<Response> {
    const { token } = req.headers;
    const payload = Utils.getUserFromToken(<string>token);
    const user = await UserModel.findById(payload.id);
    await user
      ?.populate({
        path: 'tasks',
        options: { sort: { createdAt: -1 } },
      })
      .execPopulate();

    return res.json(user);
  }
}
