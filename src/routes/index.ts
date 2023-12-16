import express from 'express';
import { testRoute } from './testRoutes';

const routes = express.Router();

routes.use(testRoute);

export { routes };