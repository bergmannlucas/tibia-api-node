import { Router } from 'express';
import actions from './world.controller';

const routes = new Router();

routes.get('/', [], actions.getWorlds);

module.exports = routes;
