import { Router } from 'express';
import actions from '../controller/world.controller';

const routes = new Router();

routes.get('/', [], actions.getWorlds);

module.exports = routes;
