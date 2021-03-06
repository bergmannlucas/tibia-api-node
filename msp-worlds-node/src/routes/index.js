import { Router } from 'express';
import HTTPStatus from 'http-status';
import WorldRoutes from './world.routes';

const load = () => {
  const routes = new Router();

  /* Declare here all routes */
  routes.use('/worlds', WorldRoutes);
  routes.get('/health-check', (req, res) => res.json({ healthcheck: 'success' }));

  routes.all('*', (req, res) => {
    res.status(HTTPStatus.NOT_FOUND)
      .json({
        code: 1,
        message: 'Not Found',
      });
  });

  routes.use((err, req, res, next) => {
    res.status(err.status || HTTPStatus.BAD_REQUEST)
      .json(err);
    next();
  });

  return routes;
};

export default load;
