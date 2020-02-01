import { config } from 'dotenv';
config();

const Config = {
  JwtKey: process.env.PRIVATE_KEY,
  PORT: process.env.PORT,
  MONGO_URI: process.env.DATABASE_URI,
};

export default Config;
