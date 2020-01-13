import { Router } from 'express';
import UserController from './controllers/User';
import SessionController from './controllers/Session';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
export default routes;
