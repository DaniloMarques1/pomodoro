import { Request, Response } from 'express';
import TaskModel from '../models/Task';
import Utils from '../utils/util';
import UserModel from '../models/User';

export default abstract class TaskController {
  static async store(req: Request, res: Response): Promise<Response> {
    const { title, qtdPomodoros } = req.body;
    const { token } = req.headers;
    const payload = Utils.getUserFromToken(<string>token);
    const task = await TaskModel.create({
      title,
      qtdPomodoros,
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
        match: { active: true },
        options: { sort: { createdAt: -1 } },
      })
      .execPopulate();

    return res.json(user);
  }
  static async update(req: Request, res: Response): Promise<Response> {
    const { task_id } = req.params;
    try {
      const task = await TaskModel.findById(task_id);
      if (task) {
        task.finishedPomodoros += 1;
        if (task.finishedPomodoros === task.qtdPomodoros) task.active = false;
        await task.save();
        return res.json(task);
      }

      return res.status(400).json({ error: 'Task not found' });
    } catch (e) {
      return res.status(400).json({ error: 'Task not found' });
    }
  }
}
