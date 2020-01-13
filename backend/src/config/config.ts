import { config } from 'dotenv';
config();

const Config = {
  JwtKey: process.env.PRIVATE_KEY,
  PORT: process.env.PORT,
  MONGO_DEV_URI: process.env.DATABASE_DEV_URI,
};

export default Config;
