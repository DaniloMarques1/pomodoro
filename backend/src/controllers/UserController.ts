import { Request, Response } from 'express';
import UserModel from '../models/User';
import Utils from '../utils/util';

export default abstract class UserController {
  static async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      let user = await UserModel.findOne({ email });
      if (user) return res.status(400).json({ error: 'Email already used' });
      const hash = await Utils.getPassword(password);
      user = await UserModel.create({
        name,
        email,
        password: hash,
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
    if (!user)
      return res
        .status(400)
        .json({ error: 'Unexcpeted error, try log in again' });
    else {
      const match = await Utils.comparePassword(
        currentPassword,
        <string>user?.password
      );
      if (match) {
        const hash = await Utils.getPassword(newPassword);
        user.password = hash;
        await user.save();
        return res.status(200).json(user);
      }
      return res.status(401).json({ error: 'Password does not match' });
    }
  }
}
