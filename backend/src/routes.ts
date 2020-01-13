import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import checkJwt from './middleware/jwt';
import TaskController from './controllers/TaskController';
const routes = Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.put('/users', checkJwt, UserController.update);

routes.post('/tasks', checkJwt, TaskController.store);
routes.get('/tasks', checkJwt, TaskController.index);

export default routes;
