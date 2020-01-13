import { Request, Response } from 'express';
import UserModel from '../models/User';
import bcrypt from 'bcrypt';
import Utils from '../utils/util';

export default abstract class UserController {
  static async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      let user = await UserModel.findOne({ email });
      if (user) return res.status(400).json({ error: 'Email already used' });

      user = await UserModel.create({
        name,
        email,
        password,
      });
      return res.status(201).json(user);
    } catch (e) {
      return res.status(400).json({ error: 'Missing fields' });
    }
  }
  static async update(req: Request, res: Response): Promise<Response> {
    const { token } = req.headers;
    const { currentPassword, newPassword } = req.body;
    const payload = Utils.getUserFromToken(<string>token);
    const user = await UserModel.findById(payload.id);
    const match = await bcrypt.compare(currentPassword, <string>user?.password);
    if (match && user) {
      user.password = newPassword;
      await user.save();
      return res.status(200).json(user);
    }

    return res.status(401).json({ error: 'Password does not match' });
  }
}
