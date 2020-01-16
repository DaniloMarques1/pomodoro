import jsonwebtoken from 'jsonwebtoken';
import UserPayload from '../interfaces/UserPayload';
import Config from '../config/config';
import bcrypt from 'bcrypt';
export default abstract class Utils {
  static getToken(payload: UserPayload): string {
    const token = jsonwebtoken.sign(payload, <string>Config.JwtKey);
    return token;
  }
  static getUserFromToken(token: string): UserPayload {
    const user = <UserPayload>jsonwebtoken.verify(token, <string>Config.JwtKey);
    return user;
  }

  static async getPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  static async comparePassword(password: string, hash: string) {
    const match = await bcrypt.compare(password, hash);
    return match;
  }
}
