import jsonwebtoken from 'jsonwebtoken';
import { config } from 'dotenv';
import UserPayload from '../interfaces/UserPayload';
config();

export default abstract class Utils {
  public static getToken(payload: UserPayload): string {
    const token = jsonwebtoken.sign(payload, <string>process.env.PRIVATE_KEY, {
      expiresIn: '2d',
    });

    return token;
  }
  public static getUserFromToken(token: string): UserPayload {
    const user = <UserPayload>(
      jsonwebtoken.verify(token, <string>process.env.PRIVATE_KEY)
    );
    return user;
  }
}
