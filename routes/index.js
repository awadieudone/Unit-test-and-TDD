import { Router } from 'express';
import StudentController from '../controllers/studentController';

const routes = Router();

routes.get('/', StudentController.getAllStudents);
routes.get('/:id', StudentController.getSingleStudent);

export default routes;