import jsonwebtoken from 'jsonwebtoken';
import UserPayload from '../interfaces/UserPayload';
import Config from '../config/config';
export default abstract class Utils {
  public static getToken(payload: UserPayload): string {
    const token = jsonwebtoken.sign(payload, <string>Config.JwtKey, {
      expiresIn: '2d',
    });

    return token;
  }
  public static getUserFromToken(token: string): UserPayload {
    const user = <UserPayload>jsonwebtoken.verify(token, <string>Config.JwtKey);
    return user;
  }
}
